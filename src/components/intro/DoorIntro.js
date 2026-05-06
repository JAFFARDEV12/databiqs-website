import { useEffect, useRef, useState } from 'react';
import './DoorIntro.css';

export default function DoorIntro({ onDone }) {
  const iframeRef = useRef(null);
  const [isFinishing, setIsFinishing] = useState(false);
  const finishTriggeredRef = useRef(false);

  useEffect(() => {
    document.body.classList.add('intro-active');
    return () => {
      document.body.classList.remove('intro-active');
    };
  }, []);

  useEffect(() => {
    if (!iframeRef.current) return undefined;

    let finishTimer = 0;
    let cleanupFrameScroll = null;
    let progressPoller = 0;

    const finishIntro = () => {
      if (finishTriggeredRef.current) return;
      finishTriggeredRef.current = true;
      setIsFinishing(true);
      finishTimer = window.setTimeout(() => onDone?.(), 700);
    };

    const onLoad = () => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      try {
        const frameDoc = iframe.contentDocument;
        const scrollDriver = frameDoc?.getElementById('sd');
        if (!scrollDriver) return;

        const checkProgress = () => {
          const maxScroll = Math.max(1, scrollDriver.scrollHeight - scrollDriver.clientHeight);
          const scrollProgress = scrollDriver.scrollTop / maxScroll;
          if (scrollProgress >= 0.98) {
            finishIntro();
          }
        };

        // Keep transition user-driven: advance intro only on user scroll.
        scrollDriver.addEventListener('scroll', checkProgress, { passive: true });
        cleanupFrameScroll = () => {
          scrollDriver.removeEventListener('scroll', checkProgress);
        };

        // Backup check for momentum/edge-case completion.
        progressPoller = window.setInterval(checkProgress, 300);
      } catch {
        // Ignore; if iframe internals aren't reachable, keep intro visible.
      }
    };

    const iframe = iframeRef.current;
    iframe.addEventListener('load', onLoad);

    return () => {
      iframe.removeEventListener('load', onLoad);
      cleanupFrameScroll?.();
      window.clearTimeout(finishTimer);
      window.clearInterval(progressPoller);
    };
  }, [onDone]);

  return (
    <div className={`doorIntroRoot ${isFinishing ? 'doorIntroRoot--fade' : ''}`}>
      <iframe
        ref={iframeRef}
        title="Databiqs Intro"
        className="doorIntroFrame"
        src="/databiqs_v7%20(3).html"
      />
    </div>
  );
}
