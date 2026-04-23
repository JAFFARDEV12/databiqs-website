import React from 'react';
import './AISolutionsSection.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import bgTwoRectangles1 from '../../assets/gif/Databiqas-Animation1.gif';
import aiCustomerAnimation from '../../assets/Customer-Support.json';
import Lottie from 'lottie-react';

const AISolutionsSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2, rootMargin: '0px' });

  return (
    <section className="ai-solutions-section" id="services" ref={sectionRef}>
      <div className="section-container">
        <div className="section-tag">AI-Powered Solutions</div>
        <h2 className="section-headline">
          Intelligent <span className="highlight">AI Solutions</span> Built for Scalable Growth
        </h2>
        <p className="section-description">
          We design AI-powered systems that streamline operations, enhance customer engagement, and enable businesses to scale with confidence.
        </p>

        <div className="solutions-card">
          <div className="card-left">
            <div className="solutions-diagram-frame">
              <img
                src={bgTwoRectangles1}
                alt=""
                aria-hidden="true"
                className="solutions-diagram-fill"
              />
              <img
                src={bgTwoRectangles1}
                alt="AI Solutions Diagram"
                className="solutions-diagram"
              />
            </div>
          </div>

          <div className="card-right">
            <div className="automation-title-row">
            <div className="automation-title-lottie">
  <Lottie
    animationData={aiCustomerAnimation}
    loop
    autoplay
    style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
  />
            </div>
              <h3 className="card-title">AI Conversational & Support Systems</h3>
            </div>

            <p className="card-description">
              AI-Powered Conversational And Support Systems Designed To Automate Interactions, Reduce Response Times, Assist Teams, And Deliver Consistent, High-Quality Customer Experiences Across All Digital Touchpoints.
            </p>
            <div className="capabilities-heading">Key Capabilities:</div>
            <ul className="capabilities-list">
              <li>Conversational AI With Natural Language Understanding</li>
              <li>24/7 Automated Customer Interactions</li>
              <li>Intelligent Query Routing & Escalation</li>
              <li>Human-AI Collaboration For Support Teams</li>
              <li>Multi-Channel Integration (Web, Chat, Messaging Platforms)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
