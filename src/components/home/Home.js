import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;
