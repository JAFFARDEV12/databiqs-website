import './BookConsultation.css';
import ceoImg from "../../assets/ceo.png";
import arrowIcon from "../../assets/rightarrow.svg";
const CALENDLY_URL = 'https://calendly.com/ceo-databiqs/30min';

/** Default meeting channel passed to Calendly (custom question a1). */
const CALENDLY_MEETING_PREF = 'Google Meet';

const bcSvgProps = {
  className: 'bc-svg-icon',
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const BcIconTarget = () => (
  <svg {...bcSvgProps}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const BcIconBolt = () => (
  <svg {...bcSvgProps}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const BcIconCompass = () => (
  <svg {...bcSvgProps}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const BcIconLock = () => (
  <svg {...bcSvgProps} width={16} height={16}>
    <rect x="5" y="11" width="14" height="10" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const BcIconCheckCircle = () => (
  <svg {...bcSvgProps} width={16} height={16}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="8 12 11 15 16 9" />
  </svg>
);

const BcIconClock = () => (
  <svg {...bcSvgProps} width={16} height={16}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const BENEFITS = [
  {
    Icon: BcIconTarget,
    title: 'AI Roadmap',
    desc: 'Define your product strategy and execution milestones tailored to your vision.',
  },
  {
    Icon: BcIconBolt,
    title: 'Quick Wins',
    desc: 'Identify the highest-impact AI opportunities you can act on immediately.',
  },
  {
    Icon: BcIconCompass,
    title: 'Expert Clarity',
    desc: 'Cut through the noise with direct guidance from a seasoned AI product CEO.',
  },
];

const STATS = [
  { num: '30', label: 'Minutes focused' },
  { num: '0',  label: 'Cost, free'      },
  { num: '1',  label: 'Clear AI roadmap'},
];

const TRUST = [
  { Icon: BcIconLock, label: 'No credit card required'        },
  { Icon: BcIconCheckCircle, label: 'Completely free session'         },
  { Icon: BcIconClock, label: 'Cancel or reschedule anytime'   },
];

const BookConsultationSection = ({
  className = '',
  pillText  = 'Free Strategy Session',
  title     = 'Book Your',
  titleItalic = 'Consultation',
  subtitle  = 'Reserve a focused 30-minute strategy session with our CEO. Walk away with a clear AI product roadmap tailored to your goals.',
}) => {
  const calendlyLink = `${CALENDLY_URL}?a1=${encodeURIComponent(CALENDLY_MEETING_PREF)}`;

  const handleBook = () => {
    window.open(calendlyLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={['bc-section', className].filter(Boolean).join(' ')}>
      <span className="bc-blob bc-blob--tl" aria-hidden="true" />
      <span className="bc-blob bc-blob--br" aria-hidden="true" />
      <span className="bc-blob bc-blob--mid" aria-hidden="true" />
      <span className="bc-grid-bg" aria-hidden="true" />

      <div className="bc-inner">

        {/* ══ LEFT COLUMN ══ */}
        <div className="bc-left">

          {/* Pill */}
          <span className="bc-pill">
            <span className="bc-pill__dot" aria-hidden="true" />
            {pillText}
          </span>

          {/* Headline */}
          <h1 className="bc-title">
            {title}<br />
            <em>{titleItalic}</em>
          </h1>

          {/* Subtitle */}
          <p className="bc-subtitle">{subtitle}</p>

          {/* Stats row */}
          <div className="bc-stats">
            {STATS.map(({ num, label }) => (
              <div key={label} className="bc-stat">
                <span className="bc-stat__num">{num}</span>
                <span className="bc-stat__lbl">{label}</span>
              </div>
            ))}
          </div>

          <span className="bc-rule-h" />

          {/* Benefits */}
          <ul className="bc-benefits">
            {BENEFITS.map(({ Icon, title: t, desc }) => (
              <li key={t} className="bc-benefit">
                <span className="bc-benefit__icon" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <strong className="bc-benefit__title">{t}</strong>
                  <span   className="bc-benefit__desc">{desc}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Host strip */}
          <div className="bc-host">
            <div className="bc-host__avatar" aria-label="Jaffar Ali">
              <img
                src={ceoImg}
                alt="Jaffar Ali, CEO of Databiqs"
                className="bc-host__avatar-img"
              />
            </div>
            <div className="bc-host__info">
              <span className="bc-host__name">Jaffar Ali</span>
              <span className="bc-host__role">CEO, Databiqs</span>
            </div>
            <span className="bc-host__dur">
              <svg
                width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2.2" strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              30 min
            </span>
          </div>

        </div>

        {/* ══ VERTICAL DIVIDER ══ */}
        <div className="bc-divider-v" aria-hidden="true" />

        {/* ══ RIGHT COLUMN ══ */}
        <div className="bc-right">

          {/* Book button */}
          <button
            type="button"
            className="cta-button bc-book-cta"
            onClick={handleBook}
            aria-label="Book a free consultation on Calendly"
          >
            <span>Book a Free Session</span>
            <div className="cta-icon-circle">
              <img src={arrowIcon} alt="" />
            </div>
          </button>

          {/* Trust strip */}
          <div className="bc-trust">
            {TRUST.map(({ Icon, label }) => (
              <div key={label} className="bc-trust__item">
                <span className="bc-trust__icon" aria-hidden="true">
                  <Icon />
                </span>
                {label}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default BookConsultationSection;