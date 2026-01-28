import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AISolutionsSection from './AISolutionsSection';
import AIAutomationSection from './AIAutomationSection';
import TestimonialsSection from './TestimonialsSection';
import StatsBar from './StatsBar';
import CaseStudiesSection from './CaseStudiesSection';
import InsightsSection from './InsightsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Decorative Ellipse 1 from Figma - Purple blur background element */}
      <div className="decorative-ellipse-1"></div>
      
      <div className="home-content">
        <Header />
        <HeroSection />
        <AISolutionsSection />
        <AIAutomationSection />
        <TestimonialsSection />
        <StatsBar />
        <CaseStudiesSection />
        <InsightsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
