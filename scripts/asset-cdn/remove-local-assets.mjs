#!/usr/bin/env node
/**
 * Delete local files listed in asset-cdn-manifest.json (after CDN verify).
 * Usage: node scripts/asset-cdn/remove-local-assets.mjs [--dry-run|--apply]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');
const manifestPath = path.join(root, 'asset-cdn-manifest.json');
const apply = process.argv.includes('--apply');
const dryRun = process.argv.includes('--dry-run') || !apply;

if (!fs.existsSync(manifestPath)) {
  console.error('Missing asset-cdn-manifest.json — run sync-to-assets-repo.mjs first.');
  process.exit(1);
}

const { entries } = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const unique = [...new Set(entries.map((e) => e.localPath))];

for (const rel of unique) {
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs)) {
    console.log(`skip (missing) ${rel}`);
    continue;
  }
  if (dryRun) {
    console.log(`would delete ${rel}`);
  } else {
    fs.unlinkSync(abs);
    console.log(`deleted ${rel}`);
  }
}

if (dryRun) {
  console.log('\nDry run. Re-run with --apply after verify-cdn-urls.mjs passes.');
} else {
  console.log('\nDone. Run npm run build and commit.');
}
