import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Chatbot.css';
import chatbotIcon from '../../assets/chatbotlogo.svg';

const Chatbot = () => {
  // Auto open on first load
  const [isOpen, setIsOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setMounted(true);

    // After first auto popup closes, next opens from icon side
    return () => setMounted(false);
  }, []);

  const toggleChatbot = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsFirstLoad(false);
    } else {
      setIsOpen(true);
    }
  };

  if (!mounted) return null;

  const chatbotContent = (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChatbot}
        className="chatbot-icon-container"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99999
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <img src={chatbotIcon} alt="Chatbot" className="chatbot-icon" />

        {!isOpen && showTooltip && (
          <div className="chatbot-tooltip">
            Hye 👋 Ask Databiqs AI Assistant
          </div>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="chatbot-overlay"
          onClick={toggleChatbot}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99997
          }}
        />
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="chatbot-window"
          style={{
            position: 'fixed',
            zIndex: 99998,

            // First load center popup
            ...(isFirstLoad
              ? {
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }
              : {
                  bottom: '90px',
                  right: '24px'
                })
          }}
        >
          <div className="chatbot-header">
            <div className="chatbot-header-brand">
              <img
                src={chatbotIcon}
                alt="Chatbot"
                className="chatbot-logo"
              />
              <span className="chatbot-brand-text">Databiqs</span>
            </div>

            <button
              className="chatbot-close"
              onClick={toggleChatbot}
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