import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Chatbot.css';
import chatbotIcon from '../../assets/Chatbot-Icon.png';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  if (!mounted) return null;

  const chatbotContent = (
    <>
      {/* Floating Chat Button - Fixed to viewport, stays on screen when scrolling */}
      <button
        onClick={toggleChatbot}
        className="chatbot-icon-container"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          transform: 'none',
          filter: 'none',
          backdropFilter: 'none'
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Open chatbot"
      >
        <img 
          src={chatbotIcon} 
          alt="Chatbot" 
          className="chatbot-icon"
          onError={(e) => {
            console.error('Chatbot icon failed to load');
            e.target.style.display = 'none';
            const parent = e.target.parentElement;
            if (parent) {
              parent.innerHTML = '<div style="color: #7B2CBF; font-size: 24px; font-weight: bold;">💬</div>';
            }
          }}
        />
        {showTooltip && !isOpen && (
          <div className="chatbot-tooltip">Ask Chatbot</div>
        )}
      </button>

      {/* Dark Overlay - Appears when chatbot is open */}
      {isOpen && (
        <div 
          className="chatbot-overlay"
          onClick={toggleChatbot}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99997
          }}
        />
      )}

      {/* Chat Window - Appears above the icon */}
      {isOpen && (
        <div 
          className="chatbot-window"
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '24px',
            zIndex: 99998
          }}
        >
          <div className="chatbot-header">
            <div className="chatbot-header-brand">
              <img src={chatbotIcon} alt="Chatbot Icon" className="chatbot-logo" />
              <span className="chatbot-brand-text">atabiqs</span>
            </div>
            <button 
              className="chatbot-close"
              onClick={toggleChatbot}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>
          <div className="chatbot-body">
            <div className="chatbot-messages">
              <div className="chatbot-message bot">
                <p>Hello! How can I help you today?</p>
              </div>
            </div>
            <div className="chatbot-input-container">
              <input 
                type="text" 
                placeholder="Type your message..."
                className="chatbot-input"
              />
              <button className="chatbot-send">Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  // Render directly to body to bypass #root's backdrop-filter
  return createPortal(chatbotContent, document.body);
};

export default Chatbot;
