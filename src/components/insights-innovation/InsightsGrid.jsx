import React from "react";
import "./InsightsGrid.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/rightarrow.png";

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";

const InsightsGrid = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  const cards = [
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
  ];

  return (
    <section className="insGrid" ref={sectionRef}>
      <div className="insGrid__container">
        <div className="insGrid__pill">Insights &amp; Innovation</div>

        <h2 className="insGrid__title">THOUGHT LEADERSHIP &amp; INSIGHTS</h2>

        <p className="insGrid__subtitle">
          Explore In-Depth Articles And Expert Analysis On AI, Automation, And
          Technology Strategies Shaping The Future Of Business.
        </p>

        <div className="insGrid__grid">
          {cards.map((c, idx) => (
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
                  <span className="insCard__dot">•</span>
                  <span>12 Minutes</span>
                </div>

                <div className="insCard__footer">
                  <Link to={`/blog-detail/${c.blogId}`} className="insCard__cta">
                    <span className="insCard__ctaText">Read Full Blog</span>
                    <span className="insCard__ctaArrow">
                      <img src={arrowIcon} alt="Arrow" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsGrid;
