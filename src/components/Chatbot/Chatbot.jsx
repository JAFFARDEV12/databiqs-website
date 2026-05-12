import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Lottie from 'lottie-react';
import './Chatbot.css';
import chatbotFabLottie from '../../assets/rightbottomchatbot.json';
import chatbotIcon from '../../assets/chatbotlogo1.svg';

const API_URL = 'https://databiqs-website-backend-production.up.railway.app/api/prompt';

const AUTO_TOOLTIP_GAP_MS = 10000;
const AUTO_TOOLTIP_VISIBLE_MS = 3000;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoverTooltip, setHoverTooltip] = useState(false);
  const [autoTooltip, setAutoTooltip] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const isOpenRef = useRef(isOpen);
  isOpenRef.current = isOpen;

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  /** When chat is closed: wait 10s, show tooltip ~3s, repeat. */
  useEffect(() => {
    if (!mounted || isOpen) {
      setAutoTooltip(false);
      return undefined;
    }

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let waitTimer;
    let hideTimer;

    const clearTimers = () => {
      window.clearTimeout(waitTimer);
      window.clearTimeout(hideTimer);
    };

    const scheduleShow = () => {
      clearTimers();
      waitTimer = window.setTimeout(() => {
        if (isOpenRef.current) return;
        setAutoTooltip(true);
        hideTimer = window.setTimeout(() => {
          setAutoTooltip(false);
          if (!isOpenRef.current) scheduleShow();
        }, AUTO_TOOLTIP_VISIBLE_MS);
      }, AUTO_TOOLTIP_GAP_MS);
    };

    scheduleShow();

    return clearTimers;
  }, [mounted, isOpen]);

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
        credentials: 'include',
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
        onMouseEnter={() => setHoverTooltip(true)}
        onMouseLeave={() => setHoverTooltip(false)}
        aria-label="Open chatbot"
      >
        <div className="chatbot-fab-lottie-wrap" aria-hidden="true">
          <Lottie
            className="chatbot-fab-lottie"
            animationData={chatbotFabLottie}
            loop
            autoplay
          />
        </div>

        {!isOpen && (hoverTooltip || autoTooltip) && (
          <div className="chatbot-tooltip" role="tooltip">
            <span className="chatbot-tooltip__eyebrow">AI assistant</span>
            <span className="chatbot-tooltip__text">
              Ask about services, pricing, integrations, or timelines.
            </span>
          </div>
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
                <div className="chatbot-mini-logo-copy">
                  <span className="chatbot-mini-logo-text">Databiqs AI</span>
                  <span className="chatbot-mini-logo-subtext">
                    <span className="chatbot-status-dot" aria-hidden />
                    Online now
                  </span>
                </div>
              </div>
            </div>
            <button className="chatbot-close" onClick={toggleChatbot} aria-label="Close chatbot">
              ×
            </button>
          </div>

          <div className="chatbot-body">
            <div className="chatbot-messages">
              <div className="chatbot-intro-card">
                <p>Hi, I am your Databiqs assistant.</p>
                <span>Ask about services, timelines, integrations, or pricing.</span>
              </div>
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
                placeholder="Ask Databiqs AI Assistant..."
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
                aria-label="Send message"
              >
                <span>Send</span>
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
