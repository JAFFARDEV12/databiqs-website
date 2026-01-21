import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/Logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logo} alt="Databiqs" className="footer-logo" />
            <p className="footer-tagline">
              Pushing the boundaries of technology, unleashing limitless innovation for a smarter future.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.161 9.904 14.041 9.202 15.358 9.202C18.064 9.202 20.447 11.216 20.447 14.255V20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.367C3.274 4.224 4.194 3.302 5.337 3.302C6.477 3.302 7.401 4.224 7.401 5.367C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.111 2.29 18.846 2.473 19.475 2.727C20.173 3.011 20.73 3.354 21.272 3.896C21.814 4.438 22.157 4.995 22.441 5.693C22.695 6.322 22.878 7.057 22.935 8.318C22.993 9.584 23.005 9.964 23.005 13.168C23.005 16.372 22.993 16.752 22.935 18.018C22.878 19.279 22.695 20.014 22.441 20.643C22.157 21.341 21.814 21.898 21.272 22.44C20.73 22.982 20.173 23.325 19.475 23.609C18.846 23.863 18.111 24.046 16.85 24.103C15.584 24.161 15.204 24.173 12 24.173C8.796 24.173 8.416 24.161 7.15 24.103C5.889 24.046 5.154 23.863 4.525 23.609C3.827 23.325 3.27 22.982 2.728 22.44C2.186 21.898 1.843 21.341 1.559 20.643C1.305 20.014 1.122 19.279 1.065 18.018C1.007 16.752 0.995 16.372 0.995 13.168C0.995 9.964 1.007 9.584 1.065 8.318C1.122 7.057 1.305 6.322 1.559 5.693C1.843 4.995 2.186 4.438 2.728 3.896C3.27 3.354 3.827 3.011 4.525 2.727C5.154 2.473 5.889 2.29 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.774 0.132 4.905 0.333 4.141 0.63C3.304 0.955 2.603 1.339 1.938 2.004C1.273 2.669 0.889 3.37 0.564 4.207C0.267 4.971 0.066 5.84 0.006 7.119C-0.052 8.399 -0.036 8.807 -0.036 12.066C-0.036 15.325 -0.052 15.733 0.006 17.013C0.066 18.292 0.267 19.161 0.564 19.925C0.889 20.762 1.273 21.463 1.938 22.128C2.603 22.793 3.304 23.177 4.141 23.502C4.905 23.799 5.774 24 7.053 24.06C8.333 24.118 8.741 24.132 12 24.132C15.259 24.132 15.667 24.118 16.947 24.06C18.226 24 19.095 23.799 19.859 23.502C20.696 23.177 21.397 22.793 22.062 22.128C22.727 21.463 23.111 20.762 23.436 19.925C23.733 19.161 23.934 18.292 23.994 17.013C24.052 15.733 24.036 15.325 24.036 12.066C24.036 8.807 24.052 8.399 23.994 7.119C23.934 5.84 23.733 4.971 23.436 4.207C23.111 3.37 22.727 2.669 22.062 2.004C21.397 1.339 20.696 0.955 19.859 0.63C19.095 0.333 18.226 0.132 16.947 0.072C15.667 0.014 15.259 0 12 0Z" fill="white"/>
                  <path d="M12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16Z" fill="white"/>
                  <path d="M16.156 4.155C16.156 4.812 15.628 5.34 14.971 5.34C14.314 5.34 13.786 4.812 13.786 4.155C13.786 3.498 14.314 2.97 14.971 2.97C15.628 2.97 16.156 3.498 16.156 4.155Z" fill="white"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24V15.563H7.078V12.073H10.125V9.413C10.125 6.387 11.917 4.716 14.658 4.716C15.97 4.716 17.344 4.951 17.344 4.951V7.923H15.83C14.34 7.923 13.875 8.853 13.875 9.808V12.073H17.203L16.671 15.563H13.875V24C19.612 23.094 24 18.099 24 12.073Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-middle">
            <h3 className="footer-heading">Links</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className="footer-heading">Join Our Newsletter</h3>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
            <p className="newsletter-text">Stay Up To Date</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2023 databiqs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
