import './HowDatabiqsSection.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SearchCode, Compass, RefreshCw } from 'lucide-react';

const CARDS = [
  {
    Icon: SearchCode,
    title: '1. Audit',
    description: 'Identifying bottlenecks in existing data pipelines and legacy systems to determine high-ROI AI integration points.',
  },
  {
    Icon: Compass,
    title: '2. Architecture',
    description: 'Designing resilient, scaleable infrastructures that support real-time processing and ensure enterprise-grade security.',
  },
  {
    Icon: RefreshCw,
    title: '3. Automation',
    description: 'Operationalizing AI models within your business processes to eliminate manual work and drive continuous optimization.',
  },
];

const HowDatabiqsSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="how-databiqs-section" ref={sectionRef}>
      <div className="how-databiqs-container">
        <h2 className="how-databiqs-heading">
          How <span className="how-databiqs-purple">Databiqs</span> can help?
        </h2>
        <p className="how-databiqs-description">
          We move AI out of the lab and into production. Our strategic approach ensures that complex technological systems are architected for scale, deeply integrated into your workflows, and designed to deliver measurable business impact.
        </p>

        <div className="how-databiqs-grid">
          {CARDS.map((card, i) => (
            <div key={i} className="how-databiqs-card">
              <div className="hd-corner-accent" />
              <div className="hd-icon-box">
                <card.Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="hd-card-title">{card.title}</h3>
              <p className="hd-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowDatabiqsSection;
