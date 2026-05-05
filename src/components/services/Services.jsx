// Services.jsx
import React from 'react';
import './Services.css';

import Header from '../home/Header';
import Footer from '../home/Footer';
import CoreCapabilities from './CoreCapabilities';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Services = () => {
  const heroRef = useScrollAnimation({ threshold: 0.14 });

  return (
    <div className="services-page">
      <section className="services-hero-section" ref={heroRef}>
        <Header />
        <div className="services-hero__container">
          <div className="services-hero__copy">
            <h1 className="services-hero__title">
              AI-Powered Solutions To Transform Your Business
            </h1>
            <p className="services-hero__lede">
              From strategy to implementation, we help you unlock the full potential of
              artificial intelligence to drive
              <br className="services-hero__lede-br" aria-hidden="true" />
              {' '}
              unprecedented growth, efficiency, and market leadership.
            </p>
          </div>
        </div>
      </section>

      <div className="case-study-page-container">
        <CoreCapabilities />
      </div>

     
      <Footer />
    </div>
  );
};

export default Services;
