import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/header-logo.svg';
/* import arrowIcon from '../../assets/rightarrow.svg'; */
import arrowIcon from '../../assets/rightarrow.svg';

const NARROW_MQ = '(max-width: 968px)';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isNarrowLayout = useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia(NARROW_MQ);
      mq.addEventListener('change', onStoreChange);
      return () => mq.removeEventListener('change', onStoreChange);
    },
    () => window.matchMedia(NARROW_MQ).matches,
    () => false
  );
  const location = useLocation();

  // inert/aria-hidden only for off-canvas mobile drawer when closed; desktop nav must stay interactive
  const mobileDrawerInert = isNarrowLayout && !isMenuOpen;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    document.body.classList.toggle('mobile-menu-open', isMenuOpen);
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMenuOpen]);

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

  const isAboutActive = location.pathname === '/about-us';
  const isServicesActive = isHomePage && hash === '#services';
  const isCaseStudiesActive = location.pathname === '/case-studies';
  const isInsightsActive = location.pathname === '/blog-page';
  const isContactActive = location.pathname === '/contact';

  const activeClass = (active) => (active ? ' nav-link-active' : '');

  return (


    <header className={`Header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Databiqs" />
        </Link>

        <nav
          id="primary-navigation"
          className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
          aria-hidden={mobileDrawerInert}
          inert={mobileDrawerInert}
        >
          {isHomePage ? (
            <>
              <a href="/" onClick={closeMenu} className={activeClass(isAboutActive)}>Home</a>
              <a href="#services" onClick={(e) => handleAnchorClick(e, '#services')} className={activeClass(isServicesActive)}>Services</a>
              <Link to="/case-studies" onClick={closeMenu} className={activeClass(isCaseStudiesActive)}>Case Studies</Link>
              <a href="/about-us" onClick={closeMenu} className={activeClass(isAboutActive)}>About Us</a>


              <Link to="/blog-page" onClick={closeMenu} className={activeClass(isInsightsActive)}>Blog</Link>
              {/* <Link to="/contact" onClick={closeMenu} className={activeClass(isContactActive)}>Contact Us</Link> */}
            </>
          ) : (
            <>
              <Link to="/" onClick={closeMenu} className={activeClass(isAboutActive)}>Home</Link>
              <Link to="/services" onClick={(e) => {
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
              <Link to="/about-us" onClick={closeMenu} className={activeClass(isAboutActive)}>About Us</Link>
              <Link to="/blog-page" onClick={closeMenu} className={activeClass(isInsightsActive)}>Blog</Link>
              {/*  <Link to="/contact" onClick={closeMenu} className={activeClass(isContactActive)}>Contact Us</Link> */}

            </>
          )}

          <button className="cta-button mobile-only">
            <span>Book a Consultation</span>
            <div className="cta-icon-circle">
              <img src={arrowIcon} alt="Arrow" />
            </div>
          </button>

        </nav>

        <button className="cta-button desktop-only">
          <span>Book a Consultation</span>
          <div className="cta-icon-circle">
            <img src={arrowIcon} alt="Arrow" />
          </div>
        </button>

        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;