// Services.jsx
import React, { useRef } from 'react';
import './Services.css';

import Header from '../home/Header';
import Footer from '../home/Footer';
import MeetingBannerSection from '../home/MeetingBannerSection';
import CoreCapabilities from './CoreCapabilities';
import caseStudyImage from '../../assets/case-study.svg';

const Services = () => {
  const heroRef = useRef(null);

  return (
    <div className="services-page">
      <section className="case-study-page-header-section" ref={heroRef}>
        <Header />
        <div className='case-study-page-container'>
          <div
            className="case-study-page-hero"
          >
            <div className="case-study-page-hero-content">
              <div>
                <div className="case-study-page-tags">
                  <span className="case-study-page-pill">🚀 AI Innovation</span>
                  <span className="case-study-page-pill-solid">Enterprise Grade</span>
                </div>
                <h1 className="case-study-page-title">
                  <span className="case-study-page-title-top">AI-Powered Solutions</span>
                  <span className="case-study-page-title-bottom">to Transform Your Business</span>
                </h1>
              </div>
              <p className="case-study-page-intro">
                From strategy to implementation, we help you unlock the full potential of 
                artificial intelligence to drive unprecedented growth, efficiency, and market leadership.
              </p>
              <button className="hero-cta-button">
                Explore Our Services
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div
              className="case-study-page-hero-visual-wrapper"
            >
              <img 
                src={caseStudyImage} 
                alt="Services" 
                className="case-study-page-hero-visual"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="case-study-page-container">
        <CoreCapabilities />
      </div>
      
      <MeetingBannerSection />
      <Footer />
    </div>
  );
};

export default Services;