import React from "react";
import "./HomeTopSection.css";

import carandgirl from "../../../assets/images/carandgirl.png";
import squarebg from "../../../assets/images/square-bg.png";
import playstore from "../../../assets/images/playstore.png";
import applestore from "../../../assets/images/applestore.png";

const HomeTopSection = () => {
  return (
    <div className="home-top-main-section">
      <div className="home-top-inner-section">
        <div className="home-top-inner-section-left">
          <div className="main-info-section ">
            <p className="pink-head font-500">
              PINK : A HELPDRIVE EXPRESS PVT LTD
            </p>
            <h1 className="font-zilla main-header font-bold">
              Of Women, For Women, By Women
            </h1>
            <p className="font-semibold hindi-line">
              स्त्रियाः स्त्रियाः कृते स्त्रियाः कृते
            </p>
            <div className="btn-container">
  <button
    className="main-btn"
    onClick={() =>
      window.open(
        "https://play.google.com/store/apps/details?id=com.pinkpahel.passenger",
        "_blank"
      )
    }
  >
    <img src={playstore} alt="Play Store" />
    Download from <br /> Playstore
  </button>

  <button
    className="main-btn"
    onClick={() =>
      window.open(
        "https://apps.apple.com/app/id1234567890",
        "_blank"
      )
    }
  >
    <img src={applestore} alt="App Store" />
    Download from <br /> Appstore
  </button>
</div>
          </div>
        </div>
        <div className="home-top-inner-section-right">
          <img src={squarebg} className="bg-top" />
          <div className="main-img-container">
            <img src={carandgirl} className="home-main-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopSection;
