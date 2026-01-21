import React, { useState } from 'react';
import './ContactSection.css';
import phoneIcon from '../../assets/phoneicon.png';
import arrowIcon from '../../assets/rightarrow.png';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

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
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-tag">Get In Touch</div>
            <h2 className="contact-title">LET'S BUILD THE FUTURE<br />TOGETHER</h2>
            <p className="contact-description">
              Have Questions Or Want To Start A Project?<br />Our Team Is Ready To Help You Unlock The<br />Power Of Al For Your Business.
            </p>
            <div className="phone-icon-container">
              <img src={phoneIcon} alt="Phone" className="phone-icon" />
            </div>
            <p className="privacy-notice">
              We Value Your Privacy And Will Never Share Your Information.<br />Expect A Response From Our Team Within 24-48 Hours.
            </p>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name: <span className="required">*</span></label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number: <span className="required">*</span></label>
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
                  <label htmlFor="email">Email Address: <span className="required">*</span></label>
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
              </div>

              <div className="form-group">
                <label htmlFor="service">The Service You Need: <span className="required">*</span></label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  placeholder=""
                  value={formData.service}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectDescription">Describe Your Project: <span className="required">*</span></label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Start writing from here..."
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <span className="submit-text">Submit</span>
                <span className="submit-arrow">
                  <img src={arrowIcon} alt="Arrow" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
