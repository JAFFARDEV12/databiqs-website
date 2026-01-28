import React from 'react';
import './TestimonialsSection.css';
import testimonialIcon1 from '../../assets/testimonialicon1.png';
import testimonialIcon2 from '../../assets/testimonialicon2.png';
import testimonialIcon3 from '../../assets/testimonialicon3.png';
import testimonialIcon4 from '../../assets/testimonialicon4.png';
import testimonialVideoBg from '../../assets/testimonialvideobgimage.png';
import apostrophySvg from '../../assets/appostrophy.svg';
import card1Picture from '../../assets/card 1 picture.svg';
import card3Picture from '../../assets/card 3 picture.svg';
import card4Picture from '../../assets/card 4 picture.svg';
import playButtonSvg from '../../assets/playbutton.svg';
import bgPlayButtonSvg from '../../assets/bg play button.svg';
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
          <div className="testimonial-card card-bg-1" style={{ backgroundImage: `url(${card1Picture})` }}>
            <img src={testimonialIcon1} alt="Robert Wilson" className="testimonial-avatar" />
            <img src={apostrophySvg} alt="" className="quote-icon" aria-hidden="true" />
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
              <img src={bgPlayButtonSvg} alt="" className="play-button-bg" aria-hidden="true" />
              <img src={playButtonSvg} alt="Play" className="play-button-icon" />
            </div>
            <div className="testimonial-author">
              <div className="author-name">Emily Scott</div>
              <div className="author-title">Director Of IT</div>
            </div>
          </div>

          <div className="testimonial-card card-bg-3" style={{ backgroundImage: `url(${card3Picture})` }}>
            <img src={testimonialIcon3} alt="David Turner" className="testimonial-avatar" />
            <img src={apostrophySvg} alt="" className="quote-icon" aria-hidden="true" />
            <p className="testimonial-quote">
              "The Al Automation Implemented By Databigs Streamlined Our Internal Workflows And Reduced Manual Effort Across Teams. Their Expertise With Intelligent Systems Truly Stands Out"
            </p>
            <div className="testimonial-author">
              <div className="author-name">David Tumer</div>
              <div className="author-title">VP Of Product Development</div>
            </div>
          </div>

          <div className="testimonial-card card-bg-4" style={{ backgroundImage: `url(${card4Picture})` }}>
            <img src={testimonialIcon4} alt="Michael Hayes" className="testimonial-avatar" />
            <img src={apostrophySvg} alt="" className="quote-icon" aria-hidden="true" />
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
