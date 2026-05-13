import './HeroSection.css';
import GlobeCanvas from './GlobeCanvas';

const HERO_EMAIL = 'business@databiqs.com';
/**
 * Opens Gmail (primary account /u/0/) compose with To pre-filled.
 * Uses `view=cm` — the supported URL pattern; hash-only `#inbox?compose=new` does not reliably accept `to`.
 * @see https://mail.google.com/mail/
 */
const HERO_GMAIL_COMPOSE = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(HERO_EMAIL)}`;

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

          <a
            className="hero-cta-email"
            href={HERO_GMAIL_COMPOSE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Compose email in Gmail to ${HERO_EMAIL}`}
          >
            Email Us
          </a>
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
