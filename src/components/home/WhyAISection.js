import './WhyAISection.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const COMPLAINTS = [
  { quote: '"We automated processes, but work is still manual"', sub: 'Efficiency gains never fully materialize.' },
  { quote: '"Our AI works in demos, but not in production"', sub: 'Real-world usage breaks flows and creates friction.' },
  { quote: '"We don\'t know how to turn AI into real business value"', sub: 'Use cases exist but have no path to impact.' },
  { quote: '"We have data, but no intelligence comes from it"', sub: 'Data lakes become expensive data graveyards.' },
  { quote: '"Our product is technically strong, but fails to scale"', sub: 'Architecture decisions limit growth potential.' },
];

const DIFFERENTIATORS = [
  'Architecture-First Thinking - No Shortcuts',
  'Production-Grade AI, Not Demoware',
  'Measurable ROI Aligned To Your KPIs',
  'Embedded Tech Leads, Not Black-Box Vendors',
  'Scale From Startup To Enterprise',
];

const WhyAISection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="why-ai-section" ref={sectionRef}>
      <div className="why-ai-container">
        <h2 className="why-ai-heading">
          Why AI systems <span className="why-ai-purple">looks</span> powerful…<br />
          but don't <span className="why-ai-purple">deliver</span> results
        </h2>
        <p className="why-ai-description">
          Your System Works. The Technology Is Solid. But The Outcome Doesn't Match The Expectation.
        </p>

        <div className="why-ai-grid">
          {/* Left — Complaints */}
          <div className="why-ai-left">
            <div className="why-ai-complaints-heading">
              <span className="why-ai-q-icon">?</span>
              Common Complaints
            </div>
            <div className="why-ai-complaints">
              {COMPLAINTS.map((c, i) => (
                <div key={i} className="why-ai-complaint-card">
                  <p className="complaint-quote">{c.quote}</p>
                  <p className="complaint-sub">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Databiqs Difference */}
          <div className="why-ai-right">
            <p className="diff-label">The Databiqs Difference</p>
            <h3 className="diff-heading">
              We Don't Just Build Technology<br />
              <span className="diff-heading-purple">We Engineer Business Outcomes</span>
            </h3>
            <p className="diff-description">
              Every Engagement Starts With Understanding Your Desired Outcome, Then Reverse-Engineers The Technology To Match. We Stay Until Results Are Proven.
            </p>
            <ul className="diff-list">
              {DIFFERENTIATORS.map((d, i) => (
                <li key={i} className="diff-list-item">
                  <span className="diff-check">✔</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;
