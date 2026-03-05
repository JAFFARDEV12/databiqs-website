import React, { useEffect, useState } from "react";
import "./ColourfulText.css";

const ColourfulText = ({ text }) => {
  const [active, setActive] = useState(false);   // auto cycle
  const [hovered, setHovered] = useState(false); // user hover

  useEffect(() => {
    let t1, t2;

    const cycle = () => {
      t1 = setTimeout(() => setActive(true), 5000);   // gradient ON
      t2 = setTimeout(() => setActive(false), 15000); // gradient OFF
    };

    cycle();
    const interval = setInterval(cycle, 20000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
    };
  }, []);

  const isGradientOn = active || hovered;

  return (
    <h2
      className={`au2-titles ${isGradientOn ? "gradient-active" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="hover-char"
          style={{ animationDelay: `${index * 0.04}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

export default ColourfulText;
