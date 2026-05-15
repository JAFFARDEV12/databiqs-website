#!/usr/bin/env node
/** Move all imports to top, then assetUrl const declarations. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');
const srcDir = path.join(root, 'src');

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(jsx?|tsx?)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

function depthPrefix(filePath) {
  const depth = path.relative(srcDir, path.dirname(filePath)).split(path.sep).filter(Boolean).length;
  return depth ? '../'.repeat(depth) : './';
}

function fix(content, filePath) {
  const lines = content.split('\n');
  const imports = [];
  const assetConsts = [];
  const rest = [];

  for (const line of lines) {
    if (/^import\s/.test(line)) imports.push(line);
    else if (/^const\s+\w+\s*=\s*assetUrl\(/.test(line)) assetConsts.push(line);
    else rest.push(line);
  }

  if (!assetConsts.length) return null;

  const prefix = depthPrefix(filePath);
  const assetImport = `import { assetUrl } from '${prefix}utils/assetUrl';`;
  const hasAssetImport = imports.some((l) => l.includes('assetUrl'));
  const otherImports = imports.filter((l) => !l.includes('assetUrl'));
  const allImports = hasAssetImport ? imports : [...otherImports, assetImport];

  const trimmedRest = rest.join('\n').replace(/^\n+/, '');
  const out = [...allImports, '', ...assetConsts, '', trimmedRest].join('\n').replace(/\n{3,}/g, '\n\n');
  return out.endsWith('\n') ? out : `${out}\n`;
}

let n = 0;
for (const f of walk(srcDir)) {
  const raw = fs.readFileSync(f, 'utf8');
  if (!raw.includes('assetUrl(')) continue;
  const next = fix(raw, f);
  if (next && next !== raw) {
    fs.writeFileSync(f, next, 'utf8');
    console.log('fixed', path.relative(root, f));
    n++;
  }
}
console.log(`Fixed ${n} files.`);
