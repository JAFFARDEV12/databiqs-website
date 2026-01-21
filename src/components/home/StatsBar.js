import React from 'react';
import './StatsBar.css';
import trustedIcon from '../../assets/trusted by 1500+ clients.png';
import satisfactionIcon from '../../assets/client satisfaction icon.png';
import experienceIcon from '../../assets/12 years of industry experience icon.png';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const StatsBar = () => {
  const stats = [
    { text: 'TRUSTED BY 1,500+ CLIENTS', icon: trustedIcon },
    { text: '98% CLIENT SATISFACTION', icon: satisfactionIcon },
    { text: '12 YEARS OF INDUSTRY EXCELLENCE', icon: experienceIcon },
  ];

  // Duplicate items for seamless loop
  const duplicatedStats = [...stats, ...stats, ...stats];

  const sectionRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="stats-bar-section" ref={sectionRef}>
      <div className="stats-bar-container">
        <div className="stats-bar-track">
          {duplicatedStats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="stat-item">
                <img src={stat.icon} alt={stat.text} className="stat-icon" />
                <span className="stat-text">{stat.text}</span>
              </div>
              {index < duplicatedStats.length - 1 && (
                <span className="stat-divider">★</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
