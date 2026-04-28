
import Header from './Header';
import HeroSection from './HeroSection';
import AISolutionsSection from './AISolutionsSection';
import AIAutomationSection from './AIAutomationSection';
import TestimonialsSection from './TestimonialsSection';
import StatsBar from './StatsBar';
import CaseStudiesSection from './CaseStudiesSection';
import NumbersStatsSection from './NumbersStatsSection';

import ToolsAuditsSection from './ToolsAuditsSection';
import MeetingBannerSection from './MeetingBannerSection';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


import './Home.css';


const Home = () => {
  const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo) {
    const section = document.getElementById(location.state.scrollTo);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}, [location]);

  return (
    <div className="home">
      {/* Decorative Ellipse 1 from Figma - Purple blur background element */}
      <div className="decorative-ellipse-1"></div>
      
      <div className="home-content">
         <div className="top-gradient-wrapper">
        <Header />
        <HeroSection />
      </div>

      <NumbersStatsSection />
      

      
        <AISolutionsSection />
        <AIAutomationSection />
        <TestimonialsSection />
        <StatsBar />
        <CaseStudiesSection />
        <ToolsAuditsSection />
        <MeetingBannerSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
