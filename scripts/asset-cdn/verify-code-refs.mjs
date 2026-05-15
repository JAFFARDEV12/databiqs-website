#!/usr/bin/env node
/** Verify every assetUrl / Lottie path in src exists on CDN. */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');
const srcDir = path.join(root, 'src');
const cdn = (process.env.REACT_APP_ASSETS_CDN_URL || 'https://databiqs-website-assets.vercel.app').replace(/\/+$/, '');

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (/\.(jsx?|tsx?)$/.test(ent.name)) acc.push(p);
  }
  return acc;
}

const paths = new Set();
const reAsset = /assetUrl\(\s*['"]([^'"]+)['"]\s*\)/g;
const reLottie = /(?:path|lottiePath)=\{?["']([^"']+\.json)["']\}?/g;
const reLottiePath = /lottiePath:\s*["']([^"']+)["']/g;

for (const f of walk(srcDir)) {
  const text = fs.readFileSync(f, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
  for (const re of [reAsset, reLottie, reLottiePath]) {
    let m;
    while ((m = re.exec(text))) paths.add(m[1]);
  }
}

let failed = 0;
const results = [];
for (const p of [...paths].sort()) {
  const encoded = p.split('/').map((s) => encodeURIComponent(s)).join('/');
  const url = `${cdn}/${encoded}`;
  try {
    const res = await fetch(url, { method: 'HEAD' });
    results.push({ p, status: res.status, ok: res.ok });
    if (!res.ok) failed++;
  } catch (e) {
    results.push({ p, status: 'ERR', ok: false, err: e.message });
    failed++;
  }
}

console.log(`CDN: ${cdn}`);
console.log(`Referenced in code: ${paths.size} unique paths\n`);
for (const r of results.filter((x) => !x.ok)) {
  console.log(`FAIL ${r.status}  ${r.p}`);
}
const ok = results.filter((x) => x.ok).length;
console.log(`\nOK: ${ok}/${paths.size}`);
if (failed) process.exit(1);
