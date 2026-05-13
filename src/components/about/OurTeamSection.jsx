import React, { useRef, useState, useEffect, useCallback } from "react";
import "./OurTeamSection.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ceoImg from "../../assets/ceo.png";
import avatarIcon from "../../assets/user.svg";
import ctoImg from "../../assets/team/CTO.png";
import teamlead from "../../assets/team/team-lead.png";
import projectmanager from "../../assets/team/project-manager&AI-Developer.png";
import softwareengineer from "../../assets/team/software-engineer.png";
import softwareengineer2 from "../../assets/team/software-engineer2.png";
import softwareengineer3 from "../../assets/team/software-engineer3.jpg";
import businessdevelopmentexecutive from "../../assets/team/business-development-executive.jfif";
import marketingmanager from "../../assets/team/marketing-manager.png";
import uiuxdesigner from "../../assets/team/ui-ux-designer.png";
import irumImg from "../../assets/team/Irum (1).png";
import shamimImg from "../../assets/team/Shamaim (1).png";
import akhlaqImg from "../../assets/team/Akhlaq (1).png";
import talhaimg from "../../assets/team/fullstack-AI-Engineer.png";
import alishbaimg1 from "../../assets/team/Alishba1.png";
import junaidImg from "../../assets/team/junaid.png";
import fatimaTahirImg from "../../assets/team/fatima tuz zahra.png";
import laibaImg from "../../assets/team/LAIBA.png";
import hadeedTararImg from "../../assets/team/Hadeed Tarar.png";
import hamadKhanImg from "../../assets/team/hamad khan.png";
import amariFields from "../../assets/team/Amari-Fields.png";
const TEAM_MEMBERS = [
  { name: "Jaffar Ali Chaudhary", role: "Founder & CEO",                  image: ceoImg,                       featured: true, spotlight: true },
  { name: "Jawad Afzal",           role: "CTO",                            image: ctoImg,                       featured: true },
  { name: "Amari Fields",         role: "Director of CS & Business Development",    image: amariFields,                     featured: true },
  { name: "Maudood Fareed",       role: "Team Lead",                       image: teamlead,                     featured: true },
  { name: "Akhlaq Ahmad",         role: "Senior Software Engineer",        image: akhlaqImg,                    featured: true },
  { name: "Alishba Aslam",        role: "HR Manager",                      image: alishbaimg1 },
  { name: "Shamaim Ali Rizvi",    role: "Senior UI UX Designer",           image: shamimImg,                    featured: true },
  { name: "Wali ullah",           role: "Business Development Executive",  image: businessdevelopmentexecutive, featured: true },
  { name: "Abdullah Anjum",       role: "Business Development Executive",  image: marketingmanager,             featured: true },
  { name: "Maarij Ali",           role: "Technical Project Manager",       image: projectmanager,               featured: true },
  { name: "Irum Shahzadi",        role: "Senior Software Engineer",        image: irumImg,                      featured: true },
  { name: "Ali Raza",             role: "Senior Software Engineer",        image: softwareengineer3,            featured: true },
  { name: "Saad Bin Abi Usama",   role: "Senior Software Engineer",        image: softwareengineer2,            featured: true },
  { name: "Hamza Mumtaz",         role: "UI UX Designer",                  image: uiuxdesigner,                 featured: true },
  { name: "Faizan Ahmed",         role: "Associate Software Engineer",     image: softwareengineer,             featured: true },
  { name: "Junaid Qamar",         role: "Associate Software Engineer",     image: junaidImg,                    featured: true },
  { name: "Talha Bin Faisal",     role: "Full Stack AI Developer",         image: talhaimg,                     featured: true },
  { name: "Hamad Khan",           role: "AI/ML Engineer",                  image: hamadKhanImg,                 featured: true },
  { name: "Fatima Tahir",         role: "Content Writer",                 image: fatimaTahirImg,               featured: true },
  { name: "Laiba Sheikh",         role: "Marketing Head",                  image: laibaImg,                     featured: true },
  { name: "Hadeed Tarar",         role: "Business Development Executive", image: hadeedTararImg,               featured: true },
];

const getInitials = (name) =>
  name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join("");

/* ── Chevron icons ── */
const IconChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
       aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
       aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* ── Team card ── */
const TeamCard = ({ member, compact = false }) => (
  <article
    className={[
      "our-team-card",
      compact ? "our-team-card--compact" : "our-team-card--featured our-team-card--spotlight",
    ].join(" ")}
  >
    <div className="our-team-card__stage">
      <div className="our-team-card__mesh" aria-hidden />
      <div className="our-team-card__hex"  aria-hidden />
      <div className="our-team-card__media">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="our-team-card__avatar"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="our-team-card__avatar-fallback" aria-label={member.name}>
            <img src={avatarIcon} alt="" aria-hidden />
            <span>{getInitials(member.name)}</span>
          </div>
        )}
      </div>
    </div>
    <div className="our-team-card__nameplate">
      <h3 className="our-team-card__name">{member.name}</h3>
      <p  className="our-team-card__role">{member.role}</p>
    </div>
  </article>
);

const OurTeamSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.14 });
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const resumeIdleTimerRef = useRef(null);
  const transitionFallbackRef = useRef(null);
  const transitionHandlerRef = useRef(null);
  const marqueeDurationRef = useRef(48);
  const [paused, setPaused] = useState(false);

  const ceoMember = TEAM_MEMBERS.find((m) => m.spotlight);
  const otherMembers = TEAM_MEMBERS.filter((m) => !m.spotlight);

  /* Card width + gap */
  const cardStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 280;
    const card = track.querySelector(".our-team-card--compact");
    if (!card) return 280;
    const gap = parseFloat(getComputedStyle(track).gap) || 18;
    return card.offsetWidth + gap;
  }, []);

  /* Get the full width of ONE lane (half of the duplicated track) */
  const laneWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.scrollWidth / 2;
  }, []);

  const getCurrentX = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const t = getComputedStyle(track).transform; //d
    if (!t || t === "none") return 0;
    try {
      const matrix = new DOMMatrixReadOnly(t);
      return matrix.m41;
    } catch {
      return 0;
    }
  }, []);

  const clearResumeSchedule = useCallback(() => {
    clearTimeout(resumeIdleTimerRef.current);
    clearTimeout(transitionFallbackRef.current);
    const track = trackRef.current;
    const handler = transitionHandlerRef.current;
    if (track && handler) {
      track.removeEventListener("transitionend", handler);
      transitionHandlerRef.current = null;
    }
  }, []);

  const resumeMarqueeFromCurrentPosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      setPaused(false);
      return;
    }

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      track.style.transition = "";
      track.style.animation = "";
      track.style.transform = "";
      track.style.removeProperty("animation-delay");
      setPaused(false);
      return;
    }

    const oneLane = track.scrollWidth / 2;
    if (oneLane <= 0) {
      track.style.transition = "";
      track.style.animation = "";
      track.style.transform = "";
      track.style.removeProperty("animation-delay");
      setPaused(false);
      return;
    }

    const matrix = new DOMMatrixReadOnly(getComputedStyle(track).transform);
    const x = matrix.m41;
    const p = ((-x / oneLane) % 1 + 1) % 1;
    const durationSec =
      Number.isFinite(marqueeDurationRef.current) && marqueeDurationRef.current > 0
        ? marqueeDurationRef.current
        : parseFloat(getComputedStyle(track).animationDuration) || 48;

    track.style.transition = "";
    track.style.animation = "none";
    track.style.removeProperty("transform");
    void track.offsetWidth;

    track.style.removeProperty("animation");
    track.style.animationDelay = `${-p * durationSec}s`;
    void track.offsetWidth;

    setPaused(false);
  }, []);

  useEffect(
    () => () => {
      clearResumeSchedule();
    },
    [clearResumeSchedule]
  );

  const RESUME_AFTER_MS = 3000;
  const SLIDE_TRANSITION_FALLBACK_MS = 600;

  const slide = useCallback(
    (dir) => {
      const track = trackRef.current;
      if (!track) return;

      clearResumeSchedule();

      const dur = parseFloat(getComputedStyle(track).animationDuration);
      marqueeDurationRef.current =
        Number.isFinite(dur) && dur > 0 ? dur : 48;

      track.style.removeProperty("animation-delay");

      const step = cardStep();
      const oneLane = laneWidth();

      let currentX = getCurrentX();

      if (dir === -1 && currentX > -step) {
        currentX = currentX - oneLane;
      } else if (dir === 1 && currentX < -oneLane + step) {
        currentX = currentX + oneLane;
      }

      track.style.transition = "none";
      track.style.animation = "none";
      track.style.transform = `translateX(${currentX}px)`;

      void track.offsetWidth;

      const targetX = currentX + dir * step * -1;
      track.style.transition =
        "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)";
      track.style.transform = `translateX(${targetX}px)`;

      setPaused(true);

      const armIdleResume = () => {
        clearTimeout(resumeIdleTimerRef.current);
        resumeIdleTimerRef.current = setTimeout(() => {
          resumeMarqueeFromCurrentPosition();
        }, RESUME_AFTER_MS);
      };

      const onTransitionEnd = (ev) => {
        if (ev.target !== track || ev.propertyName !== "transform") return;
        track.removeEventListener("transitionend", onTransitionEnd);
        transitionHandlerRef.current = null;
        clearTimeout(transitionFallbackRef.current);
        transitionFallbackRef.current = null;
        armIdleResume();
      };

      transitionHandlerRef.current = onTransitionEnd;
      track.addEventListener("transitionend", onTransitionEnd);

      transitionFallbackRef.current = setTimeout(() => {
        track.removeEventListener("transitionend", onTransitionEnd);
        transitionHandlerRef.current = null;
        transitionFallbackRef.current = null;
        armIdleResume();
      }, SLIDE_TRANSITION_FALLBACK_MS);
    },
    [
      cardStep,
      laneWidth,
      getCurrentX,
      clearResumeSchedule,
      resumeMarqueeFromCurrentPosition,
    ]
  );

  return (
    <section className="our-team" id="our-team" ref={sectionRef}>
      <div className="our-team__container">

        {/* Heading */}
        <div className="our-team__heading">
          <span className="our-team__pill">Our Team</span>
          <h2 className="our-team__title">THE MINDS BUILDING DATABIQS</h2>
          <p className="our-team__subtitle">
            From strategy to delivery, our multidisciplinary team turns ideas into high-impact AI
            products with speed, quality, and measurable business value.
          </p>
        </div>

        {/* CEO spotlight */}
        {ceoMember && (
          <div className="our-team__spotlight">
            <TeamCard member={ceoMember} compact={false} />
          </div>
        )}

        {/* Carousel wrapper */}
        <div className="our-team__carousel-wrap">

          <button
            className="our-team__nav-btn our-team__nav-btn--prev"
            onClick={() => slide(-1)}
            aria-label="Previous team members"
          >
            <IconChevronLeft />
          </button>

          <div
            className={`our-team__carousel${paused ? " is-paused" : ""}`}
            ref={carouselRef}
            aria-label="Team Members Carousel"
          >
            <div className="our-team__track" ref={trackRef}>
              {[0, 1].map((laneIdx) => (
                <div className="our-team__lane" key={laneIdx}>
                  {otherMembers.map((member) => (
                    <TeamCard
                      key={`${laneIdx}-${member.name}-${member.role}`}
                      member={member}
                      compact
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            className="our-team__nav-btn our-team__nav-btn--next"
            onClick={() => slide(1)}
            aria-label="Next team members"
          >
            <IconChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
