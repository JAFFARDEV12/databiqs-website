import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/Databiqs Logo.svg';
import arrowIcon from '../../assets/rightarrow.svg';

const NARROW_MQ = '(max-width: 968px)';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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

  const isHomePage = location.pathname === '/';
  const isAboutActive = location.pathname === '/about-us';
  const isServicesActive = location.pathname === '/services';
  const isCaseStudiesActive = location.pathname === '/case-studies';
  const isInsightsActive = location.pathname === '/blog-page';
  const isContactUsActive = location.pathname === '/contact-us';

  const activeClass = (active) => (active ? ' nav-link-active' : '');

  return (
    <header className={`Header ${isMenuOpen ? 'menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
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
          <>
            <Link to="/" onClick={closeMenu} className={activeClass(isHomePage)}>Home</Link>
            <Link to="/services" onClick={closeMenu} className={activeClass(isServicesActive)}>Services</Link>
            <Link to="/case-studies" onClick={closeMenu} className={activeClass(isCaseStudiesActive)}>Case Studies</Link>
            <Link to="/about-us" onClick={closeMenu} className={activeClass(isAboutActive)}>About Us</Link>
            <Link to="/blog-page" onClick={closeMenu} className={activeClass(isInsightsActive)}>Blog</Link>
            <Link to="/contact-us" onClick={closeMenu} className={activeClass(isContactUsActive)}>Contact us</Link>
          </>

          <Link to="/book-consultation" onClick={closeMenu} className="cta-button mobile-only" aria-label="Book a consultation">
            <span>Book a Consultation</span>
            <div className="cta-icon-circle">
              <img src={arrowIcon} alt="Arrow" />
            </div>
          </Link>
        </nav>

        <Link to="/book-consultation" className="cta-button desktop-only" aria-label="Book a consultation">
          <span>Book a Consultation</span>
          <div className="cta-icon-circle">
            <img src={arrowIcon} alt="Arrow" />
          </div>
        </Link>

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
