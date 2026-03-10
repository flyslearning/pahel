import React, { useEffect } from "react";
import "./BecomeSakhi.css";
import pinkline from "../../assets/images/rectangle-bg.png";

const BecomeSakhi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Google Form ki link yahan update karein
  const googleFormUrl = "https://forms.gle/cLHLphNt8dZj2oug8";

  return (
    <div className="Sakhi-Main">
      {/* Header Section */}
      <section className="sakhi-intro">
        <div className="about-header">
          <div className="title-wrapper">
            <img src={pinkline} className="about-pinkline" alt="decor" />
            <h1 className="sakhi-title">Become a Sakhi</h1>
          </div>
          <p className="sakhi-subtitle">Drive with pride. Earn with dignity. Empower with purpose.</p>
        </div>
        
        <div className="sakhi-text-container">
          <p className="intro-paragraph">
            At <strong>Pink A Helpdrive Express Private Limited (PAHEL)</strong>, we believe every woman deserves 
            the freedom to move — and the opportunity to lead. As a <strong>Sakhi</strong>, you are not just a driver. 
            You are a symbol of safety, strength, and self-reliance.
          </p>
          <p className="intro-paragraph">
            Join our women-led movement built on the vision of <span className="pink-highlight">“by women, for women.”</span> 
            Together, we are redefining mobility and creating a trusted space where women feel secure, respected, 
            and confident every time they travel.
          </p>
          <div className="vision-tag">
             Vision: <span className="pink-highlight">“By women, for women.”</span> 
          </div>
        </div>
      </section>

      {/* Why Become a Sakhi Section */}
      <section className="why-sakhi">
        <h3 className="section-heading">Why Join the Movement?</h3>
        <div className="benefits-grid">
          {[
            { icon: "🛡️", title: "Safe Environment", desc: "A women-only network designed for your total comfort." },
            { icon: "💰", title: "Financial Freedom", desc: "Transparent earnings to build a stable future for your family." },
            { icon: "🎓", title: "Expert Training", desc: "Professional coaching in driving, safety, and etiquette." },
            { icon: "🤝", title: "Strong Sisterhood", desc: "A community of inspiring women who grow together." },
            { 
              icon: "📈", 
              title: "Growth Opportunities", 
              desc: "Unlock higher earning potential, performance rewards, and leadership opportunities within the community." 
            },
            { 
              icon: "🧭", 
              title: "Complete Support System", 
              desc: "Dedicated assistance team to guide you at every step — from onboarding to daily operations." 
            }
            
          ].map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <span className="benefit-icon">{benefit.icon}</span>
              <h4>{benefit.title}</h4>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements Section */}
      <section className="requirements-section">
        <div className="req-content">
          <h3 className="section-heading">Who Can Apply?</h3>
          <p className="req-intro">Any female above 18 years of age who knows driving, housewives, students etc,</p>
          <h3 className="section-heading2">Requirements</h3>
          <ul className="req-list">
            <li>Valid Driving License</li>
            <li>Vehicle Registration (RC)</li>
            <li>Aadhaar Card</li>
            <li>Passion for Empowerment</li>
          </ul>
          <div className="support-note">
                <p>
                  <strong>Missing documents or you are a fresher and want to join? </strong> 
                    Don’t worry, our team will guide you through the process step by step.
                </p>
              </div>
        </div>
        <div className="contact-btn-container">
      <a href="/contact" className="contact-now-btn">
        Contact Now
      </a>
    </div>
      </section>

      {/* New Call to Action Section */}
      <section className="sakhi-cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Take the Wheel?</h2>
          <p className="cta-subtext">Your journey towards independence starts with a single click.</p>
          
          <div className="cta-action-wrapper">
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="apply-main-btn"
            >
              Apply Now
            </a>
            <p className="form-note">Click here to apply and get started !</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeSakhi;