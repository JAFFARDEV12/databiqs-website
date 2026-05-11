import { useEffect, useMemo, useState } from 'react';
import './BookConsultation.css';

const CALENDLY_URL =
  process.env.REACT_APP_CALENDLY_URL || 'https://calendly.com/ceo-databiqs/30min';

const SESSION_MODES = [
  { id: 'google-meet', label: 'Google Meet', emoji: '' },
  { id: 'zoom',        label: 'Zoom',         emoji: '' },
  { id: 'whatsapp',   label: 'WhatsApp',      emoji: '' },
];

const BENEFITS = [
  { emoji: '🎯', title: 'AI Roadmap',   desc: 'Define your product strategy and execution milestones' },
  { emoji: '⚡', title: 'Quick Wins',   desc: 'Identify the highest-impact opportunities fast' },
];

const TRUST = [
  { icon: '🔒', label: 'No credit card' },
  { icon: '✅', label: 'Free session'   },
  { icon: '🕐', label: 'Cancel anytime' },
];

const buildCalendlyUrl = (base, modeLabel) => {
  try {
    const url = new URL(base);
    url.searchParams.set('hide_event_type_details', '1');
    url.searchParams.set('hide_gdpr_banner', '1');
    // primary_color drives Calendly's CTA button bg AND its hover shade
    url.searchParams.set('primary_color', '0054E9');   // bright blue — on hover Calendly darkens this automatically
    url.searchParams.set('text_color', '1a1a2e');
    url.searchParams.set('background_color', 'ffffff');
    url.searchParams.set('embed_type', 'Inline');
    if (modeLabel) url.searchParams.set('a1', modeLabel);
    return url.toString();
  } catch {
    return base;
  }
};

const BookConsultationSection = ({
  className = '',
  pillText  = 'Free Strategy Session',
  title     = 'Book Your Consultation',
  subtitle  = 'Reserve a focused 30-minute strategy session with our CEO. Walk away with a clear AI product roadmap tailored to your goals.',
}) => {
  const [selectedMode, setSelectedMode] = useState(SESSION_MODES[0].id);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const activeMode = SESSION_MODES.find(m => m.id === selectedMode);
  const calendlyUrl = useMemo(
    () => buildCalendlyUrl(CALENDLY_URL, activeMode?.label ?? ''),
    [activeMode]
  );

  useEffect(() => { setIframeLoaded(false); }, [calendlyUrl]);

  return (
    <section className={['bc-section', className].filter(Boolean).join(' ')}>
      <span className="bc-blob bc-blob--tl" aria-hidden="true" />
      <span className="bc-blob bc-blob--br" aria-hidden="true" />

      <div className="bc-container">

        {/* ══════════ LEFT PANEL ══════════ */}
        <div className="bc-panel bc-panel--left">
          <div className="bc-panel__inner">

            <span className="bc-pill">
              <span className="bc-pill__dot" aria-hidden="true" />
              {pillText}
            </span>

            <h1 className="bc-title">{title}</h1>
            <p  className="bc-subtitle">{subtitle}</p>

            {/* Host card */}
            <div className="bc-host">
              <div className="bc-host__avatar" aria-label="Jaffar Ali">JA</div>
              <div className="bc-host__info">
                <span className="bc-host__name">Jaffar Ali</span>
                <span className="bc-host__role">CEO, Databiqs</span>
              </div>
              <span className="bc-host__dur">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                30 min
              </span>
            </div>

            <hr className="bc-rule" />

            {/* Benefits */}
            <p className="bc-label">What you'll get</p>
            <ul className="bc-benefits">
              {BENEFITS.map(({ emoji, title: t, desc }) => (
                <li key={t} className="bc-benefit">
                  <span className="bc-benefit__icon" aria-hidden="true">{emoji}</span>
                  <div>
                    <strong className="bc-benefit__title">{t}</strong>
                    <span  className="bc-benefit__desc">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <hr className="bc-rule" />

            {/* Platform selector */}
            <p className="bc-label">Preferred platform</p>
            <div className="bc-modes" role="group" aria-label="Select meeting platform">
              {SESSION_MODES.map(({ id, label, emoji }) => (
                <button
                  key={id}
                  type="button"
                  className={`bc-mode${selectedMode === id ? ' is-active' : ''}`}
                  aria-pressed={selectedMode === id}
                  onClick={() => setSelectedMode(id)}
                >
                  <span aria-hidden="true">{emoji}</span>
                  {label}
                </button>
              ))}
            </div>

            {/* Trust */}
            <div className="bc-trust">
              {TRUST.map(({ icon, label }) => (
                <span key={label} className="bc-trust__item">
                  <span aria-hidden="true">{icon}</span>
                  {label}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* ══════════ RIGHT PANEL ══════════ */}
        <div className="bc-panel bc-panel--right">
          <div className="bc-panel__inner bc-panel__inner--cal">

            {/* Bar */}
            <div className="bc-cal-bar">
              <div className="bc-cal-bar__brand">
                <span className="bc-cal-bar__via">Scheduling via</span>
                <svg width="80" height="20" viewBox="0 0 120 28" fill="none"
                     xmlns="http://www.w3.org/2000/svg" aria-label="Calendly" role="img">
                  <circle cx="12" cy="14" r="9" fill="rgba(0,107,255,0.12)"/>
                  <path d="M18.5 19.8A8 8 0 1 1 18.5 8.2" stroke="#006BFF"
                        strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <text x="28" y="19.5" fontFamily="system-ui,sans-serif"
                        fontSize="14" fontWeight="700" fill="#006BFF">Calendly</text>
                </svg>
              </div>
              <span className="bc-cal-bar__mode">
              {activeMode?.label}
                
              </span>
            </div>

            {/* Iframe + shimmer */}
            <div className="bc-iframe-wrap">
              {!iframeLoaded && (
                <div className="bc-shimmer" aria-hidden="true">
                  <div className="bc-shimmer__bar" style={{width:'65%'}} />
                  <div className="bc-shimmer__bar" style={{width:'45%'}} />
                  <div className="bc-shimmer__grid">
                    {Array.from({length:35}).map((_,i)=>(
                      <div key={i} className="bc-shimmer__cell" />
                    ))}
                  </div>
                  <div className="bc-shimmer__bar" style={{width:'55%'}} />
                  <p className="bc-shimmer__msg">Loading your scheduler…</p>
                </div>
              )}
              <iframe
                key={calendlyUrl}
                className={`bc-iframe${iframeLoaded ? ' is-ready' : ''}`}
                src={calendlyUrl}
                title="Schedule your consultation on Calendly"
                frameBorder="0"
                scrolling="yes"
                allow="payment"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BookConsultationSection;
