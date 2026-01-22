import React from 'react';
import Header from '../home/Header';
import ContactSection from './ContactSection';
import MapSection from './MapSection';
import Footer from '../home/Footer';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Contact;
