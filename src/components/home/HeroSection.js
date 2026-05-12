import { Link } from 'react-router-dom';
import './HeroSection.css';
import GlobeCanvas from './GlobeCanvas';

const HeroSection = ({
  variant = 'home',
  /** Case Studies page: ReactNode inside a single headline */
  caseStudiesHeadline,
  caseStudiesDescription,
  caseStudiesCta,
  caseStudiesVisual,
}) => {
  if (variant === 'case-studies') {
    return (
      <section className="hero-section hero-section--case-studies-page" aria-label="Case studies introduction">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-headline hero-headline--case-studies">{caseStudiesHeadline}</h1>
            <p className="hero-description">{caseStudiesDescription}</p>
            {caseStudiesCta}
          </div>
          <div className="hero-visual hero-visual--case-studies-static">{caseStudiesVisual}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-content">
          <h1 className="hero-headline">
            Engineering<br />
            <span className="headline-purple">Reliable<br />
            Innovation</span><br />for the<br />
            Enterprise.
          </h1>
          <p className="hero-description">
            High-precision, scaleable software. We bridge innovation and
            stability to deliver transformation with clarity.
          </p>

          <Link className="hero-cta-email" to="/book-consultation">
            <span className="cta-email-default">Book a free strategy session</span>
            <span className="cta-email-hover">
              Reserve on Calendly
              <span className="cta-copy-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </Link>
        </div>

        <div className="hero-visual">
          <div className="hero-sphere-wrapper">
            <GlobeCanvas />
          </div>

          <div className="hero-label hero-label--left-top">
            <span className="hero-label-dot"></span>
            Machine Learning
          </div>
          <div className="hero-label hero-label--left-bottom">
            <span className="hero-label-dot"></span>
            AI Strategy/Consultation
          </div>
          <div className="hero-label hero-label--right-top">
            <span className="hero-label-dot"></span>
            AI Automation/Implementation
          </div>
          <div className="hero-label hero-label--right-bottom">
            <span className="hero-label-dot"></span>
            AI Chatbot /Conversational
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
