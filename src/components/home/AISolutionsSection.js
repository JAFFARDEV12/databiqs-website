import React from 'react';
import './AISolutionsSection.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
// SVG Assets
import externalBgCard from '../../assets/external bg card.svg';
import blankAvatar from '../../assets/blank avator.svg';
import girlAvatar from '../../assets/girl avator.svg';
import CustomerSvg from '../../assets/Customer.svg';
import firstRecFirstLine from '../../assets/1st rec 1st line.svg';
import firstRecSecondLine from '../../assets/1st rec 2nd line.svg';
import secondRecFirstLine from '../../assets/2nd rec first line.svg';
import secondRecSecondLine from '../../assets/2nd rectangle 2nd line.svg';
import internal2Rectangles from '../../assets/intenral 2 rctangles.svg';
import rect34624511 from '../../assets/Rectangle 34624511.svg';
import rect34624514 from '../../assets/Rectangle 34624514.svg';
import rect34624515 from '../../assets/Rectangle 34624515.svg';
import avatarBgEllipse from '../../assets/avator bg ellipse.svg';
import beforeCustomerEllipse from '../../assets/before customer ellipse.svg';
import dotSvg from '../../assets/dot.svg';
import bgTwoRectangles from '../../assets/bg two rectangles.svg';
import nerdAvatar from '../home/nerd.png';
import integratedBoxUserIcon from '../../assets/integratedboxusericon.svg';
import redCircleCross from '../../assets/red at left alreading cutting from right.svg';
import blueCircleTick from '../../assets/blue circle.svg';
import crossIcon from '../../assets/cross at red.svg';
import tickIcon from '../../assets/tick icon.svg';
import customerToChatbotArrow from '../../assets/customer to chatbot.svg';
import chatbotToConversatinputArrow from '../../assets/chatbot to coversatinput.svg';
import chatbotToIntegratedSystemsArrow from '../../assets/chatbot to integrated systems.svg';
import chatbotToCustomerConversationsArrow from '../../assets/chatbot to customer conversations.svg';
import nlpToIntentArrow from '../../assets/nlp to intent.svg';

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
            {/* AI Powered Solutions Diagram */}
            <div className="ai-powered-diagram">
              {/* Left Side - Inputs */}
              <div className="diagram-left-inputs">
                {/* Customer Box */}
                <div className="diagram-box customer-box">
                  {/* Header: Avatar circle on left, "Customer" text on right */}
                  <div className="customer-header">
                    <img src={avatarBgEllipse} alt="Avatar" className="header-avatar-circle" />
                    <span className="customer-title-text">Customer</span>
                  </div>
                  
                  {/* First Message: User message - Avatar with icon on left, chat bubble on right */}
                  <div className="customer-message-block user-message">
                    <div className="message-avatar-with-icon">
                      <img src={beforeCustomerEllipse} alt="User Icon" className="message-avatar-circle" />
                      <img src={blankAvatar} alt="Person Icon" className="person-icon-inside" />
                    </div>
                    <div className="chat-bubble-user">
                      <img src={bgTwoRectangles} alt="Background" className="chat-bubble-bg" />
                      <div className="chat-bubble-content">
                        <img src={firstRecFirstLine} alt="Message line 1" className="message-line-in-bubble" />
                        <img src={firstRecSecondLine} alt="Message line 2" className="message-line-in-bubble" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Second Message: Agent message - Chat bubble on left, girl avatar on right */}
                  <div className="customer-message-block agent-message">
                    <div className="chat-bubble-agent">
                      <img src={bgTwoRectangles} alt="Background" className="chat-bubble-bg" />
                      <div className="chat-bubble-content">
                        <div className="agent-message-lines">
                          <img src={secondRecFirstLine} alt="Response line 1" className="message-line-in-bubble" />
                          <div className="agent-second-line-row">
                            <img src={secondRecSecondLine} alt="Response line 2" className="message-line-in-bubble" />
                            <div className="dots-container">
                              <img src={dotSvg} alt="Dot" className="typing-dot" />
                              <img src={dotSvg} alt="Dot" className="typing-dot" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="agent-avatar-container">
                      <img src={beforeCustomerEllipse} alt="Avatar background" className="agent-avatar-ellipse" />
                      <img src={girlAvatar} alt="Agent" className="agent-avatar" />
                    </div>
                  </div>
                </div>

                {/* Integrated System Box */}
                <div className="diagram-box integrated-system-box">
                  {/* Header: Avatar circle on left, "Integrated System" text on right */}
                  <div className="customer-header">
                    <img src={avatarBgEllipse} alt="Avatar" className="header-avatar-circle" />
                    <span className="customer-title-text">Integrated System</span>
                  </div>
                  
                  {/* First Message: System message - Avatar with icon on left, chat bubble on right */}
                  <div className="customer-message-block user-message">
                    <div className="message-avatar-with-icon">
                      <img src={beforeCustomerEllipse} alt="System Icon" className="message-avatar-circle" />
                      <img src={blankAvatar} alt="Person Icon" className="person-icon-inside" />
                    </div>
                    <div className="chat-bubble-user">
                      <img src={bgTwoRectangles} alt="Background" className="chat-bubble-bg" />
                      <div className="chat-bubble-content">
                        <img src={firstRecFirstLine} alt="Message line 1" className="message-line-in-bubble" />
                        <img src={firstRecSecondLine} alt="Message line 2" className="message-line-in-bubble" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Second Message: Bot message - Chat bubble on left, nerd avatar on right */}
                  <div className="customer-message-block agent-message">
                    <div className="chat-bubble-agent">
                      <img src={bgTwoRectangles} alt="Background" className="chat-bubble-bg" />
                      <div className="chat-bubble-content">
                        <div className="agent-message-lines">
                          <img src={secondRecFirstLine} alt="Response line 1" className="message-line-in-bubble" />
                          <div className="agent-second-line-row">
                            <img src={secondRecSecondLine} alt="Response line 2" className="message-line-in-bubble" />
                            <div className="dots-container">
                              <img src={dotSvg} alt="Dot" className="typing-dot" />
                              <img src={dotSvg} alt="Dot" className="typing-dot" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="agent-avatar-container">
                      <img src={beforeCustomerEllipse} alt="Avatar background" className="agent-avatar-ellipse" />
                      <img src={nerdAvatar} alt="Bot" className="agent-avatar" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow from Customer to Chatbot */}
              <img 
                src={customerToChatbotArrow} 
                alt="Customer to Chatbot" 
                className="arrow-customer-to-chatbot"
              />

              {/* Center - Chatbot */}
              <div className="diagram-center">
                <div className="chatbot-box">
                  <div className="ai-icon-box">
                    <span className="ai-text">AI</span>
                  </div>
                  <div className="chatbot-label">Chatbot</div>
                </div>
                <div className="nlp-model-box">
                  <span className="nlp-text">NLP Model (Intent Recognition & Response Generation)</span>
                </div>
              </div>

              {/* Arrow from Chatbot to Left (Customer/Integrated System) */}
              <img 
                src={customerToChatbotArrow} 
                alt="Chatbot to Left" 
                className="arrow-chatbot-to-left"
              />

              {/* Arrow from Chatbot to Integrated Systems */}
              <img 
                src={chatbotToIntegratedSystemsArrow} 
                alt="Chatbot to Integrated Systems" 
                className="arrow-chatbot-to-integrated-systems"
              />

              {/* Arrow from Chatbot to Conversatinput */}
              <img 
                src={chatbotToConversatinputArrow} 
                alt="Chatbot to Conversatinput" 
                className="arrow-chatbot-to-conversatinput"
              />

              {/* Arrow from Chatbot to Customer Conversations */}
              <img 
                src={chatbotToCustomerConversationsArrow} 
                alt="Chatbot to Customer Conversations" 
                className="arrow-chatbot-to-customer-conversations"
              />

              {/* Right Side - Outputs */}
              <div className="diagram-right-outputs">
                {/* Integrated Systems (via API) */}
                <div className="diagram-box integrated-api-box">
                  <div className="box-header">
                    <span className="box-title">Integrated Systems (via API)</span>
                  </div>
                  <div className="box-content-api">
                    <img src={integratedBoxUserIcon} alt="System" className="box-icon blue-icon" />
                    <div className="box-text-content">
                      <div className="box-text-line box-text-bold">Your System</div>
                      <div className="box-text-line">Connected Via REST API</div>
                    </div>
                  </div>
                </div>

                {/* Conversatinput */}
                <div className="diagram-box conversatinput-box">
                  <div className="conversatinput-content">
                    <div className="status-circles">
                      <div className="status-circle red-circle">
                        <img src={redCircleCross} alt="Red circle" className="status-circle-bg" />
                        <img src={crossIcon} alt="Cross" className="status-circle-icon" />
                      </div>
                      <div className="status-circle blue-circle">
                        <img src={blueCircleTick} alt="Blue circle" className="status-circle-bg" />
                        <img src={tickIcon} alt="Tick" className="status-circle-icon" />
                      </div>
                    </div>
                    <span className="conversatinput-text">Conversatinput</span>
                  </div>
                </div>

                {/* Customer Conversations */}
                <div className="diagram-box customer-conversations-box">
                  <div className="box-header">
                    <span className="box-title">Customer Conversations</span>
                  </div>
                  <div className="customer-conversations-subtitle">AI Powered Chat History</div>
                  <div className="box-content-api">
                    <img src={integratedBoxUserIcon} alt="Conversations" className="box-icon blue-icon" />
                    <div className="box-text-content">
                      <div className="box-text-line box-text-bold">Conversations</div>
                      <div className="box-text-line">AI Powered Chat History</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NLP to Intent Arrow */}
            <img 
              src={nlpToIntentArrow} 
              alt="NLP to Intent" 
              className="arrow-nlp-to-intent"
            />
            
            {/* Process Steps Row */}
            <div className="process-steps-row">
              <div className="process-step">
                <span>Customer Query</span>
              </div>
              <div className="process-step">
                <span>aI Generated Response </span>
                <span className="step-bracket">(via nlp)</span>
              </div>
              <div className="process-step">
                <span>Intent-based routing </span>
                <span className="step-bracket">to systems/agents</span>
              </div>
              <div className="process-step">
                <span>Escalation to Human Agent </span>
                <span className="step-bracket">or Specialist</span>
              </div>
              <div className="process-step">
                <span>Resolution </span>
                <span className="step-bracket">(Automated or Human)</span>
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
