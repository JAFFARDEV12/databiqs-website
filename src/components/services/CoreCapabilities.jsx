// CoreCapabilities.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CoreCapabilities.css';
import AIAutomation from '../../assets/gif/ai-automation.json'
import AIChatbot from '../../assets/gif/ai-chatbot.json'
import AIMachineLearning from '../../assets/gif/machine-learning.json'
import AIStrategy from '../../assets/gif/ai-strategry.json'
import Lottie from 'lottie-react';
import { services } from './serviceData';

const animationBySlug = {
  "ai-chatbots": AIChatbot,
  "ai-automation": AIAutomation,
  "machine-learning": AIMachineLearning,
  "ai-strategy": AIStrategy,
};

const Card = ({ capability }) => {
  const navigate = useNavigate();

  return (
    <article className={`core-card ${capability.themeClass}`}>
      <div className="core-card__animation">
        <Lottie
          className="service-lottie"
          animationData={animationBySlug[capability.slug]}
          loop
          autoplay
        />
      </div>
      <h3 className="core-card__title">{capability.title}</h3>
      <p className="core-card__desc">{capability.shortDescription}</p>
      <ul className="core-card__features">
        {capability.features.map((feature, i) => (
          <li key={i}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="#9c16c8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className="core-card__link"
        onClick={() => navigate(`/services/${capability.slug}`)}
        aria-label={`Learn more about ${capability.title}`}
      >
        Learn More
        <span className="core-card__link-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className="core-card__glow"></div>
    </article>
  );
};

const CoreCapabilities = () => {
  return (
    <section className="core-capabilities">
      <div className="core-capabilities__container">
        <div className="core-capabilities__top">
          <h2 className="core-capabilities__title">
            CORE CAPABILITIES
            <span className="title-underline"></span>
          </h2>
          <p className="core-capabilities__subtitle">
            Specialized intelligence modules engineered for enterprise scale and precision.
            Each solution is tailored to your unique business needs.
          </p>
        </div>

        <div className="core-capabilities__grid">
          {services.map((capability) => (
            <Card key={capability.id} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;