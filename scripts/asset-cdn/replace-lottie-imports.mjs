#!/usr/bin/env node
/**
 * Convert Lottie JSON imports to LottieFromCdn path props.
 * Usage: node scripts/asset-cdn/replace-lottie-imports.mjs [--apply]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');
const srcDir = path.join(root, 'src');
const apply = process.argv.includes('--apply');

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
  if (assetsIdx !== -1) return `assets/${resolved.slice(assetsIdx + '/assets/'.length)}`;
  return null;
}

function depthPrefix(filePath) {
  const depth = path.relative(srcDir, path.dirname(filePath)).split(path.sep).filter(Boolean).length;
  return depth ? '../'.repeat(depth) : './';
}

function transform(content, filePath) {
  const imports = [];
  const re = /^import\s+(\w+)\s+from\s+['"]([^'"]+\.json)['"]\s*;?\s*$/gm;
  let m;
  while ((m = re.exec(content)) !== null) {
    const cdnPath = toCdnPath(m[2], filePath);
    if (cdnPath) imports.push({ name: m[1], cdnPath, full: m[0] });
  }
  if (!imports.length) return null;

  let next = content;
  for (const { full, name, cdnPath } of imports) {
    next = next.replace(full, '');
    const varRe = new RegExp(`\\b${name}\\b`, 'g');
    next = next.replace(varRe, `'${cdnPath}'`);
  }

  // animationData={ 'assets/...' } → use LottieFromCdn
  next = next.replace(
    /<Lottie\b([^>]*?)\banimationData=\{\s*'([^']+)'\s*\}([^>]*)\/?>/gs,
    (_, before, cdnPath, after) => {
      const props = `${before}${after}`.replace(/\s+/g, ' ').trim();
      return `<LottieFromCdn path="${cdnPath}" ${props} />`;
    }
  );

  // TOPICS / objects: animation: 'path' → lottiePath: 'path'
  next = next.replace(/\banimation:\s*'assets\//g, "lottiePath: 'assets/");

  // topic.animation → topic.lottiePath in JSX
  next = next.replace(/topic\.animation\b/g, 'topic.lottiePath');

  const prefix = depthPrefix(filePath);
  if (!next.includes('LottieFromCdn')) {
    next = next.replace(/^import Lottie from ['"]lottie-react['"];\n?/m, '');
  }
  if (!next.includes("from '") || !next.includes('LottieFromCdn')) {
    // ensure import
  }
  if (!next.includes('LottieFromCdn')) return null;

  if (!next.includes("LottieFromCdn")) return null;

  const importLine = `import LottieFromCdn from '${prefix}components/LottieFromCdn';\n`;
  if (!next.includes('LottieFromCdn')) return null;
  if (!next.includes("import LottieFromCdn")) {
    const firstImport = next.match(/^import .+;\n/m);
    if (firstImport) {
      const idx = next.indexOf(firstImport[0]) + firstImport[0].length;
      next = next.slice(0, idx) + importLine + next.slice(idx);
    } else {
      next = importLine + next;
    }
  }

  next = next.replace(/\n{3,}/g, '\n\n');
  return next;
}

let touched = 0;
for (const f of walk(srcDir)) {
  const raw = fs.readFileSync(f, 'utf8');
  if (!/from\s+['"][^'"]+\.json['"]/.test(raw)) continue;
  const next = transform(raw, f);
  if (!next || next === raw) continue;
  touched++;
  const rel = path.relative(root, f);
  if (apply) {
    fs.writeFileSync(f, next, 'utf8');
    console.log(`updated ${rel}`);
  } else {
    console.log(`would update ${rel}`);
  }
}

console.log(apply ? `\nUpdated ${touched} file(s).` : `\nDry run: ${touched} file(s). Use --apply.`);
