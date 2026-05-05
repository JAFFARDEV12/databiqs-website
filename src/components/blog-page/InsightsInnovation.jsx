import React, { useState, useEffect } from 'react';
import Footer from '../home/Footer';
/* import TestimonialsSection from '../home/TestimonialsSection'; */
import HeroBlog from './HeroBlog';
import InsightsGrid from './InsightsGrid';
import './InsightsInnovation.css';

/** Hide grid on very narrow viewports only (match HeroBlog narrow layout). */
const NARROW_MAX_PX = 360;

const InsightsInnovation = () => {
  const [showInsightsGrid, setShowInsightsGrid] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth > NARROW_MAX_PX;
  });

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${NARROW_MAX_PX}px)`);
    const sync = () => setShowInsightsGrid(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <div className="insights-innovation-page">

        <div className="decorative-ellipse-1"></div>

     
       <div className="top-gradient-wrapper">
      <HeroBlog />

       </div>
      {showInsightsGrid && 
      <InsightsGrid />}
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
};

export default InsightsInnovation;
