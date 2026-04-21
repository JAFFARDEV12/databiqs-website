import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import triangleImage from '../../assets/Triangle-herosection-revoleaboverectangle.png';
import rectangleImage from '../../assets/herosection-rectangle-rightside.png';
import arrowIcon from '../../assets/rightarrow.svg';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import costumeanimation from '../../assets/ai-animation-Flow.json';
import Lottie from 'lottie-react';

const HeroSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="hero-section" ref={sectionRef}>
      <div className="animatecostume" aria-hidden>
        <Lottie animationData={costumeanimation} loop style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">AI-Powered Innovation</div>
          <h1 className="hero-headline">
            <span className="hero-headline-line1">PUSHING THE BOUNDARIES OF</span>
            <span className="hero-headline-line2">
              <span className="technology-highlight">TECHNOLOGY</span>{' '}
              <span className="innovation-text">& INNOVATION</span>
            </span>
          </h1>
          <h2 className="hero-subheadline">
            We Build AI-Powered Products That Scale Startups 10x Faster
          </h2>
          <p className="hero-description">
            Empowering Businesses With Cutting-Edge AI Solutions, Intelligent Chatbots, And Seamless
            Automation Workflows
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="hero-cta hero-cta--primary">
              <span className="hero-cta-label">Book a Consultation</span>
              <span className="cta-icon" aria-hidden>
                <img src={arrowIcon} alt="" />
              </span>
            </Link>
            <a href="#case-studies" className="hero-cta hero-cta--secondary">
              <span className="hero-cta-label">View Case Studies</span>
              <span className="cta-icon cta-icon--on-purple" aria-hidden>
                <img src={arrowIcon} alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="hero-illustration">
          <img src={triangleImage} alt="" className="triangle-bg" />
          <div className="hero-cards">
            <div className="hero-card top-card">
              <h3>Chatbots & Customer Support</h3>
              <p>AI-Driven Customer Interaction Solutions Enhancing Efficiency And Scalability.</p>
            </div>
            <div className="hero-card bottom-card">
              <h3>AI Automation</h3>
              <p>Automate Workflows Using N8n For Efficient Business Operations.</p>
            </div>
          </div>
          <img src={rectangleImage} alt="" className="rectangle-bg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
