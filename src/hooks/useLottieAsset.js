import { useEffect, useState } from 'react';
import { loadLottie } from '../utils/loadLottie';

/** Load Lottie animation JSON from CDN path, e.g. `assets/foo.json`. */
export function useLottieAsset(cdnPath) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!cdnPath) return undefined;
    let cancelled = false;
    loadLottie(cdnPath)
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setData(null);
      });
    return () => {
      cancelled = true;
    };
  }, [cdnPath]);

  return data;
}
