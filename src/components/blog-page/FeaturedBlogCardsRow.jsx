import React, { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import arrowIcon from "../../assets/rightarrow.svg";
import videoCardOne from "../../assets/4354448-uhd_3840_2160_25fps.mp4";
import {
  BLOG_POSTS_BY_ID,
  BLOG_BROWSE_TOPIC_KEYS,
  BLOG_FEATURED_IDS_BY_TOPIC,
  normalizeBlogTopicKey,
} from "../blog/blogPostsData";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./FeaturedBlogCardsRow.css";

/** Same MP4 for both diagonal video tiles (top-right & bottom-left of the 2×2 grid). */
const DIAGONAL_VIDEO = videoCardOne;

const TOPIC_LABELS = {
  automation: "AI & Automation",
  strategy: "Strategy & ROI",
  analytics: "Data & Analytics",
  cx: "Customer Experience",
  chatbot: "AI Chatbot",
  "ai-consulting": "AI Consulting",
  neural: "Neural Networks",
  solutions: "AI Solutions",
};

const blogDetailPath = (cardId) => `/blog-detail/${cardId}`;

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
  const [searchParams, setSearchParams] = useSearchParams();
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const t = searchParams.get("topic");
    if (!t || !BLOG_BROWSE_TOPIC_KEYS.includes(t)) {
      setSearchParams({ topic: BLOG_BROWSE_TOPIC_KEYS[0] }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const topicKey = normalizeBlogTopicKey(searchParams.get("topic"));
  const topicIndex = BLOG_BROWSE_TOPIC_KEYS.indexOf(topicKey);
  const totalTopics = BLOG_BROWSE_TOPIC_KEYS.length;
  const topicLabel = TOPIC_LABELS[topicKey] || topicKey;

  const visibleCards = useMemo(() => {
    const ids = BLOG_FEATURED_IDS_BY_TOPIC[topicKey] || [];
    const seen = new Set();
    return ids
      .map((id) => BLOG_POSTS_BY_ID[String(id)])
      .filter((post) => {
        if (!post || seen.has(post.id)) return false;
        seen.add(post.id);
        return true;
      });
  }, [topicKey]);

  const goToTopic = (key) => {
    setSearchParams({ topic: key });
  };

  return (
    <section className="featuredBlogRow" id="featured-blog-articles" ref={sectionRef}>
      <div className="featuredBlogRow__container">
        <div className="featuredBlogRow__grid">
          {visibleCards.map((card, idxInPage) => {
            const isVideoCard = idxInPage === 1 || idxInPage === 2;

            return (
              <article
                className={`featuredBlogCard${isVideoCard ? " featuredBlogCard--video" : ""}`}
                key={`${topicKey}-${card.id}-${idxInPage}`}
              >
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
                      <source src={DIAGONAL_VIDEO} type="video/mp4" />
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
          })}
        </div>

        {totalTopics > 1 && (
          <nav className="featuredBlogRow__pagination" aria-label="Browse articles by topic">
            <p className="featuredBlogRow__pagination-summary" aria-live="polite">
              <span className="featuredBlogRow__pagination-topic">{topicLabel}</span>
              <span className="featuredBlogRow__pagination-sep" aria-hidden="true">
                {" "}
                ·{" "}
              </span>
              Topic{" "}
              <span className="featuredBlogRow__pagination-current">{topicIndex + 1}</span> of {totalTopics}
            </p>
            <div className="featuredBlogRow__pagination-bar">
              <button
                type="button"
                className="featuredBlogRow__pagination-iconBtn"
                disabled={topicIndex <= 0}
                onClick={() => goToTopic(BLOG_BROWSE_TOPIC_KEYS[topicIndex - 1])}
                aria-label="Previous topic"
              >
                <img
                  src={arrowIcon}
                  alt=""
                  className="featuredBlogRow__pagination-arrowImg featuredBlogRow__pagination-arrowImg--prev"
                  aria-hidden="true"
                />
              </button>

              <ul className="featuredBlogRow__pagination-pages">
                {BLOG_BROWSE_TOPIC_KEYS.map((key, idx) => (
                  <li key={key}>
                    <button
                      type="button"
                      className={`featuredBlogRow__pagination-num${key === topicKey ? " is-active" : ""}`}
                      onClick={() => goToTopic(key)}
                      aria-label={`Topic: ${TOPIC_LABELS[key] || key}`}
                      aria-current={key === topicKey ? "page" : undefined}
                    >
                      {idx + 1}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="featuredBlogRow__pagination-iconBtn"
                disabled={topicIndex >= totalTopics - 1}
                onClick={() => goToTopic(BLOG_BROWSE_TOPIC_KEYS[topicIndex + 1])}
                aria-label="Next topic"
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
