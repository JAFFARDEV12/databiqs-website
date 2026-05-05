import './CaseStudiesSection.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';
import PurpleCTAButton from '../buttons/PurpleCTAButton';


const CASE_STUDIES = [
  {
    tag: 'AI Chatbot',
    title: 'Rebuilding enterprise support with conversational AI triage',
    description: "NovaTech's 14-person support team was overwhelmed. With tickets doubling every quarter and CSAT declining, they needed a smarter approach — not more headcount.",
    metrics: [
      { value: '78%', label: 'Faster First Response' },
      { value: '1.2M', label: 'Annual Savings' },
      { value: '4.8', label: 'CSAT Score' },
    ],
  },
  {
    tag: 'AI Automation',
    title: 'Intelligent workflow orchestration across 14 departments',
    description: 'Manual operations across 14 departments were creating bottlenecks and errors. Our AI orchestration layer connected every system, reducing operational overhead by 45% in 60 days.',
    metrics: [
      { value: '45%', label: 'Cost Reduction' },
      { value: '14', label: 'Departments Connected' },
      { value: '60d', label: 'Time To Deploy' },
    ],
  },
];

const CaseStudiesSection = () => {
  const navigate = useNavigate();
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  const handleReadMore = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('case-studies');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <section className="case-studies-section" id="case-studies" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-headline">
          Proven <span className="headline-purple">Impact</span> through AI Solutions
        </h2>
        <p className="section-description">
          Discover How We Help Forward-Thinking Businesses Solve Complex Challenges, Optimize Operations, And Achieve Measurable Results With Our AI-Driven Solutions.
        </p>

        <div className="case-studies-grid">
          {CASE_STUDIES.map((cs, i) => (
            <div key={i} className="case-study-card">
              <div className="cs-tag">{cs.tag}</div>
              <h3 className="cs-title">{cs.title}</h3>
              <p className="cs-description">{cs.description}</p>
              <div className="cs-metrics">
                {cs.metrics.map((m, j) => (
                  <div key={j} className="cs-metric-box">
                    <span className="cs-metric-value">{m.value}</span>
                    <span className="cs-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
              <button className="cs-cta" onClick={handleReadMore}>
                Read More
                <span className="cs-cta-arrow">
                  <svg className="cs-arrow-svg" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0781 4.78297L7.7372 0.441932C7.61328 0.318017 7.44813 0.25 7.27203 0.25C7.09573 0.25 6.93068 0.318114 6.80676 0.441932L6.41264 0.836154C6.28882 0.959874 6.22061 1.12513 6.22061 1.30133C6.22061 1.47743 6.28882 1.64825 6.41264 1.77197L8.94508 4.30998H0.899383C0.536627 4.30998 0.25 4.59397 0.25 4.95683V5.51415C0.25 5.877 0.536627 6.18963 0.899383 6.18963H8.97381L6.41273 8.74181C6.28892 8.86573 6.2207 9.02648 6.2207 9.20268C6.2207 9.37868 6.28892 9.54179 6.41273 9.6656L6.80686 10.0586C6.93077 10.1825 7.09583 10.25 7.27213 10.25C7.44823 10.25 7.61338 10.1816 7.7373 10.0577L12.0782 5.71673C12.2025 5.59243 12.2708 5.42649 12.2703 5.2501C12.2707 5.07312 12.2025 4.90708 12.0781 4.78297Z" fill="#323232"/>
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="cs-view-all-wrap">
          <PurpleCTAButton text="View All Case Studies" onClick={handleReadMore} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
