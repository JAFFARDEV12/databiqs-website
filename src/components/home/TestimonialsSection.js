import React from 'react';
import './TestimonialsSection.css';
import testimonialIcon1 from '../../assets/testimonialicon1.png';
import testimonialIcon2 from '../../assets/testimonialicon2.png';
import testimonialIcon3 from '../../assets/testimonialicon3.png';
import testimonialIcon4 from '../../assets/testimonialicon4.png';
import testimonialVideoBg from '../../assets/testimonialvideobgimage.png';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TestimonialsSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="testimonials-section" id="case-studies" ref={sectionRef}>
      <div className="section-container">
        <div className="section-tag">Testimonials</div>
        <h2 className="section-headline">TRUSTED BY FORWARD-THINKING BUSINESSES</h2>
        <p className="section-description">
          Our Clients Partner With Us To Solve Complex Challenges, Streamline Operations, And Achieve Measurable Results Through Intelligent AI Solutions.
        </p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src={testimonialIcon1} alt="Robert Wilson" className="testimonial-avatar" />
            <div className="quote-icon">"</div>
            <p className="testimonial-quote">
              "Databigs Delivered An Al Solution That Significantly Improved Our Customer Response Time And Operational Efficiency. Their Approach Was Strategic, Professional, And Results-Driven."
            </p>
            <div className="testimonial-author">
              <div className="author-name">Robert Wilson</div>
              <div className="author-title">Chief Marketing Officer</div>
            </div>
          </div>

          <div className="testimonial-card featured" style={{ backgroundImage: `url(${testimonialVideoBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <img src={testimonialIcon2} alt="Emily Scott" className="testimonial-avatar" />
            <div className="play-button">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="white" fillOpacity="0.9"/>
                <path d="M16 12L28 20L16 28V12Z" fill="#7B2CBF"/>
              </svg>
            </div>
            <div className="testimonial-author">
              <div className="author-name">Emily Scott</div>
              <div className="author-title">Director Of IT</div>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={testimonialIcon3} alt="David Turner" className="testimonial-avatar" />
            <div className="quote-icon">"</div>
            <p className="testimonial-quote">
              "The Al Automation Implemented By Databigs Streamlined Our Internal Workflows And Reduced Manual Effort Across Teams. Their Expertise With Intelligent Systems Truly Stands Out"
            </p>
            <div className="testimonial-author">
              <div className="author-name">David Tumer</div>
              <div className="author-title">VP Of Product Development</div>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={testimonialIcon4} alt="Michael Hayes" className="testimonial-avatar" />
            <div className="quote-icon">"</div>
            <p className="testimonial-quote">
              "Databigs Delivered An Al Solution That Significantly Improved Our Customer Response Time And Operational Efficiency. Their Approach Was Strategic, Professional, And Results-Driven"
            </p>
            <div className="testimonial-author">
              <div className="author-name">Michael Hayes</div>
              <div className="author-title">Operations Manager</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
