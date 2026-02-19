import React, { useEffect } from "react";
import "../Teams/Teams.css";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {

  useEffect(() => {
    // Reset the scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="Teams main-privacy">
      <h2 className="founder-header">Privacy Policy</h2>
      <p className="description-info privacy-description">
        The privacy policy sets out how PAHEL uses and protects any information
        that you give Pink: A Helpdrive Express Private Limited while using the
        app. <br></br>PAHEL is committed to ensuring that your privacy is protected.
        Should we ask you to provide certain information by which you can be
        identified when using the app (Aadhar Card Verification), then you can
        be assured that it will only be used in accordance with this privacy
        statement.<br></br> PAHEL may change this policy from time to time according to
        the need. You can check the policy and provide the feedback if any
        amendment is suggested
      </p>
    </div>
  );
};

export default PrivacyPolicy;
