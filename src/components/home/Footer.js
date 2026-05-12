import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Footer.css';
import footerlogo from '../../assets/footer-logo.svg';
import instaSvg from '../../assets/insta.svg';
import linkedinSvg from '../../assets/linkedin.svg';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/* =========================
   EMAILJS CONFIG
========================= */

const EMAILJS_SERVICE_ID = 'service_rij8xrc';

const USER_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_NEWSLETTER_TEMPLATE_ID ||
  'template_7dkqwaf';

const ADMIN_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID ||
  'template_bmxi77f';

const EMAILJS_PUBLIC_KEY = 'wpl35VnksY_DS5v2V';

const INTERNAL_EMAIL =
  process.env.REACT_APP_EMAILJS_ADMIN_EMAIL ||
  process.env.REACT_APP_COMPANY_EMAIL ||
  'contact@databiqs.com';

const SUBSCRIBER_STORAGE_KEY = 'databiqs_newsletter_subscribers_v1';

const Footer = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    const email = newsletterEmail.trim();

    const looksLikeEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!looksLikeEmail) {
      alert('Please enter a valid email address.');
      return;
    }

    if (
      !EMAILJS_SERVICE_ID ||
      !USER_TEMPLATE_ID ||
      !ADMIN_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      alert('Email service is not configured.');
      return;
    }

    setIsSubmitting(true);
    setNewsletterSuccess(false);

    try {
      /* =========================
         SAVE TO LOCAL STORAGE
      ========================= */

      const existing = JSON.parse(
        localStorage.getItem(SUBSCRIBER_STORAGE_KEY) || '[]'
      );

      const deduped = Array.from(
        new Set([...(existing || []), email])
      );

      localStorage.setItem(
        SUBSCRIBER_STORAGE_KEY,
        JSON.stringify(deduped)
      );

      /* =========================
         USER EMAIL PARAMS
      ========================= */

      const userTemplateParams = {
        to_email: email,
        subscriber_email: email,
        user_email: email,
        reply_to: email,
        fullName: 'Subscriber',
        topic: 'newsletter',
      };

      /* =========================
         SEND USER CONFIRMATION
      ========================= */

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        USER_TEMPLATE_ID,
        userTemplateParams,
        EMAILJS_PUBLIC_KEY
      );

      /* =========================
         ADMIN EMAIL PARAMS
      ========================= */

      const adminTemplateParams = {
        to_email: INTERNAL_EMAIL,
        subscriber_email: email,
        user_email: email,
        reply_to: email,
        fullName: 'New Subscriber',
        topic: 'newsletter',
      };

      /* =========================
         SEND ADMIN NOTIFICATION
      ========================= */

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        adminTemplateParams,
        EMAILJS_PUBLIC_KEY
      );

      setNewsletterSuccess(true);
      setNewsletterEmail('');
    } catch (err) {
      console.error('FULL EMAILJS ERROR:', err);
      alert(
        err?.text ||
          'Something went wrong while subscribing.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer" ref={sectionRef}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img
                src={footerlogo}
                alt="Databiqs"
                className="footer-logo-icon"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="footer-tagline">
              Pushing the boundaries of technology,
              unleashing limitless innovation for a
              smarter future.
            </p>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/databiqs"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
                style={{
                  '--i': '#0A66C2',
                  '--j': '#004182',
                }}
              >
                <span className="icon">
                  <img
                    src={linkedinSvg}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                </span>

                <span className="title">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://www.instagram.com/databiqs/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
                style={{
                  '--i': '#FF5F6D',
                  '--j': '#FFC371',
                }}
              >
                <span className="icon">
                  <img
                    src={instaSvg}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                </span>

                <span className="title">
                  Instagram
                </span>
              </a>
            </div>
          </div>

          <div className="footer-middle">
            <h2 className="footer-heading">
              Links
            </h2>

            <ul className="footer-links">
              <li>
                <Link to="/about-us">About</Link>
              </li>

              <li>
                <Link to="/services">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/case-studies">
                  Case Studies
                </Link>
              </li>

              <li>
                <Link to="/blog-page">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="footer-right">
            <h2 className="footer-heading">
              Join Our Newsletter
            </h2>

            <form
              className="newsletter-form"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                required
                value={newsletterEmail}
                onChange={(e) =>
                  setNewsletterEmail(
                    e.target.value
                  )
                }
                aria-label="Email address"
              />

              <button
                type="submit"
                className="newsletter-button"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? 'Subscribing...'
                  : 'Subscribe'}
              </button>
            </form>

            {newsletterSuccess ? (
              <p className="newsletter-success">
                Thanks for subscribing!
              </p>
            ) : null}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2026 Databiqs. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;