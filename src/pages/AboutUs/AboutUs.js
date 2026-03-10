import React, { useEffect } from "react";
import "./AboutUs.css";
import pinkline from "../../assets/images/rectangle-bg.png";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, { threshold: 0.15 });

    const animatedElements = document.querySelectorAll(".reveal");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="AboutUs-Wrapper">
      {/* Background Decor */}
      <div className="bg-glow"></div>

      {/* Hero Section */}
      <section className="about-hero reveal">
        <div className="hero-header">
          <img src={pinkline} className="brand-accent" alt="" />
          <h1 className="hero-title">Our Story</h1>
          <p className="hero-tag">A Movement for Women, By Women</p>
        </div>
        
        <div className="glass-container reveal">
          <p className="p-main">
            <strong>Pink A Helpdrive Express Private Limited (PAHEL)</strong> is a women-led initiative dedicated to making travel safer, easier, and more empowering for women.
          </p>
          <p className="p-sub">
            Built on the idea <span className="pink-text">“Of Women, By Women, For Women,”</span> PAHEL provides reliable transport while creating opportunities for female drivers, fondly called <strong>Sakhis</strong>.
          </p>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="journey-grid reveal">
        <div className="journey-card reveal">
          <h2 className="section-h">The Seed of Change</h2>
          <p>
            The story of PAHEL began in our college days. Like so many young women, 
            late-night travel was often met with a "no" from parents—not out of lack of trust in us, 
            but fear of the world outside.
          </p>
          <p>
            One thought became the seed of PAHEL: <strong>What if the driver was also a woman?</strong> 
            A ride driven by a woman would not only feel safer but also more comforting.
          </p>
        </div>
      </section>

      {/* How It Works - Visual Steps */}
      <section className="steps-section reveal">
        <h2 className="section-h center">How it works?</h2>
        <div className="steps-container">
          <div className="step-box reveal">
            <span className="step-id">01</span>
            <h4>Book</h4>
            <p>Request a ride via the PAHEL app.</p>
          </div>
          <div className="step-box reveal">
            <span className="step-id">02</span>
            <h4>Ride</h4>
            <p>A trained Sakhi picks you up.</p>
          </div>
          <div className="step-box reveal">
            <span className="step-id">03</span>
            <h4>Arrive</h4>
            <p>Travel with confidence and dignity.</p>
          </div>
        </div>
      </section>



      {/* Core Values - Horizontal Scroll on Mobile */}
<section className="values-section reveal" style={{ marginBottom: "60px" }}>
   <h2 className="section-h center">Core Values</h2>
   <div className="values-flex">
      {["Safety First", "Empowerment", "Trust", "Inclusivity", "Compassion"].map((val, i) => (
        <div key={i} className="value-chip">{val}</div>
      ))}
   </div>
</section>

      {/* Why Nation Section */}
      <section className="nation-section reveal">
        <div className="glass-card">
          <h2 className="section-h">Why the Nation needs PAHEL?</h2>
          <p>
            PAHEL empowers women drivers (Sakhis) to earn, grow, and lead. 
            It ensures improved safety, encourages empowerment, and disrupts traditional stereotypes while reducing gender gaps.
          </p>
        </div>
      </section>

      {/* Final Tagline Card */}
      <section className="final-tag reveal">
        <div className="tag-inner">
          <p className="usp-text">“Of Women, For Women, By Women”</p>
          <div className="divider"></div>
          <p className="final-desc">
            PAHEL is more than a transport service. It’s an initiative where women lead the way, 
            women create the change, and women own their journeys.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;