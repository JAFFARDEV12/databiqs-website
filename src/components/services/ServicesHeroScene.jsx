import { useMemo } from 'react';
import Lottie from 'lottie-react';
import servicesAnimation from '../../assets/gif/Services.json';

const SERVICE_CHIPS = [
  { id: 'ai-chatbots', label: 'AI Chatbots' },
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'ai-automation', label: 'AI Automation' },
  { id: 'ai-strategy', label: 'AI Strategy' },
];

const ServicesHeroScene = ({ activeService = 'ai-chatbots' }) => {
  const modeLabel = useMemo(() => {
    const active = SERVICE_CHIPS.find((chip) => chip.id === activeService);
    return active ? active.label : 'AI Services';
  }, [activeService]);

  const horizontalChips = [...SERVICE_CHIPS, ...SERVICE_CHIPS];
  const verticalChips = [...SERVICE_CHIPS, ...SERVICE_CHIPS];

  return (
    <div className="services-hero__visual" role="img" aria-label="AI services collaboration animation">
      <div className="services-hero__lottie-wrap">
        <Lottie className="services-hero__lottie" animationData={servicesAnimation} loop autoplay />
      </div>


      <span className="services-hero__visual-badge">{modeLabel}</span>
    </div>
  );
};

export default ServicesHeroScene;
