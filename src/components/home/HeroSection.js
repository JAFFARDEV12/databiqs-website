import { useState } from 'react';
import './HeroSection.css';
import GlobeCanvas from './GlobeCanvas';

const EMAIL = 'contact@databiqs.com';

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const HeroSection = ({
  variant = 'home',
  /** Case Studies page: ReactNode inside a single headline */
  caseStudiesHeadline,
  caseStudiesDescription,
  caseStudiesCta,
  caseStudiesVisual,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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

          <button className="hero-cta-email" onClick={handleCopy}>
            <span className="cta-email-default">{EMAIL}</span>
            <span className="cta-email-hover">
              {copied ? 'Copied!' : 'click to copy'}
              <span className="cta-copy-icon">
                {copied ? <CheckIcon /> : <CopyIcon />}
              </span>
            </span>
          </button>
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
