#!/usr/bin/env node
/**
 * Rewrite static asset imports to assetUrl() helper (CRA).
 * Usage:
 *   node scripts/asset-cdn/replace-imports-with-cdn.mjs --dry-run
 *   node scripts/asset-cdn/replace-imports-with-cdn.mjs --apply
 *
 * Review git diff manually — Lottie JSON may need fetch() instead of import.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');
const srcDir = path.join(root, 'src');
const apply = process.argv.includes('--apply');
const dryRun = !apply;

// JSON (Lottie) is loaded at runtime — use LottieFromCdn or useLottieAsset instead.
const ASSET_EXT = /\.(svg|png|jpe?g|gif|webp|mp4|webm|mov|pdf|wav|jfif)$/i;

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(jsx?|tsx?)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

function toCdnPath(importPath, fromFile) {
  const dir = path.dirname(fromFile);
  let resolved = path.normalize(path.join(dir, importPath)).replace(/\\/g, '/');
  const assetsIdx = resolved.indexOf('/assets/');
  if (assetsIdx !== -1) {
    return `assets/${resolved.slice(assetsIdx + '/assets/'.length)}`;
  }
  const mediaMatch = importPath.match(/(?:public\/)?media\/(.+)$/);
  if (mediaMatch) return `media/${mediaMatch[1]}`;
  return null;
}

function ensureAssetUrlImport(content, filePath) {
  if (content.includes('assetUrl')) return content;
  const depth = path.relative(srcDir, path.dirname(filePath)).split(path.sep).filter(Boolean).length;
  const prefix = depth ? '../'.repeat(depth) : './';
  const importLine = `import { assetUrl } from '${prefix}utils/assetUrl';\n`;
  const m = content.match(/^import .+;\n/m);
  if (m) {
    const idx = content.indexOf(m[0]) + m[0].length;
    return content.slice(0, idx) + importLine + content.slice(idx);
  }
  return importLine + content;
}

function transformFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  const constDecls = [];

  // import x from '.../something.svg'
  content = content.replace(
    /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"]\s*;?\s*$/gm,
    (full, name, imp) => {
      if (!ASSET_EXT.test(imp)) return full;
      const cdnPath = toCdnPath(imp, filePath);
      if (!cdnPath) return full;
      constDecls.push(`const ${name} = assetUrl('${cdnPath}');`);
      changed = true;
      return '';
    }
  );

  // publicMedia('file.svg') → assetUrl('media/file.svg')
  const pm = content.replace(
    /publicMedia\(\s*['"]([^'"]+)['"]\s*\)/g,
    (_, file) => {
      changed = true;
      return `assetUrl('media/${file}')`;
    }
  );
  if (pm !== content) content = pm;

  if (!changed) return null;

  content = ensureAssetUrlImport(content, filePath);
  content = content.replace(/\n{3,}/g, '\n\n');
  const importBlock = content.match(/^(?:import .+\n)+/m)?.[0] ?? '';
  const afterImports = content.slice(importBlock.length);
  content = importBlock + (constDecls.length ? `${constDecls.join('\n')}\n\n` : '') + afterImports;

  // Drop old publicMedia import if unused
  if (!content.includes('publicMedia')) {
    content = content.replace(/import\s*\{\s*publicMedia\s*\}\s*from\s*['"][^'"]+['"]\s*;\n?/g, '');
  }

  return content;
}

const files = walk(srcDir);
let touched = 0;

for (const f of files) {
  const next = transformFile(f);
  if (!next) continue;
  touched++;
  const rel = path.relative(root, f);
  if (dryRun) {
    console.log(`would update ${rel}`);
  } else {
    fs.writeFileSync(f, next, 'utf8');
    console.log(`updated ${rel}`);
  }
}

if (dryRun) {
  console.log(`\nDry run: ${touched} file(s). Run with --apply after backup/commit.`);
} else {
  console.log(`\nUpdated ${touched} file(s). Run: npm run build`);
}
