
import './HeroSection.css';
import triangleImage from '../../assets/Triangle-herosection-revoleaboverectangle.png';
import rectangleImage from '../../assets/herosection-rectangle-rightside.png';
import arrowIcon from '../../assets/rightarrow.svg';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const HeroSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  

 
  return (
    <section className="hero-section" ref={sectionRef}>

     {/*  <div className="animatecostume">
    <Lottie
      animationData={costumeanimation}
      loop
      style={{ width: '100%', height: '100%' }}
    />
  </div> */}
       
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">AI-Powered Innovation</div>
          <h1 className="hero-headline">
            PUSHING THE BOUNDARIES OF{' '}
            <span className="technology-highlight">TECHNOLOGY</span>{' '}
            <span className="innovation-text">& INNOVATION</span>
          </h1>
          <h2 className="hero-subheadline">
            Unleashing Limitless Innovation For A Smarter Future.
          </h2>
          <p className="hero-description">
            Empowering Businesses With Cutting-Edge AI Solutions,<br />
            Intelligent Chatbots, And Seamless Automation Workflows.
          </p>
          <div className="hero-cta-group">
            <button className="hero-cta hero-cta-primary">
              Book a Consultation
              <span className="cta-icon">
                <img src={arrowIcon} alt="Arrow" />
              </span>
            </button>
            <button className="hero-cta hero-cta-secondary">
              View Case Studies
              <span className="cta-icon">
                <img src={arrowIcon} alt="Arrow" />
              </span>
            </button>
          </div>
        </div>
      <div className="hero-illustration">
          <img src={triangleImage} alt="Triangle" className="triangle-bg" />
          <div className="hero-cards">
            <div className="hero-card top-card">
              <h3>Chatbots & Customer Support</h3>
              <p>AI-Driven Customer Interaction Solutions Enhancing Efficiency And Scalability.</p>
            </div>
            <div className="hero-card bottom-card">
              <h3>AI Automation</h3>
              <p>Automate Workflows Using NBN For Efficient Business Operations.</p>
            </div>
          </div>
          <img src={rectangleImage} alt="Rectangle" className="rectangle-bg" />
        </div> 
        
      </div>
      <div className="scroll-indicator">
       
      </div>
    

    </section>
  );
};

export default HeroSection;
