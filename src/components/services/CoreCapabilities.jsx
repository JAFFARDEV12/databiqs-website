import React from 'react';
import './CoreCapabilities.css';
import {
  MessageSquare,
  Workflow,
  Brain,
  Target
} from 'lucide-react';
import arrowRight from '../../assets/gif/arrow.svg';

const capabilities = [
  {
    id: 1,
    icon: MessageSquare,
    title: 'AI Chatbots',
    desc: 'Intelligent conversational interfaces that understand context, resolve complex queries, and integrate seamlessly with your CRM.'
  },
  {
    id: 2,
    icon: Workflow,
    title: 'AI Automation',
    desc: 'End-to-end intelligent process automation. Streamline operations, reduce manual errors, and accelerate throughput.'
  },
  {
    id: 3,
    icon: Brain,
    title: 'Machine Learning',
    desc: 'Predictive models and deep learning algorithms trained on your proprietary data to uncover hidden insights and forecast trends.'
  },
  {
    id: 4,
    icon: Target,
    title: 'AI Strategy',
    desc: 'Comprehensive roadmaps for AI adoption. We assess readiness, identify high-impact use cases, and architect scalable solutions.'
  }
];

const CoreCapabilities = () => {
  return (
    <section className="core-capabilities">
      <div className="core-capabilities__container">
        <div className="core-capabilities__top">
          <h2 className="core-capabilities__title">
            CORE CAPABILITIES
          </h2>

          <p className="core-capabilities__subtitle">
            Specialized intelligence modules engineered for
            enterprise scale and precision.
          </p>
        </div>

        <div className="core-capabilities__grid">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="core-card"
                key={item.id}
              >
                <div className="core-card__icon">
                  <Icon size={18} strokeWidth={2.2} />
                </div>

                <h3 className="core-card__title">
                  {item.title}
                </h3>

                <p className="core-card__desc">
                  {item.desc}
                </p>

                <button className="core-card__link">
                  Learn More
                  <span><img src={arrowRight} alt="Arrow" /></span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;