// PurpleCTAButton.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./PurpleCTAButton.css";
import arrowIcon from "../../assets/rightarrow.svg";

const PurpleCTAButton = ({
  to = "/",
  text = "Read Full Blog",
  className = "",
  variant = "pill", // pill | inline
}) => {
  return (
    <Link
      to={to}
      className={`purpleBtn purpleBtn--${variant} ${className}`}
    >
      <span className="purpleBtn__text">{text}</span>

      <span className="purpleBtn__icon">
        <img src={arrowIcon} alt="Arrow" />
      </span>
    </Link>
  );
};

export default PurpleCTAButton;