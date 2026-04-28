import React from "react";
import "./OurTeamSection.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ceoImg from "../../assets/ceo.png";
import avatarIcon from "../../assets/user.svg";

const TEAM_MEMBERS = [
  { name: "Jaffar Ali Chaudhary", role: "CEO", image: ceoImg, featured: true },
  { name: "Ahsan Raza", role: "CTO" },
  { name: "Hamza Khan", role: "Team Lead" },
  { name: "Sara Ahmed", role: "Project Manager" },
  { name: "Abdullah Noor", role: "Software Engineer" },
  { name: "Hira Malik", role: "Business Development Executive" },
  { name: "Usman Tariq", role: "Marketing Manager" },
  { name: "Areeba Iqbal", role: "UI UX Designer" },
  { name: "Talha Bin Faisal", role: "Full Stack AI Developer" },
];

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const OurTeamSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.14 });

  return (
    <section className="our-team" id="our-team" ref={sectionRef}>
      <div className="our-team__container">
        <div className="our-team__heading">
          <span className="our-team__pill">Our Team</span>
          <h2 className="our-team__title">THE MINDS BUILDING DATABIQS</h2>
          <p className="our-team__subtitle">
            From strategy to delivery, our multidisciplinary team turns ideas into high-impact AI
            products with speed, quality, and measurable business value.
          </p>
        </div>

        <div className="our-team__grid">
          {TEAM_MEMBERS.map((member, index) => (
            <article
              key={`${member.role}-${member.name}`}
              className={`our-team-card ${member.featured ? "our-team-card--featured" : ""}`}
              style={{ animationDelay: `${0.06 + index * 0.04}s` }}
            >
              <div className="our-team-card__stage">
                <div className="our-team-card__mesh" aria-hidden />
                <div className="our-team-card__hex" aria-hidden />
                <div className="our-team-card__media">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="our-team-card__avatar" />
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
                <p className="our-team-card__role">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
