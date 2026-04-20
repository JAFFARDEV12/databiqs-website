import React from 'react';
import { Link } from 'react-router-dom';
import './ToolsAuditsSection.css';
import arrowIcon from '../../assets/rightarrow.svg';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const AuditIcon = () => (
  <svg className="tools-card__icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M8 4h6l4 4v10a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M13 4v4h4M12 11l2 4h-4l2 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg className="tools-card__icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M6 12l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ToolsAuditsSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="tools-audits-section" id="tools-audits" ref={sectionRef}>
      <div className="section-container">
        <h2 className="tools-audits-section__pill">Our Tools & Audits</h2>

        <div className="tools-audits-grid">
          <article className="tools-card">
            <div className="tools-card__icon-wrap" aria-hidden>
              <AuditIcon />
            </div>
            <h3 className="tools-card__title">AI Audit</h3>
            <p className="tools-card__body">
              Is Your Infrastructure AI Ready? We Analyze Your Current Data Stack And Provide A Roadmap For LLM Integration.
            </p>
            <Link to="/contact" className="tools-card__cta">
              <span className="tools-card__cta-text">Request Audit</span>
              <span className="tools-card__cta-arrow">
                <img src={arrowIcon} alt="" />
              </span>
            </Link>
          </article>

          <article className="tools-card">
            <div className="tools-card__icon-wrap" aria-hidden>
              <CheckIcon />
            </div>
            <h3 className="tools-card__title">UX Review</h3>
            <p className="tools-card__body">
              Identify Cognitive Friction In Your Digital Products, Get A High-Level Review Of Your User&apos;s Experience Flows.
            </p>
            <Link to="/contact" className="tools-card__cta">
              <span className="tools-card__cta-text">Schedule a review</span>
              <span className="tools-card__cta-arrow">
                <img src={arrowIcon} alt="" />
              </span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ToolsAuditsSection;
