import { useEffect, useId, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import './BookConsultation.css';
import vectorleft from '../../assets/Vector-left.svg';
import vectorright from '../../assets/Vector-right.svg';
import emailjs from '@emailjs/browser';
import arrowIcon from '../../assets/rightarrow.svg';
const EMAILJS_SERVICE_ID =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_rij8xrc';

const USER_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_USER_TEMPLATE || 'template_bmxi77f';

const ADMIN_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE || 'template_7dkqwaf';

const EMAILJS_PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'wpl35VnksY_DS5v2V';

const INTERNAL_EMAIL =
  process.env.REACT_APP_EMAILJS_ADMIN_EMAIL ||
  'ceo@databiqs.com';

const SESSION_MODES = ['Google Meet', 'Zoom', 'WhatsApp'];

/** HH:mm (24h, from <input type="time">) → e.g. "10:00 AM" for email + summary */
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
  const safe = hhmm && /^\d{1,2}:\d{2}$/.test(hhmm.trim()) ? hhmm.trim() : '10:00';
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
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#002E9E" strokeWidth="1.5" strokeLinecap="round" />;
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
 * Reusable consultation booking UI (calendar, form, modal).
 * Import on any page; include `BookConsultation.css` via this file.
 * Optional: wrap with `book-consultation-page__heroWrap` for the same gradient as the full page.
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
  const [visibleMonth, setVisibleMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(null);
  /** Local time HH:mm for picker */
  const [selectedTime24, setSelectedTime24] = useState('10:00');
  const selectedTimeLabel = useMemo(() => formatTime12h(selectedTime24), [selectedTime24]);
  const [selectedMode, setSelectedMode] = useState(SESSION_MODES[0]);
  const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    company: '',
    goals: '',
  });

  const calendarDays = useMemo(() => buildCalendarDays(visibleMonth), [visibleMonth]);
  const currentMonthKey = `${visibleMonth.getFullYear()}-${visibleMonth.getMonth()}`;

  const changeMonth = (diff) => {
    setVisibleMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + diff, 1));
  };

  const isPastDate = (date) => toDayStart(date) < today;
  const isSunday = (date) => date.getDay() === 0;
  const isDisabledDate = (date) => isPastDate(date) || isSunday(date);

  useEffect(() => {
    document.body.style.overflow = isSlotModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSlotModalOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!selectedDate) {
      alert('Please select a date');
      return;
    }
  
    const fullName = form.fullName.trim();
    const email = form.email.trim();
    const company = form.company.trim();
    const goals = form.goals.trim();
  
    if (!fullName || !email || !company || !goals) {
      alert('Please complete all required fields.');
      return;
    }
  
    if (
      !EMAILJS_SERVICE_ID ||
      !USER_TEMPLATE_ID ||
      !ADMIN_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      alert('Email service is not configured. Please contact support.');
      return;
    }
  
    const bookingData = {
      fullName,
      email,
      company,
      goals,
      date: formatDateLabel(selectedDate),
      time: selectedTimeLabel,
      time24h: selectedTime24,
      mode: selectedMode,
    };
  
    setIsSubmitting(true);
  
    try {
      const templateParams = {
        fullName: bookingData.fullName,
        email: bookingData.email,
        to_email: bookingData.email,
        date: bookingData.date,
        time: bookingData.time,
        time_24h: bookingData.time24h,
        mode: bookingData.mode,
        company: bookingData.company,
        goals: bookingData.goals,
        reply_to: bookingData.email,
      };
  
      // Send confirmation to user
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        USER_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
  
      // Send notification to admin
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        {
          ...templateParams,
          to_email: INTERNAL_EMAIL,
        },
        EMAILJS_PUBLIC_KEY
      );
  
      localStorage.setItem(
        'databiqs_consultation_request',
        JSON.stringify({
          ...bookingData,
          createdAt: new Date().toISOString(),
        })
      );
  
      setIsSubmitted(true);
  
    } catch (error) {
      console.error('EmailJS Error:', error);
  
      const message =
        typeof error?.text === 'string' && error.text
          ? error.text
          : 'Something went wrong while sending your request. Please try again.';
  
      alert(message);
  
    } finally {
      setIsSubmitting(false);
    }
  };

  const fullNameId = `${formId}-fullName`;
  const emailId = `${formId}-email`;
  const companyId = `${formId}-company`;
  const goalsId = `${formId}-goals`;
  const preferredTimeId = `${formId}-preferred-time`;

  return (
    <>
      <section className={['book-consultation', className].filter(Boolean).join(' ')}>
        <div className="book-consultation__container">
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
                  disabled={!selectedDate || isSubmitting}
                >
                  Select Session Mode & Time Slot
                </button>
                
              </div>
              <p className="book-consultation__selected">
                Selected: <strong>{selectedDate ? formatDateLabel(selectedDate) : 'Choose a date'}</strong> at{' '}
                <strong>{selectedTimeLabel}</strong> via <strong>{selectedMode}</strong>
              </p>
            </div>
          </div>

          <div className="book-consultation__right">
            {isSubmitted ? (
              <div className="book-success">
                <div className="book-success__badge">Session Requested</div>
                <h2>Thank you, {form.fullName || 'there'}!</h2>
                <p>
                  Your consultation request is received for{' '}
                  <strong>{selectedDate ? formatDateLabel(selectedDate) : '-'}</strong> at{' '}
                  <strong>{selectedTimeLabel}</strong> ({selectedMode}). Our team will contact you shortly on{' '}
                  <strong>{form.email}</strong> for confirmation.
                </p>
              </div>
            ) : (
              <form className="book-form" onSubmit={handleSubmit}>
                <h2>Tell Us About Your Goals</h2>
                <label htmlFor={fullNameId}>Full Name</label>
                <input
                  id={fullNameId}
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />

                <label htmlFor={emailId}>Work Email</label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />

                <label htmlFor={companyId}>Company Name</label>
                <input
                  id={companyId}
                  name="company"
                  type="text"
                  required
                  value={form.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                />

                <label htmlFor={goalsId}>What would you like to discuss?</label>
                <textarea
                  id={goalsId}
                  name="goals"
                  rows="4"
                  required
                  value={form.goals}
                  onChange={handleInputChange}
                  placeholder="Share your project goals, challenges, and desired outcomes"
                />

                <button type="submit" className="meeting-banner__cta" disabled={isSubmitting}>
                 
                  <span className="meeting-banner__cta-text">{isSubmitting ? 'Sending...' : 'Confirm Consultation Request'}</span>
              <span className="meeting-banner__cta-arrow" aria-hidden>
                <img src={arrowIcon} alt="" />
              </span>
                </button>
               
              </form>
            )}
          </div>
        </div>
      </section>

      {isSlotModalOpen &&
        createPortal(
          <div className="book-modal" role="dialog" aria-modal="true" aria-label="Select session details">
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
                {selectedDate ? formatDateLabel(selectedDate) : 'Select a date'} - Choose mode and time
              </p>

              <div className="book-consultation__selector">
                <h4>Session Mode</h4>
                <div className="book-consultation__chips">
                  {SESSION_MODES.map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      className={`book-chip ${selectedMode === mode ? 'is-active' : ''}`}
                      onClick={() => setSelectedMode(mode)}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div className="book-consultation__selector book-consultation__selector--time-picker">
                <h4>Preferred time</h4>
                <p className="book-time-picker__lead">Pick any time — use the clock picker or enter hours and minutes.</p>
                <div className="book-time-picker">
                  <div className="book-time-picker__clock">
                    <SessionClockPreview hhmm={selectedTime24} />
                  </div>
                  <div className="book-time-picker__controls">
                    <label htmlFor={preferredTimeId} className="book-time-picker__label">
                      Time
                    </label>
                    <input
                      id={preferredTimeId}
                      type="time"
                      step={60}
                      value={selectedTime24}
                      onChange={(e) => setSelectedTime24(e.target.value)}
                      className="book-time-picker__input"
                    />
                    <p className="book-time-picker__preview" aria-live="polite">
                      <span className="book-time-picker__preview-label">Selected</span>{' '}
                      <strong>{selectedTimeLabel}</strong>
                    </p>
                  </div>
                </div>
              </div>

              <button type="button" className="book-modal__done" onClick={() => setIsSlotModalOpen(false)}>
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
