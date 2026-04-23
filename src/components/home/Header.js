import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/header-logo.svg';
import arrowIcon from '../../assets/rightarrow.svg';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault();
    closeMenu();
    const element = document.querySelector(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Check if we're on the home page for anchor links
  const isHomePage = location.pathname === '/';
  const hash = location.hash || '';

  const isAboutActive = location.pathname === '/about';
  const isServicesActive = isHomePage && hash === '#services';
  const isCaseStudiesActive = location.pathname === '/case-studies';
  const isInsightsActive = location.pathname === '/insights-and-innovation';
  const isContactActive = location.pathname === '/contact';

  const activeClass = (active) => (active ? ' nav-link-active' : '');

  return (
    

    <header className="Header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Databiqs" />
        </Link>
       
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {isHomePage ? (
            <>
            <a href="/" onClick={closeMenu} className={activeClass(isAboutActive)}>Home</a>
            <a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className={activeClass(isServicesActive)}>Services</a>
            <Link to="/case-studies" onClick={closeMenu} className={activeClass(isCaseStudiesActive)}>Case Studies</Link>
              <a href="/about" onClick={closeMenu} className={activeClass(isAboutActive)}>About Us</a>
             
             
              <Link to="/insights-and-innovation" onClick={closeMenu} className={activeClass(isInsightsActive)}>Blog</Link>
              <Link to="/contact" onClick={closeMenu} className={activeClass(isContactActive)}>Contact Us</Link>
            </>
          ) : (
            <>
            <Link to="/" onClick={closeMenu} className={activeClass(isAboutActive)}>Home</Link>
            <Link to="/#services" onClick={(e) => {
                e.preventDefault();
                closeMenu();
                window.location.href = '/#services';
                setTimeout(() => {
                  const element = document.querySelector('#services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }} className={activeClass(isServicesActive)}>Services</Link>
           
             
              <Link to="/case-studies" onClick={closeMenu} className={activeClass(isCaseStudiesActive)}>Case Studies</Link>
              <Link to="/about" onClick={closeMenu} className={activeClass(isAboutActive)}>About Us</Link>
              <Link to="/insights-and-innovation" onClick={closeMenu} className={activeClass(isInsightsActive)}>Blog</Link>
             {/*  <Link to="/contact" onClick={closeMenu} className={activeClass(isContactActive)}>Contact Us</Link> */}
               
            </>
          )}
           
           <button className="cta-button  mobile-only">Book a Consultation
          
           </button>
        </nav>
         
         <button className="cta-button desktop-only">Book a Consultation
          
           </button>
     
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