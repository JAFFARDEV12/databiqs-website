import LottieFromCdn from '../LottieFromCdn';

const SERVICE_CHIPS = [
  { id: 'ai-chatbots', label: 'AI Chatbots' },
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'ai-automation', label: 'AI Automation' },
  { id: 'ai-consulting', label: 'AI Consulting' },
];

const ServicesHeroScene = ({ activeService = 'ai-chatbots' }) => {
  const active = SERVICE_CHIPS.find((chip) => chip.id === activeService);
  const modeLabel = active ? active.label : 'AI Services';

  return (
    <div className="services-hero__visual" role="img" aria-label="AI services collaboration animation">
      <div className="services-hero__lottie-wrap">
        <LottieFromCdn path="assets/gif/Services.json" className="services-hero__lottie" loop autoplay />
      </div>

      <span className="services-hero__visual-badge">{modeLabel}</span>
    </div>
  );
};

export default ServicesHeroScene;
