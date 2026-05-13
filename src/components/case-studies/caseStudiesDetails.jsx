import { Fragment } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './caseStudiesDetails.css';
import CaseStudyHero from './CaseStudyHero';
import MoreCaseStudiesCarousel from './MoreCaseStudiesCarousel';
import apostropheMark from '../../assets/appostrophy.svg';
import Footer from '../home/Footer';
import { getCaseStudyDetail } from './caseStudyDetailContent';

const PhaseBody = ({ lines }) => (
  <p className="case-study-page-phase-body" lang="en">
    {lines.map((line, i) => (
      <Fragment key={i}>
        {i > 0 ? <br className="case-study-page-phase-br" /> : null}
        {line}
      </Fragment>
    ))}
  </p>
);

const CaseStudiesDetails = () => {
  const { slug } = useParams();
  const page = getCaseStudyDetail(slug);

  if (!page) {
    return <Navigate to="/case-studies" replace />;
  }

  const { hero, challenge, alert, techStack, phases, impact, ltsv, testimonial } = page;

  return (
    <div className="case-studies-page">
      <section className="case-study-page">
        <div className="case-study-page-header-section">
          <div className="case-study-page-container">
            <CaseStudyHero
              imageSrc={hero.imageSrc}
              imageAlt={hero.imageAlt}
              primaryBadge={hero.primaryBadge}
              secondaryBadge={hero.secondaryBadge}
              title={hero.title}
              subtitle={hero.subtitle}
              description={hero.description}
            />
          </div>
        </div>

        <div className="case-study-page-container">
          <div className="case-study-page-challenge-section">
            <div className="case-study-page-challenge-grid">
              <h2 className="case-study-page-challenge-heading">{challenge.heading}</h2>
              <p className="case-study-page-challenge-text" lang="en">
                {challenge.body}
              </p>
            </div>

            <div className="case-study-page-alert">
              <svg
                className="case-study-page-alert-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="23"
                height="21"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.401 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <h6 className="case-study-page-alert-title">{alert.title}</h6>
              <p className="case-study-page-alert-text" lang="en">
                {alert.body}
              </p>
            </div>
          </div>

          <div className="case-study-page-tech-section">
            <div className="case-study-page-tech-list">
              {techStack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="case-study-page-phases">
            <div className="case-study-page-phase case-study-page-phase--prediction">
              <div className="case-study-page-phase-copy">
                <h2 className="case-study-page-phase-title">{phases[0].title}</h2>
                <PhaseBody lines={phases[0].bodyLines} />
              </div>
              <div className="case-study-page-phase-figure">
                <img
                  src={phases[0].imageSrc}
                  alt={phases[0].imageAlt}
                  className="case-study-page-phase-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="case-study-page-phase case-study-page-phase--execution">
              <div className="case-study-page-phase-figure">
                <img
                  src={phases[1].imageSrc}
                  alt={phases[1].imageAlt}
                  className="case-study-page-phase-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="case-study-page-phase-copy">
                <h2 className="case-study-page-phase-title">{phases[1].title}</h2>
                <PhaseBody lines={phases[1].bodyLines} />
              </div>
            </div>
          </div>

          <div className="case-study-page-impact">
            <div className="case-study-page-impact-metrics">
              {impact.map((m) => (
                <article key={m.label} className="case-study-page-metric-card">
                  <h3 className="case-study-page-metric-label">{m.label}</h3>
                  <p
                    className="case-study-page-metric-value"
                    {...(m.valueAriaLabel ? { 'aria-label': m.valueAriaLabel } : {})}
                  >
                    {m.value}
                  </p>
                  <p className="case-study-page-metric-footnote">{m.footnote}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="case-study-page-ltsv">
            <h2 className="case-study-page-ltsv-title">{ltsv.title}</h2>
            <div className="case-study-page-ltsv-grid">
              {ltsv.cards.map((card) =>
                card.watchouts ? (
                  <article
                    key={card.title}
                    className="case-study-page-value-card case-study-page-value-card--watchouts"
                  >
                    <h3 className="case-study-page-value-card-title">{card.title}</h3>
                    <ul className="case-study-page-value-card-list">
                      {card.watchouts.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  </article>
                ) : (
                  <article key={card.title} className="case-study-page-value-card">
                    <h3 className="case-study-page-value-card-title">{card.title}</h3>
                    <p className="case-study-page-value-card-text">{card.text}</p>
                  </article>
                )
              )}
            </div>
          </div>

          
        </div>
      </section>

      <MoreCaseStudiesCarousel excludeSlug={slug} />
      <Footer />
    </div>
  );
};

export default CaseStudiesDetails;
