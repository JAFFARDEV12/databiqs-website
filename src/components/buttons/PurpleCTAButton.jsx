import React from "react";
import { Link } from "react-router-dom";
import "./PurpleCTAButton.css";
import { assetUrl } from '../../utils/assetUrl';

const arrowIcon = assetUrl('assets/rightarrow.svg');

const PurpleCTAButton = ({
  to = "/",
  text = "Read Full Blog",
  className = "",
  variant = "pill",
  onClick,
}) => {
  const inner = (
    <>
      <span className="purpleBtn__text">{text}</span>
      <span className="purpleBtn__icon">
        <img src={arrowIcon} alt="Arrow" />
      </span>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        className={`purpleBtn purpleBtn--${variant} ${className}`}
        onClick={onClick}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link to={to} className={`purpleBtn purpleBtn--${variant} ${className}`}>
      {inner}
    </Link>
  );
};

export default PurpleCTAButton;
