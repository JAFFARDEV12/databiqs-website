// CoreCapabilities.jsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import './CoreCapabilities.css';

const capabilities = [
  {
    id: 1,
    iconType: 'chatbot',
    title: 'AI Chatbots',
    desc: 'Intelligent conversational interfaces that understand context, resolve complex queries, and integrate seamlessly with your CRM.',
    features: ['24/7 Availability', 'Multi-language', 'CRM Integration']
  },
  {
    id: 2,
    iconType: 'automation',
    title: 'AI Automation',
    desc: 'End-to-end intelligent process automation. Streamline operations, reduce manual errors, and accelerate throughput.',
    features: ['Workflow Optimization', 'Cost Reduction', 'Scalable']
  },
  {
    id: 3,
    iconType: 'ml',
    title: 'Machine Learning',
    desc: 'Predictive models and deep learning algorithms trained on your proprietary data to uncover hidden insights and forecast trends.',
    features: ['Predictive Analytics', 'Pattern Recognition', 'Real-time Insights']
  },
  {
    id: 4,
    iconType: 'strategy',
    title: 'AI Strategy',
    desc: 'Comprehensive roadmaps for AI adoption. We assess readiness, identify high-impact use cases, and architect scalable solutions.',
    features: ['Roadmap Planning', 'ROI Analysis', 'Implementation Support']
  }
];

const ServiceIcon = ({ type }) => {
  if (type === 'chatbot') {
    return (
      <svg className="service-anim service-anim--chatbot" viewBox="0 0 120 120" fill="none" aria-hidden>
        <rect x="24" y="26" width="72" height="50" rx="14" className="service-stroke" />
        <path d="M40 90L54 76H82" className="service-stroke" />
        <circle cx="46" cy="50" r="4" className="service-dot" />
        <circle cx="60" cy="50" r="4" className="service-dot service-dot--mid" />
        <circle cx="74" cy="50" r="4" className="service-dot service-dot--end" />
      </svg>
    );
  }

  if (type === 'automation') {
    return (
      <svg className="service-anim service-anim--automation" viewBox="0 0 120 120" fill="none" aria-hidden>
        <circle cx="60" cy="60" r="18" className="service-stroke service-gear" />
        <path d="M60 32V24M60 96V88M88 60H96M24 60H32M80 40L86 34M34 86L40 80M80 80L86 86M34 34L40 40" className="service-stroke service-spokes" />
        <path d="M52 60H68M60 52V68" className="service-stroke" />
      </svg>
    );
  }

  if (type === 'ml') {
    return (
      <svg className="service-anim service-anim--ml" viewBox="0 0 120 120" fill="none" aria-hidden>
        <circle cx="30" cy="70" r="6" className="service-node" />
        <circle cx="60" cy="48" r="6" className="service-node service-node--mid" />
        <circle cx="90" cy="66" r="6" className="service-node service-node--end" />
        <path d="M36 68L54 52M66 52L84 62" className="service-stroke" />
        <path d="M26 88C38 96 52 98 66 90C77 84 86 86 96 92" className="service-wave" />
      </svg>
    );
  }

  return (
    <svg className="service-anim service-anim--strategy" viewBox="0 0 120 120" fill="none" aria-hidden>
      <circle cx="60" cy="60" r="30" className="service-stroke" />
      <circle cx="60" cy="60" r="18" className="service-stroke" />
      <circle cx="60" cy="60" r="6" className="service-dot" />
      <path d="M60 18V8M102 60H112M60 102V112M18 60H8" className="service-stroke service-sweep" />
    </svg>
  );
};

const Card = ({ capability, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.article
      ref={ref}
      className={`core-card ${isHovered ? 'hovered' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="core-card__animation">
        <ServiceIcon type={capability.iconType} />
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
      <motion.button 
        className="core-card__link"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Learn More
        <span className="core-card__link-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </motion.button>
      <div className="core-card__glow"></div>
    </motion.article>
  );
};

const CoreCapabilities = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="core-capabilities" ref={sectionRef}>
      <div className="core-capabilities__container">
        <motion.div 
          className="core-capabilities__top"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="core-capabilities__title">
            CORE CAPABILITIES
            <span className="title-underline"></span>
          </h2>
          <p className="core-capabilities__subtitle">
            Specialized intelligence modules engineered for enterprise scale and precision.
            Each solution is tailored to your unique business needs.
          </p>
        </motion.div>

        <div className="core-capabilities__grid">
          {capabilities.map((capability, idx) => (
            <Card key={capability.id} capability={capability} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;