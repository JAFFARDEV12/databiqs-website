import React from "react";
import { Link } from "react-router-dom";
import topicIcon from "../../assets/Icon.svg";
import "./BrowseByTopic.css";

const TOPICS = [
  { id: 1, name: "AI & Automation", articles: 24 },
  { id: 2, name: "Strategy & ROI", articles: 18 },
  { id: 3, name: "Data & Analytics", articles: 15 },
  { id: 4, name: "Customer Experience", articles: 21 },
  { id: 5, name: "AI Chatbot", articles: 8 },
  { id: 6, name: "AI Strategy", articles: 11 },
  { id: 7, name: "Neural Networks", articles: 18 },
  { id: 8, name: "AI Solutions", articles: 25 },
];

/** Maps to existing `BlogDetail` entries (`1`–`3`); swap when real topic URLs exist. */
const topicBlogDetailId = (topicId) => ((topicId - 1) % 3) + 1;

const BrowseByTopic = () => {
  return (
    <section className="browseByTopic" aria-label="Browse by topic">
      <div className="browseByTopic__container">
        <h2 className="browseByTopic__title">Browse By Topic</h2>
        <div className="browseByTopic__grid">
          {TOPICS.map((topic) => (
            <Link
              key={topic.id}
              className="browseByTopic__card"
              to={`/blog-detail/${topicBlogDetailId(topic.id)}`}
            >
              <img src={topicIcon} alt="" className="browseByTopic__icon" width={27} height={27} aria-hidden="true" />
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
