/**
 * Resolve static asset URLs. Uses CDN when REACT_APP_ASSETS_CDN_URL is set.
 * @param {string} path - e.g. "media/case-study.svg" or "assets/header-logo.svg"
 */
export function assetUrl(path) {
  const normalized = path.replace(/^\/+/, '');
  const cdn = (process.env.REACT_APP_ASSETS_CDN_URL || '').replace(/\/+$/, '');
  if (cdn) {
    const encoded = normalized.split('/').map((seg) => encodeURIComponent(seg)).join('/');
    return `${cdn}/${encoded}`;
  }
  const base = (process.env.PUBLIC_URL || '').replace(/\/+$/, '');
  if (normalized.startsWith('media/')) {
    return `${base}/${normalized}`;
  }
  return `${base}/${normalized}`;
}

/** @deprecated use assetUrl('media/...') */
export function publicMedia(filename) {
  return assetUrl(`media/${filename.replace(/^\/+/, '')}`);
}
