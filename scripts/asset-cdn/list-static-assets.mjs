#!/usr/bin/env node
/**
 * Inventory static assets under src/assets, public/media, and other public binaries.
 * Usage: node scripts/asset-cdn/list-static-assets.mjs [--json]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');

const EXT = new Set([
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.svg', '.ico',
  '.mp4', '.webm', '.mov', '.pdf', '.wav', '.jfif',
  '.woff', '.woff2', '.ttf', '.eot',
  '.json', // Lottie — migrate via LottieFromCdn / useLottieAsset
]);

const SKIP_DIRS = new Set(['node_modules', 'build', '.git', 'scripts']);

function walk(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, list);
    else {
      const ext = path.extname(ent.name).toLowerCase();
      if (EXT.has(ext)) list.push(p);
    }
  }
  return list;
}

const sources = [
  path.join(root, 'src', 'assets'),
  path.join(root, 'public', 'media'),
  path.join(root, 'public'),
];

const seen = new Set();
const files = [];
for (const src of sources) {
  for (const f of walk(src)) {
    const rel = path.relative(root, f);
    if (seen.has(rel)) continue;
  if (rel === path.join('public', 'index.html') || rel === 'public\\index.html') continue;
    if (rel.includes('manifest.json') && rel.startsWith('public')) continue;
    seen.add(rel);
    const stat = fs.statSync(f);
    files.push({ path: rel.replace(/\\/g, '/'), bytes: stat.size });
  }
}

files.sort((a, b) => b.bytes - a.bytes);
const total = files.reduce((s, f) => s + f.bytes, 0);

const json = process.argv.includes('--json');
if (json) {
  console.log(JSON.stringify({ files, totalBytes: total }, null, 2));
} else {
  console.log(`Static asset inventory (${files.length} files, ${(total / 1024 / 1024).toFixed(2)} MB)\n`);
  for (const f of files) {
    const mb = f.bytes >= 1024 * 1024 ? `${(f.bytes / 1024 / 1024).toFixed(2)} MB` : `${(f.bytes / 1024).toFixed(1)} KB`;
    console.log(`${mb.padStart(10)}  ${f.path}`);
  }
  console.log(`\nTotal: ${(total / 1024 / 1024).toFixed(2)} MB`);
  console.log('\nExcluded from migration by default: node_modules, build/, app bundle JS/CSS.');
}
