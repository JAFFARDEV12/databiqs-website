import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
/* import TestimonialsSection from '../home/TestimonialsSection'; */
import HeroBlog from './HeroBlog';
import InsightsGrid from './InsightsGrid';
import './InsightsInnovation.css';

const InsightsInnovation = () => {
  return (
    <div className="insights-innovation-page">

        <div className="decorative-ellipse-1"></div>

     
       <div className="top-gradient-wrapper-insights">
        <Header />
      <HeroBlog />

       </div>
      <InsightsGrid />
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
};

export default InsightsInnovation;
