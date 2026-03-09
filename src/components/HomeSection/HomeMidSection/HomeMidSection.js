import React from "react";
import { motion } from "framer-motion";
import "./HomeMidSection.css";

// Assets
import working from "../../../assets/images/working.png";
import empowerment from "../../../assets/images/empowerment.png";
import square from "../../../assets/images/square-bg.png";
import greencheck from "../../../assets/images/greencheck.png";

const HomeMidSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="pahel-wrapper">
      {/* --- HERO SECTION --- */}
      <section className="pahel-hero">
        <div className="container mini-grid">
          <motion.div 
            className="hero-text-content"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <span className="mini-badge">Safety First</span>
            <h1 className="font-zilla section-title">Drive with <span className="pink-accent">Confidence</span></h1>
            <p className="sub-text">
              PAHEL (Pink A Helpdrive Express) is a movement for women, by women. 
              We blend safety with independence for every Sakhi.
            </p>
          </motion.div>

          <motion.div className="hero-img-box" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="img-border-frame">
              <img src={empowerment} alt="Empowerment" className="compact-img" />
            </div>
            <img src={square} className="shape-decor" alt="" />
          </motion.div>
        </div>
      </section>

      {/* --- JOURNEY (COMPACT) --- */}
      <section className="journey-accent">
        <div className="container">
          <motion.div 
            className="journey-card-small"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="font-zilla">Our Journey</h2>
            <p>
              Started as a simple question: <strong>"What if the driver was a woman?"</strong> 
              Today, we provide dignity and freedom to women across the city.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="how-it-works-clean">
        <div className="container work-flex-small">
          <div className="work-img-container">
            <img src={working} alt="Working" className="side-img-small" />
          </div>

          <div className="work-steps-container">
            <h2 className="font-zilla small-h2">How <span className="pink-text">PAHEL</span> Works</h2>
            <div className="compact-steps">
              {[
                { t: "Book", d: "Use the PAHEL app." },
                { t: "Ride", d: "Travel with trained Sakhis." },
                { t: "Secure", d: "Women-only environment." },
                { t: "Digital", d: "No-hassle online payments." }
              ].map((item, i) => (
                <div key={i} className="mini-step-item">
                  <img src={greencheck} alt="check" className="check-icon" />
                  <p><strong>{item.t}:</strong> {item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION/VISION (SMALL CARDS) --- */}
      <section className="mv-section">
        <div className="container mini-grid-2">
          <div className="mv-card dark-pink">
            <h3>Our Mission</h3>
            <p>Providing safe, reliable transportation with professional female drivers.</p>
          </div>
          <div className="mv-card dark-charcoal">
            <h3>Our Vision</h3>
            <p>A world where every woman feels safe traveling alone, anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeMidSection;