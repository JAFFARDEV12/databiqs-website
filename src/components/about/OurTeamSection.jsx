import React from "react";
import "./OurTeamSection.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import ceoImg from "../../assets/ceo.png";
import avatarIcon from "../../assets/user.svg";
import teamlead from "../../assets/team/team-lead.png"
import projectmanager from "../../assets/team/project-manager&AI-Developer.png"
import softwareengineer from "../../assets/team/software-engineer.png"
import softwareengineer2 from "../../assets/team/software-engineer2.png"
import softwareengineer3 from "../../assets/team/software-engineer3.png"
import businessdevelopmentexecutive from "../../assets/team/business-development-executive.png"
import marketingmanager from "../../assets/team/marketing-manager.png"
import uiuxdesigner from "../../assets/team/ui-ux-designer.png"
import fullstackaideveloper from "../../assets/team/project-manager&AI-Developer.png"
import cto from "../../assets/team/CTO.png"

const TEAM_MEMBERS = [
  { name: "Jaffar Ali Chaudhary", role: "CEO", image: ceoImg, featured: true },
  { name: "Jawad Afzal", role: "Chief Technology Officer (CTO)", image: cto ,featured: true},
  { name: "Maudood Fareed", role: "Team Lead", image: teamlead ,featured: true},
  { name: "Alishba Aslam", role: "HR Manager"},
  { name: "Shamim", role: "Senior UI UX Designer"},
  { name: "Wali ullah", role: "Business Development Executive", image: businessdevelopmentexecutive ,featured: true},
  { name: "Abdullah Anjum", role: "Marketing Manager", image: marketingmanager ,featured: true},
  { name: "Maarij Ali", role: "Project Manager", image: projectmanager ,featured: true},
  { name: "Irum Shahzadi", role: "Software Engineer"},
  { name: "Ali Raza", role: "Software Engineer", image: softwareengineer3 ,featured: true},
  { name: "Saad Bin Abi Usama", role: "Software Engineer", image: softwareengineer2 ,featured: true},
  { name: "Hamza Mumtaz", role: "UI UX Designer", image: uiuxdesigner ,featured: true},
  { name: "Faizan Ahmed", role: "Software Engineer", image: softwareengineer ,featured: true},
  { name: "Talha Bin Faisal", role: "Full Stack AI Developer", image: fullstackaideveloper ,featured: true},
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
                      loading="lazy"
                      decoding="async"
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
