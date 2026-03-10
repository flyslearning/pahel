import React, { useEffect } from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
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
    <div className="Privacy-Wrapper">
      {/* Background Glow */}
      <div className="bg-glow-policy"></div>

      <section className="privacy-container reveal">
        <header className="policy-header">
          <h1 className="hero-title-policy">Privacy Policy</h1>
          <div className="pink-underline"></div>
        </header>

        <div className="policy-glass-card">
          <p className="p-main-policy">
            The privacy policy sets out how <strong>PAHEL</strong> uses and protects any information
            that you give <strong>Pink: A Helpdrive Express Private Limited</strong> while using the app.
          </p>

          <div className="policy-divider"></div>

          <p className="p-sub-policy">
            PAHEL is committed to ensuring that your privacy is protected.
            Should we ask you to provide certain information by which you can be
            identified when using the app <strong>(Aadhar Card Verification)</strong>, then you can
            be assured that it will only be used in accordance with this privacy
            statement.
          </p>

          <div className="policy-note">
            <p>
              PAHEL may change this policy from time to time according to
              the need. You can check the policy and provide the feedback if any
              amendment is suggested.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;