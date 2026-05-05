import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Chatbot.css';
import chatbotIcon from '../../assets/chatbotlogo.svg';

const API_URL = 'https://databiqs-website-backend-production.up.railway.app/api/prompt';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setMessages(prev => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: trimmed }),
      });

      const text = await res.text();

      if (!res.ok) {
        let errMsg = 'Something went wrong. Please try again.';
        try {
          const json = JSON.parse(text);
          if (json.message) errMsg = json.message;
        } catch (_) {}
        setMessages(prev => [...prev, { role: 'bot', text: errMsg, error: true }]);
      } else {
        setMessages(prev => [...prev, { role: 'bot', text }]);
      }
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'bot', text: 'Unable to reach the assistant. Please check your connection.', error: true },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChatbot = () => setIsOpen(prev => !prev);

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
        <img src={chatbotIcon} alt="Chatbot" className="chatbot-icon" />

        {!isOpen && showTooltip && (
          <div className="chatbot-tooltip">Hey 👋 Ask Databiqs AI Assistant</div>
        )}
      </button>

      {/* Overlay */}
      {isOpen && <div className="chatbot-overlay" onClick={toggleChatbot} />}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-brand">
              <div className="chatbot-mini-logo">
                <img src={chatbotIcon} alt="Databiqs" className="chatbot-mini-logo-icon" />
                <span className="chatbot-mini-logo-text">atabiqs</span>
              </div>
            </div>
            <button className="chatbot-close" onClick={toggleChatbot} aria-label="Close chatbot">
              ×
            </button>
          </div>

          <div className="chatbot-body">
            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`chatbot-row chatbot-row--${msg.role}${msg.error ? ' chatbot-row--error' : ''}`}
                >
                  {msg.role === 'bot' && (
                    <div className="chatbot-avatar" aria-hidden>
                      <img src={chatbotIcon} alt="" />
                    </div>
                  )}
                  <div
                    className={`chatbot-bubble chatbot-bubble--${msg.role}${msg.error ? ' chatbot-bubble--error' : ''}`}
                  >
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="chatbot-row chatbot-row--bot">
                  <div className="chatbot-avatar" aria-hidden>
                    <img src={chatbotIcon} alt="" />
                  </div>
                  <div className="chatbot-bubble chatbot-bubble--bot chatbot-bubble--typing">
                    <div className="chatbot-typing">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input-container">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type your message..."
                className="chatbot-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <button
                className="chatbot-send"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
              >
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
