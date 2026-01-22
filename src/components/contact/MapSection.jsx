import React from "react";
import "./MapSection.css";
import mapImg from "../../assets/map.png";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <img className="map-image" src={mapImg} alt="Map" />
      </div>
    </section>
  );
};

export default MapSection;
