import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import TestimonialsSection from '../home/TestimonialsSection';
import HeroBlog from './HeroBlog';
import InsightsGrid from './InsightsGrid';

const InsightsInnovation = () => {
  return (
    <div className="insights-innovation-page">
      <Header />
      <HeroBlog />
      <InsightsGrid />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default InsightsInnovation;
