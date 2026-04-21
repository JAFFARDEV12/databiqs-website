import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MoreCaseStudiesCarousel.css';
import arrowIcon from '../../assets/Vector-right.svg';
import cardMessageImage from '../../assets/message.svg';
import { MORE_CASE_STUDIES } from './moreCaseStudiesData';

function getCardsPerView(width) {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 4;
}

const MoreCaseStudiesCarousel = () => {
  const items = MORE_CASE_STUDIES;
  const [cardsPerView, setCardsPerView] = useState(() =>
    getCardsPerView(typeof window !== 'undefined' ? window.innerWidth : 1200)
  );
  const [page, setPage] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);

  const resetAutoplay = useCallback(() => setAutoplayKey((k) => k + 1), []);
  const touchStartX = useRef(null);

  useEffect(() => {
    const onResize = () => setCardsPerView(getCardsPerView(window.innerWidth));
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
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
    <section className="more-cs" aria-labelledby="more-cs-heading">
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
            className="more-cs-viewport"
            style={{ '--more-cs-pages': totalPages }}
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
                <div key={`page-${pageIndex}`} className="more-cs-page">
                  {chunk.map((item) => (
                    <article key={item.id} className="more-cs-card">
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
