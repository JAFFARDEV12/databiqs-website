import { useEffect, useId, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import './BookConsultation.css';
import vectorleft from '../../assets/Vector-left.svg';
import vectorright from '../../assets/Vector-right.svg';

const TIME_SLOTS = [
  '10:00 AM',
  '11:00 AM',
  '12:30 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
];

const SESSION_MODES = ['Google Meet', 'Zoom', 'WhatsApp'];

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
  pillText = 'Session With Our CEO',
  title = 'BOOK YOUR CONSULTATION SESSION',
  subtitle =
    'Reserve a focused strategy session with our CEO to map your AI product roadmap, identify high-impact opportunities, and define execution milestones.',
}) => {
  const formId = useId();
  const today = useMemo(() => toDayStart(new Date()), []);
  const [visibleMonth, setVisibleMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [selectedMode, setSelectedMode] = useState(SESSION_MODES[0]);
  const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const bookingData = {
      ...form,
      date: selectedDate ? formatDateLabel(selectedDate) : '',
      time: selectedTime,
      mode: selectedMode,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('databiqs_consultation_request', JSON.stringify(bookingData));
    setIsSubmitted(true);
  };

  const fullNameId = `${formId}-fullName`;
  const emailId = `${formId}-email`;
  const companyId = `${formId}-company`;
  const goalsId = `${formId}-goals`;

  return (
    <>
      <section className={['book-consultation', className].filter(Boolean).join(' ')}>
        <div className="book-consultation__container">
          <div className="book-consultation__left">
            <span className="book-consultation__pill">{pillText}</span>
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
                  Select Session Mode & Time Slot
                </button>
              </div>
              <p className="book-consultation__selected">
                Selected: <strong>{selectedDate ? formatDateLabel(selectedDate) : 'Choose a date'}</strong> at{' '}
                <strong>{selectedTime}</strong> via <strong>{selectedMode}</strong>
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
                  <strong>{selectedTime}</strong> ({selectedMode}). Our team will contact you shortly on{' '}
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

                <button type="submit" className="book-form__submit">
                  Confirm Consultation Request
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

              <div className="book-consultation__selector">
                <h4>Time Slot</h4>
                <div className="book-consultation__chips">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`book-chip ${selectedTime === slot ? 'is-active' : ''}`}
                      onClick={() => setSelectedTime(slot)}
                    >
                      {slot}
                    </button>
                  ))}
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
