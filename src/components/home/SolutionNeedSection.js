import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Brain, Lightbulb, Workflow } from 'lucide-react';
import videoChatbots from '../../assets/8501993-uhd_2160_3840_25fps.mp4';
import videoMl from '../../assets/8328106-uhd_2160_3840_25fps.mp4';
import videoStrategy from '../../assets/7688618-uhd_2160_4096_24fps.mp4';
import './SolutionNeedSection.css';

const SOLUTION_OPTIONS = [
  {
    id: 'automation',
    title: 'AI Automation / Implementation',
    shortLabel: 'AI Automation /\nImplementation',
    subheading:
      'End-to-end automation that connects your tools, data, and teams so repetitive work runs reliably in production—not just in a demo.',
    bullets: [
      'Cross-team workflow automation',
      'Reliable API integrations',
      'Audit-ready process controls',
      'Measurable operational outcomes',
    ],
    ctaTo: '/services/ai-automation',
    Icon: Workflow,
    videoSrc: videoMl,
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    shortLabel: 'AI Chatbots',
    subheading:
      'Conversational experiences that understand context, respect policies, and escalate cleanly when a human needs to take over.',
    bullets: [
      'Context-aware customer responses',
      'Smart intent routing',
      'Secure policy-compliant handling',
      'Continuous quality optimization',
    ],
    ctaTo: '/services/ai-chatbots',
    Icon: Bot,
    videoSrc: videoChatbots,
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    shortLabel: 'Machine\nLearning',
    subheading:
      'Models and pipelines that turn historical and streaming data into forecasts, rankings, and decisions your teams can trust.',
    bullets: [
      'Forecasting and predictions',
      'Robust model pipelines',
      'Governance and compliance',
      'Production-ready deployment cycles',
    ],
    ctaTo: '/services/machine-learning',
    Icon: Brain,
    videoSrc: videoMl,
  },
  {
    id: 'strategy',
    title: 'AI Strategy',
    shortLabel: 'AI Strategy',
    subheading:
      'A grounded roadmap that sequences use cases, budgets, and capability building so AI spend converts into outcomes—not shelfware.',
    bullets: [
      'Executive AI roadmap',
      'Prioritized use-case portfolio',
      'Risk-aware governance planning',
      'Aligned capability building',
    ],
    ctaTo: '/services/ai-strategy',
    Icon: Lightbulb,
    videoSrc: videoStrategy,
  },
];

/** Require this much extra scroll before pin engages (stick feels lower on the page). */
const PIN_STICK_SCROLL_DELAY_PX = 100;

/** Prevents before ↔ pinned ↔ after jittering near boundaries. */
const PHASE_HYST_TOP_PX = 16;
const PHASE_HYST_BOTTOM_PX = 16;

/** Keep card switches away from exact 0/1 boundaries to avoid jumpy first/last transitions. */
const CARD_PROGRESS_START = 0.08;
const CARD_PROGRESS_END = 0.92;

const SolutionNeedSection = () => {
  const pinRootRef = useRef(null);
  const pinStickyRef = useRef(null);
  const phaseRef = useRef('before');
  const lastScrollYRef = useRef(0);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pinPhase, setPinPhase] = useState('before');

  useLayoutEffect(() => {
    const pinRoot = pinRootRef.current;
    const pinSticky = pinStickyRef.current;
    if (!pinRoot || !pinSticky) return undefined;

    let raf = 0;

    const updateFromScroll = () => {
      const stickyTopPx = parseFloat(
        getComputedStyle(pinRoot).getPropertyValue('--solution-need-sticky-top').trim()
      ) || 88;
      /* Keep pin transition aligned with sticky top to avoid visual jump/snap. */
      const stickLinePx = stickyTopPx;
      const rect = pinRoot.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const pinTopDoc = rect.top + window.scrollY;
      const scrollRange = Math.max(1, pinRoot.offsetHeight - vh);
      const pinStart = pinTopDoc - stickLinePx;
      const pinEnd = pinStart + scrollRange;
      const y = window.scrollY;
      const scrollingUp = y < lastScrollYRef.current;
      const n = SOLUTION_OPTIONS.length;

      /*
       * Mobile/tablet: use simple section progress mapping (no pinned math)
       * so cards advance in order 1 -> 2 -> 3 -> 4 while scrolling.
       */
      if (window.innerWidth <= 1024) {
        const mobileRaw = (vh - rect.top) / Math.max(1, vh + rect.height);
        const mobileProgress = Math.max(0, Math.min(0.999, mobileRaw));
        const nextIndex = Math.max(0, Math.min(n - 1, Math.floor(mobileProgress * n)));

        phaseRef.current = 'before';
        setPinPhase((p) => (p !== 'before' ? 'before' : p));
        setActiveIndex((prev) => {
          const resolved = prev !== nextIndex ? nextIndex : prev;
          activeIndexRef.current = resolved;
          return resolved;
        });
        lastScrollYRef.current = y;
        return;
      }

      /*
       * Single hysteresis band for all directions:
       * - before only when clearly above pin start
       * - after only when clearly below pin end
       * - pinned in-between
       * This prevents first/last card flicker near boundaries.
       */
      let nextPhase = 'pinned';
      if (y < pinStart - PHASE_HYST_TOP_PX) nextPhase = 'before';
      else if (y > pinEnd + PHASE_HYST_BOTTOM_PX) nextPhase = 'after';

      phaseRef.current = nextPhase;

      /*
       * Delay only the card progression (not the pin itself) so layout stays stable:
       * pinned section locks first, then card animation starts after extra scroll.
       */
      const progressStartY = pinStart + PIN_STICK_SCROLL_DELAY_PX;
      const progressRange = Math.max(1, scrollRange - PIN_STICK_SCROLL_DELAY_PX);
      const raw = (y - progressStartY) / progressRange;
      const progress = Math.max(0, Math.min(1, raw));

      let nextIndex = 0;
      if (nextPhase === 'before') {
        nextIndex = 0;
      } else if (nextPhase === 'after') {
        nextIndex = n - 1;
      } else {
        const span = Math.max(0.0001, CARD_PROGRESS_END - CARD_PROGRESS_START);
        const adjusted = Math.max(0, Math.min(1, (progress - CARD_PROGRESS_START) / span));
        const mapped = adjusted * (n - 1);
        const prevIndex = activeIndexRef.current;
        const boundaryHysteresis = 0.18;

        nextIndex = Math.round(mapped);

        if (scrollingUp && prevIndex > 0) {
          const downBoundary = prevIndex - 0.5 + boundaryHysteresis;
          if (mapped > downBoundary) nextIndex = prevIndex;
        } else if (!scrollingUp && prevIndex < n - 1) {
          const upBoundary = prevIndex + 0.5 - boundaryHysteresis;
          if (mapped < upBoundary) nextIndex = prevIndex;
        }

        nextIndex = Math.max(0, Math.min(n - 1, nextIndex));
      }

      setPinPhase((p) => (p !== nextPhase ? nextPhase : p));
      setActiveIndex((prev) => {
        const resolved = prev !== nextIndex ? nextIndex : prev;
        activeIndexRef.current = resolved;
        return resolved;
      });
      lastScrollYRef.current = y;
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateFromScroll);
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    lastScrollYRef.current = window.scrollY;
    updateFromScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  const activeOption = useMemo(() => SOLUTION_OPTIONS[activeIndex] ?? SOLUTION_OPTIONS[0], [activeIndex]);

  return (
    <>
      <div className="solution-need-pin-intro">
        <section className="solution-need-section" aria-labelledby="solution-need-heading">
          <div className="section-container">
            <h2 id="solution-need-heading" className="solution-need__heading">
              What Kind of <span className="headline-purple">Solution</span> Do You Need?
            </h2>
            <p className="solution-need__subheading">
              Assemble your ideal team with top-tier professionals who are passionate about turning your vision into reality. Whether you&apos;re seeking AI specialists, mobile app developers, or end-to-end full-stack expertise, we have the perfect talent to match your project&apos;s requirements.
            </p>
          </div>
        </section>
      </div>

      <div
        ref={pinRootRef}
        className="solution-need-pin-root"
        style={{ '--solution-need-pin-zones': String(SOLUTION_OPTIONS.length + 1) }}
      >
        <div
          ref={pinStickyRef}
          className={`solution-need-pin-sticky solution-need-pin-sticky--${pinPhase}`}
        >
          <section
            className="solution-need-section solution-need-section--pin-body"
            aria-label="Solution options. Scroll to change the expanded card."
          >
            <div className="section-container">
              <div className="solution-need__content">
                <div
                  className="solution-need__accordion"
                  role="tablist"
                  aria-label="Solution options. The expanded card follows scroll while this section is pinned."
                >
                  {SOLUTION_OPTIONS.map((option, optionIndex) => {
                    const isActive = optionIndex === activeIndex;
                    const Icon = option.Icon;

                    return (
                      <div
                        key={option.id}
                        role="tab"
                        aria-selected={isActive}
                        tabIndex={-1}
                        aria-label={
                          isActive ? `${option.title}, selected` : `${option.title}, not selected`
                        }
                        className={`solution-need__tab${isActive ? ' is-active' : ''}`}
                      >
                        <video
                          className="solution-need__tab-video"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          aria-hidden="true"
                        >
                          <source src={option.videoSrc} type="video/mp4" />
                        </video>
                        <div className="solution-need__tab-darken" aria-hidden="true" />
                        <div className="solution-need__tab-overlay" aria-hidden="true" />
                        <span className="solution-need__tab-icon-wrap" aria-hidden="true">
                          <Icon size={22} strokeWidth={2} />
                        </span>
                        <span className="solution-need__tab-label">
                          {option.shortLabel.split('\n').map((line) => (
                            <span key={`${option.id}-${line}`} className="solution-need__tab-line">
                              {line}
                            </span>
                          ))}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <article className="solution-need__detail" aria-live="polite">
                  <h3 className="solution-need__detail-title">{activeOption.title}</h3>
                  <p className="solution-need__detail-subheading">{activeOption.subheading}</p>
                  <ul className="solution-need__detail-bullets">
                    {activeOption.bullets.map((item, idx) => (
                      <li key={`${activeOption.id}-${idx}`}>{item}</li>
                    ))}
                  </ul>
                  <Link to={activeOption.ctaTo} className="solution-need__cta">
                    View Details
                    <span className="solution-need__cta-arrow" aria-hidden="true">
                      <svg
                        className="solution-need__arrow-svg"
                        viewBox="0 0 13 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0781 4.78297L7.7372 0.441932C7.61328 0.318017 7.44813 0.25 7.27203 0.25C7.09573 0.25 6.93068 0.318114 6.80676 0.441932L6.41264 0.836154C6.28882 0.959874 6.22061 1.12513 6.22061 1.30133C6.22061 1.47743 6.28882 1.64825 6.41264 1.77197L8.94508 4.30998H0.899383C0.536627 4.30998 0.25 4.59397 0.25 4.95683V5.51415C0.25 5.877 0.536627 6.18963 0.899383 6.18963H8.97381L6.41273 8.74181C6.28892 8.86573 6.2207 9.02648 6.2207 9.20268C6.2207 9.37868 6.28892 9.54179 6.41273 9.6656L6.80686 10.0586C6.93077 10.1825 7.09583 10.25 7.27213 10.25C7.44823 10.25 7.61338 10.1816 7.7373 10.0577L12.0782 5.71673C12.2025 5.59243 12.2708 5.42649 12.2703 5.2501C12.2707 5.07312 12.2025 4.90708 12.0781 4.78297Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </span>
                  </Link>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SolutionNeedSection;
