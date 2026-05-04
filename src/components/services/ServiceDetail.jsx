import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "../home/Header";
import Footer from "../home/Footer";
import MeetingBannerSection from "../home/MeetingBannerSection";
import { getServiceBySlug, serviceHeroSlides } from "./serviceData";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Services.css";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = useMemo(() => getServiceBySlug(slug), [slug]);
  const headerRef = useScrollAnimation({ threshold: 0.14 });
  const contentRef = useScrollAnimation({ threshold: 0.12 });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % serviceHeroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="service-detail-page services-page">
      <section className="case-study-page-header-section" ref={headerRef}>
        <Header />
        <div className="case-study-page-container">
          <div className="case-study-page-hero service-detail-hero">
            <div className="case-study-page-hero-content">
              <div>
                <div className="case-study-page-tags">
                  <span className="case-study-page-pill">Service Detail</span>
                  <span className="case-study-page-pill-solid">{service.heroTag}</span>
                </div>
                <h1 className="case-study-page-title">
                  <span className="case-study-page-title-top">{service.title}</span>
                  <span className="case-study-page-title-bottom">{service.heroSubtitle}</span>
                </h1>
              </div>
              <p className="case-study-page-intro">{service.overview}</p>
              <Link className="hero-cta-button service-detail-back-btn" to="/services">
                Back to Services
              </Link>
            </div>
            <div className="case-study-page-hero-visual-wrapper">
              <div className="case-study-page-hero-slider" aria-label={`${service.title} gallery`}>
                {serviceHeroSlides.map((slide, index) => (
                  <img
                    key={slide.alt}
                    src={slide.src}
                    alt={slide.alt}
                    className={`case-study-page-hero-visual ${index === activeSlide ? "is-active" : ""}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="case-study-page-container service-detail-main" ref={contentRef}>
        <section className="service-detail-section">
          <span className="service-detail-section__pill">Business Impact</span>
          <h2 className="service-detail-section__title">What you achieve with {service.title}</h2>
          <div className="service-detail-section__grid">
            {service.outcomes.map((outcome) => (
              <article className="service-detail-card" key={outcome}>
                <p>{outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-detail-section">
          <span className="service-detail-section__pill">Delivery Process</span>
          <h2 className="service-detail-section__title">How Databiqs delivers this service</h2>
          <div className="service-detail-process">
            {service.process.map((step, index) => (
              <article className="service-detail-process__step" key={step}>
                <span className="service-detail-process__index">0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <MeetingBannerSection />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
