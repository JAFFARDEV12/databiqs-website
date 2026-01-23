import React from 'react';
import './AISolutionsSection.css';
import diagramImage from '../../assets/img.PNG';

const AISolutionsSection = () => {
  return (
    <section className="ai-solutions-section" id="services">
      <div className="section-container">
        <div className="section-tag">AI-Powered Solutions</div>
        <h2 className="section-headline">
          INTELLIGENT <span className="highlight">AI SOLUTIONS</span> BUILT FOR SCALABLE GROWTH
        </h2>
        <p className="section-description">
          We Design AI-Powered Systems That Streamline Operations, Enhance Customer Engagement, And Enable Businesses To Scale With Confidence.
        </p>

        <div className="solutions-card">
          <div className="card-left">
            <div className="diagram-container">
              <div className="diagram-wrapper">
                <img 
                  src={diagramImage} 
                  alt="AI Chatbot Flow Diagram" 
                  className="diagram-image"
                />
                <div className="process-flow-overlay">
                  <div className="flow-stages">
                    <div className="flow-stage">
                      <div className="flow-line-1">Customer Query</div>
                      <div className="flow-line-2"></div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-stage">
                      <div className="flow-line-1">AI Generated Response</div>
                      <div className="flow-line-2">(NLP Model)</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-stage flow-stage-center">
                      <div className="flow-line-1">Intent-Based Routing</div>
                      <div className="flow-line-2 flow-line-2-match">To Systems/Agents</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-stage">
                      <div className="flow-line-1">Escalation To Human</div>
                      <div className="flow-line-2 flow-line-2-match">Agent Or Specialist</div>
                    </div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-stage">
                      <div className="flow-line-1">Resolution</div>
                      <div className="flow-line-2">(Automated Or Human)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-right">
            <h3 className="card-title">AI Conversational & Support Systems</h3>
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
