import React, { useEffect } from "react";
import "./Resources.css";

import ServicesPopup from "../../components/ResourcePopup/ServicesPopup/ServicesPopup";

import RoundBtn from "../../components/RoundBtn/RoundBtn";
import squarebg from "../../assets/images/square-bg.png";
import dreamcar from "../../assets/images/dreamcar.png";
import pinkline from "../../assets/images/rectangle-bg.png";
import insurance from "../../assets/images/insurance.png";
import cardriving from "../../assets/images/cardriving.png";
import parkcar from "../../assets/images/parkcar.png";
import Popup from "../../components/ResourcePopup/Popup/Popup";

const Resources = ({ isOpen, onClose, openForm }) => {
  useEffect(() => {
    // Reset the scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="main-resource">
      <img src={squarebg} className="resource-first-bg" />
      <img src={squarebg} className="resource-second-bg" />
      <img src={squarebg} className="resource-third-bg" />
      <div className="Resources">
        <Popup isOpen={isOpen} onClose={onClose} />
        <ServicesPopup isOpen={isOpen} onClose={onClose} />
        <div className="resources-first-info">
          <img src={dreamcar} className="info-img" />
          <div className="first-info-section">
            <img src={pinkline} className="pink-line" />
            <h2 className="header-info">Secure Your Dream Car with Ease</h2>
            <p className="description-info">
              Owning a car is often the first step toward financial stability
              and a brighter future. Pahel is dedicated to making this dream a
              reality for you. Our car loan assistance program not only helps
              you secure a car loan but also guides you through the entire
              process. We collaborate with trusted financial partners who offer
              competitive interest rates and flexible repayment options,
              tailored to your budget. Whether you're a seasoned driver or just
              starting, we're here to support you in your journey towards car
              ownership.
            </p>
            <RoundBtn
              name={"Apply for Car Loan Assistance"}
              clickFunc={openForm}
            />
          </div>
        </div>
        <div className="resources-first-info reverse">
          <img src={insurance} className="info-img" />
          <div className="first-info-section">
            <img src={pinkline} className="pink-line" />
            <h2 className="header-info">
              Protecting Your Investment and Future
            </h2>
            <p className="description-info">
              At Pahel, we believe in safeguarding your investment and securing
              your future. Our car insurance support goes beyond the basics,
              offering comprehensive coverage that not only protects your
              vehicle but also provides peace of mind. We work with reputable
              insurance providers to find the best policies for you. From
              liability coverage to collision protection, we ensure you're fully
              covered on the road, allowing you to focus on driving, not
              worrying.
            </p>
            <RoundBtn
              name={"Get Car Insurance Assistance"}
              clickFunc={openForm}
            />
          </div>
        </div>
        <div className="resources-first-info">
          <img src={cardriving} className="info-img" />
          <div className="first-info-section">
            <img src={pinkline} className="pink-line" />
            <h2 className="header-info">
              The Path to Legitimacy and Opportunity
            </h2>
            <p className="description-info">
              Obtaining a valid driving license is your ticket to opportunity
              and legitimacy as a driver. Pahel is committed to making this
              process as smooth as possible. We provide step-by-step guidance,
              from the application to the test. We also offer resources,
              including study materials and practice tests, to help you ace your
              exams. With our support, you can confidently navigate the path to
              a legal and fulfilling driving career.
            </p>
            <RoundBtn
              name={"Get Help with Your Driving License"}
              clickFunc={openForm}
            />
          </div>
        </div>
        <div className="resources-first-info third-for-img reverse">
          <img src={parkcar} className="info-img" />
          <div className="first-info-section">
            <img src={pinkline} className="pink-line" />
            <h2 className="header-info">Master the Art of Safe Driving</h2>
            <p className="description-info">
              Safe driving is not just a skill; it's a responsibility. Pahel is
              dedicated to helping you master the art of safe and efficient
              driving. Our specialized training and skill enhancement programs
              cover everything from defensive driving techniques to customer
              service skills. We believe that safe and courteous drivers are the
              backbone of our service, and we're here to invest in your success.
              Whether you're a new driver looking to build your skills or an
              experienced driver seeking to enhance your abilities, our training
              programs are designed for you.
            </p>
            <RoundBtn
              name={"Start Your Training Journey"}
              clickFunc={openForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
