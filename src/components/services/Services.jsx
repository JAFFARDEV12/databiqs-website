// Services.jsx
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './Services.css';

import Header from '../home/Header';
import Footer from '../home/Footer';
import MeetingBannerSection from '../home/MeetingBannerSection';
import CoreCapabilities from './CoreCapabilities';
import caseStudyImage from '../../assets/case-study.svg';

// Particle Background Component (lightweight Canvas)
const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(156, 22, 200, ${Math.random() * 0.3 + 0.1})`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    setCanvasSize();
    init();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

// Floating 3D Shapes Component (CSS based 3D transforms)
const FloatingShapes = () => {
  return (
    <div className="floating-shapes">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      <div className="shape shape-4"></div>
    </div>
  );
};

const Services = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="services-page">
      <ParticleField />
      <FloatingShapes />
      
      <section className="case-study-page-header-section" ref={heroRef}>
        <Header />
        <div className='case-study-page-container'>
          <motion.div 
            className="case-study-page-hero"
            style={{ y: heroY, opacity: heroOpacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="case-study-page-hero-content">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="case-study-page-tags">
                  <span className="case-study-page-pill">🚀 AI Innovation</span>
                  <span className="case-study-page-pill-solid">Enterprise Grade</span>
                </div>
                <h1 className="case-study-page-title">
                  <span className="case-study-page-title-top">AI-Powered Solutions</span>
                  <span className="case-study-page-title-bottom">to Transform Your Business</span>
                </h1>
              </motion.div>
              <motion.p 
                className="case-study-page-intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                From strategy to implementation, we help you unlock the full potential of 
                artificial intelligence to drive unprecedented growth, efficiency, and market leadership.
              </motion.p>
              <motion.button 
                className="hero-cta-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
            <motion.div 
              className="case-study-page-hero-visual-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            >
              <img 
                src={caseStudyImage} 
                alt="Services" 
                className="case-study-page-hero-visual" 
              />
              <div className="hero-visual-glow"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="case-study-page-container">
        <CoreCapabilities />
      </div>
      
      <MeetingBannerSection />
      <Footer />
      
      <div className="decorative-ellipse-1"></div>
      <div className="decorative-ellipse-2"></div>
    </div>
  );
};

export default Services;