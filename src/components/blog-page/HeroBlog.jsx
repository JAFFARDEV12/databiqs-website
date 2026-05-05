import React from "react";
import "./HeroBlog.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/rightarrow.svg";

const HeroBlog = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="heroBlog" ref={sectionRef}>
      <div className="heroBlog__container">
        <div className="heroBlog__banner">
          <div className="heroBlog__intro">
            <h2 className="heroBlog__introTitle">Ideas that move business forward</h2>
            <p className="heroBlog__introDesc">
              In-depth articles and expert analysis on AI, automation, and technology
              strategies shaping the future of business.
            </p>
          </div>

          <article className="heroBlog__featureCard">
            <span className="heroBlog__badge">Our Feature Article</span>

            <Link className="heroBlog__titleLink" to="/blog-detail/1">
              <h3 className="heroBlog__title">
                How AI Chatbots are influencing the Customer Support of SaaS platforms
              </h3>
            </Link>

            <p className="heroBlog__desc">
              NovaTech&apos;s 14 person support team was overwhelmed. With tickets doubling every quarter and
              CSAT declining, they needed a smarter approach - not more headcount.
            </p>

            <Link to="/blog-detail/1" className="heroBlog__readLink">
              <span className="heroBlog__readText">Read Full Article</span>
              <span className="heroBlog__readIcon">
                <img src={arrowIcon} alt="" aria-hidden="true" />
              </span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;