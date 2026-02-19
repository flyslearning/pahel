import React, { useEffect } from "react";
import "../Teams/Teams.css";
import "../PrivacyPolicy/PrivacyPolicy.css";

const RefundPolicy = () => {
  useEffect(() => {
    // Reset the scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="Teams main-privacy">
      <h2 className="founder-header">Refund Policy</h2>
      <p className="description-info privacy-description">
      </p>
    </div>
  );
};

export default RefundPolicy;
