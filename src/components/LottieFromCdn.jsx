import Lottie from 'lottie-react';
import { useLottieAsset } from '../hooks/useLottieAsset';

/** Lottie player that loads JSON from the assets CDN via `path` (e.g. `assets/foo.json`). */
export default function LottieFromCdn({ path, className, lottieRef, ...lottieProps }) {
  const animationData = useLottieAsset(path);
  if (!animationData) {
    return <span className={className} aria-hidden="true" />;
  }
  return (
    <Lottie
      lottieRef={lottieRef}
      className={className}
      animationData={animationData}
      {...lottieProps}
    />
  );
}
