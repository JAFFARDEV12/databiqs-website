import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Footer from '../home/Footer';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import LottieFromCdn from '../LottieFromCdn';
import './ContactUs.css';
import { assetUrl } from '../../utils/assetUrl';

const arrowIcon = assetUrl('assets/rightarrow.svg');



const EMAILJS_SERVICE_ID = 'service_hhqip4y';
const EMAILJS_TEMPLATE_ID = 'template_ge605zo';
const EMAILJS_PUBLIC_KEY = 'dlDyPXPu4yKCptTIL';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function ContactUs() {
  const heroRef = useScrollAnimation({ threshold: 0.12 });
  const formRef = useScrollAnimation({ threshold: 0.08 });
  const successRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (status.type !== 'success' || !successRef.current) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    successRef.current.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'nearest',
    });
  }, [status.type]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status.text || status.type === 'success') setStatus({ type: '', text: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailTrim = form.email.trim();
    if (!emailTrim) {
      setStatus({ type: 'error', text: 'Please enter your email address.' });
      return;
    }

    setSending(true);
    setStatus({ type: '', text: '' });

    const templateParams = {
      your_name: form.name.trim() || ' - ',
      your_email: emailTrim,
      phone_number: form.phone.trim() || ' - ',
      subject: form.subject.trim() || 'Contact form',
      message: form.message.trim() || ' - ',
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: 'success', text: '' });
      setForm(initialForm);
    } catch (err) {
      setStatus({
        type: 'error',
        text: err?.text || 'Something went wrong. Please try again or email us directly.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-us-page">
      <div className="contact-us__top">
        <div className="contact-us__frame">
          <section className="contact-us__hero" ref={heroRef}>
            <div className="contact-us__hero-inner">
              <div className="contact-us__hero-copy">
                <span className="contact-us__pill">Contact us</span>
                <h1 className="contact-us__title">Let&apos;s start a conversation</h1>
                <p className="contact-us__lead">
                  Whether you are exploring AI automation, custom software, or a strategic partnership,
                  tell us what you need - we read every message and respond as soon as we can.
                </p>
                <p className="contact-us__meta">
                  Prefer the consultation flow?{' '}
                  <Link to="/book-consultation" className="contact-us__inline-link">
                    Book a consultation
                  </Link>
                  .
                </p>
              </div>
              <div className="contact-us__hero-visual" aria-hidden="true">
                <LottieFromCdn
                  path="assets/gif/contact us.json"
                  className="contact-us__hero-lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </section>
        </div>

        <section className="contact-us__form-section" ref={formRef}>
          <div className="contact-us__form-shell">
            <form className="contact-us__form" onSubmit={handleSubmit} noValidate>
              <div className="contact-us__form-grid">
                <label className="contact-us__field">
                  <span className="contact-us__label">Your name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                  />
                </label>

                <label className="contact-us__field">
                  <span className="contact-us__label">
                    Your email <span className="contact-us__req">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </label>

                <label className="contact-us__field">
                  <span className="contact-us__label">Your phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+1 …"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </label>

                <label className="contact-us__field contact-us__field--wide">
                  <span className="contact-us__label">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    autoComplete="off"
                    placeholder="What is this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </label>

                <label className="contact-us__field contact-us__field--full">
                  <span className="contact-us__label">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Share context, goals, or timelines…"
                    value={form.message}
                    onChange={handleChange}
                  />
                </label>
              </div>

              {status.text ? (
                <p
                  className={`contact-us__feedback${status.type === 'error' ? ' contact-us__feedback--error' : ''}`}
                  role="alert"
                >
                  {status.text}
                </p>
              ) : null}

              <div className="contact-us__actions">
                <button
                  type="submit"
                  className="cta-button contact-us__submit"
                  disabled={sending}
                  aria-busy={sending}
                >
                  <span>{sending ? 'Sending…' : 'Send message'}</span>
                  <div className="cta-icon-circle">
                    <img src={arrowIcon} alt="" />
                  </div>
                </button>
              </div>
            </form>

            {status.type === 'success' ? (
              <div
                ref={successRef}
                className="contact-us__success"
                role="status"
                aria-live="polite"
              >
                <div className="contact-us__success-visual" aria-hidden="true">
                  <LottieFromCdn
                    path="assets/gif/sucessfuly submitted.json"
                    className="contact-us__success-lottie"
                    loop
                    autoplay
                  />
                </div>
                <div className="contact-us__success-copy">
                  <h2 className="contact-us__success-title">Thank you</h2>
                  <p className="contact-us__success-text">
                    You have submitted the form successfully. We will get in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    className="contact-us__success-reset"
                    onClick={() => setStatus({ type: '', text: '' })}
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
