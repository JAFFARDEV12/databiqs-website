import React from 'react';
import { Link } from 'react-router-dom';
import './InsightsSection.css';
import arrowIcon from '../../assets/rightarrow.svg';
import leftImage from '../../assets/insights&innovationsection left image how ai chatbots...png';
import topRightImage from '../../assets/insights & innovationrightabove image automating buiness....png';
import bottomRightImage from '../../assets/insights&innovations bottom rihg timage transforming customer....png';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const InsightsSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  const articles = [
    {
      id: 1,
      image: leftImage,
      title: 'How AI Chatbots Are Redefining Enterprise Customer Support',
      date: 'September 04, 2025',
      readTime: '12 Minutes',
      isLarge: true,
      position: 'left'
    },
    {
      id: 2,
      image: topRightImage,
      title: 'Automating Business Workflows with n8n: A Smarter Way to Scale',
      description: 'Explore how intelligent chatbots are revolutionizing customer support...',
      date: 'September 04, 2025',
      readTime: '12 Minutes',
      isLarge: false,
      position: 'right-top'
    },
    {
      id: 3,
      image: bottomRightImage,
      title: 'Transforming Customer Engagement With AI Chatbots',
      description: 'Explore how intelligent chatbots are revolutionizing customer support...',
      date: 'September 04, 2025',
      readTime: '12 Minutes',
      isLarge: false,
      position: 'right-bottom'
    }
  ];

  return (
    <section className="insights-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-tag">Insights & Innovation</div>
        <h2 className="section-headline">THOUGHT LEADERSHIP & INSIGHTS</h2>
        <p className="section-description">
          Explore In-Depth Articles And Expert Analysis On AI, Automation, And Technology Strategies Shaping The Future Of Business.
        </p>

        <div className="insights-grid">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className={`insight-card ${article.isLarge ? 'large-card' : 'small-card'}`}
            >
              <div className="insight-image-container">
                <img src={article.image} alt={article.title} className="insight-image" />
              </div>
              <div className="insight-content">
                <h3 className="insight-title">{article.title}</h3>
                {article.description && (
                  <p className="insight-description">{article.description}</p>
                )}
                <div className="insight-meta">
                  <span className="insight-date">{article.date}</span>
                  <span className="insight-separator">•</span>
                  <span className="insight-read-time">{article.readTime}</span>
                </div>
                <Link to={`/blog-detail/${article.id}`} className="insight-cta">
                  <span className="insight-cta-text">Read Full Blog</span>
                  <span className="insight-cta-arrow">
                    <img src={arrowIcon} alt="Arrow" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
