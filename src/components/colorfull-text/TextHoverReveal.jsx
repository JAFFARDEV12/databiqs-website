import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import "./TextHoverReveal.css";

const TextHoverReveal = ({ text }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (!svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const cx = ((cursor.x - rect.left) / rect.width) * 100;
    const cy = ((cursor.y - rect.top) / rect.height) * 100;

    setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });
  }, [cursor]);

  return (
    <div className="text-hover-wrapper">
      <svg
        ref={svgRef}
        viewBox="0 0 1400 200"
        className="text-hover-svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) =>
          setCursor({ x: e.clientX, y: e.clientY })
        }
      >
        <defs>
          {/* Gradient */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          {/* Cursor mask */}
          <motion.radialGradient
            id="textMask"
            r="18%"
            gradientUnits="userSpaceOnUse"
            animate={maskPosition}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>

          <mask id="revealMask">
            <rect width="100%" height="100%" fill="url(#textMask)" />
          </mask>
        </defs>

        {/* Base text */}
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          className="base-text"
          opacity={hovered ? 0.25 : 0.45}
        >
          {text}
        </text>

        {/* Gradient reveal text */}
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          className="gradient-text"
          mask="url(#revealMask)"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default TextHoverReveal;
