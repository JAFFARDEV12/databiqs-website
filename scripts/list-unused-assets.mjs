import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

function collectTextFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (["node_modules", "build", "dist"].includes(e.name)) continue;
      collectTextFiles(p, acc);
    } else if (/\.(js|jsx|ts|tsx|css|scss|html|md|txt)$/i.test(e.name)) {
      acc.push(p);
    }
  }
  return acc;
}

const assetsRoot = path.join(projectRoot, "src", "assets");
const assetFiles = walk(assetsRoot);

const textFiles = [
  ...collectTextFiles(path.join(projectRoot, "src")),
  ...collectTextFiles(path.join(projectRoot, "public")),
];

const corpusParts = [];
for (const f of textFiles) {
  if (f.startsWith(assetsRoot + path.sep)) continue;
  try {
    corpusParts.push(fs.readFileSync(f, "utf8"));
  } catch {
    /* skip */
  }
}
const corpus = corpusParts.join("\n");

const unused = [];
for (const f of assetFiles) {
  const rel = path.relative(projectRoot, f).split(path.sep).join("/");
  const base = path.basename(f);
  const noExt = base.replace(/\.[^.]+$/, "");
  const patterns = [
    rel,
    rel.replace(/^src\//, ""),
    base,
    noExt,
    encodeURI(rel),
    encodeURI(base),
  ].filter(Boolean);

  let used = false;
  for (const pat of patterns) {
    if (corpus.includes(pat)) {
      used = true;
      break;
    }
  }
  if (!used) unused.push(rel);
}

unused.sort();
for (const u of unused) console.log(u);
console.error(`Total assets: ${assetFiles.length}, unused: ${unused.length}`);
