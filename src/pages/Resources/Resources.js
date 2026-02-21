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
    window.scrollTo(0, 0);
  }, []); 

  const resourceData = [
    {
      img: dreamcar,
      title: "Secure Your Dream Car with Ease",
      desc: "Owning a car is often the first step toward financial stability and a brighter future. Pahel is dedicated to making this dream a reality for you. Our car loan assistance program not only helps you secure a car loan but also guides you through the entire process. We collaborate with trusted financial partners who offer competitive interest rates and flexible repayment options, tailored to your budget.",
      btnText: "Apply for Car Loan Assistance",
      reverse: false
    },
    {
      img: insurance,
      title: "Protecting Your Investment and Future",
      desc: "At Pahel, we believe in safeguarding your investment and securing your future. Our car insurance support goes beyond the basics, offering comprehensive coverage that not only protects your vehicle but also provides peace of mind. We work with reputable insurance providers to find the best policies for you. From liability coverage to collision protection, we ensure you're fully covered.",
      btnText: "Get Car Insurance Assistance",
      reverse: true
    },
    {
      img: cardriving,
      title: "The Path to Legitimacy and Opportunity",
      desc: "Obtaining a valid driving license is your ticket to opportunity and legitimacy as a driver. Pahel is committed to making this process as smooth as possible. We provide step-by-step guidance, from the application to the test. We also offer resources, including study materials and practice tests, to help you ace your exams. Navigate the path to a legal and fulfilling career.",
      btnText: "Get Help with Your Driving License",
      reverse: false
    },
    {
      img: parkcar,
      title: "Master the Art of Safe Driving",
      desc: "Safe driving is not just a skill; it's a responsibility. Pahel is dedicated to helping you master the art of safe and efficient driving. Our specialized training and skill enhancement programs cover everything from defensive driving techniques to customer service skills. Whether you're a new driver or an experienced one, our programs are designed to invest in your success.",
      btnText: "Start Your Training Journey",
      reverse: true
    }
  ];

  return (
    <div className="main-resource">
      {/* Background Decor */}
      <div className="bg-decorations">
        <img src={squarebg} className="res-bg res-bg-1" alt="" />
        <img src={squarebg} className="res-bg res-bg-2" alt="" />
      </div>

      <div className="Resources-Container">
        <Popup isOpen={isOpen} onClose={onClose} />
        <ServicesPopup isOpen={isOpen} onClose={onClose} />

        <header className="resources-header">
          <h1 className="res-main-title">Partnering in Your Progress</h1>
          <p className="res-main-subtitle">Empowering Sakhis with the right tools, finance, and skills.</p>
        </header>

        <div className="resources-grid">
          {resourceData.map((item, index) => (
            <div className={`resource-card ${item.reverse ? "reverse" : ""}`} key={index}>
              <div className="resource-img-wrapper">
                <img src={item.img} className="resource-visual" alt={item.title} />
              </div>
              
              <div className="resource-text-content">
                <div className="title-box">
                  <img src={pinkline} className="pink-accent" alt="" />
                  <h2 className="res-card-title">{item.title}</h2>
                </div>
                <p className="res-card-desc">{item.desc}</p>
                <div className="res-btn-container">
                  <RoundBtn name={item.btnText} clickFunc={openForm} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;