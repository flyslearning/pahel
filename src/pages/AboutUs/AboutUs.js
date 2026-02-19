import React, { useEffect } from "react";
import "./AboutUs.css";
import pinkline from "../../assets/images/rectangle-bg.png";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="AboutUs-Main">
      {/* Intro Section */}
      <section className="about-intro">
        <div className="about-header">
          <img src={pinkline} className="about-pinkline" alt="decor" />
          <h2 className="about-title">About Us</h2>
        </div>
        
        <div className="about-text-container">
          <p className="intro-paragraph">
            <strong>Pink A Helpdrive Express Private Limited (PAHEL)</strong> is a 
            women-led initiative dedicated to making travel safer, easier, and 
            more empowering for women. Built on the vision of 
            <span className="pink-highlight"> “by women, for women,”</span> PAHEL 
            provides reliable women-only transport services while creating 
            opportunities for female drivers, fondly called as <strong>Sakhis</strong>.
          </p>
          <p className="intro-paragraph">
            More than just a ride, PAHEL is a movement that blends safety with 
            independence — giving women the confidence to step out freely and 
            the chance to shape their own future. With professionalism at its core 
            and compassion at its heart, PAHEL is redefining mobility as a space 
            of trust, dignity, and empowerment.
          </p>
        </div>
      </section>

      {/* USP & Slogan Section */}
      <section className="about-usp">
        <div className="usp-card">
          <p className="usp-quotes">
            “Women at the wheel.<br />
            Women in the lead.<br />
            Women at the heart — that’s PAHEL.”
          </p>
          <div className="usp-divider"></div>
          <h2 className="usp-slogan">Of Women, For Women, By Women</h2>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;