import React, { useState } from "react";
import "./ImageCarousel.css";

import carouselbgc from "../../../assets/images/carouselbackground.png";

import leftimgbtn from "../../../assets/images/leftimgbtn.png";
import rightimgbtn from "../../../assets/images/rightimgbtn.png";

const ImageCarousel = ({
  images,
  currentIndex,
  handlePrevClick,
  handleNextClick,
}) => {
  return (
    <div className="ImageCarousel">
      <div className="image-carousel">
        <img
          src={leftimgbtn}
          onClick={() => handlePrevClick(images)}
          className="left-btn-img"
        />

        <div className="img-container-carousel">
          <img src={carouselbgc} className="carouse-bgc" />
          <img
            src={images[currentIndex]}
            // alt={`Image ${currentIndex + 1}`}
            className="carousel-img"
          />
        </div>

        <img
          src={rightimgbtn}
          onClick={() => handleNextClick(images)}
          className="right-btn-img"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
