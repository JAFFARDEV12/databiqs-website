import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/rightarrow.svg";
import "./FeaturedBlogCardsRow.css";

const PAGE_SIZE = 4;

/** Matches slugs supported in `BlogDetail.jsx` (`1`–`3`). */
const blogDetailPath = (cardId) => `/blog-detail/${((cardId - 1) % 3) + 1}`;

const cards = [
  {
    id: 1,
    tag: "AI Automation",
    title: "How AI chatbots are redefining enterprise customer support in 2025",
    desc: "The phone rings at 3 AM. A customer in Tokyo needs urgent help. Another in London has a billing question. Your support team is asleep - but your AI isn't. Here's how the best teams are building always-on support that actually works.",
    author: "Jaffar Ali",
    date: "September 04, 2025",
    readTime: "12 Minutes Read",
  },
  {
    id: 2,
    tag: "AI Automation",
    title: "How AI chatbots are redefining enterprise customer support in 2025",
    desc: "The phone rings at 3 AM. A customer in Tokyo needs urgent help. Another in London has a billing question. Your support team is asleep - but your AI isn't. Here's how the best teams are building always-on support that actually works.",
    author: "Jaffar Ali",
    date: "September 04, 2025",
    readTime: "12 Minutes Read",
  },
  {
    id: 3,
    tag: "AI Automation",
    title: "How AI chatbots are redefining enterprise customer support in 2025",
    desc: "The phone rings at 3 AM. A customer in Tokyo needs urgent help. Another in London has a billing question. Your support team is asleep - but your AI isn't. Here's how the best teams are building always-on support that actually works.",
    author: "Jaffar Ali",
    date: "September 04, 2025",
    readTime: "12 Minutes Read",
  },
  {
    id: 4,
    tag: "AI Automation",
    title: "How AI chatbots are redefining enterprise customer support in 2025",
    desc: "The phone rings at 3 AM. A customer in Tokyo needs urgent help. Another in London has a billing question. Your support team is asleep - but your AI isn't. Here's how the best teams are building always-on support that actually works.",
    author: "Jaffar Ali",
    date: "September 04, 2025",
    readTime: "12 Minutes Read",
  },
  {
    id: 5,
    tag: "AI Automation",
    title: "How AI chatbots are redefining enterprise customer support in 2025",
    desc: "The phone rings at 3 AM. A customer in Tokyo needs urgent help. Another in London has a billing question. Your support team is asleep - but your AI isn't. Here's how the best teams are building always-on support that actually works.",
    author: "Jaffar Ali",
    date: "September 04, 2025",
    readTime: "12 Minutes Read",
  },
  {
    id: 6,
    tag: "AI Automation",
    title: "How AI chatbots are redefining enterprise customer support in 2025",
    desc: "The phone rings at 3 AM. A customer in Tokyo needs urgent help. Another in London has a billing question. Your support team is asleep - but your AI isn't. Here's how the best teams are building always-on support that actually works.",
    author: "Jaffar Ali",
    date: "September 04, 2025",
    readTime: "12 Minutes Read",
  },
  {
    id: 7,
    tag: "AI Automation",
    title: "How AI chatbots are redefining enterprise customer support in 2025",
    desc: "The phone rings at 3 AM. A customer in Tokyo needs urgent help. Another in London has a billing question. Your support team is asleep - but your AI isn't. Here's how the best teams are building always-on support that actually works.",
    author: "Jaffar Ali",
    date: "September 04, 2025",
    readTime: "12 Minutes Read",
  },
  {
    id: 8,
    tag: "AI Automation",
    title: "How AI chatbots are redefining enterprise customer support in 2025",
    desc: "The phone rings at 3 AM. A customer in Tokyo needs urgent help. Another in London has a billing question. Your support team is asleep - but your AI isn't. Here's how the best teams are building always-on support that actually works.",
    author: "Jaffar Ali",
    date: "September 04, 2025",
    readTime: "12 Minutes Read",
  },
];

const FeaturedBlogCardsRow = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(cards.length / PAGE_SIZE);

  const visibleCards = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return cards.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <section className="featuredBlogRow">
      <div className="featuredBlogRow__container">
        <div className="featuredBlogRow__grid">
          {visibleCards.map((card) => (
            <article className="featuredBlogCard" key={card.id}>
              <span className="featuredBlogCard__tag">{card.tag}</span>
              <Link className="featuredBlogCard__titleLink" to={blogDetailPath(card.id)}>
                <h3 className="featuredBlogCard__title">{card.title}</h3>
              </Link>
              <p className="featuredBlogCard__desc">{card.desc}</p>

              <Link to={blogDetailPath(card.id)} className="featuredBlogCard__link">
                <span>Read Full Blog</span>
                <span className="featuredBlogCard__icon">
                  <img src={arrowIcon} alt="" aria-hidden="true" />
                </span>
              </Link>

              <div className="featuredBlogCard__meta">
                <span>{card.author}</span>
                <span className="featuredBlogCard__dot" />
                <span>{card.date}</span>
                <span className="featuredBlogCard__dot" />
                <span>{card.readTime}</span>
              </div>
            </article>
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
