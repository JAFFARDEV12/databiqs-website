import { useState, useEffect, useLayoutEffect, useCallback, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../home/CaseStudiesSection.css';
import './MoreCaseStudiesCarousel.css';
import arrowIcon from '../../assets/rightarrow.svg';
import { CS_LIST_CARDS } from './caseStudiesListingData';

/** Match main case studies grid: 2 columns from tablet up, 1 on narrow viewports. */
function cardsPerViewForViewportWidth(w) {
  if (w <= 0) return 1;
  if (w < 768) return 1;
  return 2;
}

const MoreCaseStudiesCarousel = ({ excludeSlug = null }) => {
  const items = useMemo(() => {
    const path = excludeSlug ? `/case-studies/${excludeSlug}` : null;
    return CS_LIST_CARDS.filter((c) => c.href !== path);
  }, [excludeSlug]);

  const viewportRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(2);
  const [page, setPage] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);

  const resetAutoplay = useCallback(() => setAutoplayKey((k) => k + 1), []);
  const touchStartX = useRef(null);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const getViewportContentWidth = () => {
      const st = getComputedStyle(el);
      const pl = parseFloat(st.paddingLeft) || 0;
      const pr = parseFloat(st.paddingRight) || 0;
      return el.clientWidth - pl - pr;
    };
    const apply = () => setCardsPerView(cardsPerViewForViewportWidth(getViewportContentWidth()));
    apply();
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(apply);
    });
    ro.observe(el);
    window.addEventListener('resize', apply);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', apply);
    };
  }, []);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(items.length / cardsPerView)),
    [items.length, cardsPerView]
  );

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  useEffect(() => {
    const t = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 5000);
    return () => clearInterval(t);
  }, [totalPages, autoplayKey]);

  const goPrev = useCallback(() => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
    resetAutoplay();
  }, [totalPages, resetAutoplay]);

  const goNext = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
    resetAutoplay();
  }, [totalPages, resetAutoplay]);

  const pages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < items.length; i += cardsPerView) {
      chunks.push(items.slice(i, i + cardsPerView));
    }
    return chunks.length ? chunks : [[]];
  }, [items, cardsPerView]);

  const preline = (t) => typeof t === 'string' && t.includes('\n');

  return (
    <section
      className="more-cs"
      aria-labelledby="more-cs-heading"
      data-cards-per-view={cardsPerView}
    >
      <div className="more-cs-inner">
        <div className="more-cs-head">
          <span className="more-cs-pill">More Case Studies</span>
          <h2 id="more-cs-heading" className="more-cs-title">
            CREATING IMPACT BEYOND A SINGLE PROJECT
          </h2>
          <p className="more-cs-sub">
            We Don&apos;t Just Deliver Once. We Build Lasting Value Across Multiple Projects,
            Driving Measurable Results For Our Clients.
          </p>
        </div>

        <div className="more-cs-carousel-wrap">
          <button
            type="button"
            className="more-cs-arrow more-cs-arrow--prev"
            onClick={goPrev}
            aria-label="Previous case studies"
          >
            <img src={arrowIcon} alt="" className="more-cs-arrow-icon more-cs-arrow-icon--flip" />
          </button>

          <div
            ref={viewportRef}
            className="more-cs-viewport"
            style={{ '--more-cs-pages': String(totalPages) }}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current == null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(dx) < 45) return;
              if (dx < 0) goNext();
              else goPrev();
            }}
          >
            <div
              className="more-cs-track"
              style={{
                transform: `translateX(-${(page * 100) / totalPages}%)`,
              }}
            >
              {pages.map((chunk, pageIndex) => (
                <div
                  key={`page-${pageIndex}`}
                  className={`more-cs-page${
                    chunk.length === 1 && cardsPerView === 2 ? ' more-cs-page--center-single' : ''
                  }`}
                >
                  {chunk.map((cs) => {
                    const tag = cs.tag ?? cs.category;
                    const ctaInner = (
                      <>
                        Read More
                        <span className="cs-cta-arrow">
                          <svg
                            className="cs-arrow-svg"
                            viewBox="0 0 13 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                          >
                            <path
                              d="M12.0781 4.78297L7.7372 0.441932C7.61328 0.318017 7.44813 0.25 7.27203 0.25C7.09573 0.25 6.93068 0.318114 6.80676 0.441932L6.41264 0.836154C6.28882 0.959874 6.22061 1.12513 6.22061 1.30133C6.22061 1.47743 6.28882 1.64825 6.41264 1.77197L8.94508 4.30998H0.899383C0.536627 4.30998 0.25 4.59397 0.25 4.95683V5.51415C0.25 5.877 0.536627 6.18963 0.899383 6.18963H8.97381L6.41273 8.74181C6.28892 8.86573 6.2207 9.02648 6.2207 9.20268C6.2207 9.37868 6.28892 9.54179 6.41273 9.6656L6.80686 10.0586C6.93077 10.1825 7.09583 10.25 7.27213 10.25C7.44823 10.25 7.61338 10.1816 7.7373 10.0577L12.0782 5.71673C12.2025 5.59243 12.2708 5.42649 12.2703 5.2501C12.2707 5.07312 12.2025 4.90708 12.0781 4.78297Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </>
                    );

                    return (
                      <div key={cs.id} className="case-study-card">
                        <div className="cs-tag">{tag}</div>
                        <h3 className={`cs-title${preline(cs.title) ? ' cs-preline' : ''}`}>{cs.title}</h3>
                        <p className={`cs-description${preline(cs.description) ? ' cs-preline' : ''}`}>
                          {cs.description}
                        </p>
                        <div className="cs-metrics">
                          {cs.metrics.map((m, j) => (
                            <div key={j} className="cs-metric-box">
                              <span className="cs-metric-value">{m.value}</span>
                              <span className="cs-metric-label">{m.label}</span>
                            </div>
                          ))}
                        </div>
                        <Link className="cs-cta" to={cs.href}>
                          {ctaInner}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="more-cs-arrow more-cs-arrow--next"
            onClick={goNext}
            aria-label="Next case studies"
          >
            <img src={arrowIcon} alt="" className="more-cs-arrow-icon" />
          </button>
        </div>

        <div className="more-cs-dots" role="tablist" aria-label="Case study slides">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              aria-label={`Go to slide ${i + 1} of ${totalPages}`}
              className={`more-cs-dot ${i === page ? 'is-active' : ''}`}
              onClick={() => {
                setPage(i);
                resetAutoplay();
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreCaseStudiesCarousel;
