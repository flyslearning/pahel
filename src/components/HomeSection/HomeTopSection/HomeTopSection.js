import React from "react";
import "./HomeTopSection.css";

// Assets
import carandgirl from "../../../assets/images/carandgirl.png";
import squarebg from "../../../assets/images/square-bg.png";
import playstore from "../../../assets/images/playstore.webp";
import applestore from "../../../assets/images/applestore.png";

const HomeTopSection = () => {
  return (
    <section className="pahel-hero-wrapper">
      {/* Background Animated Blobs */}
      <div className="hero-orb orb-pink"></div>
      <div className="hero-orb orb-blue"></div>

      <div className="pahel-hero-container">
        {/* Left Side: Content */}
        <div className="hero-left">
          <div className="animate-reveal">
            <div className="hero-badge">
              <span>PINK : A HELPDRIVE EXPRESS PVT LTD</span>
            </div>
          </div>
          
          <div className="animate-reveal delay-200">
            <h1 className="hero-title">
              Of Women, <span className="highlight-text">For Women</span>, <br /> By Women
            </h1>
          </div>
          
          <div className="animate-reveal delay-400">
            <p className="hero-hindi">
              स्त्रियाः स्त्रियाः कृते स्त्रियाः कृते
            </p>
          </div>

          <div className="hero-store-group animate-reveal delay-600">
            <a 
              href="https://play.google.com/store/apps/details?id=com.pinkpahel.passenger" 
              target="_blank" 
              rel="noopener noreferrer"
              className="store-link"
            >
              <img src={playstore} alt="Google Play" className="store-img" />
            </a>

            <a 
              href="https://apps.apple.com/app/id1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="store-link"
            >
              <img src={applestore} alt="App Store" className="store-img" />
            </a>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="hero-right">
          <div className="visual-container">
            <img src={squarebg} className="rotating-pattern" alt="" />
            <div className="image-float-wrap">
              <img src={carandgirl} className="hero-main-image" alt="PAHEL Women Service" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTopSection;