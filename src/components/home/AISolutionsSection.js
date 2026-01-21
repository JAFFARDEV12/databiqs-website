import React from 'react';
import './AISolutionsSection.css';
import chatbotIcon from '../../assets/Chatbot-Icon.png';
import userIcon from '../../assets/user.png';
import sectionBg from '../../assets/section3-aibgrectangle.png';

const AISolutionsSection = () => {
  return (
    <section className="ai-solutions-section" id="services">
      <div className="section-container">
        <div className="section-tag">AI-Powered Solutions</div>
        <h2 className="section-headline">
          INTELLIGENT <span className="highlight">AI SOLUTIONS</span> BUILT FOR SCALABLE GROWTH
        </h2>
        <p className="section-description">
          We Design Al-Powered Systems That Streamline Operations, Enhance Customer Engagement, And Enable Businesses To Scale With Confidence.
        </p>

        <div className="solutions-card">
          <div className="card-left">
            <div className="diagram-container">
              <div className="diagram-content">
                <div className="diagram-main-area">
                  <div className="diagram-left">
                    <div className="diagram-box customer-box">
                      <div className="chat-interface">
                        <div className="chat-avatar"></div>
                        <div className="chat-person-icon"></div>
                        <div className="chat-bubbles">
                          <div className="chat-bubble"></div>
                          <div className="chat-bubble with-avatar">
                            <div className="bubble-avatar purple"></div>
                            <div className="message-line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="box-title">Customer</div>
                      <div className="connection-line left-line"></div>
                    </div>
                    
                    <div className="diagram-box integrated-system-box">
                      <div className="chat-interface">
                        <div className="chat-avatar"></div>
                        <div className="chat-person-icon"></div>
                        <div className="chat-bubbles">
                          <div className="chat-bubble"></div>
                          <div className="chat-bubble with-avatar">
                            <div className="bubble-avatar blue"></div>
                            <div className="message-line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="box-title">Integrated System</div>
                      <div className="connection-line left-line"></div>
                    </div>
                  </div>
                  
                  <div className="diagram-center">
                    <div className="diagram-box chatbot-box">
                      <div className="chatbot-icon">
                        <div className="chatbot-ai-square">AI</div>
                      </div>
                      <div className="chatbot-label">Chatbot</div>
                    </div>
                  </div>
                  
                  <div className="diagram-right">
                    <div className="diagram-box integrated-api-box">
                      <div className="box-title">Integrated Systems (via API)</div>
                      <div className="box-content api-content">
                        <div className="person-icon blue-icon">👤</div>
                        <div className="content-text">
                          <div className="main-text">Your System</div>
                          <div className="sub-text">Connected Via REST API</div>
                        </div>
                      </div>
                      <div className="connection-line right-line"></div>
                    </div>
                    
                    <div className="conversat-input-element">
                      <div className="status-circles">
                        <div className="status-circle red-circle">●</div>
                        <div className="status-circle blue-circle">●</div>
                      </div>
                      <div className="conversat-text">ConversatiInput</div>
                      <div className="connection-line right-line"></div>
                    </div>
                    
                    <div className="diagram-box conversations-box">
                      <div className="box-title">Customer Conversations</div>
                      <div className="conversations-subtitle">(AI-Powered Or Human-Assisted)</div>
                      <div className="box-content">
                        <div className="person-icon teal-icon">👤</div>
                        <div className="content-text">
                          <div className="main-text">Conversations</div>
                          <div className="sub-text">AI-Powered Chat History</div>
                        </div>
                      </div>
                      <div className="connection-line right-line"></div>
                    </div>
                  </div>
                </div>
                
                <div className="nlp-section">
                  <div className="arrow-down"></div>
                  <div className="diagram-box nlp-box">
                    <div className="box-title">NLP Model (Intent Recognition & Response Generation)</div>
                  </div>
                </div>
                
                <div className="process-flow">
                  <div className="arrow-down"></div>
                  <div className="flow-stages">
                    <div className="flow-stage">Customer Query</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-stage">AI Generated Response <span className="flow-note">(Via NLP)</span></div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-stage">Intent-Based Routing To Systems/Agents</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-stage">Escalation To Human Agent Or Specialist</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-stage">Resolution <span className="flow-note">(Automated Or Human)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-right">
            <h3 className="card-title">AI Conversational & Support Systems</h3>
            <p className="card-description">
              AI-powered conversational and support systems designed to automate interactions, reduce response times, assist teams, and deliver consistent, high-quality customer experiences across all digital touchpoints.
            </p>
            <div className="capabilities-heading">Key Capabilities:</div>
            <ul className="capabilities-list">
              <li>Conversational AI with natural language understanding</li>
              <li>24/7 automated customer interactions</li>
              <li>Intelligent query routing & escalation</li>
              <li>Human-AI collaboration for support teams</li>
              <li>Multi-channel integration (web, chat, messaging platforms)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
