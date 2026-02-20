import React, { useEffect } from "react";
import "./Contact.css";
import pinkline from "../../assets/images/rectangle-bg.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="contact-wrapper">
      {/* Background Shapes */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="contact-container">
        <header className="contact-hero">
          <span className="tag-line">Contact PAHEL</span>
          <h1 className="main-heading">Get In Touch</h1>
          <img src={pinkline} className="decor-line" alt="decoration" />
          <p className="sub-heading">
            For safe, reliable, and women-led transport solutions, reach out to us today.
          </p>
        </header>

        <div className="info-grid">
          {/* Phone Card */}
          <div className="info-card animate-fade">
            <div className="icon-box">📞</div>
            <h3>Call Us</h3>
            <div className="details">
              <a href="tel:+918368629913">+91 8368629913</a>
              <a href="tel:+917895409555">+91 7895409555</a>
            </div>
          </div>

          {/* Email Card */}
          <div className="info-card animate-fade delay-1">
            <div className="icon-box">📧</div>
            <h3>Email Us</h3>
            <div className="details">
              <a href="mailto:admin@pinkpahel.in">admin@pinkpahel.in</a>
              <a href="mailto:pahel.pvtltd@gmail.com">pahel.pvtltd@gmail.com</a>
            </div>
          </div>

          {/* Address Card */}
          <div className="info-card animate-fade delay-2">
            <div className="icon-box">📍</div>
            <h3>Location</h3>
            <div className="details">
              <p>B1 Sector -1, Ramghat Road (UPSIDA),</p>
              <p>Aligarh, UP - 202001</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;