import React from "react";
import { Link } from "react-router-dom";
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
import "./BrowseByTopic.css";

const TOPICS = [
  { id: 1, name: "AI & Automation", articles: 24, animation: automationLottie, key: "automation" },
  { id: 2, name: "Strategy & ROI", articles: 18, animation: strategyRoiLottie, key: "strategy" },
  { id: 3, name: "Data & Analytics", articles: 15, animation: analyticsLottie, key: "analytics" },
  { id: 4, name: "Customer Experience", articles: 21, animation: customerExperienceLottie, key: "cx" },
  { id: 5, name: "AI Chatbot", articles: 8, animation: chatbotLottie, key: "chatbot" },
  { id: 6, name: "AI Strategy", articles: 11, animation: aiStrategyLottie, key: "ai-strategy" },
  { id: 7, name: "Neural Networks", articles: 18, animation: neuralNetworksLottie, key: "neural" },
  { id: 8, name: "AI Solutions", articles: 25, animation: aiSolutionsLottie, key: "solutions" },
];

/** Maps to existing `BlogDetail` entries (`1`–`3`); swap when real topic URLs exist. */
const topicBlogDetailId = (topicId) => ((topicId - 1) % 3) + 1;

const BrowseByTopic = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="browseByTopic" aria-label="Browse by topic" ref={sectionRef}>
      <div className="browseByTopic__container">
        <h2 className="browseByTopic__title">Browse By Topic</h2>
        <div className="browseByTopic__grid">
          {TOPICS.map((topic) => (
            <Link
              key={topic.id}
              className="browseByTopic__card"
              to={`/blog-detail/${topicBlogDetailId(topic.id)}`}
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
