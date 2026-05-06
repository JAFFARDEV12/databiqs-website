// Services.jsx
import React, { useState } from 'react';
import './Services.css';

import Header from '../home/Header';
import Footer from '../home/Footer';
import CoreCapabilities from './CoreCapabilities';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import ServicesHeroScene from './ServicesHeroScene';
import ServicesArchitecturePipeline from './ServicesArchitecturePipeline';

const Services = () => {
  const heroRef = useScrollAnimation({ threshold: 0.14 });
  const [activeService, setActiveService] = useState('ai-chatbots');

  return (
    <div className="services-page">
      <section className="services-hero-section" ref={heroRef}>
       
        <div className="services-hero__container">
          <div className="services-hero__split">
            <div className="services-hero__copy">
              <h1 className="services-hero__title">
                AI-Powered Solutions To Transform Your Business
              </h1>
              <p className="services-hero__lede">
                From strategy to implementation, we help you unlock the full potential of
                artificial intelligence to drive
                <br className="services-hero__lede-br" aria-hidden="true" /> unprecedented
                growth, efficiency, and market leadership.
              </p>
            </div>
            <ServicesHeroScene activeService={activeService} />
          </div>
          <ServicesArchitecturePipeline />
        </div>
      </section>

      <div className="case-study-page-container">
        <CoreCapabilities
          onServiceHover={setActiveService}
          onServiceLeave={() => setActiveService('ai-chatbots')}
        />
      </div>

     
      <Footer />
    </div>
  );
};

export default Services;
