import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Brain, Lightbulb, Workflow } from 'lucide-react';
import './SolutionNeedSection.css';

const SOLUTION_OPTIONS = [
  {
    id: 'automation',
    title: 'AI Automation / Implementation',
    shortLabel: 'AI Automation /\nImplementation',
    description:
      'AI Automation involves the deployment of intelligent systems that automate repetitive tasks, improve operational efficiency, and help businesses implement AI-driven solutions to streamline workflows and reduce manual effort.',
    ctaTo: '/services/ai-automation',
    Icon: Workflow,
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    shortLabel: 'AI Chatbots',
    description:
      'Deploy conversational assistants that resolve support queries, qualify leads, and provide instant responses with context-aware workflows.',
    ctaTo: '/services/ai-chatbots',
    Icon: Bot,
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    shortLabel: 'Machine\nLearning',
    description:
      'Use predictive models to uncover patterns, forecast demand, and enable real-time decisions powered by your business data.',
    ctaTo: '/services/machine-learning',
    Icon: Brain,
  },
  {
    id: 'strategy',
    title: 'AI Strategy',
    shortLabel: 'AI Strategy',
    description:
      'Build a practical AI roadmap that aligns data, technology, and teams so your investments deliver measurable impact and faster adoption.',
    ctaTo: '/services/ai-strategy',
    Icon: Lightbulb,
  },
];

const SolutionNeedSection = () => {
  const sectionRef = useRef(null);
  const cooldownRef = useRef(false);
  const touchStartYRef = useRef(null);
  const [activeId, setActiveId] = useState('automation');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const isSectionInView = () => {
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, viewportH);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      return visibleHeight >= Math.min(rect.height, viewportH) * 0.45;
    };

    const stepCard = (direction) => {
      if (cooldownRef.current || !isSectionInView()) return;
      cooldownRef.current = true;

      setActiveId((currentId) => {
        const currentIndex = Math.max(
          0,
          SOLUTION_OPTIONS.findIndex((item) => item.id === currentId)
        );
        const nextIndex = Math.max(
          0,
          Math.min(SOLUTION_OPTIONS.length - 1, currentIndex + direction)
        );
        return SOLUTION_OPTIONS[nextIndex].id;
      });

      window.setTimeout(() => {
        cooldownRef.current = false;
      }, 420);
    };

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 30) return;
      stepCard(event.deltaY > 0 ? 1 : -1);
    };

    const handleTouchStart = (event) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event) => {
      if (touchStartYRef.current == null) return;
      const currentY = event.touches[0]?.clientY;
      if (typeof currentY !== 'number') return;
      const delta = touchStartYRef.current - currentY;
      if (Math.abs(delta) < 24) return;
      stepCard(delta > 0 ? 1 : -1);
      touchStartYRef.current = currentY;
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = null;
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const activeOption = useMemo(
    () => SOLUTION_OPTIONS.find((item) => item.id === activeId) ?? SOLUTION_OPTIONS[0],
    [activeId]
  );

  return (
    <section ref={sectionRef} className="solution-need-section" aria-labelledby="solution-need-heading">
      <div className="section-container">
        <h2 id="solution-need-heading" className="solution-need__heading">
          What Kind of <span className="headline-purple">Solution</span> Do You Need?
        </h2>
        <p className="solution-need__subheading">
          Assemble your ideal team with top-tier professionals who are passionate about turning
          your vision into reality.
        </p>

        <div className="solution-need__content">
          <div
            className="solution-need__accordion"
            role="tablist"
            aria-label="Solution options. Selection changes when you scroll while this section is visible."
          >
            {SOLUTION_OPTIONS.map((option) => {
              const isActive = option.id === activeId;
              const Icon = option.Icon;

              return (
                <div
                  key={option.id}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={-1}
                  aria-label={
                    isActive ? `${option.title}, selected` : `${option.title}, not selected`
                  }
                  className={`solution-need__tab${isActive ? ' is-active' : ''}`}
                >
                  <span className="solution-need__tab-icon-wrap" aria-hidden="true">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <span className="solution-need__tab-label">
                    {option.shortLabel.split('\n').map((line) => (
                      <span key={`${option.id}-${line}`} className="solution-need__tab-line">
                        {line}
                      </span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>

          <article className="solution-need__detail" aria-live="polite">
            <h3 className="solution-need__detail-title">{activeOption.title}</h3>
            <p className="solution-need__detail-description">{activeOption.description}</p>
            <Link to={activeOption.ctaTo} className="solution-need__cta">
              Book a Consultation
              <span className="solution-need__cta-arrow" aria-hidden="true">
                <svg
                  className="solution-need__arrow-svg"
                  viewBox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0781 4.78297L7.7372 0.441932C7.61328 0.318017 7.44813 0.25 7.27203 0.25C7.09573 0.25 6.93068 0.318114 6.80676 0.441932L6.41264 0.836154C6.28882 0.959874 6.22061 1.12513 6.22061 1.30133C6.22061 1.47743 6.28882 1.64825 6.41264 1.77197L8.94508 4.30998H0.899383C0.536627 4.30998 0.25 4.59397 0.25 4.95683V5.51415C0.25 5.877 0.536627 6.18963 0.899383 6.18963H8.97381L6.41273 8.74181C6.28892 8.86573 6.2207 9.02648 6.2207 9.20268C6.2207 9.37868 6.28892 9.54179 6.41273 9.6656L6.80686 10.0586C6.93077 10.1825 7.09583 10.25 7.27213 10.25C7.44823 10.25 7.61338 10.1816 7.7373 10.0577L12.0782 5.71673C12.2025 5.59243 12.2708 5.42649 12.2703 5.2501C12.2707 5.07312 12.2025 4.90708 12.0781 4.78297Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SolutionNeedSection;
