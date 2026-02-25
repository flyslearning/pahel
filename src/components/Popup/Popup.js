import React, { useEffect } from "react";
import "./Popup.css";

function Popup({ onClose }) {
  // Prevent background scrolling when popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="pahel-overlay" onClick={onClose}>
      <div className="pahel-card" onClick={(e) => e.stopPropagation()}>
        {/* Floating Close Button */}
        <button className="close-circle" onClick={onClose} aria-label="Close">
          &times;
        </button>
        
        <div className="pahel-header">
          <span className="brand-badge-premium">✨ By Women, For Women</span>
          <h2 className="pahel-title">Welcome to PAHEL <span className="taxi-emoji">🚕</span></h2>
          <div className="gradient-line"></div>
          <p className="tagline-styled">Pink A Helpdrive Express</p>
        </div>
        
        <div className="pahel-body">
          <p className="mission-description">
            More than just a ride, we are a <strong>movement</strong>. 
            Empowering women through safe, dignified, and professional transport.
          </p>

          <div className="feature-container">
            <div className="glass-feature">
              <div className="icon-wrapper">🛡️</div>
              <div className="feature-text">
                <strong>Safe Rides</strong>
                <span>Verified Sakhi drivers</span>
              </div>
            </div>
            
            <div className="glass-feature">
              <div className="icon-wrapper">💪</div>
              <div className="feature-text">
                <strong>Empowered</strong>
                <span>Building independence</span>
              </div>
            </div>
          </div>
        </div>

        <button className="cta-button-shimmer" onClick={onClose}>
          Join the Movement
        </button>
        
        <p className="footer-subtext">Redefining mobility with trust & dignity</p>
      </div>
    </div>
  );
}

export default Popup;