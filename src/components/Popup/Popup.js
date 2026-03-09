import React, { useEffect } from "react";
import "./Popup.css";

function Popup({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="pahel-overlay" onClick={onClose}>
      <div className="pahel-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">&times;</button>
        
        <div className="pahel-content">
          <div className="header-section">
            <h1 className="main-title">Welcome to PAHEL</h1>
            <h2 className="company-name">Pink A Helpdrive Express Private Limited</h2>
            <div className="platform-badge">India’s women-only mobility platform</div>
          </div>

          <div className="quote-section">
            <div className="quote-wrapper">
              <span className="quote-mark">“</span>
              <p className="vision-quote">Freedom to travel, confidence to move.</p>
              <span className="quote-mark">”</span>
            </div>
          </div>

          <button className="action-btn" onClick={onClose}>
            Get Started
          </button>
          
          <div className="decorative-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;