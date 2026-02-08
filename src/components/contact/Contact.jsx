import React from 'react';
import Header from '../home/Header';
import ContactSection from './ContactSection';
import MapSection from './MapSection';
import Footer from '../home/Footer';
import './Contact.css';
const Contact = () => {
  return (
    <div className="contact-page">
     

        <div className="decorative-ellipse-1"></div> 
       <div className="top-gradient-wrapper">
         <Header />
         <ContactSection />
       </div>

      {/* Gradient wrapper for Contact + Map */}
       <MapSection />

      <Footer />
    </div>
  );
};

export default Contact;
