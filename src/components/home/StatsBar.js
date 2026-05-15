import React, { useState } from 'react';
import './StatsBar.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { assetUrl } from '../../utils/assetUrl';

const trustedIcon = assetUrl('assets/trust.svg');
const satisfactionIcon = assetUrl('assets/satisfaction.svg');
const experienceIcon = assetUrl('assets/excellence.svg');
const starIcon = assetUrl('assets/star.svg');

const StatsBar = () => {
  const [isPaused, setIsPaused] = useState(false);
  const stats = [
    { text: 'TRUSTED BY 1,500+ CLIENTS', icon: trustedIcon },
    { text: '98% CLIENT SATISFACTION', icon: satisfactionIcon },
    { text: '12 YEARS OF INDUSTRY EXCELLENCE', icon: experienceIcon },
  ];

  const sectionRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      className={`stats-bar-section${isPaused ? ' is-paused' : ''}`}
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
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
