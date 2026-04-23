import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Chatbot.css';
import chatbotIcon from '../../assets/chatbotlogo.svg';

const Chatbot = () => {
  // Auto open on first load / refresh
  const [isOpen, setIsOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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
      {/* Floating Button */}
      <button
        onClick={toggleChatbot}
        className="chatbot-icon-container"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Open chatbot"
      >
        <img
          src={chatbotIcon}
          alt="Chatbot"
          className="chatbot-icon"
        />

        {!isOpen && showTooltip && (
          <div className="chatbot-tooltip">
            Hey 👋 Ask Databiqs AI Assistant
          </div>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="chatbot-overlay"
          onClick={toggleChatbot}
        />
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-brand">
              <div className="chatbot-mini-logo">
              <img
                  src={chatbotIcon}
                  alt="Databiqs"
                  className="chatbot-mini-logo-icon"
                />
                <span className="chatbot-mini-logo-text">
                  atabiqs
                </span>
              </div>
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

              <button className="chatbot-send">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return createPortal(chatbotContent, document.body);
};

export default Chatbot;