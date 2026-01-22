import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Check if we're on the home page for anchor links
  const isHomePage = location.pathname === '/';

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Databiqs" />
        </Link>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {isHomePage ? (
            <>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#services" onClick={closeMenu}>Services</a>
              <a href="#case-studies" onClick={closeMenu}>Case Studies</a>
              <Link to="/insights-and-innovation" onClick={closeMenu}>Insights</Link>
              <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </>
          ) : (
            <>
              <Link to="/#about" onClick={closeMenu}>About</Link>
              <Link to="/#services" onClick={closeMenu}>Services</Link>
              <Link to="/#case-studies" onClick={closeMenu}>Case Studies</Link>
              <Link to="/insights-and-innovation" onClick={closeMenu}>Insights</Link>
              <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </>
          )}
        </nav>
        <button className="cta-button">Let's Talk</button>
        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
