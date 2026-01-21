import React from "react";
import "./TestimonialsSection.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

import testimonialVideo from "../../assets/testimonial-video.png";
import playButton from "../../assets/play-button.png";

import avatarRobert from "../../assets/avatar-robert-wilson.png";
import avatarDavid from "../../assets/avatar-david-turner.png";
import avatarMichael from "../../assets/avatar-michael-hayes.png";
import avatarEmily from "../../assets/avatar-emily-scott.png";

const testimonials = [
  {
    id: "robert",
    avatar: avatarRobert,
    quote:
      "“Databiqs Delivered An AI Solution That Significantly Improved Our Customer Response Time And Operational Efficiency. Their Approach Was Strategic, Professional, And Results-Driven.”",
    name: "Robert Wilson",
    role: "Chief Marketing Officer",
  },
  {
    id: "david",
    avatar: avatarDavid,
    quote:
      "“The AI Automation Implemented By Databiqs Streamlined Our Internal Workflows And Reduced Manual Effort Across Teams. Their Expertise With Intelligent Systems Truly Stands Out.”",
    name: "David Turner",
    role: "VP Of Product Development",
  },
  {
    id: "michael",
    avatar: avatarMichael,
    quote:
      "“Databiqs Delivered An AI Solution That Significantly Improved Our Customer Response Time And Operational Efficiency. Their Approach Was Strategic, Professional, And Results-Driven.”",
    name: "Michael Hayes",
    role: "Operations Manager",
  },
];

function TestimonialCard({ avatar, quote, name, role }) {
  return (
    <div className="about-testimonial-card">
      <div className="about-testimonial-cardInner">
        {/* Avatar strip contains quotes inside the image */}
        <img
          className="about-testimonial-avatarStrip"
          src={avatar}
          alt={`${name} avatar`}
          draggable="false"
        />

        <p className="about-testimonial-quote">{quote}</p>

        <div className="about-testimonial-person">
          <div className="about-testimonial-name">{name}</div>
          <div className="about-testimonial-role">{role}</div>
        </div>
      </div>
    </div>
  );
}

function VideoCard() {
  return (
    <div className="about-testimonial-videoCard" aria-label="Testimonial video">
      <img
        className="about-testimonial-videoImg"
        src={testimonialVideo}
        alt="Testimonial video card"
        draggable="false"
      />

      {/* overlay for readability (matches design feel) */}
      <div className="about-testimonial-videoOverlay" />

      {/* Emily avatar (top-left) */}
      <img
        className="about-testimonial-videoAvatar"
        src={avatarEmily}
        alt="Emily Scott"
        draggable="false"
      />

      {/* Play button (center, 72x40) */}
      <button
        className="about-testimonial-playBtn"
        type="button"
        aria-label="Play testimonial video"
      >
        <img src={playButton} alt="" draggable="false" />
      </button>
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="about-testimonials" ref={sectionRef}>
      <div className="about-testimonials-inner">
        <div className="about-testimonials-pill">Testimonials</div>

        <h2 className="about-testimonials-title">
          TRUSTED BY FORWARD-THINKING BUSINESSES
        </h2>

        <p className="about-testimonials-subtitle">
          Our Clients Partner With Us To Solve Complex Challenges, Streamline
          Operations, And Achieve Measurable Results Through Intelligent AI
          Solutions.
        </p>

        <div className="about-testimonials-grid">
          <TestimonialCard {...testimonials[0]} />
          <VideoCard />
          <TestimonialCard {...testimonials[1]} />
          <TestimonialCard {...testimonials[2]} />
        </div>
      </div>
    </section>
  );
}
