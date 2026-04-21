import './CaseStudyHero.css';

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
      </div>

      <img src={imageSrc} alt={imageAlt} className="case-study-page-hero-visual" />
    </div>
  );
};

export default CaseStudyHero;
