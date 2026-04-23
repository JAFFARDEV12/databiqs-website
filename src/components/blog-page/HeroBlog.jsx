import React from "react";
import "./HeroBlog.css";
import heroImg from "../../assets/main.png";
/* import arrowIcon from "../../assets/rightarrow.svg"; */
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
/* import { Link } from "react-router-dom"; */
import PurpleCTAButton from "../buttons/PurpleCTAButton";

const HeroBlog = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="heroBlog" ref={sectionRef}>
      <div className="heroBlog__container">
        <div className="heroBlog__banner">
          
          <img className="heroBlog__img" src={heroImg} alt="Blog hero" />

          <div className="heroBlog__overlay">
            {/* ADDED: Our Latest Article badge */}
            <div className="heroBlog__badge">
              Our Latest Article
            </div>

            <h1 className="heroBlog__title">
              HOW AI CHATBOTS ARE REDEFINING ENTERPRISE CUSTOMER SUPPORT
            </h1>

            <div className="heroBlog__meta">
              <span>September 04, 2025</span>
              <span className="heroBlog__dot"></span>
              <span>12 Minutes</span>
            </div>

            <p className="heroBlog__desc">
              The phone rings at 3 AM. A customer in Tokyo needs urgent help.
              Another in London has a billing question. Simultaneously, someone
              in New York is trying to track their order. Your support team is
              asleep...
            </p>
            <div className="heroBlog__ctaRow">
  <PurpleCTAButton
    to="/blog-detail/1"
    text="Read Full Blog"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;