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
  description: (
    <div>
      <p>
        Dr. Gaurav Mittal serves as the Chairperson of Pink A Helpdrive Express Private Limited (PAHEL) and brings with him over 25 years of experience in business and entrepreneurship. Throughout these years, he has been associated with roles across business and governmental sectors, where he has supported and mentored several small businesses and initiatives.
      </p>

      <p style={{ fontStyle: "italic", marginTop: "10px", color: "#555" }}>
        “I strongly believe that this innovative and women-led initiative brought by PAHEL would surely create meaningful social and economic impact. Supporting such initiatives is essential for building a more inclusive and empowered society.”
      </p>
    </div>
  )
},
    {
  name: "Anshika Mittal",
  position: "Co-Founder, Managing Director",
  image: founder2,
  description: (
    <div>
      <p>
        Ms. Anshika Mittal (Co-Founder, Managing Director) recognized the clear need for safer and more reliable travel options while observing the everyday mobility challenges faced by many women. Motivated by the desire to address this gap, she took the initiative to build a solution that could make women’s travel safer and more reliable.
      </p>

      <p style={{ fontStyle: "italic", marginTop: "10px", color: "#555" }}>
        “While observing the everyday mobility challenges faced by many women, a clear need for safer and more reliable travel options was recognised. Motivated by the desire to address this gap, we took an initiative to build a solution that could make women’s travel safer and more reliable.
        <br /><br />
        By creating PAHEL we aim to build a trusted mobility solution that enhances travel safety for women while also creating meaningful economic opportunities for women drivers.”
      </p>
    </div>
  )
},
    {
  name: "Aditi Mittal",
  position: "Co-Founder",
  image: founder3,
  description: (
    <div>
      <p>
        C.S. Aditi Mittal (Co-Founder) co-founded PAHEL with the shared vision of building a platform that supports safer and more reliable mobility for women. She focuses on strengthening the operational and community aspects, ensuring a smooth and supportive experience for both passengers and drivers.
      </p>

      <p style={{ fontStyle: "italic", marginTop: "10px", color: "#555" }}>
        “It was realised that commuting for women often comes with safety issues, uncomfortable experiences, societal barriers etc, which needs to be addressed.
        <br /><br />
        Through PAHEL, we bring you something more than just a ride service. It’s a movement towards building a travel ecosystem where women feel more confident while commuting, along with giving the community access to flexible and dignified earning opportunities.”
      </p>
    </div>
  )
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