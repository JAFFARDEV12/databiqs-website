import React from 'react';
import './CaseStudiesSection.css';
import caseStudyImage from '../../assets/AIPoweredcustomersupportimage.png';

const CaseStudiesSection = () => {
  return (
    <section className="case-studies-section" id="case-studies">
      <div className="section-container">
        <div className="section-tag">Case Studies</div>
        <h2 className="section-headline">PROVEN IMPACT THROUGH AI SOLUTIONS</h2>
        <p className="section-description">
          Discover how we've helped businesses transform their operations and achieve remarkable results.
        </p>

        <div className="case-studies-grid">
          <div className="case-study-card">
            <h3 className="case-study-title">AI-Powered Customer Support</h3>
            <div className="case-study-flow">
              <div className="flow-item challenge">
                <div className="flow-icon">⏱️</div>
                <div className="flow-label">Challenge</div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item solution">
                <div className="flow-icon">🤖</div>
                <div className="flow-label">Opportunity & AI-Powered Solution</div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item results">
                <div className="flow-icon">✅</div>
                <div className="flow-label">Results</div>
              </div>
            </div>
            <p className="case-study-description">
              A leading e-commerce company faced challenges with inefficient customer support, 
              experiencing long response times and customer dissatisfaction. We implemented an 
              AI-powered chatbot system that reduced response times by 85% and improved customer 
              satisfaction scores significantly.
            </p>
            <button className="case-study-cta">
              Read Full Case Study
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="case-study-card">
            <h3 className="case-study-title">AI-Powered Customer Support</h3>
            <div className="case-study-flow">
              <div className="flow-item challenge">
                <div className="flow-icon">⏱️</div>
                <div className="flow-label">Challenge</div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item solution">
                <div className="flow-icon">🤖</div>
                <div className="flow-label">Opportunity & AI-Powered Solution</div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item results">
                <div className="flow-icon">✅</div>
                <div className="flow-label">Results</div>
              </div>
            </div>
            <p className="case-study-description">
              A leading e-commerce company faced challenges with inefficient customer support, 
              experiencing long response times and customer dissatisfaction. We implemented an 
              AI-powered chatbot system that reduced response times by 85% and improved customer 
              satisfaction scores significantly.
            </p>
            <button className="case-study-cta">
              Read Full Case Study
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="case-studies-navigation">
          <div className="nav-dot active"></div>
          <div className="nav-dot"></div>
          <div className="nav-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
