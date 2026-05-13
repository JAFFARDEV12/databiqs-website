import React from "react";
import { Link } from "react-router-dom";
import "./BlogNewsletterBanner.css";
import arrowIcon from "../../assets/rightarrow.svg";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const BlogNewsletterBanner = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="blogNewsletter" ref={sectionRef} aria-label="Book a consultation">
      <div className="blogNewsletter__wrap">
        <div className="blogNewsletter__card">
          <div className="blogNewsletter__cardBg" aria-hidden="true">
            <div className="blogNewsletter__decor blogNewsletter__decor--bl" />
            <div className="blogNewsletter__decor blogNewsletter__decor--tr" />
          </div>
          <div className="blogNewsletter__inner">
            <span className="blogNewsletter__pill">Free Strategy Session</span>
            <h2 className="blogNewsletter__title">
              Book Your
              <br />
              <em className="blogNewsletter__titleEm">Consultation</em>
            </h2>
            <p className="blogNewsletter__sub">
              Reserve a focused 30-minute strategy session with our CEO. Walk away with a clear AI
              product roadmap tailored to your goals.
            </p>
            <div className="blogNewsletter__actions">
              <Link to="/book-consultation" className="cta-button" aria-label="Book a consultation">
                <span>Book a Consultation</span>
                <div className="cta-icon-circle">
                  <img src={arrowIcon} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletterBanner;
