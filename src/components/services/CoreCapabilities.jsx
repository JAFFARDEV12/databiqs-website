// CoreCapabilities.jsx
import React, { useRef, useState } from 'react';
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

const Card = ({ capability, onServiceHover, onServiceLeave }) => {
  const navigate = useNavigate();
  const lottieRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`core-card ${capability.themeClass}${hovered ? ' is-hovered' : ''}`}
      data-service={capability.slug}
      onMouseEnter={() => {
        setHovered(true);
        lottieRef.current?.setSpeed?.(1.75);
        onServiceHover?.(capability.slug);
      }}
      onMouseLeave={() => {
        setHovered(false);
        lottieRef.current?.setSpeed?.(1);
        onServiceLeave?.();
      }}
      onFocus={() => onServiceHover?.(capability.slug)}
      onBlur={() => onServiceLeave?.()}
    >
      <div className="core-card__animation">
        <span className={`core-card__fx core-card__fx--${capability.slug}`} aria-hidden="true" />
        <Lottie
          lottieRef={lottieRef}
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
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <button
        type="button"
        className="core-card__link"
        onClick={() => navigate(`/services/${capability.slug}`)}
        aria-label={`Read more about ${capability.title}`}
      >
        Read More
        <span className="core-card__link-arrow" aria-hidden="true">
          <svg
            className="core-card__arrow-svg"
            viewBox="0 0 13 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0781 4.78297L7.7372 0.441932C7.61328 0.318017 7.44813 0.25 7.27203 0.25C7.09573 0.25 6.93068 0.318114 6.80676 0.441932L6.41264 0.836154C6.28882 0.959874 6.22061 1.12513 6.22061 1.30133C6.22061 1.47743 6.28882 1.64825 6.41264 1.77197L8.94508 4.30998H0.899383C0.536627 4.30998 0.25 4.59397 0.25 4.95683V5.51415C0.25 5.877 0.536627 6.18963 0.899383 6.18963H8.97381L6.41273 8.74181C6.28892 8.86573 6.2207 9.02648 6.2207 9.20268C6.2207 9.37868 6.28892 9.54179 6.41273 9.6656L6.80686 10.0586C6.93077 10.1825 7.09583 10.25 7.27213 10.25C7.44823 10.25 7.61338 10.1816 7.7373 10.0577L12.0782 5.71673C12.2025 5.59243 12.2708 5.42649 12.2703 5.2501C12.2707 5.07312 12.2025 4.90708 12.0781 4.78297Z"
              fill="#7B2CBF"
            />
          </svg>
        </span>
      </button>
    </article>
  );
};

const CoreCapabilities = ({ onServiceHover, onServiceLeave }) => {
  return (
    <section className="core-capabilities">
      <div className="core-capabilities__container">
        <div className="core-capabilities__top">
          <h2 className="core-capabilities__title">
            CORE CAPABILITIES
          </h2>
          <p className="core-capabilities__subtitle">
            Specialized intelligence modules engineered for enterprise scale and precision.
            Each solution is tailored to your unique business needs.
          </p>
        </div>

        <div className="core-capabilities__grid">
          {services.map((capability) => (
            <Card
              key={capability.id}
              capability={capability}
              onServiceHover={onServiceHover}
              onServiceLeave={onServiceLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;