import './AIAutomationSection.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import bgTwoRectangles1 from '../../assets/gif/Databiqas-Animation.gif';
import aiAutomationAnimation from '../../assets/Robot-Futuristic-Ai-animated.json';
import Lottie from 'lottie-react';

const AIAutomationSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.05, rootMargin: '220px 0px' });

  return (
    <section className="ai-automation-section" ref={sectionRef}>
      <div className="section-container">
        <div className="automation-card">
          <div className="automation-left">
            <div className="automation-title-row">
              <div className="automation-title-lottie">
                <Lottie animationData={aiAutomationAnimation} loop autoplay 
                 style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <h3 className="automation-title">AI Automation</h3>
            </div>

            <p className="automation-description">
              Automate Workflows Using n8n To Connect Systems, Eliminate Manual Tasks, And Optimize Business Operations.
            </p>
            <div className="capabilities-heading">Key Capabilities:</div>
            <ul className="capabilities-list">
              <li>Custom Workflow Automation</li>
              <li>Seamless System Integration</li>
              <li>Data Synchronization</li>
              <li>Process Optimization</li>
            </ul>
          </div>

          <div className="automation-right">
            <div className="automation-gif-frame">
              <img
                src={bgTwoRectangles1}
                alt="AI automation workflow animation"
                className="automation-gif"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationSection;
