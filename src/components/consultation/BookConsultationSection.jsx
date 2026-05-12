import './BookConsultation.css';
import ceoImg from "../../assets/ceo.png";
const CALENDLY_URL = 'https://calendly.com/ceo-databiqs/30min';

/** Single default meeting channel passed to Calendly (custom question a1). */
const MEETING_PLATFORM = { label: 'Google Meet', icon: '📹' };

const BENEFITS = [
  {
    emoji: '🎯',
    title: 'AI Roadmap',
    desc: 'Define your product strategy and execution milestones tailored to your vision.',
  },
  {
    emoji: '⚡',
    title: 'Quick Wins',
    desc: 'Identify the highest-impact AI opportunities you can act on immediately.',
  },
  {
    emoji: '🧭',
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
  { icon: '🔒', label: 'No credit card required'        },
  { icon: '✅', label: 'Completely free session'         },
  { icon: '🕐', label: 'Cancel or reschedule anytime'   },
];

const BookConsultationSection = ({
  className = '',
  pillText  = 'Free Strategy Session',
  title     = 'Book Your',
  titleItalic = 'Consultation',
  subtitle  = 'Reserve a focused 30-minute strategy session with our CEO. Walk away with a clear AI product roadmap tailored to your goals.',
}) => {
  const calendlyLink = `${CALENDLY_URL}?a1=${encodeURIComponent(MEETING_PLATFORM.label)}`;

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
            {BENEFITS.map(({ emoji, title: t, desc }) => (
              <li key={t} className="bc-benefit">
                <span className="bc-benefit__icon" aria-hidden="true">{emoji}</span>
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

          <div>
            <p className="bc-label">Session format</p>
            <div className="bc-modes bc-modes--single" role="status" aria-live="polite">
              <div className="bc-mode is-active bc-mode--readonly">
                <span className="bc-mode__icon" aria-hidden="true">{MEETING_PLATFORM.icon}</span>
                <span className="bc-mode__label">{MEETING_PLATFORM.label}</span>
                <span className="bc-mode__check" aria-hidden="true">✓</span>
              </div>
            </div>
          </div>

          {/* Book button */}
          <button
            type="button"
            className="bc-book-btn"
            onClick={handleBook}
            aria-label="Book a free consultation on Calendly"
          >
            <span>Book a Free Session</span>
            <span className="bc-book-btn__icon" aria-hidden="true">
              <svg
                width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </span>
          </button>

          {/* Trust strip */}
          <div className="bc-trust">
            {TRUST.map(({ icon, label }) => (
              <div key={label} className="bc-trust__item">
                <span className="bc-trust__icon" aria-hidden="true">{icon}</span>
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