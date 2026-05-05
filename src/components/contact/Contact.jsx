import React from 'react';
import ContactSection from './ContactSection';
import MapSection from './MapSection';
import Footer from '../home/Footer';
import './Contact.css';
const Contact = () => {
  return (
    <div className="contact-page">
     

        <div className="decorative-ellipse-1"></div> 
       <div className="top-gradient-wrapper">
         <ContactSection />
         <MapSection />
       </div>

      {/* Gradient wrapper for Contact + Map */}
      

      <Footer />
    </div>
  );
};

export default Contact;
