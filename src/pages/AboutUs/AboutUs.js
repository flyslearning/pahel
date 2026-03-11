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
{/* The Journey Section */}
<section className="journey-grid reveal">
  <div className="journey-card reveal">
    <h2 className="section-h">A Seed of Change</h2>

    <p>
      The story of PAHEL began during our college days. Like so many young women,
      we often heard our parents say “no” to late-night travel or to going alone
      in a cab or auto. It wasn’t about trust in us but about the fear of what
      could happen outside. Every day, stories of harassment and unsafe incidents
      made this fear feel very real.
    </p>

    <p>
      Slowly, we realized how safety concerns silently stopped many women from
      moving freely, and even made them miss out on opportunities they truly
      deserved.
    </p>

    <p>
      In those moments, one simple thought came to us —
      <strong> what if the driver was also a woman?</strong>
      A ride driven by a woman would not only feel safer but also more comforting.
      And beyond safety, it could open a new door, giving women a chance to earn,
      to become independent, and to support others like them.
    </p>

    <p>
      That thought became a seed and at just <strong>19 years of age</strong>,
      we took the step to grow it into reality and founded <strong>PAHEL</strong>.
    </p>

    <p>
      Today, PAHEL is not just a mobility service — it is a movement. A movement
      where women can travel with confidence, where women drivers, our
      <strong> Sakhis</strong>, find dignity and growth, and where every journey
      becomes a step towards freedom and empowerment.
    </p>
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