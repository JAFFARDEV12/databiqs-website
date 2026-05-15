import { assetUrl } from './assetUrl';

const cache = new Map();

/** Fetch Lottie JSON from CDN (or local fallback). Results are cached. */
export function loadLottie(cdnPath) {
  const url = assetUrl(cdnPath);
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error(`Lottie fetch failed: ${res.status} ${url}`);
          return res.json();
        })
        .catch((err) => {
          cache.delete(url);
          throw err;
        })
    );
  }
  return cache.get(url);
}
