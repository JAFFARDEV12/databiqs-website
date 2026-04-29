import  { useState, useEffect } from 'react';
import './CaseStudiesSection.css';
import arrowIcon from '../../assets/rightarrow.svg';
import caseStudyImage from '../../assets/case studies.svg';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';


const CaseStudiesSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const totalSlides = 5; // 5 pairs of cards
  const transitionMs = 650;

  const goToSlide = (index) => {
    setIsTransitionEnabled(true);
    setCurrentSlide(index);
  };

  // Always move forward; never reverse direction.
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // When we reach the cloned first slide, snap back to real first slide without animation.
  useEffect(() => {
    if (currentSlide !== totalSlides) return undefined;

    let restoreTransitionTimer;
    const resetTimer = setTimeout(() => {
      setIsTransitionEnabled(false);
      setCurrentSlide(0);

      restoreTransitionTimer = setTimeout(() => {
        setIsTransitionEnabled(true);
      }, 40);
    }, transitionMs);

    return () => {
      clearTimeout(resetTimer);
      if (restoreTransitionTimer) clearTimeout(restoreTransitionTimer);
    };
  }, [currentSlide, totalSlides]);

  const CaseStudyCard = () => (
    <div className="case-study-card" >
      <div className="case-study-image-container">
        <img
          src={caseStudyImage}
          alt="AI Support Engine Flow"
          className="case-study-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="case-study-title">AI-Powered Customer Support</h3>
      <p className="case-study-description">
        <span className="challenge-label">Challenge:</span> Inefficient customer support with long response times and inconsistent service quality. Inefficient customer support with long response times and inconsistent service quality.
      </p>
    <button
  className="case-study-cta"
  onClick={() => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('case-studies');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  }}
>
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
              style={{
                transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 30}px))`,
                transition: isTransitionEnabled
                  ? `transform ${transitionMs}ms cubic-bezier(0.22, 0.61, 0.36, 1)`
                  : 'none',
              }}
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
              className={`nav-dot ${index === currentSlide % totalSlides ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;