import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import './CaseStudyHero.css';
import arrowIcon from '../../assets/rightarrow.svg';
import caseStudyDetailAnimation from '../../assets/case-study-detail.json';

/**
 * Two-column case study hero: tags + title + intro on the left, image on the right.
 * Pass copy and image for reuse across case study pages.
 */
const CaseStudyHero = ({
  imageSrc,
  imageAlt = 'Case study',
  primaryBadge = 'Fintech',
  secondaryBadge = '14 Month Timeline',
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="case-study-page-hero">
      <div className="case-study-page-hero-content">
        <div className="case-study-page-tags">
          <span className="case-study-page-pill case-study-page-pill-solid">{primaryBadge}</span>
          <span className="case-study-page-pill">{secondaryBadge}</span>
        </div>

      
        <h1 className="case-study-page-title">
  <span className="case-study-page-title-top">{title}:</span>
  <span className="case-study-page-title-bottom">
  {subtitle}
  </span>
</h1>

        <p className="case-study-page-intro" lang="en">
          {description}
        </p>
        <Link to="/book-consultation" className="cta-button mg-top" aria-label="Book a consultation">
        
        <span>Book a Consultation</span>
        <div className="cta-icon-circle">
          <img src={arrowIcon} alt="Arrow" />
        </div>
      </Link>
      </div>

      <div className="case-study-page-hero-lottie" aria-label={imageAlt}>
        <Lottie animationData={caseStudyDetailAnimation} loop autoplay />
      </div>
    </div>
  );
};

export default CaseStudyHero;
