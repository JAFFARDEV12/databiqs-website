// Services.jsx
import React, { useEffect, useState } from 'react';
import './Services.css';

import Header from '../home/Header';
import Footer from '../home/Footer';
import MeetingBannerSection from '../home/MeetingBannerSection';
import CoreCapabilities from './CoreCapabilities';
import { serviceHeroSlides } from './serviceData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Services = () => {
  const heroRef = useScrollAnimation({ threshold: 0.14 });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % serviceHeroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

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
                  <span className="case-study-page-pill">AI Innovation</span>
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
             {/*  <button className="hero-cta-button">
                Explore Our Services
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button> */}
            </div>
            <div
              className="case-study-page-hero-visual-wrapper"
            >
              <div className="case-study-page-hero-slider" aria-label="Services showcase images">
                {serviceHeroSlides.map((slide, index) => (
                  <img
                    key={slide.alt}
                    src={slide.src}
                    alt={slide.alt}
                    className={`case-study-page-hero-visual ${index === activeSlide ? 'is-active' : ''}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                ))}
              </div>
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