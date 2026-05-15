import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import LottieFromCdn from "../LottieFromCdn";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { normalizeBlogTopicKey } from "../blog/blogPostsData";
import "./BrowseByTopic.css";

const TOPICS = [
  { id: 1, name: "AI & Automation", articles: 4, lottiePath: "assets/ai-animation-Flow.json", key: "automation" },
  { id: 2, name: "Strategy & ROI", articles: 4, lottiePath: "assets/Strategy.json", key: "strategy" },
  { id: 3, name: "Data & Analytics", articles: 4, lottiePath: "assets/data analysis.json", key: "analytics" },
  { id: 4, name: "Customer Experience", articles: 4, lottiePath: "assets/Customer-Support.json", key: "cx" },
  { id: 5, name: "AI Chatbot", articles: 4, lottiePath: "assets/Live chatbot.json", key: "chatbot" },
  { id: 6, name: "AI Consulting", articles: 4, lottiePath: "assets/Ai-brain-board.json", key: "ai-consulting" },
  { id: 7, name: "Neural Networks", articles: 4, lottiePath: "assets/Brain Connected with Artificial Intelligence.json", key: "neural" },
  { id: 8, name: "AI Solutions", articles: 4, lottiePath: "assets/Artificial-Intelligence.json", key: "solutions" },
];

const BrowseByTopic = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isBlogPage = location.pathname === "/blog-page";
  const activeTopicKey = isBlogPage ? normalizeBlogTopicKey(searchParams.get("topic")) : null;

  const scrollToFeatured = () => {
    requestAnimationFrame(() => {
      document.getElementById("featured-blog-articles")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section className="browseByTopic" aria-label="Browse by topic" ref={sectionRef}>
      <div className="browseByTopic__container">
        <h2 className="browseByTopic__title">Browse By Topic</h2>
        <div className="browseByTopic__grid">
          {TOPICS.map((topic) => (
            <Link
              key={topic.id}
              className={`browseByTopic__card${activeTopicKey === topic.key ? " is-active" : ""}`}
              to={`/blog-page?topic=${encodeURIComponent(topic.key)}`}
              onClick={scrollToFeatured}
            >
              <LottieFromCdn
                path={topic.lottiePath}
                className={`browseByTopic__lottie browseByTopic__lottie--${topic.key}`}
                loop
                autoplay
                aria-hidden="true"
              />
              <h3 className="browseByTopic__name">{topic.name}</h3>
              <p className="browseByTopic__count">
                {String(topic.articles).padStart(2, "0")} Articles
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByTopic;


