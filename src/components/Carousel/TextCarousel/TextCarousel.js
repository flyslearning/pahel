import React from "react";
import "./TextCarousel.css";

import pinkleftimgbtn from "../../../assets/images/pinkleftimgbtn.png";
import pinkrightimgbtn from "../../../assets/images/pinkrightimgbtn.png";
import progress from "../../../assets/images/progress.png";

const TextCarousel = ({
  foundersDescriptions,
  currentIndex2,
  handlePrevClick2,
  handleNextClick2,
}) => {
  return (
    <div className="text-main-section">
      <div className="text-carousel">
        <div className="text-carousel-info">
          <div>{foundersDescriptions[currentIndex2]?.description}</div>
          <div>{foundersDescriptions[currentIndex2]?.foundername}</div>
          <div>{foundersDescriptions[currentIndex2]?.position}</div>
        </div>
        <div className="text-carousel-btn">
          <img
            src={pinkleftimgbtn}
            onClick={() => handlePrevClick2(foundersDescriptions)}
            className="pink-left-btn-img"
            alt="Left Button"
          />
          <img
            src={progress}
            onClick={() => handlePrevClick2(foundersDescriptions)}
            className="progress"
            alt="Progress"
          />
          <img
            src={pinkrightimgbtn}
            onClick={() => handleNextClick2(foundersDescriptions)}
            className="pink-right-btn-img"
            alt="Right Button"
          />
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
