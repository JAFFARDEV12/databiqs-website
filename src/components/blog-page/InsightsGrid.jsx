import React, { useEffect, useMemo, useRef, useState } from "react";
import "./InsightsGrid.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
/* import { Link } from "react-router-dom";
import arrowIcon from "../../assets/rightarrow.svg"; */

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import PurpleCTAButton from "../buttons/PurpleCTAButton";

const PAGE_SIZE = 4;

/** Compact page list with ellipses for many pages (e.g. 1 … 4 5 6 … 12). */
const buildPaginationItems = (currentPage, totalPages) => {
  if (totalPages <= 1) return [];
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages = new Set([1, totalPages]);
  for (let i = currentPage - 1; i <= currentPage + 1; i += 1) {
    if (i >= 1 && i <= totalPages) pages.add(i);
  }
  const sorted = [...pages].sort((a, b) => a - b);
  const out = [];
  let prev = 0;
  sorted.forEach((p) => {
    if (prev && p - prev > 1) out.push("ellipsis");
    out.push(p);
    prev = p;
  });
  return out;
};

const BLOG_CARDS = [
    {
      id: 1,
      image: img1,
      title: "Automating Business Workflows With N8n: A Smarter Way To Scale",
      desc: "Explore How Intelligent Chatbots Are Revolutionizing Customer Support...",
      blogId: 2,
    },
    {
      id: 2,
      image: img2,
      title:
        "How AI Chatbots Are Redefining Enterprise Customer Support In 2025",
      desc: "From 24/7 Availability To Intelligent Routing—discover How Conversational AI...",
      blogId: 1,
    },
    {
      id: 3,
      image: img3,
      title: "Transforming Customer Engagement With AI Chatbots",
      desc: "Explore How Intelligent Chatbots Are Revolutionizing Customer Support...",
      blogId: 3,
    },
    {
      id: 4,
      image: img4,
      title: "A Complete Guide To Intelligent Process Optimization",
      desc: "Step-By-Step Strategies To Eliminate Manual Tasks, Connect Systems Seamlessly...",
      blogId: 1,
    },
    {
      id: 5,
      image: img5,
      title: "The Enterprise Guide To Implementing AI: Strategy, Tools, And ROI",
      desc: "A Practical Framework For Integrating AI Solutions Into Existing Systems Without...",
      blogId: 2,
    },
    {
      id: 6,
      image: img6,
      title:
        "The Future Of Customer Support Isn't Replacement, It's Collaboration",
      desc: "Why The Most Successful Support Teams Blend AI Automation With Human Empathy...",
      blogId: 3,
    },
    {
      id: 7,
      image: img6,
      title:
        "The Future Of Customer Support Isn't Replacement, It's Collaboration",
      desc: "Why The Most Successful Support Teams Blend AI Automation With Human Empathy...",
      blogId: 3,
    },
    {
      id: 8,
      image: img6,
      title:
        "The Future Of Customer Support Isn't Replacement, It's Collaboration",
      desc: "Why The Most Successful Support Teams Blend AI Automation With Human Empathy...",
      blogId: 3,
    },



   
  ];

const InsightsGrid = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  const gridTopRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(BLOG_CARDS.length / PAGE_SIZE));

  useEffect(() => {
    setCurrentPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const safePage = Math.min(currentPage, totalPages);
  const pageIndex = safePage - 1;
  const visibleCards = useMemo(
    () => BLOG_CARDS.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE),
    [pageIndex]
  );

  const paginationItems = useMemo(
    () => buildPaginationItems(safePage, totalPages),
    [safePage, totalPages]
  );

  const goToPage = (page) => {
    const next = Math.min(Math.max(1, page), totalPages);
    setCurrentPage(next);
    requestAnimationFrame(() => {
      gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section className="insGrid" ref={sectionRef}>
      <div className="insGrid__container">
        <div className="insGrid__pill">Insights &amp; Innovation</div>
        <h2 className="insGrid__title">THOUGHT LEADERSHIP &amp; INSIGHTS</h2>
        {/* <div className="insGrid__title"> <ColourfulText text="THOUGHT LEADERSHIP &amp; INSIGHTS" /></div> */}

     
        <p className="insGrid__subtitle">
          Explore In-Depth Articles And Expert Analysis On AI, Automation, And
          Technology Strategies Shaping The Future Of Business.
        </p>

        <div className="insGrid__grid" ref={gridTopRef}>
          {visibleCards.map((c, idx) => (
            <div
              className="insCard"
              key={c.id}
              style={{ "--delay": `${0.2 + idx * 0.12}s` }}
            >
              <div className="insCard__imgWrap">
                <img src={c.image} alt={c.title} loading="lazy" />
              </div>

              <div className="insCard__content">
                <h3 className="insCard__title">{c.title}</h3>
                <p className="insCard__desc">{c.desc}</p>

                <div className="insCard__meta">
                  <span>September 04, 2025</span>
                  <span className="insCard__dot"></span>
                  <span>12 Minutes</span>
                </div>
                <div className="insCard__footer">
  <PurpleCTAButton
    to={`/blog-detail/${c.blogId}`}
    text="Read Full Blog"
    variant="inline"
    className="insCard__reuseBtn"
  />
</div>

               {/*  <div className="insCard__footer">
                  <Link to={`/blog-detail/${c.blogId}`} className="insCard__cta">
                    <span className="insCard__ctaText">Read Full Blog</span>
                    <span className="insCard__ctaArrow">
                      <img src={arrowIcon} alt="Arrow" />
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="insGrid__pagination" aria-label="Blog posts pagination">
            <button
              type="button"
              className="insGrid__pagination-nav"
              onClick={() => goToPage(safePage - 1)}
              disabled={safePage <= 1}
              aria-label="Previous page"
            >
              Previous
            </button>

            <ul className="insGrid__pagination-pages">
              {paginationItems.map((item, i) =>
                item === "ellipsis" ? (
                  <li key={`e-${i}`} className="insGrid__pagination-ellipsis" aria-hidden>
                    …
                  </li>
                ) : (
                  <li key={item}>
                    <button
                      type="button"
                      className={`insGrid__pagination-num${item === safePage ? " is-active" : ""}`}
                      onClick={() => goToPage(item)}
                      aria-label={`Page ${item}`}
                      aria-current={item === safePage ? "page" : undefined}
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>

            <button
              type="button"
              className="insGrid__pagination-nav"
              onClick={() => goToPage(safePage + 1)}
              disabled={safePage >= totalPages}
              aria-label="Next page"
            >
              Next
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default InsightsGrid;
