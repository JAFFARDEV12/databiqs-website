import React from "react";
import "./MapSection.css";

// Google Maps Embed URL (no API key required)
// To get your embed URL:
// 1. Go to Google Maps (https://www.google.com/maps)
// 2. Search for your business address
// 3. Click "Share" button
// 4. Select "Embed a map" tab
// 5. Copy the iframe src URL and paste it below
const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27225.328237874102!2d74.25636258306699!3d31.46461865701043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1769629461604!5m2!1sen!2s";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          className="map-iframe"
          src={MAP_EMBED_URL}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
