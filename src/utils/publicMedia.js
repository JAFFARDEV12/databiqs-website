/** Files in `public/media/` — not bundled; avoids Babel inlining huge SVGs. */
export function publicMedia(filename) {
  const base = process.env.PUBLIC_URL ?? '';
  return `${base}/media/${filename}`;
}
