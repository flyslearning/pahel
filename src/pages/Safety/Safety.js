import React, { useEffect } from "react";
import "./Safety.css";
import pinkline from "../../assets/images/rectangle-bg.png";

const Safety = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const safetyProtocols = [
    {
      id: "01",
      icon: "👩‍✈️",
      title: "Verified Women Drivers – Our Trusted Sakhis",
      details: ["Government ID Check", "Background Screening", "Safety Training"],
      text: "Our Sakhis are carefully selected and thoroughly verified. They undergo professional conduct and emergency preparedness training to ensure a safe ecosystem."
    },
    {
      id: "02",
      icon: "📍",
      title: "Real-Time Live GPS Tracking",
      details: ["Live Journey Monitor", "Route Updates", "Ride Sharing"],
      text: "Every PAHEL ride is equipped with advanced GPS tracking. Share your location with loved ones in real-time for full transparency and peace of mind."
    },
    {
      id: "03",
      icon: "🚨",
      title: "Instant SOS Emergency Assistance",
      details: ["One-Tap Alert", "Emergency Protocol", "24/7 Response"],
      text: "Our in-app SOS feature alerts our emergency support team and your pre-selected contacts instantly. Your safety is never compromised."
    },
    {
      id: "04",
      icon: "🔎",
      title: "Multi-Layer Background Verification",
      details: ["Criminal Screening", "Address Proof", "Regular Compliance"],
      text: "Safety begins before the ride starts. We follow a strict verification process including identity authentication and criminal background checks."
    },
    {
      id: "05",
      icon: "📞",
      title: "24/7 Dedicated Support System",
      details: ["Late-Night Support", "Incident Guidance", "Immediate Response"],
      text: "Our dedicated support team operates 24/7 to address ride-related concerns and provide reassurance whenever you travel."
    }
  ];

  return (
    <div className="Safety-Wrapper">
      {/* Hero Section */}
      <section className="safety-hero-section">
        <div className="safety-main-container">
          <div className="title-wrapper">
            <img src={pinkline} className="header-pink-line" alt="" />
            <h1 className="safety-h1">Safety First</h1>
          </div>
          <p className="safety-tagline">Because Every Woman Deserves to Travel Without Fear</p>
          
          <div className="safety-intro-box">
            <p>
              At <strong>Pink A Helpdrive Express Private Limited (PAHEL)</strong>, safety is the heart of our mission. 
              Built on the vision of <span className="pink-accent-text">“by women, for women,”</span> we provide 
              confidence and peace of mind through every kilometer.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Protocols Section */}
      <section className="safety-protocol-section">
        <div className="safety-main-container">
          <div className="protocol-list">
            {safetyProtocols.map((item, index) => (
              <div className={`protocol-card ${index % 2 !== 0 ? "row-rev" : ""}`} key={item.id}>
                <div className="protocol-visual">
                  <div className="icon-sphere">
                    <span className="protocol-icon">{item.icon}</span>
                    <span className="protocol-number">{item.id}</span>
                  </div>
                </div>
                <div className="protocol-text">
                  <h3 className="protocol-title">{item.title}</h3>
                  <p className="protocol-desc">{item.text}</p>
                  <div className="protocol-features">
                    {item.details.map((detail, i) => (
                      <span className="feature-pill" key={i}>✓ {detail}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Footer Section */}
      <section className="safety-footer-commitment">
        <div className="commitment-inner-card">
          <h2 className="footer-h2">🌸 Our Commitment</h2>
          <p className="footer-lead">Safety is not an added benefit — it is our unwavering promise.</p>
          
          <div className="commitment-pill-grid">
            <div className="safety-pill">Every ride is <strong>protected.</strong></div>
            <div className="safety-pill">Every journey is <strong>respected.</strong></div>
            <div className="safety-pill">Every woman is <strong>empowered.</strong></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;