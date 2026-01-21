import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
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
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <StatsBar />
      <CaseStudiesSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
