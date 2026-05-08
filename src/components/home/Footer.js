
import { Link } from 'react-router-dom';
import './Footer.css';
/* import logo from '../../assets/Databiqs Logo.svg'; */
import footerlogo from '../../assets/footer-logo.svg';
import instaSvg from '../../assets/insta.svg';
import linkedinSvg from '../../assets/linkedin.svg';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';


const Footer = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer className="footer" ref={sectionRef}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
          <div className="footer-logo">
  <img
    src={footerlogo}
    alt="Databiqs"
    className="footer-logo-icon"
    loading="lazy"
    decoding="async"
  />

 
</div>
            <p className="footer-tagline">
              Pushing the boundaries of technology, unleashing
              limitless innovation for a smarter future.
            </p>
            <div className="social-icons">
  <a
    href="https://www.linkedin.com/company/databiqs"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label="LinkedIn"
    style={{ "--i": "#0A66C2", "--j": "#004182" }}
  >
    <span className="icon">
      <img src={linkedinSvg} alt="" aria-hidden="true" loading="lazy" decoding="async" />
    </span>
    <span className="title">LinkedIn</span>
  </a>

  <a
    href="https://www.instagram.com/databiqs/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    aria-label="Instagram"
    style={{ "--i": "#FF5F6D", "--j": "#FFC371" }}
  >
    <span className="icon">
      <img src={instaSvg} alt="" aria-hidden="true" loading="lazy" decoding="async" />
    </span>
    <span className="title">Instagram</span>
  </a>
</div>

          </div>

          <div className="footer-middle">
            <h2 className="footer-heading">Links</h2>
            <ul className="footer-links">
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/blog-page">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-right">
            <h2 className="footer-heading">Join Our Newsletter</h2>
            <form className="newsletter-form">
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
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
