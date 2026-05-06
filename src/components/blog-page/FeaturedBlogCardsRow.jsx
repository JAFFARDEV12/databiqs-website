import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/rightarrow.svg";
import videoCardOne from "../../assets/4354448-uhd_3840_2160_25fps.mp4";
import videoCardTwo from "../../assets/7687810-uhd_4096_2160_24fps.mp4";
import { BLOG_POSTS } from "../blog/blogPostsData";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./FeaturedBlogCardsRow.css";

const PAGE_SIZE = 4;

const blogDetailPath = (cardId) => `/blog-detail/${cardId}`;
const cards = BLOG_POSTS;

const renderVideoCardTitle = (title) => {
  const words = title.trim().split(/\s+/);
  if (words.length < 3) return title;

  const normalPart = words.slice(0, -2).join(" ");
  const accentPart = words.slice(-2).join(" ");

  return (
    <>
      {normalPart} <span className="featuredBlogCard__titleAccent">{accentPart}</span>
    </>
  );
};

const FeaturedBlogCardsRow = () => {
  const [page, setPage] = useState(1);
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  const totalPages = Math.ceil(cards.length / PAGE_SIZE);

  const visibleCards = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return cards.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <section className="featuredBlogRow" ref={sectionRef}>
      <div className="featuredBlogRow__container">
        <div className="featuredBlogRow__grid">
          {visibleCards.map((card) => (
            (() => {
              const absoluteIndex = (page - 1) * PAGE_SIZE + visibleCards.indexOf(card);
              const isVideoCardOne = page === 1 && absoluteIndex === 1;
              const isVideoCardTwo = page === 1 && absoluteIndex === 2;
              const videoSource = isVideoCardOne ? videoCardOne : isVideoCardTwo ? videoCardTwo : null;
              const isVideoCard = Boolean(videoSource);

              return (
                <article className={`featuredBlogCard${isVideoCard ? " featuredBlogCard--video" : ""}`} key={card.id}>
                  {isVideoCard && (
                    <>
                      <video
                        className="featuredBlogCard__videoBg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                      >
                        <source src={videoSource} type="video/mp4" />
                      </video>
                      <div className="featuredBlogCard__videoOverlay" aria-hidden="true" />
                    </>
                  )}

                  <div className="featuredBlogCard__content">
                    <span className="featuredBlogCard__tag">{card.tag}</span>
                    <Link className="featuredBlogCard__titleLink" to={blogDetailPath(card.id)}>
                      <h3 className="featuredBlogCard__title">
                        {isVideoCard ? renderVideoCardTitle(card.title) : card.title}
                      </h3>
                    </Link>
                    <p className="featuredBlogCard__desc">{card.excerpt}</p>

                    <Link to={blogDetailPath(card.id)} className="featuredBlogCard__link">
                      <span>Read Full Blog</span>
                      <span className="featuredBlogCard__icon">
                        <img src={arrowIcon} alt="" aria-hidden="true" />
                      </span>
                    </Link>

                    <div className="featuredBlogCard__meta">
                      <span>Databiqs Team</span>
                      <span className="featuredBlogCard__dot" />
                      <span>{card.date}</span>
                      <span className="featuredBlogCard__dot" />
                      <span>{card.readTime}</span>
                    </div>
                  </div>
                </article>
              );
            })()
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="featuredBlogRow__pagination" aria-label="Featured articles pagination">
            <p className="featuredBlogRow__pagination-summary" aria-live="polite">
              Page <span className="featuredBlogRow__pagination-current">{page}</span> of {totalPages}
            </p>
            <div className="featuredBlogRow__pagination-bar">
              <button
                type="button"
                className="featuredBlogRow__pagination-iconBtn"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                aria-label="Previous page"
              >
                <img
                  src={arrowIcon}
                  alt=""
                  className="featuredBlogRow__pagination-arrowImg featuredBlogRow__pagination-arrowImg--prev"
                  aria-hidden="true"
                />
              </button>

              <ul className="featuredBlogRow__pagination-pages">
                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((p) => (
                  <li key={p}>
                    <button
                      type="button"
                      className={`featuredBlogRow__pagination-num${p === page ? " is-active" : ""}`}
                      onClick={() => setPage(p)}
                      aria-label={`Page ${p}`}
                      aria-current={p === page ? "page" : undefined}
                    >
                      {p}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="featuredBlogRow__pagination-iconBtn"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                aria-label="Next page"
              >
                <img src={arrowIcon} alt="" className="featuredBlogRow__pagination-arrowImg" aria-hidden="true" />
              </button>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
};

export default FeaturedBlogCardsRow;
