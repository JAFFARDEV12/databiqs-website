import React from 'react';
import { Link } from 'react-router-dom';
import './MeetingBannerSection.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { assetUrl } from '../../utils/assetUrl';

const arrowIcon = assetUrl('assets/rightarrow.svg');


const DEFAULT_COPY = {
  badge: "Let's Setup A Meeting",
  title: 'START YOUR TRANSFORMATION TODAY',
  subtitle: 'Setup A 30 Minutes Consultation Call With Our Experts. No Sales Pitch, Just Pure Engineering Strategy.',
  ctaText: 'Setup a consultation call',
  ctaTo: '/book-consultation',
};

const MeetingBannerSection = ({
  id = 'consultation',
  badge = DEFAULT_COPY.badge,
  title = DEFAULT_COPY.title,
  subtitle = DEFAULT_COPY.subtitle,
  ctaText = DEFAULT_COPY.ctaText,
  ctaTo = DEFAULT_COPY.ctaTo,
  className = '',
  showBadge = true,
}) => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  const sectionClassName = `meeting-banner-section${className ? ` ${className}` : ''}`;

  return (
    <section className={sectionClassName} id={id} ref={sectionRef}>
      <div className="section-container meeting-banner-section__wrap">
        <div className="meeting-banner">
          <div className="meeting-banner__decor meeting-banner__decor--bl" aria-hidden />
          <div className="meeting-banner__decor meeting-banner__decor--tr" aria-hidden />
          <div className="meeting-banner__inner">
            {showBadge ? <div className="meeting-banner__badge">{badge}</div> : null}
            <h2 className="meeting-banner__title">{title}</h2>
            <p className="meeting-banner__sub">{subtitle}</p>
            <Link to={ctaTo} className="meeting-banner__cta">
              <span className="meeting-banner__cta-text">{ctaText}</span>
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
