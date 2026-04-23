import React from 'react';
import './NumbersStatsSection.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const STATS = [
  { value: '99.9%', label: 'UPTIME ARCHITECTURE' },
  { value: '140+', label: 'GLOBAL DEPLOYEMENTS' },
  { value: '$1M', label: 'CLIENT REV. IMPACT' },
  { value: '12MS', label: 'AVG LATENCY REDUC.' },
];

const NumbersStatsSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="numbers-stats-section" aria-label="Key metrics" ref={sectionRef}>
      <div className="numbers-stats-section__wrap">
        <div className="numbers-stats-card">
          {STATS.map((item) => (
            <div key={item.label} className="numbers-stat">
              <div className="numbers-stat__value">{item.value}</div>
              <div className="numbers-stat__label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersStatsSection;
