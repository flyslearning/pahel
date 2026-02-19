import React, { useState, useEffect } from "react";
import "./Teams.css";

import pinkline from "../../assets/images/rectangle-bg.png";
import ImageCarousel from "../../components/Carousel/ImageCarousel/ImageCarousel";
import TextCarousel from "../../components/Carousel/TextCarousel/TextCarousel";
import founderimage from "../../assets/images/founder1.png";
import founder2 from "../../assets/images/founder2.png";
import founder3 from "../../assets/images/founder3.png";

const Teams = () => {
  const images = [founderimage, founder2, founder3];
  const foundersDescriptions = [
    {
      description:
        "In the field of entrepreneurship,from advocating for small businesses to lead women-centric initiatives. Beyond his impactful roles in the business and governmental sectors.He stands as a beacon of empowerment and change .",
      foundername: "Gaurav Mittal",
      position: "Executive Director",
    },
    {
      description:
        "At the age of 19, Anshika Mittal inspire with a unique and empowering idea she envisions a transportation service exclusively for women, driven by women.This innovative concept that is not only redefining mobility but also developing empowerment and trust among women.",
      foundername: "Anshika Mittal",
      position: "Executive Director",
    },
    {
      description:
        "At the age of 19, Aditi Mittal came up with an idea of a women-centric transportation service was born out of desire to provide a safe and comfortable travel option for women.",
      foundername: "Aditi Mittal",
      position: "Executive Director",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleTextCarouselClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  useEffect(() => {
    // Reset the scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="Teams">
      <div className="teams-header">
        <img src={pinkline} className="teams-pinkline" alt="Pink Line" />
        <h2 className="founder-header">Our Founders</h2>
      </div>
      <div className="carousel-section">
        <ImageCarousel
          images={images}
          currentIndex={currentIndex}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
        <TextCarousel
          foundersDescriptions={foundersDescriptions}
          currentIndex2={currentIndex}
          handlePrevClick2={handlePrevClick}
          handleNextClick2={handleNextClick}
          onTextClick={handleTextCarouselClick}
        />
      </div>
    </div>
  );
};

export default Teams;
