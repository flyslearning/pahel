import React, { useEffect } from "react";
import "./TermsCondition.css";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll(".reveal");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="Terms-Wrapper">
      <div className="bg-glow-terms"></div>

      <section className="terms-container reveal">
        <header className="terms-header">
          <h1 className="hero-title-terms">Terms & Conditions</h1>
          <div className="pink-underline"></div>
        </header>

        <div className="terms-grid">
          {/* User Section */}
          <div className="terms-card reveal">
            <div className="card-badge">FOR PASSENGERS</div>
            <h2 className="terms-section-h">USER</h2>
            <div className="terms-content">
              <p>The idea is entirely women oriented as both drivers and passengers is female. In same regard, only females would be able to use the PAHEL app.</p>
              <p>The two-step verification is mandatory.</p>
              <p>The minimum balance is need to be maintained in the PAHEL wallet for smooth functioning.</p>
              <p>Penalty charges may be applied in case of multiple cancellation.</p>
              <p>Credit points earned through referral will directly be added to the PAHEL wallet.</p>
              <p className="contact-note">In case of any query, feel free to contact us.</p>
            </div>
          </div>

          {/* Driver Section */}
          <div className="terms-card reveal">
            <div className="card-badge dark">FOR SAKHIS</div>
            <h2 className="terms-section-h">DRIVER</h2>
            <div className="terms-content">
              <p>The idea is entirely women oriented as both drivers and passengers is female. In same regard, the drivers will only be females.</p>
              <p>The registration process is to be completed positively.</p>
              <p>The submission of the required documents is necessary.</p>
              <p>Actions may be taken in case of multiple complaints (Inappropriate Behaviour, Carelessness, Multiple Cancellation etc.)</p>
              <p>The minimum balance is need to be maintained in the PAHEL wallet for smooth working.</p>
              <p>Credits points earned through referral and performance will directly be added to the PAHEL wallet.</p>
              <p className="contact-note">In case of any query, feel free to contact us.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;