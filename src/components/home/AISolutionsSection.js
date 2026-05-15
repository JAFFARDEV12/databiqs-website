import React, { useEffect, useRef, useState } from 'react';
import './AISolutionsSection.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import LottieFromCdn from '../LottieFromCdn';
import { assetUrl } from '../../utils/assetUrl';

const bgTwoRectangles1 = assetUrl('assets/gif/Databiqas-Animation1.gif');


const AISolutionsSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.05, rootMargin: '220px 0px' });
  const [animationCycle, setAnimationCycle] = useState(0);
  const restartTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (restartTimerRef.current) {
        clearTimeout(restartTimerRef.current);
      }
    };
  }, []);

  const handleAnimationComplete = () => {
    if (restartTimerRef.current) {
      clearTimeout(restartTimerRef.current);
    }

    restartTimerRef.current = setTimeout(() => {
      setAnimationCycle((prev) => prev + 1);
    }, 0);
  };

  return (
    <section className="ai-solutions-section" id="services" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-headline">
          Intelligent <span className="highlight">AI Solutions</span> Built for Scalable Growth
        </h2>
        <p className="section-description">
          We design AI-powered systems that streamline operations, enhance customer engagement, and enable businesses to scale with confidence.
        </p>

        <div className="solutions-card">
          <div className="card-left">
            <div className="solutions-diagram-frame">
              <img
                src={bgTwoRectangles1}
                alt=""
                aria-hidden="true"
                className="solutions-diagram-fill"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <img
                src={bgTwoRectangles1}
                alt="AI Solutions Diagram"
                className="solutions-diagram"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

          <div className="card-right">
            <div className="automation-title-row">
            <div className="automation-title-lottie">
  <LottieFromCdn
    key={animationCycle}
    path="assets/Customer-Support.json"
    loop={false}
    autoplay
    speed={7}
    onComplete={handleAnimationComplete}
    style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
  />
            </div>
              <h3 className="card-title">AI Conversational & Support Systems</h3>
            </div>

            <p className="card-description">
              AI-Powered Conversational And Support Systems Designed To Automate Interactions, Reduce Response Times, Assist Teams, And Deliver Consistent, High-Quality Customer Experiences Across All Digital Touchpoints.
            </p>
            <div className="capabilities-heading">Key Capabilities:</div>
            <ul className="capabilities-list">
              <li>Conversational AI With Natural Language Understanding</li>
              <li>24/7 Automated Customer Interactions</li>
              <li>Intelligent Query Routing & Escalation</li>
              <li>Human-AI Collaboration For Support Teams</li>
              <li>Multi-Channel Integration (Web, Chat, Messaging Platforms)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
