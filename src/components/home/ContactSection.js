import React, { useState } from 'react';
import './ContactSection.css';
import phoneIcon from '../../assets/phoneicon.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    service: '',
    projectDescription: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-content">
          <div className="contact-left">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-headline">LET'S BUILD THE FUTURE TOGETHER</h2>
            <div className="contact-description">
              <p>
                Ready to transform your business with AI-powered solutions? Let's start a conversation 
                about how we can help you achieve your goals.
              </p>
              <p>
                Our team is here to answer your questions and discuss how our AI solutions can drive 
                innovation and growth for your business. Get in touch today!
              </p>
            </div>
            <div className="phone-illustration">
              <img src={phoneIcon} alt="Phone" />
            </div>
          </div>
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">The Service You Need *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="ai-chatbots">AI Chatbots & Customer Support</option>
                  <option value="ai-automation">AI Automation</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="projectDescription">Describe Your Project *</label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Start writing from here..."
                  rows="5"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Submit
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
