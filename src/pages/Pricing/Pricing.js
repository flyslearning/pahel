import React, { useEffect } from "react";
import "../Teams/Teams.css";
import "../PrivacyPolicy/PrivacyPolicy.css";

const Pricing = () => {
  useEffect(() => {
    // Reset the scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Teams main-privacy">
      <h2 className="founder-header">Pricing</h2>
      <p className="description-info privacy-description">
        At PAHEL, we're dedicated to providing secure and reliable
        transportation exclusively for women, with our female drivers ensuring
        your safety and comfort. Take advantage of our wallet feature for even
        more affordable rides.
        <br></br>
        <br></br>
        <b>Pricing with Pahel Wallet</b>
        <br></br>
        Enjoy special rates when you pay with your Pahel wallet:<br></br>
        <b>1. 0-2 Kilometres:</b> ₹30 per kilometre<br></br>
        <b>2. 2-10 Kilometres:</b> ₹20 per kilometre<br></br>
        <b>3. Above 10 Kilometres:</b> ₹18 per kilometre<br></br>
        <br></br>
        <b>Standard Rates (Payment with Cash)</b>
        <br></br>
        For those preferring to pay with cash, enjoy these rates:<br></br>
        <b>1. 0-2 Kilometres:</b> ₹32 per kilometre<br></br>
        <b>2. 2-10 Kilometres:</b> ₹22 per kilometre<br></br>
        <b>3. Above 10 Kilometres:</b> ₹20 per kilometre<br></br>
        <br></br>
        <em>Note: Prices increase by ₹2 per kilometre when using cash.</em>
        <br></br>
        <br></br>
        <b>Booking Process</b>
        <br></br>
        1. Download the PAHEL app or visit our website.<br></br>
        2. Sign in or create an account.<br></br>
        3. Enter your destination and choose your ride type.<br></br>
        4. Confirm your booking and track your driver in real-time.<br></br>
        5. Enjoy your safe and comfortable journey with PAHEL!<br></br>
        <b>Note:</b> All prices are inclusive of taxes and may be subject to
        change based on government regulations and fuel prices.<br></br>
        <br></br>
        At PAHEL, we're committed to making every ride a pleasant experience.
        Your safety and convenience are our top priorities. Choose PAHEL for a
        ride that prioritizes you.<br></br>
        <br></br>
        <b>Empowering Women. Driving Change.</b>
      </p>
    </div>
  );
};

export default Pricing;
