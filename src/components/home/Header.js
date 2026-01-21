import React from 'react';
import './Header.css';
import logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Databiqs" />
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <button className="cta-button">Let's Talk</button>
      </div>
    </header>
  );
};

export default Header;
