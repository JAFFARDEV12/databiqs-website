#!/usr/bin/env node
/**
 * HEAD-check every URL in asset-cdn-manifest.json against REACT_APP_ASSETS_CDN_URL.
 * Usage: REACT_APP_ASSETS_CDN_URL=https://... node scripts/asset-cdn/verify-cdn-urls.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');
const manifestPath = path.join(root, 'asset-cdn-manifest.json');

const cdn = (process.env.REACT_APP_ASSETS_CDN_URL || '').replace(/\/+$/, '');
if (!cdn) {
  console.error('Set REACT_APP_ASSETS_CDN_URL to your Vercel assets deployment URL.');
  process.exit(1);
}
if (!fs.existsSync(manifestPath)) {
  console.error('Run sync-to-assets-repo.mjs first to create asset-cdn-manifest.json');
  process.exit(1);
}

const { entries } = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
let failed = 0;

for (const { cdnPath } of entries) {
  const encodedPath = cdnPath.split('/').map((seg) => encodeURIComponent(seg)).join('/');
  const url = `${cdn}/${encodedPath}`;
  try {
    const res = await fetch(url, { method: 'HEAD' });
    if (!res.ok) {
      console.error(`FAIL ${res.status} ${url}`);
      failed++;
    } else {
      console.log(`OK   ${url}`);
    }
  } catch (e) {
    console.error(`ERR  ${url} — ${e.message}`);
    failed++;
  }
}

if (failed) {
  console.error(`\n${failed} URL(s) failed. Fix deploy before removing local files.`);
  process.exit(1);
}
console.log(`\nAll ${entries.length} URLs OK.`);
