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
  const ceoMember = TEAM_MEMBERS.find((member) => member.role === "CEO");
  const otherMembers = TEAM_MEMBERS.filter((member) => member.role !== "CEO");

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

        {ceoMember ? (
          <div className="our-team__spotlight">
            <article className="our-team-card our-team-card--featured our-team-card--spotlight">
              <div className="our-team-card__stage">
                <div className="our-team-card__mesh" aria-hidden />
                <div className="our-team-card__hex" aria-hidden />
                <div className="our-team-card__media">
                  {ceoMember.image ? (
                    <img
                      src={ceoMember.image}
                      alt={ceoMember.name}
                      className="our-team-card__avatar"
                    />
                  ) : (
                    <div className="our-team-card__avatar-fallback" aria-label={ceoMember.name}>
                      <img src={avatarIcon} alt="" aria-hidden />
                      <span>{getInitials(ceoMember.name)}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="our-team-card__nameplate">
                <h3 className="our-team-card__name">{ceoMember.name}</h3>
                <p className="our-team-card__role">{ceoMember.role}</p>
              </div>
            </article>
          </div>
        ) : null}

        <div className="our-team__carousel" aria-label="Team Members Carousel">
          <div className="our-team__track">
            {[0, 1].map((laneIdx) => (
              <div className="our-team__lane" key={laneIdx}>
                {otherMembers.map((member) => (
                  <article
                    key={`${laneIdx}-${member.role}-${member.name}`}
                    className="our-team-card our-team-card--compact"
                  >
                    <div className="our-team-card__stage">
                      <div className="our-team-card__mesh" aria-hidden />
                      <div className="our-team-card__hex" aria-hidden />
                      <div className="our-team-card__media">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="our-team-card__avatar"
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
                      <p className="our-team-card__role">{member.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
