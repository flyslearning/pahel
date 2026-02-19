import React, { useEffect } from "react";
import "../Teams/Teams.css";
import "../PrivacyPolicy/PrivacyPolicy.css";

const Shipping = () => {
  useEffect(() => {
    // Reset the scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="Teams main-privacy">
      <h2 className="founder-header">Shipping Policy</h2>
      <p className="description-info privacy-description">
        Shipping is not required.
      </p>
    </div>
  );
};

export default Shipping;
