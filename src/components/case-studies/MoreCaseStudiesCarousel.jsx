import { useState, useEffect, useLayoutEffect, useCallback, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MoreCaseStudiesCarousel.css';
import arrowIcon from '../../assets/Vector-right.svg';
import cardMessageImage from '../../assets/message.svg';
import { MORE_CASE_STUDIES } from './moreCaseStudiesData';

/** Figma: 264px cards; gaps between & left/right are equal: s = (W - n*264) / (n+1) — keep in sync with --more-cs-card-w in CSS */
const MORE_CS_CARD = 264;
const MORE_CS_GAP = 20;
const MORE_CS_MAX_VISIBLE = 4;
/** Minimum uniform gutter (px) before dropping to fewer columns — avoids cramped / peeking slides */
const MORE_CS_MIN_UNIFORM_GAP = 12;

/** How many 264px cards fit with equal edge + between gaps: s = (W − n·264)/(n+1) ≥ min gap. */
function cardsPerViewForViewportWidth(w) {
  if (w <= 0) return 1;
  let n = Math.min(
    MORE_CS_MAX_VISIBLE,
    Math.max(1, Math.floor(w / MORE_CS_CARD))
  );
  while (n > 1) {
    const s = (w - n * MORE_CS_CARD) / (n + 1);
    if (s >= MORE_CS_MIN_UNIFORM_GAP) return n;
    n -= 1;
  }
  return 1;
}

/**
 * Space so left, between, and right gaps are equal: n*Wcard + (n+1)*s = contentWidth.
 * Single card: s = (W - min(264, W)) / 2.
 */
function uniformGapPx(contentW, nCards) {
  if (contentW <= 0) return MORE_CS_GAP;
  if (nCards <= 0) return MORE_CS_GAP;
  if (nCards === 1) {
    const wCard = Math.min(MORE_CS_CARD, contentW);
    return Math.max(0, (contentW - wCard) / 2);
  }
  return Math.max(0, (contentW - nCards * MORE_CS_CARD) / (nCards + 1));
}

const MoreCaseStudiesCarousel = ({ excludeSlug = null }) => {
  const items = useMemo(() => {
    if (!excludeSlug) return MORE_CASE_STUDIES;
    const path = `/case-studies/${excludeSlug}`;
    return MORE_CASE_STUDIES.filter((item) => item.href !== path);
  }, [excludeSlug]);
  const viewportRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [contentWidth, setContentWidth] = useState(0);
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
    const apply = (w) => {
      setContentWidth(w);
      setCardsPerView(cardsPerViewForViewportWidth(w));
    };
    const fromEl = () => apply(getViewportContentWidth());
    fromEl();
    /** Always use the same inner width as padding-aware layout math — contentRect.width can disagree with clientWidth − padding. */
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(fromEl);
    });
    ro.observe(el);
    window.addEventListener('resize', fromEl);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', fromEl);
    };
  }, []);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(items.length / cardsPerView)), [items.length, cardsPerView]);

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
            We Don&apos;t Just Deliver Once—We Build Lasting Value Across Multiple Projects,
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
              {pages.map((chunk, pageIndex) => {
                const k = chunk.length;
                const s = uniformGapPx(contentWidth, k);
                return (
                <div
                  key={`page-${pageIndex}`}
                  className="more-cs-page"
                  style={{ '--more-cs-uniform-gap': `${s}px` }}
                >
                  {chunk.map((item, cardIndex) => (
                    <article
                      key={`${pageIndex}-${item.id}-${cardIndex}`}
                      className="more-cs-card"
                    >
                      <div className="more-cs-card-visual">
                        <img
                          src={item.imageSrc || cardMessageImage}
                          alt=""
                          className="more-cs-card-message-img"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="more-cs-card-content">
                        <p className="more-cs-card-text">{item.description}</p>
                        <Link className="more-cs-card-cta" to={item.href}>
                          <span className="more-cs-card-cta-label">Read Full Case Study</span>
                          <span className="more-cs-card-cta-icon" aria-hidden="true">
                            <img src={arrowIcon} alt="" />
                          </span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
                );
              })}
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
