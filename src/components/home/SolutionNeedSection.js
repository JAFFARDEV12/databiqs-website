import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Brain, Lightbulb, Workflow } from 'lucide-react';
import './SolutionNeedSection.css';
import { assetUrl } from '../../utils/assetUrl';

const videoChatbots = assetUrl('assets/8501993-uhd_2160_3840_25fps.mp4');
const videoMl = assetUrl('assets/8328106-uhd_2160_3840_25fps.mp4');
const videoStrategy = assetUrl('assets/7688618-uhd_2160_4096_24fps.mp4');
const videoThirdCard = assetUrl('assets/14945650_2160_3840_25fps.mp4');


const SOLUTION_OPTIONS = [
  {
    id: 'automation',
    title: 'AI Automation / Implementation',
    shortLabel: 'AI Automation /\nImplementation',
    subheading:
      'End-to-end automation that connects your tools, data, and teams so repetitive work runs reliably in production - not just in a demo.',
    bullets: [
      'Cross-team workflow automation',
      'Reliable API integrations',
      'Audit-ready process controls',
      'Measurable operational outcomes',
    ],
    ctaTo: '/services/ai-automation',
    Icon: Workflow,
    videoSrc: videoMl,
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    shortLabel: 'AI Chatbots',
    subheading:
      'Conversational experiences that understand context, respect policies, and escalate cleanly when a human needs to take over.',
    bullets: [
      'Context-aware customer responses',
      'Smart intent routing',
      'Secure policy-compliant handling',
      'Continuous quality optimization',
    ],
    ctaTo: '/services/ai-chatbots',
    Icon: Bot,
    videoSrc: videoChatbots,
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    shortLabel: 'Machine\nLearning',
    subheading:
      'Models and pipelines that turn historical and streaming data into forecasts, rankings, and decisions your teams can trust.',
    bullets: [
      'Forecasting and predictions',
      'Robust model pipelines',
      'Governance and compliance',
      'Production-ready deployment cycles',
    ],
    ctaTo: '/services/machine-learning',
    Icon: Brain,
    videoSrc: videoThirdCard,
  },
  {
    id: 'strategy',
    title: 'AI Consulting',
    shortLabel: 'AI Consulting',
    subheading:
      'Strategic AI consulting designed to help organizations identify high-impact opportunities, align AI initiatives with business goals, and build scalable transformation roadmaps. ',
    bullets: [
      'AI Readiness & Opportunity Assessment',
      'AI Transformation Roadmaps',
      'Use-Case Prioritization & ROI Planning',
      'Process & Workflow Analysis',
    ],
    ctaTo: '/services/ai-consulting',
    Icon: Lightbulb,
    videoSrc: videoStrategy,
  },
];

const AUTO_ADVANCE_MS = 3000;

const SolutionNeedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringCards, setIsHoveringCards] = useState(false);
  const [isClickPaused, setIsClickPaused] = useState(false);

  useEffect(() => {
    if (isHoveringCards || isClickPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SOLUTION_OPTIONS.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [isHoveringCards, isClickPaused]);

  const activeOption = SOLUTION_OPTIONS[activeIndex] ?? SOLUTION_OPTIONS[0];

  return (
    <>
      <div className="solution-need-pin-intro">
        <section className="solution-need-section" aria-labelledby="solution-need-heading">
          <div className="section-container">
            <h2 id="solution-need-heading" className="solution-need__heading">
              What Kind of <span className="headline-purple">Solution</span> Do You Need?
            </h2>
            <p className="solution-need__subheading">
              Assemble your ideal team with top-tier professionals who are passionate about turning your vision into reality. Whether you&apos;re seeking AI specialists, mobile app developers, or end-to-end full-stack expertise, we have the perfect talent to match your project&apos;s requirements.
            </p>
          </div>
        </section>
      </div>

      <section
        className="solution-need-section solution-need-section--pin-body"
        aria-label="Solution options. Cards auto-advance every 4 seconds."
      >
        <div className="section-container">
          <div className="solution-need__content">
            <div
              className="solution-need__accordion"
              role="tablist"
              aria-label="Solution options. Cards auto-advance every 4 seconds."
              onMouseEnter={() => setIsHoveringCards(true)}
              onMouseLeave={() => {
                setIsHoveringCards(false);
                setIsClickPaused(false);
              }}
            >
              {SOLUTION_OPTIONS.map((option, optionIndex) => {
                const isActive = optionIndex === activeIndex;
                const Icon = option.Icon;

                return (
                  <button
                    key={option.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    aria-label={
                      isActive ? `${option.title}, selected` : `${option.title}, not selected`
                    }
                    className={`solution-need__tab${isActive ? ' is-active' : ''}`}
                    onClick={() => {
                      setActiveIndex(optionIndex);
                      setIsClickPaused(true);
                    }}
                  >
                    <video
                      className="solution-need__tab-video"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                    >
                      <source src={option.videoSrc} type="video/mp4" />
                    </video>
                    <div className="solution-need__tab-darken" aria-hidden="true" />
                    <div className="solution-need__tab-overlay" aria-hidden="true" />
                    <span className="solution-need__tab-icon-wrap" aria-hidden="true">
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <span className="solution-need__tab-label">
                      {option.shortLabel.split('\n').map((line) => (
                        <span key={`${option.id}-${line}`} className="solution-need__tab-line">
                          {line}
                        </span>
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>

            <article className="solution-need__detail" aria-live="polite">
              <h3 className="solution-need__detail-title">{activeOption.title}</h3>
              <p className="solution-need__detail-subheading">{activeOption.subheading}</p>
              <ul className="solution-need__detail-bullets">
                {activeOption.bullets.map((item, idx) => (
                  <li key={`${activeOption.id}-${idx}`}>{item}</li>
                ))}
              </ul>
              <Link to={activeOption.ctaTo} className="solution-need__cta">
                View Details
                <span className="solution-need__cta-arrow" aria-hidden="true">
                  <svg
                    className="solution-need__arrow-svg"
                    viewBox="0 0 13 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0781 4.78297L7.7372 0.441932C7.61328 0.318017 7.44813 0.25 7.27203 0.25C7.09573 0.25 6.93068 0.318114 6.80676 0.441932L6.41264 0.836154C6.28882 0.959874 6.22061 1.12513 6.22061 1.30133C6.22061 1.47743 6.28882 1.64825 6.41264 1.77197L8.94508 4.30998H0.899383C0.536627 4.30998 0.25 4.59397 0.25 4.95683V5.51415C0.25 5.877 0.536627 6.18963 0.899383 6.18963H8.97381L6.41273 8.74181C6.28892 8.86573 6.2207 9.02648 6.2207 9.20268C6.2207 9.37868 6.28892 9.54179 6.41273 9.6656L6.80686 10.0586C6.93077 10.1825 7.09583 10.25 7.27213 10.25C7.44823 10.25 7.61338 10.1816 7.7373 10.0577L12.0782 5.71673C12.2025 5.59243 12.2708 5.42649 12.2703 5.2501C12.2707 5.07312 12.2025 4.90708 12.0781 4.78297Z"
                      fill="#2D2140"
                    />
                  </svg>
                </span>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionNeedSection;
