import React from "react";
import "./MapSection.css";

// Databiqs coordinates (from the provided embed)
const DATABIQS_LAT = 31.4241445;
const DATABIQS_LNG = 74.2424409;

// Google Maps directions URL (opens from current location to Databiqs)
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&origin=current+location&destination=${DATABIQS_LAT},${DATABIQS_LNG}`;

// Embedded map (static view of Databiqs location)
const MAP_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d13617.810034477196!2d74.25314605000001!3d31.42920715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3919030049526b09%3A0x636fc8e2a0d88b42!2sDatabiqs%2C%20Near%208%2C%20Block%20B%20Opf%20Housing%20Scheme%2C%20Lahore%2C%2054782%2C%20Pakistan!3m2!1d31.424144499999997!2d74.24244089999999!5e0!3m2!1sen!2s!4v1776792072216!5m2!1sen!2s`;

const MapSection = () => {
  const handleMapClick = () => {
    window.open(DIRECTIONS_URL, "_blank");
  };

  return (
    <section className="map-section">
      <div className="map-container" onClick={handleMapClick} role="button" tabIndex={0} aria-label="Get directions to Databiqs">
        <iframe
          className="map-iframe"
          src={MAP_EMBED_URL}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Databiqs Location Map"
        ></iframe>
        <div className="map-overlay" aria-hidden="true"></div>
        <div className="map-click-hint">Click for directions</div>
      </div>
    </section>
  );
};

export default MapSection;