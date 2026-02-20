import React from "react";
import "./AppLaunchInfo.css";

// Assets
import pahelapp from "../../../assets/images/pahelapp.png";

const AppLaunchInfo = () => {
  return (
    <div className="app-live-section">
      <div className="app-live-container">
        
        {/* Left Side: Dynamic App Mockup */}
        <div className="app-visual-side">
          <div className="blob-gradient"></div>
          <img src={pahelapp} alt="PAHEL App Live" className="app-floating-mockup" />
        </div>

        {/* Right Side: Download Content */}
        <div className="app-content-side">
          <div className="live-status-badge">
            <span className="dot-blink"></span> NOW LIVE
          </div>
          
          <h2 className="app-main-title">
            Download the <span className="pink-gradient-text">PAHEL App</span> Today
          </h2>
          
          <p className="app-description">
            Your trusted companion for safe, women-only rides is now available. 
            Join thousands of Sakhis and riders who are redefining mobility with safety and empowerment.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AppLaunchInfo;