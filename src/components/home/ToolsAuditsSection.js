import React from 'react';
import { Link } from 'react-router-dom';
import './ToolsAuditsSection.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { assetUrl } from '../../utils/assetUrl';

const arrowIcon = assetUrl('assets/rightarrow.svg');
const aiAuditIcon = assetUrl('assets/ai-audit.svg');
const uxReviewIcon = assetUrl('assets/UX-Review.svg');

const ToolsAuditsSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="tools-audits-section" id="tools-audits" ref={sectionRef}>
      <div className="section-container">
        <h2 className="tools-audits-section__pill">Our Tools & Audits</h2>

        <div className="tools-audits-grid">
          <article className="tools-card">
            <div className="tools-card__header">
              <div className="tools-card__icon-wrap" aria-hidden>
                <img src={aiAuditIcon} alt="AI Audit" />
              </div>
              <h3 className="tools-card__title">AI Audit</h3>
            </div>
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
            <div className="tools-card__header">
              <div className="tools-card__icon-wrap" aria-hidden>
                <img src={uxReviewIcon} alt="UX Review" />
              </div>
              <h3 className="tools-card__title">UX Review</h3>
            </div>
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
