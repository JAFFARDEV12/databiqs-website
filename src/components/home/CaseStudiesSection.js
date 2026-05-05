import './CaseStudiesSection.css';
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import PurpleCTAButton from '../buttons/PurpleCTAButton';

const DEFAULT_CASE_STUDIES = [
  {
    id: 'novatech',
    tag: 'AI Chatbot',
    title: 'Rebuilding enterprise support with conversational AI triage',
    description:
      "NovaTech's 14-person support team was overwhelmed. With tickets doubling every quarter and CSAT declining, they needed a smarter approach — not more headcount.",
    metrics: [
      { value: '78%', label: 'Faster First Response' },
      { value: '1.2M', label: 'Annual Savings' },
      { value: '4.8', label: 'CSAT Score' },
    ],
  },
  {
    tag: 'AI Automation',
    title: 'Intelligent workflow orchestration across 14 departments',
    description:
      'Manual operations across 14 departments were creating bottlenecks and errors. Our AI orchestration layer connected every system, reducing operational overhead by 45% in 60 days.',
    metrics: [
      { value: '45%', label: 'Cost Reduction' },
      { value: '14', label: 'Departments Connected' },
      { value: '60d', label: 'Time To Deploy' },
    ],
    href: '/case-studies/workflow-14',
  },
];

const defaultHeadline = (
  <>
    Proven <span className="headline-purple">Impact</span> through AI Solutions
  </>
);

const defaultDescription =
  'Discover How We Help Forward-Thinking Businesses Solve Complex Challenges, Optimize Operations, And Achieve Measurable Results With Our AI-Driven Solutions.';

/**
 * Home: default copy + two cards + “View all” scroll behavior (tinted container).
 * Case Studies page: pass `containerSurface="white"`, `cases`, filters, etc.
 */
const CaseStudiesSection = ({
  sectionId = 'case-studies',
  headline = defaultHeadline,
  description = defaultDescription,
  cases: casesProp,
  filterOptions = null,
  pageSize = null,
  showViewAllButton = true,
  /** `'tint'` = lavender panel (Home). `'white'` = Case Studies /case-studies route. */
  containerSurface = 'tint',
} = {}) => {
  const navigate = useNavigate();
  const sectionRef = useScrollAnimation({ threshold: 0.2 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [page, setPage] = useState(0);

  const baseCases = casesProp ?? DEFAULT_CASE_STUDIES;

  const filtered = useMemo(() => {
    if (!filterOptions || !filterOptions.length) return baseCases;
    if (activeFilter === 'All') return baseCases;
    return baseCases.filter((c) => (c.filterKey ?? c.tag ?? c.category) === activeFilter);
  }, [baseCases, activeFilter, filterOptions]);

  const totalPages = pageSize ? Math.max(1, Math.ceil(filtered.length / pageSize)) : 1;

  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, totalPages - 1)));
  }, [totalPages]);

  const pageSafe = Math.min(page, totalPages - 1);
  const visible = pageSize
    ? filtered.slice(pageSafe * pageSize, pageSafe * pageSize + pageSize)
    : filtered;

  const handleReadMore = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('case-studies');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const setFilter = (label) => {
    setActiveFilter(label);
    setPage(0);
  };

  const showFilters = Array.isArray(filterOptions) && filterOptions.length > 0;
  const showPagination = Boolean(pageSize) && totalPages > 1;

  return (
    <section
      className="case-studies-section"
      id={sectionId || undefined}
      ref={sectionRef}
    >
      <div
        className={`section-container${
          containerSurface === 'white' ? ' section-container--surface-white' : ''
        }`}
      >
        <h2 className="section-headline">{headline}</h2>
        <p className="section-description">{description}</p>

        {showFilters ? (
          <div
            className="cs-filter-row"
            role="tablist"
            aria-label="Filter case studies"
          >
            {filterOptions.map((label) => (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={activeFilter === label}
                className={`cs-filter-pill${activeFilter === label ? ' is-active' : ''}`}
                onClick={() => setFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>
        ) : null}

        <div className="case-studies-grid">
          {visible.map((cs, i) => {
            const tag = cs.tag ?? cs.category;
            const key = cs.id ?? `${tag}-${i}`;
            const preline = (t) => typeof t === 'string' && t.includes('\n');

            const ctaInner = (
              <>
                Read More
                <span className="cs-cta-arrow">
                  <svg
                    className="cs-arrow-svg"
                    viewBox="0 0 13 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12.0781 4.78297L7.7372 0.441932C7.61328 0.318017 7.44813 0.25 7.27203 0.25C7.09573 0.25 6.93068 0.318114 6.80676 0.441932L6.41264 0.836154C6.28882 0.959874 6.22061 1.12513 6.22061 1.30133C6.22061 1.47743 6.28882 1.64825 6.41264 1.77197L8.94508 4.30998H0.899383C0.536627 4.30998 0.25 4.59397 0.25 4.95683V5.51415C0.25 5.877 0.536627 6.18963 0.899383 6.18963H8.97381L6.41273 8.74181C6.28892 8.86573 6.2207 9.02648 6.2207 9.20268C6.2207 9.37868 6.28892 9.54179 6.41273 9.6656L6.80686 10.0586C6.93077 10.1825 7.09583 10.25 7.27213 10.25C7.44823 10.25 7.61338 10.1816 7.7373 10.0577L12.0782 5.71673C12.2025 5.59243 12.2708 5.42649 12.2703 5.2501C12.2707 5.07312 12.2025 4.90708 12.0781 4.78297Z"
                      fill="#323232"
                    />
                  </svg>
                </span>
              </>
            );

            return (
              <div key={key} className="case-study-card">
                <div className="cs-tag">{tag}</div>
                
                <h3 className={`cs-title${preline(cs.title) ? ' cs-preline' : ''}`}>{cs.title}</h3>
                <p className={`cs-description${preline(cs.description) ? ' cs-preline' : ''}`}>
                  {cs.description}
                </p>
                <div className="cs-metrics">
                  {cs.metrics.map((m, j) => (
                    <div key={j} className="cs-metric-box">
                      <span className="cs-metric-value">{m.value}</span>
                      <span className="cs-metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
                {cs.href ? (
                  <Link className="cs-cta" to={cs.href}>
                    {ctaInner}
                  </Link>
                ) : (
                  <button type="button" className="cs-cta" onClick={handleReadMore}>
                    {ctaInner}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {showPagination ? (
          <nav className="cs-pagination" aria-label="Pagination">
            <button
              type="button"
              className="cs-pagination__btn"
              disabled={pageSafe <= 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`cs-pagination__btn${i === pageSafe ? ' is-active' : ''}`}
                onClick={() => setPage(i)}
                aria-current={i === pageSafe ? 'page' : undefined}
              >
                {i + 1}
              </button>
            ))}
            <button
              type="button"
              className="cs-pagination__btn"
              disabled={pageSafe >= totalPages - 1}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            >
              Next
            </button>
          </nav>
        ) : null}

        {showViewAllButton ? (
          <div className="cs-view-all-wrap">
            <PurpleCTAButton text="View All Case Studies" onClick={handleReadMore} />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
