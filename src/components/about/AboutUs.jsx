import React from "react";
import "./AboutUs.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import Footer from "../home/Footer";
import Header from "../home/Header";
import ContactSection from "../home/ContactSection";
import starIcon from "../../assets/star.svg";

// Assets (hero)
import ceoImg from "../../assets/ceo.png";

// Assets (section 2 cards SVG icons)
import missionIcon from "../../assets/mission.svg";
import visionIcon from "../../assets/vision.svg";
import approachIcon from "../../assets/approach.svg";

// NEW: Testimonials section
import TestimonialsSection from "../home/TestimonialsSection";
import arrowIcon from "../../assets/rightarrow.svg";
import ColourfulText from "../colorfull-text/ColourfulText";

export default function AboutUs() {
  const heroRef = useScrollAnimation({ threshold: 0.2 });


  const section2Ref = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="au-page">

       <div className="decorative-ellipse-1"></div> 
       <div className="top-gradient-wrapper">
        <Header />
         <section className="au-frame" ref={heroRef}>
  {/* Hero */}
  <div className="au-hero" id="about">
    <div className="au-hero__inner">
      {/* Left */}
      <div className="au-left">
        <div className="au-pill">Meet Our CEO</div>

        <h1 className="au-title">
          MEET OUR FOUNDER &amp; CEO <br />
          MR. JAFFAR ALI CHAUDHARY
        </h1>
       {/*  <TextHoverReveal text="Mr Faizan Ahmed Tanoli" /> */}

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
            <span className="au-btnSchedule__icon">
              <img src={arrowIcon} alt="Arrow" />
            </span>
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

  <div className="au-stats">
  <div className="au-stats__track">
    <div className="au-stats__inner">
      <img src={starIcon} className="au-star" alt="" />
      TRUSTED BY 1,500+ CLIENTS

      <img src={starIcon} className="au-star" alt="" />
      98% CLIENT SATISFACTION

      <img src={starIcon} className="au-star" alt="" />
      12 YEARS OF INDUSTRY EXCELLENCE

      <img src={starIcon} className="au-star" alt="" />
      150+ SUCCESSFULLY DELIVERED PROJECTS
    </div>

    <div className="au-stats__inner">
      <img src={starIcon} className="au-star" alt="" />
      TRUSTED BY 1,500+ CLIENTS

      <img src={starIcon} className="au-star" alt="" />
      98% CLIENT SATISFACTION

      <img src={starIcon} className="au-star" alt="" />
      12 YEARS OF INDUSTRY EXCELLENCE

      <img src={starIcon} className="au-star" alt="" />
      150+ SUCCESSFULLY DELIVERED PROJECTS
    </div>
  </div>
</div>


</section>

      </div>
     
      {/* ===== TOP HERO BLOCK (unchanged) ===== */}
    

      {/* ===== SECTION 2 (Innovating...) ===== */}
      <section className="au2-section" ref={section2Ref}>
        <div className="au2-inner">
          <div className="au2-top">
            <div className="au2-pill">About Us</div>

           {/*  <h2 className="au2-title">INNOVATING THE FUTURE OF BUSINESS TECHNOLOGY</h2> */}
            <ColourfulText text="INNOVATING THE FUTURE OF BUSINESS TECHNOLOGY" />

            <p className="au2-subtitle">
              We&apos;re A Team Of Passionate Technologists Committed To Helping Businesses Unlock
              Their Full Potential Through Intelligent Automation And AI Solutions.
            </p>
          </div>

          {/* Icon Cards */}
          <div className="au2-cards">
            <div className="au2-card">
              <div className="au2-card-icon">
                <img src={missionIcon} alt="Mission Icon" />
              </div>
              <h3 className="au2-card-title">Our Mission</h3>
              <p className="au2-card-description">
                To Democratize Access To Powerful AI And Automation Technologies Of Every Size To Make Smarter Decisions, Streamline Operations, And Scale With Confidence In A Rapidly Evolving Digital World.
              </p>
            </div>
            
            <div className="au2-card">
              <div className="au2-card-icon">
                <img src={visionIcon} alt="Vision Icon" />
              </div>
              <h3 className="au2-card-title">Our Vision</h3>
              <p className="au2-card-description">
                To Become A Global Leader In AI Powered Business Transformation, Shaping A Future Where Intelligent Systems Enhance Productivity, Innovation, And Sustainable Growth Across All Industries.
              </p>
            </div>
            
            <div className="au2-card">
              <div className="au2-card-icon">
                <img src={approachIcon} alt="Approach Icon" />
              </div>
              <h3 className="au2-card-title">Our Approach</h3>
              <p className="au2-card-description">
                We Design And Deploy AI Solutions That Are Practical, Ethical, And Scalable, Combining Data Intelligence, Automation, And Human Insight To Solve Real World Business Challenges And Deliver Measurable Impact.
              </p>
            </div>
         
          </div>

        </div>
      
      </section>
       

       

      {/* ===== SECTION 3 (Testimonials) ===== */}
      <TestimonialsSection />

      {/* ===== SECTION 4 (Contact) ===== */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
