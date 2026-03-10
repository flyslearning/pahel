import React, { useEffect } from "react";
import "./Pricing.css";

const Pricing = () => {
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
    <div className="Pricing-Wrapper">
      <div className="bg-glow-pricing"></div>

      <section className="pricing-container reveal">
        <header className="pricing-header">
          <h1 className="hero-title-pricing">Pricing</h1>
          <div className="pink-underline"></div>
          <p className="description-top">
            At PAHEL, we're dedicated to providing secure and reliable
            transportation exclusively for women, with our female drivers ensuring
            your safety and comfort. Take advantage of our wallet feature for even
            more affordable rides.
          </p>
        </header>

        {/* Pricing Tables */}
        <div className="pricing-grid">
          <div className="price-card wallet-card reveal">
            <h3>Pricing with Pahel Wallet</h3>
            <p className="card-sub">Enjoy special rates when you pay with your Pahel wallet:</p>
            <ul>
              <li><span>0-2 Kilometres:</span> <strong>₹30/km</strong></li>
              <li><span>2-10 Kilometres:</span> <strong>₹20/km</strong></li>
              <li><span>Above 10 Kilometres:</span> <strong>₹18/km</strong></li>
            </ul>
          </div>

          <div className="price-card cash-card reveal">
            <h3>Standard Rates (Cash)</h3>
            <p className="card-sub">For those preferring to pay with cash, enjoy these rates:</p>
            <ul>
              <li><span>0-2 Kilometres:</span> <strong>₹32/km</strong></li>
              <li><span>2-10 Kilometres:</span> <strong>₹22/km</strong></li>
              <li><span>Above 10 Kilometres:</span> <strong>₹20/km</strong></li>
            </ul>
            <p className="note-text"><em>Note: Prices increase by ₹2 per kilometre when using cash.</em></p>
          </div>
        </div>

        {/* Booking Process */}
        <div className="booking-section reveal">
          <h2 className="section-h">Booking Process</h2>
          <div className="booking-steps">
            <p>1. Download the PAHEL app or visit our website.</p>
            <p>2. Sign in or create an account.</p>
            <p>3. Enter your destination and choose your ride type.</p>
            <p>4. Confirm your booking and track your driver in real-time.</p>
            <p>5. Enjoy your safe and comfortable journey with PAHEL!</p>
          </div>
          <p className="tax-note">
            <strong>Note:</strong> All prices are inclusive of taxes and may be subject to
            change based on government regulations and fuel prices.
          </p>
        </div>

        {/* Final Message */}
        <footer className="pricing-footer reveal">
          <p>
            At PAHEL, we're committed to making every ride a pleasant experience.
            Your safety and convenience are our top priorities. Choose PAHEL for a
            ride that prioritizes you.
          </p>
          <h4 className="tagline">Empowering Women. Driving Change.</h4>
        </footer>
      </section>
    </div>
  );
};

export default Pricing;