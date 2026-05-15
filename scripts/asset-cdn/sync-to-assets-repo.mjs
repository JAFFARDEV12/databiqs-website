#!/usr/bin/env node
/**
 * Copy website static assets into databiqs-website-assets repo layout.
 * Usage: node scripts/asset-cdn/sync-to-assets-repo.mjs --target ../databiqs-website-assets
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');

function parseArgs() {
  const i = process.argv.indexOf('--target');
  if (i === -1 || !process.argv[i + 1]) {
    console.error('Usage: node sync-to-assets-repo.mjs --target <path-to-assets-repo>');
    process.exit(1);
  }
  return path.resolve(process.argv[i + 1]);
}

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyTree(srcDir, destDir, manifest) {
  if (!fs.existsSync(srcDir)) return;
  for (const ent of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const src = path.join(srcDir, ent.name);
    const dest = path.join(destDir, ent.name);
    if (ent.isDirectory()) copyTree(src, dest, manifest);
    else {
      copyFile(src, dest);
      const relFromRoot = path.relative(root, src).replace(/\\/g, '/');
      const underAssets = path.relative(path.join(root, 'src', 'assets'), src).replace(/\\/g, '/');
      manifest.push({
        localPath: relFromRoot,
        cdnPath: `assets/${underAssets}`,
      });
    }
  }
}

const target = parseArgs();
const manifest = [];

// public/media → media/
const mediaSrc = path.join(root, 'public', 'media');
const mediaDest = path.join(target, 'media');
if (fs.existsSync(mediaSrc)) {
  for (const name of fs.readdirSync(mediaSrc)) {
    const src = path.join(mediaSrc, name);
    if (!fs.statSync(src).isFile()) continue;
    const dest = path.join(mediaDest, name);
    copyFile(src, dest);
    manifest.push({
      localPath: `public/media/${name}`,
      cdnPath: `media/${name}`,
    });
  }
}

// src/assets → assets/
const assetsSrc = path.join(root, 'src', 'assets');
const assetsDest = path.join(target, 'assets');
copyTree(assetsSrc, assetsDest, manifest);

// public binaries (favicon, hero gifs) → assets/public/
const publicSrc = path.join(root, 'public');
const publicSkip = new Set(['index.html', 'manifest.json', 'robots.txt', 'databiqs_v7 (3).html']);
if (fs.existsSync(publicSrc)) {
  const publicDest = path.join(target, 'assets', 'public');
  for (const name of fs.readdirSync(publicSrc)) {
    if (publicSkip.has(name)) continue;
    const src = path.join(publicSrc, name);
    if (!fs.statSync(src).isFile()) continue;
    const ext = path.extname(name).toLowerCase();
    if (!['.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.mp4', '.webm', '.pdf'].includes(ext)) continue;
    const dest = path.join(publicDest, name);
    copyFile(src, dest);
    manifest.push({ localPath: `public/${name}`, cdnPath: `assets/public/${name}` });
  }
}

const manifestPath = path.join(root, 'asset-cdn-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify({ generatedAt: new Date().toISOString(), target, entries: manifest }, null, 2));

console.log(`Copied ${manifest.length} files to ${target}`);
console.log(`Wrote ${manifestPath}`);
