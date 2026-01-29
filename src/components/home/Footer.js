import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import chatbotIcon from '../../assets/chatbotlogo.svg';
import instaSvg from '../../assets/insta.svg';
import linkedinSvg from '../../assets/linkedin.svg';
import facebookSvg from '../../assets/facebook.svg';
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
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <img src={linkedinSvg} alt="" aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <img src={facebookSvg} alt="" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <img src={instaSvg} alt="" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="footer-middle">
            <h4 className="footer-heading">Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#case-studies">Case Studies</Link></li>
              <li><Link to="/#insights">Insights</Link></li>
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
