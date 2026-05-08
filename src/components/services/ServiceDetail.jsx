import React, { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import Footer from "../home/Footer";
import { getServiceBySlug } from "./serviceData";
import { getServiceDetailPage } from "./serviceDetailContent";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Services.css";
import "./ServiceDetail.css";
import MeetingBannerSection from "../home/MeetingBannerSection";
import arrowIcon from '../../assets/rightarrow.svg';
import servicesDetailPageAnimation from "../../assets/Services-Details-Page.json";
const CapIcon = ({ name }) => {
  const common = { width: 40, height: 40, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
  switch (name) {
    case "nlu":
      return (
        <svg {...common}>
          <path
            d="M12 3c-1.5 2-4 3.2-4 6.5a4 4 0 008 0c0-3.3-2.5-4.5-4-6.5zM5 14c0 2.5 2 4.5 4.5 4.5S14 16.5 14 14"
            stroke="#002E9E"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M7 21h10" stroke="#002E9E" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "omni":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="2.2" fill="#002E9E" />
          <circle cx="16" cy="8" r="2.2" fill="#002E9E" />
          <circle cx="12" cy="16" r="2.2" fill="#002E9E" />
          <path d="M9.2 9.2l2.4 2.4m1.2 0l2.4-2.4M12 10.4V14" stroke="#002E9E" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="#002E9E" strokeWidth="1.6" />
          <path d="M12 8v4l2.5 1.3" stroke="#002E9E" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "sentiment":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" stroke="#002E9E" strokeWidth="1.6" />
          <path d="M8.5 10h.01M15.5 10h.01" stroke="#002E9E" strokeWidth="2" strokeLinecap="round" />
          <path d="M8.5 14c1.2 2 6.3 2 7.5 0" stroke="#002E9E" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "orch":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="6" rx="1.5" stroke="#002E9E" strokeWidth="1.5" />
          <rect x="4" y="13" width="7" height="6" rx="1.5" stroke="#002E9E" strokeWidth="1.5" />
          <rect x="13" y="13" width="7" height="6" rx="1.5" stroke="#002E9E" strokeWidth="1.5" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path d="M8 4h8l4 4v14H8V4z" stroke="#002E9E" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 8h8M8 12h12M8 16h8" stroke="#002E9E" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "events":
      return (
        <svg {...common}>
          <path d="M5 6h14v12H5V6z" stroke="#002E9E" strokeWidth="1.5" />
          <path d="M9 3v4M15 3v4M5 10h14" stroke="#002E9E" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "govern":
      return (
        <svg {...common}>
          <path d="M12 4l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-3z" stroke="#002E9E" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="#002E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "feat":
      return (
        <svg {...common}>
          <path d="M5 18l4-14 4 6 4-6 2 14H5z" stroke="#002E9E" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "train":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="3" stroke="#002E9E" strokeWidth="1.5" />
          <path d="M11.5 11.5L18 18M15 6l3 3" stroke="#002E9E" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "serve":
      return (
        <svg {...common}>
          <path d="M4 14h4l2 5 4-10 2 5h4" stroke="#002E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="12" rx="2" stroke="#002E9E" strokeWidth="1.5" />
          <path d="M8 15h8" stroke="#002E9E" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "use":
      return (
        <svg {...common}>
          <path d="M6 7h12v10H6V7z" stroke="#002E9E" strokeWidth="1.5" />
          <path d="M6 11h12M9 7V5M15 7V5" stroke="#002E9E" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "arch":
      return (
        <svg {...common}>
          <path d="M4 18h16M6 14h4l2-8 2 8h4l2-10" stroke="#002E9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "fin":
      return (
        <svg {...common}>
          <path d="M7 6h10v12H7V6z" stroke="#002E9E" strokeWidth="1.5" />
          <path d="M9 10h6M9 14h4" stroke="#002E9E" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "change":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="3" stroke="#002E9E" strokeWidth="1.5" />
          <circle cx="16" cy="14" r="3" stroke="#002E9E" strokeWidth="1.5" />
          <path d="M10.5 9.5l5 5" stroke="#002E9E" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" stroke="#002E9E" strokeWidth="1.6" />
        </svg>
      );
  }
};

const VerticalIcon = ({ name }) => {
  const common = { width: 36, height: 36, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
  switch (name) {
    case "health":
      return (
        <svg {...common}>
          <path d="M12 5v14M8 9h8" stroke="#002E9E" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="8" stroke="#002E9E" strokeWidth="1.4" />
        </svg>
      );
    case "ecom":
      return (
        <svg {...common}>
          <path d="M6 8h15l-1.5 9H7L6 8z" stroke="#002E9E" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="10" cy="19" r="1.2" fill="#002E9E" />
          <circle cx="17" cy="19" r="1.2" fill="#002E9E" />
        </svg>
      );
    case "finance":
      return (
        <svg {...common}>
          <path d="M4 18h16M6 14V8h12v6" stroke="#002E9E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9 11h6M9 8h6" stroke="#002E9E" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "ops":
      return (
        <svg {...common}>
          <rect x="5" y="6" width="14" height="12" rx="2" stroke="#002E9E" strokeWidth="1.5" />
          <path d="M9 10h6M9 14h4" stroke="#002E9E" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "cx":
      return (
        <svg {...common}>
          <path d="M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#002E9E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 19c1.5-3 4.5-4 7-4s5.5 1 7 4" stroke="#002E9E" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "supply":
      return (
        <svg {...common}>
          <path d="M5 8h14v10H5V8z" stroke="#002E9E" strokeWidth="1.5" />
          <path d="M5 12h14M9 8V6h6v2" stroke="#002E9E" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "retail":
      return (
        <svg {...common}>
          <path d="M5 10h14l-2 9H7L5 10z" stroke="#002E9E" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 6V5a3 3 0 016 0v1" stroke="#002E9E" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "risk":
      return (
        <svg {...common}>
          <path d="M12 4l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V8l8-4z" stroke="#002E9E" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "iot":
      return (
        <svg {...common}>
          <circle cx="8" cy="10" r="2" stroke="#002E9E" strokeWidth="1.4" />
          <circle cx="16" cy="8" r="2" stroke="#002E9E" strokeWidth="1.4" />
          <path d="M10 11l4 2M14 8l-2 4" stroke="#002E9E" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "bank":
      return (
        <svg {...common}>
          <path d="M4 10h16l-8-5-8 5zM6 10v8M10 10v8M14 10v8M18 10v8" stroke="#002E9E" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "pharma":
      return (
        <svg {...common}>
          <path d="M12 5l7 4v10H5V9l7-4z" stroke="#002E9E" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 9v10M8 12h8" stroke="#002E9E" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "telco":
      return (
        <svg {...common}>
          <path d="M5 16c3-4 11-4 14 0M8 12c2-2 6-2 8 0M10 9c1-1 3-1 4 0" stroke="#002E9E" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="14" rx="2" stroke="#002E9E" strokeWidth="1.5" />
        </svg>
      );
  }
};

const verticalKey = (slug, index) => {
  const map = {
    "ai-chatbots": ["health", "ecom", "finance"],
    "ai-automation": ["ops", "cx", "supply"],
    "machine-learning": ["retail", "risk", "iot"],
    "ai-strategy": ["bank", "pharma", "telco"],
  };
  return map[slug]?.[index] ?? "health";
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = useMemo(() => getServiceBySlug(slug), [slug]);
  const page = useMemo(() => getServiceDetailPage(slug), [slug]);
  const heroRef = useScrollAnimation({ threshold: 0.12 });
  const mainRef = useScrollAnimation({ threshold: 0.08 });

  if (!service || !page) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="service-detail-outer">
      <div className="service-detail-page services-page">
      <section className="sd-hero-section" ref={heroRef}>
       
        <div className="sd-container sd-hero-section__inner">
          <div className="sd-hero-grid">
            <div className="sd-hero-copy">
              <span className="sd-hero-pill">AI Service Detail</span>
              <h1 className="sd-hero-title">
                <span className="sd-hero-title__dark">{page.heroTitleLine1}</span>
                <span className="sd-hero-title__accent">{page.heroTitleLine2}</span>
              </h1>
              <p className="sd-hero-lead">{page.heroLead}</p>
              <Link to="/book-consultation" className="sd-hero-cta">
                <span>Book a Consultation</span>
                <span className="sd-hero-cta__icon" aria-hidden>
                  <img src={arrowIcon} alt="" />
                </span>
              </Link>
            </div>
            <div className="sd-hero-visual">
              <Lottie
                animationData={servicesDetailPageAnimation}
                loop
                autoplay
                className="sd-hero-img"
                aria-label={page.heroImageAlt}
                role="img"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="sd-main sd-container" ref={mainRef}>
        <section className="sd-block sd-capabilities" aria-labelledby="sd-cap-title">
          <h2 id="sd-cap-title" className="sd-h2 sd-h2--center">
            {page.capabilities.title}
          </h2>
          <p className="sd-lead sd-lead--center">{page.capabilities.lead}</p>
          <div className="sd-cap-grid">
            {page.capabilities.cards.map((c) => (
              <article className="sd-cap-card" key={c.key}>
                <div className="sd-cap-card__icon" aria-hidden="true">
                  <CapIcon name={c.key} />
                </div>
                <h3 className="sd-cap-card__title">{c.title}</h3>
                <p className="sd-cap-card__desc">{c.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sd-block sd-precision" aria-labelledby="sd-prec-title">
          <div className="sd-precision-grid">
            <div className="sd-precision-content">
              <h2 id="sd-prec-title" className="sd-h2 sd-h2--left">
                {page.precision.title}
              </h2>
              <ol className="sd-precision-steps">
                {page.precision.steps.map((s, i) => (
                  <li className="sd-precision-step" key={s.title}>
                    <span className="sd-precision-step__num">{i + 1}</span>
                    <div>
                      <h3 className="sd-precision-step__title">{s.title}</h3>
                      <p className="sd-precision-step__desc">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="sd-precision-media">
              <img src={page.precision.image} alt={page.precision.imageAlt} className="sd-precision-img" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="sd-block sd-verticals" aria-labelledby="sd-ver-title">
          <h2 id="sd-ver-title" className="sd-h2 sd-h2--center">
            {page.verticals.title}
          </h2>
          <p className="sd-lead sd-lead--center">{page.verticals.lead}</p>
          <div className="sd-ver-grid">
            {page.verticals.items.map((v, i) => (
              <article className="sd-ver-card" key={v.title}>
                <div className="sd-ver-card__icon" aria-hidden="true">
                  <VerticalIcon name={verticalKey(slug, i)} />
                </div>
                <h3 className="sd-ver-card__title">{v.title}</h3>
                <p className="sd-ver-card__desc">{v.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sd-block sd-metrics" aria-labelledby="sd-metrics-title">
          <div className="sd-metrics-grid">
            <div className="sd-metrics-copy">
              <h2 id="sd-metrics-title" className="sd-h2 sd-h2--left">
                {page.stats.title}
              </h2>
              <p className="sd-lead sd-lead--left">{page.stats.lead}</p>
            </div>
            <div className="sd-metrics-tiles" role="list">
              {page.stats.items.map((m) => (
                <div className="sd-metric" role="listitem" key={m.label}>
                  <div className="sd-metric__value">{m.value}</div>
                  <div className="sd-metric__label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sd-final-cta" aria-labelledby="sd-final-cta-title">
          <MeetingBannerSection
            id="sd-final-cta-title"
            className="sd-meeting-banner-section"
            title={page.finalCta.title}
            subtitle={page.finalCta.lead}
            ctaText={page.finalCta.buttonLabel}
            ctaTo="/book-consultation"
            showBadge={false}
          />
        </section>
      </main>

      <Footer />
    </div>
    </div>
  );
};

export default ServiceDetail;
