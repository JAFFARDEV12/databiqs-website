import React from 'react';
import { Link } from 'react-router-dom';
import './MeetingBannerSection.css';
import arrowIcon from '../../assets/rightarrow.svg';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const MeetingBannerSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="meeting-banner-section" id="consultation" ref={sectionRef}>
      <div className="section-container meeting-banner-section__wrap">
        <div className="meeting-banner">
          <div className="meeting-banner__decor meeting-banner__decor--bl" aria-hidden />
          <div className="meeting-banner__decor meeting-banner__decor--tr" aria-hidden />
          <div className="meeting-banner__inner">
            <div className="meeting-banner__badge">Let&apos;s Setup A Meeting</div>
            <h2 className="meeting-banner__title">START YOUR TRANSFORMATION TODAY</h2>
            <p className="meeting-banner__sub">
              Setup A 30 Minutes Consultation Call With Our Experts. No Sales Pitch, Just Pure Engineering Strategy.
            </p>
            <Link to="/book-consultation" className="meeting-banner__cta">
              <span className="meeting-banner__cta-text">Setup a consultation call</span>
              <span className="meeting-banner__cta-arrow" aria-hidden>
                <img src={arrowIcon} alt="" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingBannerSection;
