// TestimonialsSection.jsx
import { useRef, useState } from 'react';
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
import testimonialVideoMp4 from '../../assets/client-testinomials.mp4';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SLIDES = [
  // Slide 1 – original cards (featured video is handled inline)
  [
    { id: 1,  avatar: avatar1, name: 'Robert Wilson',  title: 'Chief Marketing Officer',      quote: '"Databiqs Delivered An AI Solution That Significantly Improved Our Customer Response Time And Operational Efficiency. Their Approach Was Strategic, Professional, And Results-Driven."', bg: card1Picture },
    { id: 2,  type: 'featured' },
    { id: 3,  avatar: avatar3, name: 'David Tumer',    title: 'VP Of Product Development',    quote: '"The AI Automation Implemented By Databiqs Streamlined Our Internal Workflows And Reduced Manual Effort Across Teams. Their Expertise With Intelligent Systems Truly Stands Out."', bg: card3Picture },
    { id: 4,  avatar: avatar4, name: 'Michael Hayes',  title: 'Operations Manager',            quote: '"Databiqs Delivered An AI Solution That Significantly Improved Our Customer Response Time And Operational Efficiency. Their Approach Was Strategic, Professional, And Results-Driven."', bg: card4Picture },
  ],
  // Slide 2 – dummy cards
  [
    { id: 5,  avatar: avatar2, name: 'Sarah Johnson',  title: 'Chief Executive Officer',      quote: '"Working With Databiqs Has Been Transformative For Our Business. Their AI Solutions Enabled Us To Automate Key Processes And Scale Effortlessly Across All Departments."', bg: card1Picture },
    { id: 6,  avatar: avatar3, name: 'James Anderson', title: 'Chief Technology Officer',     quote: '"The Intelligent Automation Platform Deployed By Databiqs Reduced Our Operational Costs By 40%. Their Team Was Knowledgeable, Responsive, And Truly Invested In Our Success."', bg: card3Picture },
    { id: 7,  avatar: avatar4, name: 'Lisa Chen',      title: 'Head Of Operations',           quote: '"Databiqs Understood Our Unique Challenges And Delivered A Tailored AI Solution That Exceeded Expectations. The Results Were Measurable Within The First Month."', bg: card4Picture },
    { id: 8,  avatar: avatar1, name: 'Mark Davis',     title: 'Director Of Product',          quote: '"From Initial Consultation To Full Deployment The Databiqs Team Was Professional And Thorough. Their AI Tools Gave Us A Competitive Edge We Did Not Expect So Quickly."', bg: card1Picture },
  ],
  // Slide 3 – dummy cards
  [
    { id: 9,  avatar: avatar3, name: 'Amanda White',   title: 'VP Of Sales',                  quote: '"Databiqs Helped Us Implement AI-Driven Lead Scoring That Transformed Our Sales Pipeline. Our Conversion Rates Improved Significantly Within The First Quarter."', bg: card3Picture },
    { id: 10, avatar: avatar4, name: 'Chris Brown',    title: 'Digital Transformation Lead',  quote: '"The Team At Databiqs Brought Both Technical Depth And Strategic Vision. Their AI Solutions Integrated Seamlessly With Our Existing Systems And Delivered Real ROI."', bg: card4Picture },
    { id: 11, avatar: avatar1, name: 'Rachel Kim',     title: 'Head Of Customer Success',     quote: '"Our Customer Satisfaction Scores Jumped After Deploying Databiqs AI Tools. Automation Of Routine Tasks Freed Our Team To Focus On High-Value Client Relationships."', bg: card1Picture },
    { id: 12, avatar: avatar2, name: 'Tom Garcia',     title: 'Chief Data Officer',           quote: '"Databiqs Delivered An Enterprise-Grade AI Solution On Time And Within Budget. Their Expertise In Data Intelligence Helped Us Unlock Insights We Had Never Accessed Before."', bg: card3Picture },
  ],
];

const TestimonialsSection = ({ sectionId = 'case-studies' } = {}) => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideClass, setSlideClass] = useState('');

  const toggleVideo = async () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setSlideClass(index > currentSlide ? 'slide-from-right' : 'slide-from-left');
    setCurrentSlide(index);
  };

  const cards = SLIDES[currentSlide];

  return (
    <>
      <section className="testimonials-section" id={sectionId} ref={sectionRef}>
        <div className="section-container">
          <h2 className="section-headline">
            Trusted by <span className="headline-purple">Forward-Thinking</span> Businesses
          </h2>
          <p className="section-description">
            Our Clients Partner With Us To Solve Complex Challenges, Streamline Operations, And Achieve Measurable Results Through Intelligent AI Solutions.
          </p>

          <div className="testimonials-slider-track">
          <div key={currentSlide} className={`testimonials-grid${slideClass ? ` ${slideClass}` : ''}`}>
            {cards.map((card) => {
              if (card.type === 'featured') {
                return (
                  <div key="featured" className="testimonial-card featured">
                    <video
                      ref={videoRef}
                      className="testimonial-video-inline"
                      poster={testimonialVideoBg}
                      preload="none"
                      playsInline
                      muted
                      controls={false}
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                      onContextMenu={(e) => e.preventDefault()}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                    >
                      <source src={testimonialVideoMp4} type="video/mp4" />
                    </video>
                    <img src={avatar2} alt="Emily Scott" className="testimonial-avatar" loading="lazy" decoding="async" />
                    <div className="featured-video-overlay" />
                    <div
                      className="play-button"
                      onClick={toggleVideo}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleVideo()}
                      role="button"
                      tabIndex={0}
                      aria-label={isPlaying ? 'Pause testimonial video' : 'Play testimonial video'}
                    >
                      <img src={bgPlayButtonSvg} alt="" className="play-button-bg" aria-hidden="true" loading="lazy" decoding="async" />
                      {isPlaying ? (
                        <span className="play-button-pause" aria-hidden />
                      ) : (
                        <img src={playButtonSvg} alt="Play" className="play-button-icon" loading="lazy" decoding="async" />
                      )}
                    </div>
                    <div className="testimonial-author">
                      <div className="author-name">Emily Scott</div>
                      <div className="author-title">Director Of IT</div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={card.id}
                  className="testimonial-card"
                  style={{ backgroundImage: `url(${card.bg})` }}
                >
                  <img src={card.avatar} alt={card.name} className="testimonial-avatar" loading="lazy" decoding="async" />
                  <img src={apostrophySvg} alt="" className="quote-icon" aria-hidden="true" loading="lazy" decoding="async" />
                  <p className="testimonial-quote">{card.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-name">{card.name}</div>
                    <div className="author-title">{card.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>

          <div className="testimonials-dots">
            {SLIDES.map((_, i) => (
              <span
                key={i}
                className={`dot${i === currentSlide ? ' dot--active' : ''}`}
                onClick={() => goToSlide(i)}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${i + 1}`}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && goToSlide(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
