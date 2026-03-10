import React, { useEffect } from "react";
import "./CancellationPolicy.css";

const CancellationPolicy = () => {
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
    <div className="Cancellation-Wrapper">
      <div className="bg-glow-cancel"></div>

      <section className="cancel-container reveal">
        <header className="cancel-header">
          <h1 className="hero-title-cancel">Cancellation & Refund Policy</h1>
          <div className="pink-underline"></div>
          <p className="intro-text">
            Cancellation can be done at anytime through the PAHEL app, but may be
            charged a cancellation fee if you cancel after you are matched with your
            driver. Cancellation fees pay drivers for the time and effort they spend
            getting to your location.
          </p>
        </header>

        <div className="info-banner reveal">
          <p>
            Ride request should only be made when you are ready to ride and near the
            pickup location. This helps ensure smooth pickups for drivers and a
            seamless experience for riders.
          </p>
        </div>

        <div className="policy-grid">
          {/* Rider Section */}
          <div className="policy-card rider-policy reveal">
            <h3>Rider Cancellation Fee</h3>
            <p className="sub-tag">Fee applies if:</p>
            <ul>
              <li>You cancel after the grace period of <strong>3 minutes</strong> after the driver accepts the trip.</li>
              <li>In case of Intercity, the grace period is <strong>5 minutes</strong>.</li>
              <li>The driver cancels after waiting for <strong>5-8 minutes</strong> at your pickup location.</li>
              <li>Scheduled ride is cancelled after <strong>2 days</strong> of driver acceptance.</li>
            </ul>
          </div>

          {/* Driver Section */}
          <div className="policy-card driver-policy reveal">
            <h3>Driver Cancellation Fee</h3>
            <p className="sub-tag">Fee applies if:</p>
            <ul>
              <li>Multiple cancellations are done from your side.</li>
              <li>The rider cancels after waiting for too long due to your delay.</li>
              <li>Scheduled ride is cancelled after the next day of accepting it.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancellationPolicy;