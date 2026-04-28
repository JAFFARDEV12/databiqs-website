import React from 'react';
import './StatsBar.css';
import trustedIcon from '../../assets/trust.svg';
import satisfactionIcon from '../../assets/satisfaction.svg';
import experienceIcon from '../../assets/excellence.svg';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import starIcon from '../../assets/star.svg';

const StatsBar = () => {
  const stats = [
    { text: 'TRUSTED BY 1,500+ CLIENTS', icon: trustedIcon },
    { text: '98% CLIENT SATISFACTION', icon: satisfactionIcon },
    { text: '12 YEARS OF INDUSTRY EXCELLENCE', icon: experienceIcon },
  ];

  const sectionRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="stats-bar-section" ref={sectionRef}>
      <div className="stats-bar-container">
        <div className="stats-bar-track">
          {[0, 1, 2, 3].map((groupIdx) => (
            <div className="stats-bar-group" key={groupIdx}>
              {stats.map((stat, index) => (
                <React.Fragment key={`${groupIdx}-${index}`}>
                  <div className="stat-item">
                    <img src={stat.icon} alt={stat.text} className="stat-icon" />
                    <span className="stat-text">{stat.text}</span>
                  </div>
                  <span className="stat-divider">
                    <img src={starIcon} alt="divider star" className="star-icon" />
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
