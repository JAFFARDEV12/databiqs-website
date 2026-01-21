import React from 'react';
import './Footer.css';
import chatbotIcon from '../../assets/Chatbot-Icon.png';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Footer = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer className="footer" ref={sectionRef}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={chatbotIcon} alt="Chatbot" className="footer-logo-icon" />
              <span className="footer-logo-text">atabiqs</span>
            </div>
            <p className="footer-tagline">
              Pushing the boundaries of technology, unleashing
              limitless innovation for a smarter future.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                f
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-middle">
            <h4 className="footer-heading">Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#insights">Insights</a></li>
            </ul>
          </div>

          <div className="footer-right">
            <h4 className="footer-heading">Join Our Newsletter</h4>
            <form className="newsletter-form">
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
            <p className="newsletter-text">
              Stay Upto Date
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2026 Databiqs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
