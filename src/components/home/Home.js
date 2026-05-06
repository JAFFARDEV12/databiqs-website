
import { useEffect } from 'react';
import HeroSection from './HeroSection';
import AISolutionsSection from './AISolutionsSection';
import AIAutomationSection from './AIAutomationSection';
import TestimonialsSection from './TestimonialsSection';
import ClientsMarquee from './ClientsMarquee';
import SolutionNeedSection from './SolutionNeedSection';
import CaseStudiesSection from './CaseStudiesSection';
import WhyAISection from './WhyAISection';
import HowDatabiqsSection from './HowDatabiqsSection';
import NumbersStatsSection from './NumbersStatsSection';
import MeetingBannerSection from './MeetingBannerSection';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import './Home.css';
import aiSolutionsGif from '../../assets/gif/Databiqas-Animation1.gif';
import aiAutomationGif from '../../assets/gif/Databiqas-Animation.gif';


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

useEffect(() => {
  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
    img.decoding = 'async';
    img.fetchPriority = 'high';
  };

  preloadImage(aiSolutionsGif);
  preloadImage(aiAutomationGif);
}, []);

  return (
    <div className="home">
      {/* Decorative Ellipse 1 from Figma - Purple blur background element */}
      <div className="decorative-ellipse-1"></div>
      
      <div className="home-content">
         <div className="top-gradient-wrapper">
        <HeroSection />
      </div>
      <SolutionNeedSection />

     {/*  <ClientsMarquee /> */}
      <TestimonialsSection />
      

      <NumbersStatsSection />

        <AISolutionsSection />
        <AIAutomationSection />
        <CaseStudiesSection />
        <WhyAISection />
        <HowDatabiqsSection />
        <MeetingBannerSection showBadge={false} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
