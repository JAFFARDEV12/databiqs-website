import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import Footer from "../home/Footer";

// Assets (hero)
import ceoImg from "../../assets/ceo.png";
import letsTalkImg from "../../assets/lets-talk.png";
import logoImg from '../../assets/Logo.png';

// Assets (section 2 cards PNGs)
import missionPng from "../../assets/mission.png";
import visionPng from "../../assets/vision.png";
import approachPng from "../../assets/approach.png";

// NEW: Testimonials section
import TestimonialsSection from "./TestimonialsSection";

// NEW: Contact / Get in touch assets
import formImg from "../../assets/form.png";
import phoneImg from "../../assets/phone.png";

export default function AboutUs() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const heroRef = useScrollAnimation({ threshold: 0.2 });
  const section2Ref = useScrollAnimation({ threshold: 0.2 });
  const section4Ref = useScrollAnimation({ threshold: 0.2 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="au-page">
      {/* ===== TOP HERO BLOCK (unchanged) ===== */}
      <section className="au-frame">
        {/* Header */}
        <header className="au-header">
          <div className="au-header__bar">
            <Link to="/" className="au-header__logo">
              <img src={logoImg} alt="Databiqs" />
            </Link>

            <nav className={`au-header__nav ${isMenuOpen ? 'au-nav-open' : ''}`}>
              <Link to="/about" onClick={closeMenu}>About</Link>
              <Link to="/#services" onClick={closeMenu}>Services</Link>
              <Link to="/#case-studies" onClick={closeMenu}>Case Studies</Link>
              <Link to="/#insights" onClick={closeMenu}>Insights</Link>
              <Link to="/#contact" onClick={closeMenu}>Contact Us</Link>
            </nav>

            <button className="au-header__letsTalk" type="button">
              <img src={letsTalkImg} alt="Let's Talk" />
            </button>
            <button className="au-hamburger" onClick={toggleMenu} aria-label="Menu">
              <span className={`au-hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`au-hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`au-hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </header>

        {/* Hero */}
        <div className="au-hero" id="about" ref={heroRef}>
          <div className="au-hero__inner">
            {/* Left */}
            <div className="au-left">
              <div className="au-pill">Meet Our CEO</div>

              <h1 className="au-title">
                MEET OUR FOUNDER &amp; CEO <br />
                MR. JAFFAR ALI CHAUDHARY
              </h1>

              <div className="au-paragraph">
                <p className="au-p1">
                  Mr. Jaffar Ali founded Databiqs with a clear vision: to help founders and startups
                  transform their ideas into revenue-ready AI and SaaS products without the typical
                  delays, uncertainty, and technical complexity that slow down innovation.
                </p>

                <p className="au-p2">
                  With deep expertise across AI development, full-stack engineering, and enterprise
                  architecture, Jaffar has spent his career solving one of the hardest challenges in
                  tech: how to go from concept to scalable product quickly, without compromising on
                  quality or future growth potential.
                </p>
              </div>

              <div className="au-actions">
                <button className="au-btnSchedule" type="button">
                  <span className="au-btnSchedule__text">Schedule An Appointment</span>
                  <span className="au-btnSchedule__icon">→</span>
                </button>

                <button className="au-btnOutline" type="button">
                  Visit Website
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="au-right">
              <div className="au-ceoBox">
                <img className="au-ceoImg" src={ceoImg} alt="Founder & CEO" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="au-stats">
          <div className="au-stats__inner">
            <span className="au-star">✶</span> TRUSTED BY 1,500+ CLIENTS
            <span className="au-star">✶</span> 98% CLIENT SATISFACTION
            <span className="au-star">✶</span> 12 YEARS OF INDUSTRY EXCELLENCE
            <span className="au-star">✶</span> 150+ SUCCESSFULLY DELIVERED PROJECTS
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 (Innovating...) ===== */}
      <section className="au2-section" ref={section2Ref}>
        <div className="au2-inner">
          <div className="au2-top">
            <div className="au2-pill">About Us</div>

            <h2 className="au2-title">INNOVATING THE FUTURE OF BUSINESS TECHNOLOGY</h2>

            <p className="au2-subtitle">
              We&apos;re A Team Of Passionate Technologists Committed To Helping Businesses Unlock
              Their Full Potential Through Intelligent Automation And AI Solutions.
            </p>
          </div>

          {/* PNG Cards */}
          <div className="au2-cardsPng">
            <img className="au2-cardPng" src={missionPng} alt="Our Mission" />
            <img className="au2-cardPng" src={visionPng} alt="Our Vision" />
            <img className="au2-cardPng" src={approachPng} alt="Our Approach" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 3 (Testimonials) ===== */}
      <TestimonialsSection />

      {/* ===== SECTION 4 (Get In Touch / Form) ===== */}
      <section className="au4-section" id="contact" ref={section4Ref}>
        <div className="au4-inner">
          {/* Left */}
          <div className="au4-left">
            <button className="au4-pill" type="button">
              Get In Touch
            </button>

            <h2 className="au4-title">
              LET&apos;S BUILD THE FUTURE <br />
              TOGETHER
            </h2>

            <p className="au4-subtitle">
              Have Questions Or Want To Start A Project? <br />
              Our Team Is Ready To Help You Unlock The <br />
              Power Of AI For Your Business.
            </p>

            <div className="au4-phoneWrap">
              <img className="au4-phoneImg" src={phoneImg} alt="Phone illustration" draggable="false" />
            </div>

            <p className="au4-privacy">
              We Value Your Privacy And Will Never Share Your Information. <br />
              Expect A Response From Our Team Within 24–48 Hours.
            </p>
          </div>

          {/* Right (form as asset) */}
          <div className="au4-right">
            <img className="au4-formImg" src={formImg} alt="Contact form" draggable="false" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
