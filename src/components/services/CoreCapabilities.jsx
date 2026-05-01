// CoreCapabilities.jsx
import React from 'react';
import './CoreCapabilities.css';
import AIAutomation from '../../assets/gif/ai-automation.json'
import AIChatbot from '../../assets/gif/ai-chatbot.json'
import AIMachineLearning from '../../assets/gif/machine-learning.json'
import AIStrategy from '../../assets/gif/ai-strategry.json'
import Lottie from 'lottie-react';
const capabilities = [
  {
    
    id: 1,
    animationData: AIChatbot,
    themeClass: 'core-card--chatbot',
    title: 'AI Chatbots',
    desc: 'Intelligent conversational interfaces that understand context, resolve complex queries, and integrate seamlessly with your CRM.',
    features: ['24/7 Availability', 'Multi-language', 'CRM Integration']
  },
  {
    id: 2,
    animationData: AIAutomation,
    themeClass: 'core-card--automation',
    title: 'AI Automation',
    desc: 'End-to-end intelligent process automation. Streamline operations, reduce manual errors, and accelerate throughput.',
    features: ['Workflow Optimization', 'Cost Reduction', 'Scalable']
  },
  {
    id: 3,
    animationData: AIMachineLearning,
    themeClass: 'core-card--ml',
    title: 'Machine Learning',
    desc: 'Predictive models and deep learning algorithms trained on your proprietary data to uncover hidden insights and forecast trends.',
    features: ['Predictive Analytics', 'Pattern Recognition', 'Real-time Insights']
  },
  {
    id: 4,
    animationData: AIStrategy,
    themeClass: 'core-card--strategy',
    title: 'AI Strategy',
    desc: 'Comprehensive roadmaps for AI adoption. We assess readiness, identify high-impact use cases, and architect scalable solutions.',
    features: ['Roadmap Planning', 'ROI Analysis', 'Implementation Support']
  }
];

const Card = ({ capability }) => {
  return (
    <article className={`core-card ${capability.themeClass}`}>
      <div className="core-card__animation">
        <Lottie
          className="service-lottie"
          animationData={capability.animationData}
          loop
          autoplay
        />
      </div>
      <h3 className="core-card__title">{capability.title}</h3>
      <p className="core-card__desc">{capability.desc}</p>
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
      <button className="core-card__link">
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
          {capabilities.map((capability) => (
            <Card key={capability.id} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;