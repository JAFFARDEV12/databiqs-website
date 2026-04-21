// TestimonialsSection.jsx
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import './TestimonialsSection.css';
import avatar1 from '../../assets/1 avator.png';
import avatar2 from '../../assets/2 avator.png';
import avatar3 from '../../assets/3 avator.png';
import avatar4 from '../../assets/4 avator.png';
import apostrophySvg from '../../assets/appostrophy.svg';
import card1Picture from '../../assets/card 1 picture.svg';
import testimonialVideoBg from '../../assets/testimonial-video.png';
import card3Picture from '../../assets/card 3 picture.svg';
import card4Picture from '../../assets/card 4 picture.svg';
import playButtonSvg from '../../assets/playbutton.svg';
import bgPlayButtonSvg from '../../assets/bg play button.svg';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const TestimonialsSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  // Sample testimonial video – replace with your actual video URL
  const testimonialVideoUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

  return (
    <>
      <section className="testimonials-section" id="case-studies" ref={sectionRef}>
        <div className="section-container">
          <div className="section-tag">Testimonials</div>
          <h2 className="section-headline">TRUSTED BY FORWARD-THINKING BUSINESSES</h2>
          <p className="section-description">
            Our Clients Partner With Us To Solve Complex Challenges, Streamline Operations, And Achieve Measurable Results Through Intelligent AI Solutions.
          </p>

          <div className="testimonials-grid">
            {/* Card 1 */}
            <div className="testimonial-card card-bg-1" style={{ backgroundImage: `url(${card1Picture})` }}>
              <img src={avatar1} alt="Robert Wilson" className="testimonial-avatar" />
              <img src={apostrophySvg} alt="" className="quote-icon" aria-hidden="true" />
              <p className="testimonial-quote">
                "Databigs Delivered An Al Solution That Significantly Improved Our Customer Response Time And Operational Efficiency. Their Approach Was Strategic, Professional, And Results-Driven."
              </p>
              <div className="testimonial-author">
                <div className="author-name">Robert Wilson</div>
                <div className="author-title">Chief Marketing Officer</div>
              </div>
            </div>

            {/* Card 2 – Featured Video Testimonial */}
            <div className="testimonial-card featured" style={{ backgroundImage: `url(${testimonialVideoBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <img src={avatar2} alt="Emily Scott" className="testimonial-avatar" />
              <div className="play-button" onClick={openVideoModal} role="button" tabIndex={0} aria-label="Play testimonial video">
                <img src={bgPlayButtonSvg} alt="" className="play-button-bg" aria-hidden="true" />
                <img src={playButtonSvg} alt="Play" className="play-button-icon" />
              </div>
              <div className="testimonial-author">
                <div className="author-name">Emily Scott</div>
                <div className="author-title">Director Of IT</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card card-bg-3" style={{ backgroundImage: `url(${card3Picture})` }}>
              <img src={avatar3} alt="David Turner" className="testimonial-avatar" />
              <img src={apostrophySvg} alt="" className="quote-icon" aria-hidden="true" />
              <p className="testimonial-quote">
                "The Al Automation Implemented By Databigs Streamlined Our Internal Workflows And Reduced Manual Effort Across Teams. Their Expertise With Intelligent Systems Truly Stands Out"
              </p>
              <div className="testimonial-author">
                <div className="author-name">David Tumer</div>
                <div className="author-title">VP Of Product Development</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="testimonial-card card-bg-4" style={{ backgroundImage: `url(${card4Picture})` }}>
              <img src={avatar4} alt="Michael Hayes" className="testimonial-avatar" />
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

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal} aria-label="Close video">
              <IoClose size={24} color="#fff" />
            </button>
            <video className="video-modal-player" controls autoPlay>
              <source src={testimonialVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;