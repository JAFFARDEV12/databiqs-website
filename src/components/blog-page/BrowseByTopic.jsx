import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Lottie from "lottie-react";
import automationLottie from "../../assets/ai-animation-Flow.json";
import strategyRoiLottie from "../../assets/Strategy.json";
import analyticsLottie from "../../assets/data analysis.json";
import customerExperienceLottie from "../../assets/Customer-Support.json";
import chatbotLottie from "../../assets/Live chatbot.json";
import aiStrategyLottie from "../../assets/Ai-brain-board.json";
import neuralNetworksLottie from "../../assets/Brain Connected with Artificial Intelligence.json";
import aiSolutionsLottie from "../../assets/Artificial-Intelligence.json";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { normalizeBlogTopicKey } from "../blog/blogPostsData";
import "./BrowseByTopic.css";

const TOPICS = [
  { id: 1, name: "AI & Automation", articles: 4, animation: automationLottie, key: "automation" },
  { id: 2, name: "Strategy & ROI", articles: 4, animation: strategyRoiLottie, key: "strategy" },
  { id: 3, name: "Data & Analytics", articles: 4, animation: analyticsLottie, key: "analytics" },
  { id: 4, name: "Customer Experience", articles: 4, animation: customerExperienceLottie, key: "cx" },
  { id: 5, name: "AI Chatbot", articles: 4, animation: chatbotLottie, key: "chatbot" },
  { id: 6, name: "AI Consulting", articles: 4, animation: aiStrategyLottie, key: "ai-consulting" },
  { id: 7, name: "Neural Networks", articles: 4, animation: neuralNetworksLottie, key: "neural" },
  { id: 8, name: "AI Solutions", articles: 4, animation: aiSolutionsLottie, key: "solutions" },
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
              <Lottie
                className={`browseByTopic__lottie browseByTopic__lottie--${topic.key}`}
                animationData={topic.animation}
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
