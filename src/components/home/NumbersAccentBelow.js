import React from 'react';
import './NumbersAccentBelow.css';
import scrollIcon from '../../assets/scroll.svg';

/** Scroll mouse hint only - below the numbers / analytics card (revolving Lottie lives in hero). */
const NumbersAccentBelow = () => {
  return (
    <div className="numbers-accent-below">
      <div className="numbers-accent-below__scroll">
        <img src={scrollIcon} alt="Scroll to explore" />
      </div>
    </div>
  );
};

export default NumbersAccentBelow;
