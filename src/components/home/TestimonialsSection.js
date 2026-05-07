// TestimonialsSection.jsx
import { useEffect, useRef, useState } from 'react';
import './TestimonialsSection.css';
import apostrophySvg from '../../assets/appostrophy.svg';
import card1Picture from '../../assets/card 1 picture.svg';
import card3Picture from '../../assets/card 3 picture.svg';
import card4Picture from '../../assets/card 4 picture.svg';
import audioCard1 from '../../assets/card1-Databiqs Delivered.mp3';
import audioCard2 from '../../assets/card2.mp3';
import audioCard3 from '../../assets/card3-ai-automation.mp3';
import audioCard4 from '../../assets/4th.mp3';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const SLIDES = [
  [
    {
      id: 1,
      quote:
        '"Databiqs Delivered An AI Solution That Significantly Improved Our Customer Response Time And Operational Efficiency. Their Approach Was Strategic, Professional, And Results-Driven."',
      bg: card1Picture,
      audio: audioCard1,
    },
    {
      id: 2,
      quote:
        '"Databiqs Helped Us Modernize Our Customer Experience With AI-First Automation, Delivering Faster Service And Better Decision-Making Across Teams."',
      bg: card3Picture,
      audio: audioCard2,
    },
    {
      id: 3,
      quote:
        '"The AI Automation Implemented By Databiqs Streamlined Our Internal Workflows And Reduced Manual Effort Across Teams. Their Expertise With Intelligent Systems Truly Stands Out."',
      bg: card3Picture,
      audio: audioCard3,
    },
    {
      id: 5,
      quote:
        '"Working With Databiqs Has Been Transformative For Our Business. Their AI Solutions Enabled Us To Automate Key Processes And Scale Effortlessly Across All Departments."',
      bg: card4Picture,
      audio: audioCard4,
    },
  ],
  [
    {
      id: 6,
      quote:
        '"The Intelligent Automation Platform Deployed By Databiqs Reduced Our Operational Costs By 40%. Their Team Was Knowledgeable, Responsive, And Truly Invested In Our Success."',
      bg: card3Picture,
    },
    {
      id: 7,
      quote:
        '"Databiqs Understood Our Unique Challenges And Delivered A Tailored AI Solution That Exceeded Expectations. The Results Were Measurable Within The First Month."',
      bg: card4Picture,
    },
    {
      id: 8,
      quote:
        '"From Initial Consultation To Full Deployment The Databiqs Team Was Professional And Thorough. Their AI Tools Gave Us A Competitive Edge We Did Not Expect So Quickly."',
      bg: card1Picture,
    },
  ],
  [
    {
      id: 9,
      quote:
        '"Databiqs Helped Us Implement AI-Driven Lead Scoring That Transformed Our Sales Pipeline. Our Conversion Rates Improved Significantly Within The First Quarter."',
      bg: card3Picture,
    },
    {
      id: 10,
      quote:
        '"The Team At Databiqs Brought Both Technical Depth And Strategic Vision. Their AI Solutions Integrated Seamlessly With Our Existing Systems And Delivered Real ROI."',
      bg: card4Picture,
    },
    {
      id: 11,
      quote:
        '"Our Customer Satisfaction Scores Jumped After Deploying Databiqs AI Tools. Automation Of Routine Tasks Freed Our Team To Focus On High-Value Client Relationships."',
      bg: card1Picture,
    },
    {
      id: 12,
      quote:
        '"Databiqs Delivered An Enterprise-Grade AI Solution On Time And Within Budget. Their Expertise In Data Intelligence Helped Us Unlock Insights We Had Never Accessed Before."',
      bg: card3Picture,
    },
  ],
];

const TestimonialsSection = ({ sectionId = 'case-studies' } = {}) => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideClass, setSlideClass] = useState('');
  const audioRefs = useRef({});

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setSlideClass(index > currentSlide ? 'slide-from-right' : 'slide-from-left');
    setCurrentSlide(index);
  };

  const stopAllAudio = () => {
    Object.values(audioRefs.current).forEach((el) => {
      if (!el) return;
      try {
        el.pause();
        el.currentTime = 0;
      } catch (_) {
        /* noop */
      }
    });
  };

  const playAudio = (id) => {
    const el = audioRefs.current[id];
    if (!el) return;
    Object.entries(audioRefs.current).forEach(([key, other]) => {
      if (!other || String(key) === String(id)) return;
      try {
        other.pause();
        other.currentTime = 0;
      } catch (_) {
        /* noop */
      }
    });
    try {
      el.currentTime = 0;
      const result = el.play();
      if (result && typeof result.catch === 'function') {
        result.catch(() => {
          /* autoplay blocked or interrupted; safe to ignore */
        });
      }
    } catch (_) {
      /* noop */
    }
  };

  const stopAudio = (id) => {
    const el = audioRefs.current[id];
    if (!el) return;
    try {
      el.pause();
      el.currentTime = 0;
    } catch (_) {
      /* noop */
    }
  };

  useEffect(() => {
    stopAllAudio();
  }, [currentSlide]);

  useEffect(() => {
    return () => stopAllAudio();
  }, []);

  const cards = SLIDES[currentSlide];

  return (
    <>
      <section className="testimonials-section" id={sectionId} ref={sectionRef}>
        <div className="section-container">
          <h2 className="section-headline">
            Trusted by <span className="headline-purple">Forward-Thinking</span> Businesses
          </h2>
          <p className="section-description">
            Our Clients Partner With Us To Solve Complex Challenges, Streamline Operations, And Achieve
            Measurable Results Through Intelligent AI Solutions.
          </p>

          <div className="testimonials-slider-track">
            <div key={currentSlide} className={`testimonials-grid${slideClass ? ` ${slideClass}` : ''}`}>
              {cards.map((card) => {
                const hasAudio = Boolean(card.audio);
                return (
                  <div
                    key={card.id}
                    className="testimonial-card"
                    style={{ backgroundImage: `url(${card.bg})` }}
                    onMouseEnter={hasAudio ? () => playAudio(card.id) : undefined}
                    onMouseLeave={hasAudio ? () => stopAudio(card.id) : undefined}
                    onFocus={hasAudio ? () => playAudio(card.id) : undefined}
                    onBlur={hasAudio ? () => stopAudio(card.id) : undefined}
                  >
                    <img
                      src={apostrophySvg}
                      alt=""
                      className="quote-icon"
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="testimonial-quote">{card.quote}</p>
                    {hasAudio ? (
                      <audio
                        ref={(el) => {
                          if (el) audioRefs.current[card.id] = el;
                          else delete audioRefs.current[card.id];
                        }}
                        src={card.audio}
                        loop
                        preload="auto"
                        aria-hidden="true"
                      />
                    ) : null}
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
