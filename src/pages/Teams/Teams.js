import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Teams.css";

import pinkline from "../../assets/images/rectangle-bg.png";
import founderimage from "../../assets/images/founder1.png";
import founder2 from "../../assets/images/founder2.png";
import founder3 from "../../assets/images/founder3.png";

const Teams = () => {
  const teamData = [
    {
      name: "Dr. Gaurav Mittal",
      position: "Chairperson",
      image: founderimage,
      description: "Dr. Gaurav Mittal serves as the Chairperson of Pink A Helpdrive Express Private Limited (PAHEL) and brings with him over 25 years of experience in business and entrepreneurship. Throughout these years, he has been associated with roles across business and governmental sectors, where he has supported and mentored several small businesses and initiatives.",
    },
    {
      name: "Anshika Mittal",
      position: "Co-Founder, Managing Director",
      image: founder2,
      description: "While observing the everyday mobility challenges faced by many women, Anshika Mittal recognized the clear need for safer and more reliable travel options. At just 19 years old, she founded PAHEL, reflecting her early commitment to creating meaningful social impact and guiding the platform's vision.",
    },
    {
      name: "Aditi Mittal",
      position: "Co-Founder",
      image: founder3,
      description: "Aditi Mittal co-founded PAHEL with the shared vision of building a platform that supports safer and more reliable mobility for women. She focuses on strengthening the operational and community aspects, ensuring a smooth and supportive experience for both passengers and drivers.",
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="teams-page">
      <section className="teams-header-section">
        <div className="header-content">
          <img src={pinkline} className="header-decoration" alt="" />
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="main-title"
          >
            Our Leadership Team
          </motion.h1>
          <div className="title-underline"></div>
        </div>
      </section>

      <section className="team-container">
        {teamData.map((member, index) => (
          <motion.div 
            className={`member-card ${index % 2 !== 0 ? "reverse-layout" : ""}`}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="image-section">
              <div className="image-wrapper">
                <img src={member.image} alt={member.name} className="founder-photo" />
                <div className="photo-accent"></div>
              </div>
            </div>

            <div className="info-section">
              <span className="info-badge">Founding Member</span>
              <h2 className="info-name">{member.name}</h2>
              <h4 className="info-role">{member.position}</h4>
              <p className="info-bio">{member.description}</p>
              <div className="info-footer-line"></div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Teams;