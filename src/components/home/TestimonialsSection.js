import React from 'react';
import './TestimonialsSection.css';
import testimonialIcon1 from '../../assets/testimonialicon1.png';
import testimonialIcon2 from '../../assets/testimonialicon2.png';
import testimonialIcon3 from '../../assets/testimonialicon3.png';
import testimonialVideoBg from '../../assets/testimonialvideobgimage.png';
import projectsIcon from '../../assets/trusted by 1500+ clients.png';
import satisfactionIcon from '../../assets/client satisfaction icon.png';
import experienceIcon from '../../assets/12 years of industry experience icon.png';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section" id="case-studies">
      <div className="section-container">
        <div className="section-tag">Testimonials</div>
        <h2 className="section-headline">TRUSTED BY FORWARD-THINKING BUSINESSES</h2>
        <p className="section-description">
          We partner with innovative companies to transform their operations with AI-powered solutions.
        </p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src={testimonialIcon1} alt="Robert Wilson" className="testimonial-avatar" />
            <div className="quote-icon">"</div>
            <p className="testimonial-quote">
              "Databiqs transformed our customer support with their AI solutions. The results exceeded our expectations."
            </p>
            <div className="testimonial-author">
              <div className="author-name">Robert Wilson</div>
              <div className="author-title">Chief Marketing Officer</div>
            </div>
          </div>

          <div className="testimonial-card featured">
            <div className="video-thumbnail">
              <img src={testimonialVideoBg} alt="Emily Scott" />
              <div className="play-button">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="white" fillOpacity="0.9"/>
                  <path d="M16 12L28 20L16 28V12Z" fill="#7B2CBF"/>
                </svg>
              </div>
            </div>
            <div className="testimonial-author">
              <div className="author-name">Emily Scott</div>
              <div className="author-title">UX/UI Designer</div>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={testimonialIcon3} alt="David Turner" className="testimonial-avatar" />
            <div className="quote-icon">"</div>
            <p className="testimonial-quote">
              "The automation workflows have streamlined our processes significantly. Highly recommended!"
            </p>
            <div className="testimonial-author">
              <div className="author-name">David Turner</div>
              <div className="author-title">VP of Product Development</div>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <span className="stat-value">1500+</span>
            <span className="stat-label">PROJECTS</span>
          </div>
          <div className="stat-divider">★</div>
          <div className="stat-item">
            <img src={projectsIcon} alt="Clients" className="stat-icon" />
            <span className="stat-label">TRUSTED BY 1,500+ CLIENTS</span>
          </div>
          <div className="stat-divider">★</div>
          <div className="stat-item">
            <img src={satisfactionIcon} alt="Satisfaction" className="stat-icon" />
            <span className="stat-label">98% CLIENT SATISFACTION</span>
          </div>
          <div className="stat-divider">★</div>
          <div className="stat-item">
            <img src={experienceIcon} alt="Experience" className="stat-icon" />
            <span className="stat-label">12 YEARS OF INDUSTRY EXCELLENCE</span>
          </div>
          <div className="stat-divider">★</div>
          <div className="stat-item">
            <span className="stat-value">150+</span>
            <span className="stat-label">SUCCESS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
