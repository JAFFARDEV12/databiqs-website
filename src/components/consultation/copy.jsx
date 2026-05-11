import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './copy.css';
import vectorleft from '../../assets/Vector-left.svg';
import vectorright from '../../assets/Vector-right.svg';
import arrowIcon from '../../assets/rightarrow.svg';

/**
 * Replace this with your actual Calendly event URL.
 * e.g. 'https://calendly.com/databiqs/consultation'
 */
const CALENDLY_URL =
  process.env.REACT_APP_CALENDLY_URL || 'https://calendly.com/ceo-databiqs/30min';

const SESSION_MODES = ['Google Meet', 'Zoom', 'WhatsApp'];

const isValidTimeHHmm = (value) => {
  const t = (value || '').trim();
  return /^\d{1,2}:\d{2}$/.test(t);
};

/** HH:mm (24h) → e.g. "10:00 AM" */
const formatTime12h = (hhmm) => {
  if (!hhmm || !/^\d{1,2}:\d{2}$/.test(hhmm.trim())) return hhmm || '';
  const [hs, ms] = hhmm.trim().split(':');
  const h = Math.min(23, Math.max(0, parseInt(hs, 10)));
  const m = Math.min(59, Math.max(0, parseInt(ms, 10)));
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
};

/** Decorative analog clock hands synced to HH:mm */
const SessionClockPreview = ({ hhmm }) => {
  const safe = hhmm && /^\d{1,2}:\d{2}$/.test(hhmm.trim()) ? hhmm.trim() : '12:00';
  const [hs, ms] = safe.split(':');
  const h24 = Math.min(23, Math.max(0, parseInt(hs, 10)));
  const m = Math.min(59, Math.max(0, parseInt(ms, 10)));
  const h12 = h24 % 12;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const hourDeg = -90 + (h12 + m / 60) * 30;
  const minuteDeg = -90 + m * 6;
  const hx = 50 + 20 * Math.cos(toRad(hourDeg));
  const hy = 50 + 20 * Math.sin(toRad(hourDeg));
  const mx = 50 + 30 * Math.cos(toRad(minuteDeg));
  const my = 50 + 30 * Math.sin(toRad(minuteDeg));
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const a = toRad(-90 + i * 30);
    const x1 = 50 + 40 * Math.cos(a);
    const y1 = 50 + 40 * Math.sin(a);
    const x2 = 50 + 36 * Math.cos(a);
    const y2 = 50 + 36 * Math.sin(a);
    return (
      <line
        key={i}
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#002E9E" strokeWidth="1.5" strokeLinecap="round"
      />
    );
  });
  return (
    <svg className="book-time-picker__clock-svg" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="42" fill="#f4f6fc" stroke="#002E9E" strokeWidth="2" opacity="0.95" />
      {ticks}
      <line x1="50" y1="50" x2={hx} y2={hy} stroke="#002E9E" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2={mx} y2={my} stroke="#0054E9" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="50" r="4" fill="#002E9E" />
    </svg>
  );
};

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const toDayStart = (date) => {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
};

const toDateKey = (date) => toDayStart(date).toISOString().slice(0, 10);

const formatDateLabel = (date) =>
  date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

const formatMonthLabel = (date) =>
  date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

const buildCalendarDays = (visibleMonth) => {
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const first = new Date(year, month, 1);
  const startOffset = first.getDay();
  const start = new Date(year, month, 1 - startOffset);
  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    return day;
  });
};

/**
 * Builds the Calendly inline widget URL with optional date pre-selection.
 * Calendly supports ?month=YYYY-MM to land on the right month.
 */
const buildCalendlyWidgetUrl = (baseUrl, selectedDate, selectedMode) => {
  const url = new URL(baseUrl);
  if (selectedDate) {
    const yyyy = selectedDate.getFullYear();
    const mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
    url.searchParams.set('month', `${yyyy}-${mm}`);
  }
  if (selectedMode) {
    url.searchParams.set('hide_event_type_details', '1');
    url.searchParams.set('hide_gdpr_banner', '1');
    // pass the preferred mode as a custom answer (works if you have a custom question in Calendly)
    url.searchParams.set('a1', selectedMode);
  }
  // embed styling
  url.searchParams.set('embed_type', 'Inline');
  url.searchParams.set('embed_domain', window.location.hostname || 'localhost');
  return url.toString();
};

/**
 * Reusable consultation booking UI.
 * Left panel: custom calendar + session mode/time modal (unchanged).
 * Right panel: Calendly inline widget (replaces EmailJS form).
 */
const BookConsultationSection = ({
  className = '',
  pillText = '',
  title = 'BOOK YOUR CONSULTATION SESSION',
  subtitle =
    'Reserve a focused strategy session with our CEO to map your AI product roadmap, identify high-impact opportunities, and define execution milestones.',
}) => {
  const formId = useId();
  const today = useMemo(() => toDayStart(new Date()), []);
  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime24, setSelectedTime24] = useState('');
  const [slotSaved, setSlotSaved] = useState(false);
  const [modalDraft, setModalDraft] = useState({ time: '', mode: SESSION_MODES[0] });
  const [modalError, setModalError] = useState('');
  const selectedTimeLabel = useMemo(
    () => (slotSaved && selectedTime24 ? formatTime12h(selectedTime24) : ''),
    [selectedTime24, slotSaved]
  );
  const [selectedMode, setSelectedMode] = useState(SESSION_MODES[0]);
  const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);

  const calendarDays = useMemo(() => buildCalendarDays(visibleMonth), [visibleMonth]);
  const currentMonthKey = `${visibleMonth.getFullYear()}-${visibleMonth.getMonth()}`;

  const selectedDateKey = selectedDate ? toDateKey(selectedDate) : null;
  const prevDateKeyRef = useRef(null);

  // Reset slot when user picks a different date
  useEffect(() => {
    const prev = prevDateKeyRef.current;
    if (prev != null && selectedDateKey != null && prev !== selectedDateKey) {
      setSlotSaved(false);
      setSelectedTime24('');
    }
    prevDateKeyRef.current = selectedDateKey;
  }, [selectedDateKey]);

  // Sync modal draft when modal opens
  useEffect(() => {
    if (!isSlotModalOpen) return;
    setModalError('');
    setModalDraft({
      time: slotSaved && selectedTime24 ? selectedTime24 : '',
      mode: selectedMode,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSlotModalOpen]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isSlotModalOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isSlotModalOpen]);

  const changeMonth = (diff) => {
    setVisibleMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + diff, 1));
  };

  const isPastDate = (date) => toDayStart(date) < today;
  const isSunday = (date) => date.getDay() === 0;
  const isDisabledDate = (date) => isPastDate(date) || isSunday(date);

  const handleSaveSlotDetails = () => {
    const t = (modalDraft.time || '').trim();
    if (!isValidTimeHHmm(t)) {
      setModalError(
        'Please choose a time for your session (use the time picker or enter hours and minutes).'
      );
      return;
    }
    setSelectedTime24(t);
    setSelectedMode(modalDraft.mode);
    setSlotSaved(true);
    setModalError('');
    setIsSlotModalOpen(false);
  };

  const canShowCalendly = Boolean(selectedDate && slotSaved);

  const calendlyWidgetUrl = useMemo(() => {
    if (!canShowCalendly) return null;
    return buildCalendlyWidgetUrl(CALENDLY_URL, selectedDate, selectedMode);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canShowCalendly, selectedDate, selectedMode]);

  const preferredTimeId = `${formId}-preferred-time`;

  return (
    <>
      <section className={['book-consultation', className].filter(Boolean).join(' ')}>
        <div className="book-consultation__container">

          {/* ── LEFT PANEL: calendar + slot selector (unchanged design) ── */}
          <div className="book-consultation__left">
            {pillText ? <span className="book-consultation__pill">{pillText}</span> : null}
            <h1 className="book-consultation__title">{title}</h1>
            <p className="book-consultation__subtitle">{subtitle}</p>

            <div className="book-consultation__selectors">
              <div className="book-consultation__selector book-consultation__selector--calendar">
                <div className="book-calendar__head">
                  <h3>Choose Your Date</h3>
                  <div className="book-calendar__nav">
                    <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month">
                      <img src={vectorleft} alt="" className="book-calendar__nav-icon" />
                    </button>
                    <span>{formatMonthLabel(visibleMonth)}</span>
                    <button type="button" onClick={() => changeMonth(1)} aria-label="Next month">
                      <img src={vectorright} alt="" className="book-calendar__nav-icon" />
                    </button>
                  </div>
                </div>
                <div className="book-calendar">
                  {WEEK_DAYS.map((label) => (
                    <span className="book-calendar__weekday" key={label}>
                      {label}
                    </span>
                  ))}
                  {calendarDays.map((date) => {
                    const key = toDateKey(date);
                    const isSelected = selectedDate ? toDateKey(selectedDate) === key : false;
                    const isCurrentMonth =
                      `${date.getFullYear()}-${date.getMonth()}` === currentMonthKey;
                    const disabled = isDisabledDate(date);
                    return (
                      <button
                        key={key}
                        type="button"
                        disabled={disabled}
                        className={`book-calendar__day${isCurrentMonth ? '' : ' is-outside'}${
                          isSelected ? ' is-active' : ''
                        }`}
                        onClick={() => setSelectedDate(date)}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="book-consultation__selector">
                <h3>Next Step</h3>
                <button
                  type="button"
                  className="book-open-modal-btn"
                  onClick={() => setIsSlotModalOpen(true)}
                  disabled={!selectedDate}
                >
                  Select Session Mode &amp; Time Slot
                </button>
              </div>

              <p className="book-consultation__selected">
                Selected:{' '}
                <strong>{selectedDate ? formatDateLabel(selectedDate) : 'Choose a date'}</strong> at{' '}
                <strong>{slotSaved && selectedTime24 ? selectedTimeLabel : '—'}</strong> via{' '}
                <strong>{slotSaved ? selectedMode : '—'}</strong>
              </p>
            </div>
          </div>

          {/* ── RIGHT PANEL: Calendly widget or locked hint ── */}
          <div className="book-consultation__right">
            {canShowCalendly ? (
              <div className="book-calendly-wrap">
                <div className="book-calendly-bar">
                  <span className="book-calendly-bar__date">
                    {formatDateLabel(selectedDate)} · {selectedTimeLabel} · {selectedMode}
                  </span>
                  <button
                    type="button"
                    className="book-calendly-bar__change"
                    onClick={() => { setSlotSaved(false); setSelectedTime24(''); }}
                  >
                    Change
                  </button>
                </div>
                <iframe
                  className="book-calendly-iframe"
                  src={calendlyWidgetUrl}
                  title="Schedule your consultation on Calendly"
                  frameBorder="0"
                  scrolling="yes"
                  allow="payment"
                />
              </div>
            ) : (
              <div className="book-calendly-locked">
                <div className="book-calendly-locked__icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="20" width="32" height="22" rx="5" fill="#EEF2FF" stroke="#002E9E" strokeWidth="2" />
                    <path
                      d="M16 20V14a8 8 0 0116 0v6"
                      stroke="#002E9E" strokeWidth="2.2" strokeLinecap="round"
                    />
                    <circle cx="24" cy="31" r="3.5" fill="#002E9E" />
                    <line x1="24" y1="34.5" x2="24" y2="38" stroke="#002E9E" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="book-calendly-locked__title">Select Your Session Details</h3>
                <p className="book-calendly-locked__desc">
                  Choose an available date on the calendar, then tap{' '}
                  <strong>Select Session Mode &amp; Time Slot</strong> and save your preferred time.
                  Your Calendly scheduling page will open here — no extra tab needed.
                </p>
                <span className="book-calendly-locked__steps">
                  <span className="book-calendly-locked__step">
                    <span className="book-calendly-locked__step-num">1</span>Pick a date
                  </span>
                  <span className="book-calendly-locked__arrow" aria-hidden="true">→</span>
                  <span className="book-calendly-locked__step">
                    <span className="book-calendly-locked__step-num">2</span>Choose mode &amp; time
                  </span>
                  <span className="book-calendly-locked__arrow" aria-hidden="true">→</span>
                  <span className="book-calendly-locked__step">
                    <span className="book-calendly-locked__step-num">3</span>Book on Calendly
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── SESSION MODE + TIME MODAL (unchanged design) ── */}
      {isSlotModalOpen &&
        createPortal(
          <div
            className="book-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Select session details"
          >
            <div className="book-modal__overlay" onClick={() => setIsSlotModalOpen(false)} />
            <div className="book-modal__panel">
              <div className="book-modal__header">
                <h3>Finalize Your Session</h3>
                <button
                  type="button"
                  className="book-modal__close"
                  aria-label="Close session details modal"
                  onClick={() => setIsSlotModalOpen(false)}
                >
                  ×
                </button>
              </div>
              <p className="book-modal__sub">
                {selectedDate ? formatDateLabel(selectedDate) : 'Select a date'} — Choose mode and time
              </p>

              <div className="book-consultation__selector">
                <h4>Session Mode</h4>
                <div className="book-consultation__chips">
                  {SESSION_MODES.map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      className={`book-chip ${modalDraft.mode === mode ? 'is-active' : ''}`}
                      onClick={() => setModalDraft((d) => ({ ...d, mode }))}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div className="book-consultation__selector book-consultation__selector--time-picker">
                <h4>Preferred time</h4>
                <p className="book-time-picker__lead">
                  Pick any time — use the clock picker or enter hours and minutes.
                </p>
                <div className="book-time-picker">
                  <div className="book-time-picker__clock">
                    <SessionClockPreview hhmm={modalDraft.time} />
                  </div>
                  <div className="book-time-picker__controls">
                    <label htmlFor={preferredTimeId} className="book-time-picker__label">
                      Time
                    </label>
                    <input
                      id={preferredTimeId}
                      type="time"
                      step={60}
                      value={modalDraft.time}
                      onChange={(e) => setModalDraft((d) => ({ ...d, time: e.target.value }))}
                      className="book-time-picker__input"
                    />
                    <p className="book-time-picker__preview" aria-live="polite">
                      <span className="book-time-picker__preview-label">Preview</span>{' '}
                      <strong>
                        {modalDraft.time && isValidTimeHHmm(modalDraft.time)
                          ? formatTime12h(modalDraft.time)
                          : '—'}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>

              {modalError ? (
                <p className="book-modal__error" role="alert">
                  {modalError}
                </p>
              ) : null}

              <button type="button" className="book-modal__done" onClick={handleSaveSlotDetails}>
                Save Session Details
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default BookConsultationSection;
