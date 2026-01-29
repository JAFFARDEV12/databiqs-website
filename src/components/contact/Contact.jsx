import React from 'react';
import Header from '../home/Header';
import ContactSection from './ContactSection';
import MapSection from './MapSection';
import Footer from '../home/Footer';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />

      {/* Gradient wrapper for Contact + Map */}
      <div
        style={{
          background: 'linear-gradient(180deg, #eeeeee 0%, #f5f5f5 35%, #ffffff 100%)'
        }}
      >
        <ContactSection />
        <MapSection />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
