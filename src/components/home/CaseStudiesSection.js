import React, { useState, useEffect } from 'react';
import './CaseStudiesSection.css';
import arrowIcon from '../../assets/rightarrow.svg';
import caseStudyImage from '../../assets/Whisk_12cf9afa8f18cab97e74ea097a47f83edr 1 (2).png';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const CaseStudiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // 5 pairs of cards

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const CaseStudyCard = () => (
    <div className="case-study-card">
      <div className="case-study-image-container">
        <img src={caseStudyImage} alt="AI Support Engine Flow" className="case-study-image" />
      </div>
      <h3 className="case-study-title">AI-Powered Customer Support</h3>
      <p className="case-study-description">
        <span className="challenge-label">Challenge:</span> Inefficient customer support with long response times and inconsistent service quality. Inefficient customer support with long response times and inconsistent service quality.
      </p>
      <button className="case-study-cta">
        <span className="case-study-text">Read Full Case Study</span>
        <span className="case-study-arrow">
          <img src={arrowIcon} alt="Arrow" />
        </span>
      </button>
    </div>
  );

  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="case-studies-section" id="case-studies" ref={sectionRef}>
      <div className="section-container">
        <div className="section-tag">Case Studies</div>
        <h2 className="section-headline">PROVEN IMPACT THROUGH AI SOLUTIONS</h2>
        <p className="section-description">
          Discover How We Help Forward-Thinking Businesses Solve Complex Challenges, Optimize Operations, And Achieve Measurable Results With Our AI-Driven Solutions.
        </p>

        <div className="case-studies-slider">
          <div className="case-studies-viewport">
            <div 
              className="case-studies-track" 
              style={{ transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 30}px))` }}
            >
              {[...Array(totalSlides * 2)].map((_, index) => (
                <div key={index} className="case-study-slide-item">
                  <CaseStudyCard />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="case-studies-navigation">
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
