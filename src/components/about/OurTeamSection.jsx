import React, { useRef, useState, useEffect, useCallback } from "react";
import "./OurTeamSection.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ceoImg from "../../assets/ceo.png";
import avatarIcon from "../../assets/user.svg";
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

const TEAM_MEMBERS = [
  { name: "Jaffar Ali Chaudhary", role: "Founder & CEO",                  image: ceoImg,                       featured: true, spotlight: true },
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
  { name: "Talha Bin Faisal",     role: "Full Stack AI Developer",         image: talhaimg,                     featured: true },
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
  const sectionRef    = useScrollAnimation({ threshold: 0.14 });
  const carouselRef   = useRef(null);
  const trackRef      = useRef(null);
  const resumeTimer   = useRef(null);
  const [paused, setPaused] = useState(false);

  const ceoMember    = TEAM_MEMBERS.find((m) => m.spotlight);
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
    // The track has two identical lanes; half its scrollWidth = one lane
    return track.scrollWidth / 2;
  }, []);

  /* Read current animated translateX */
  const getCurrentX = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const matrix = new DOMMatrixReadOnly(getComputedStyle(track).transform);
    return matrix.m41;
  }, []);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  const slide = useCallback((dir) => {
    const track = trackRef.current;
    if (!track) return;

    const step  = cardStep();
    const oneLane = laneWidth();

    /* Capture current animated position */
    let currentX = getCurrentX();

    /* ── INFINITE WRAP FIX (both directions) ──────────────────────────
       The marquee loops between translateX(0) and translateX(-oneLane).
       Both lanes are identical, so any position X is visually equivalent
       to X ± oneLane.

       PREV (dir === -1): if we're within one step of the start (X > -step),
       sliding right would go past 0 into empty space → teleport one lane
       back (X - oneLane) so there's always content to the right.

       NEXT (dir === 1): if we're within one step of the end (X < -oneLane + step),
       sliding left would go past -oneLane into empty space → teleport one lane
       forward (X + oneLane) so there's always content to the left.

       The teleport is instant (no transition), then the animated step runs
       normally from the new position.
    ─────────────────────────────────────────────────────────────────── */
    if (dir === -1 && currentX > -step) {
      // Too close to start — mirror into second lane
      currentX = currentX - oneLane;
    } else if (dir === 1 && currentX < -oneLane + step) {
      // Too close to end — mirror back into first lane
      currentX = currentX + oneLane;
    }

    /* Freeze: remove animation, pin inline transform */
    track.style.transition = "none";
    track.style.animation  = "none";
    track.style.transform  = `translateX(${currentX}px)`;

    /* Force reflow */
    void track.offsetWidth;

    /* Slide one step */
    const targetX = currentX + dir * step * -1; // dir=1 → move left (forward)
    track.style.transition = "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)";
    track.style.transform  = `translateX(${targetX}px)`;

    /* Resume CSS animation after delay */
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      track.style.transition = "";
      track.style.animation  = "";
      track.style.transform  = "";
      setPaused(false);
    }, 3200);

    setPaused(true);
  }, [cardStep, laneWidth, getCurrentX]);

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
