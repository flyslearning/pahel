import React, { useEffect } from "react";
import "../Teams/Teams.css";
import "../PrivacyPolicy/PrivacyPolicy.css";

const TermsConditions = () => {
  useEffect(() => {
    // Reset the scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="Teams main-privacy">
      <h2 className="founder-header">Terms Conditions</h2>
      <p className="description-info privacy-description">
        <b>USER</b>
        <br></br>The idea is entirely women oriented as both drivers and
        passengers is female. In same regard, only females would be able to use
        the PAHEL app <br></br>The two-step verification is mandatory.<br></br>
        The minimum balance is need to be maintained in the PAHEL wallet for
        smooth functioning<br></br> Penalty charges may be applied in case of
        multiple cancellation<br></br> Credit points earned through referral
        will directly be added to the PAHEL wallet<br></br> In case of any
        query, feel free to contact us
        <br></br><br></br>
        <b>DRIVER</b>
        <br></br> The idea is entirelywomen oriented as both drivers and
        passengers is female. In same regard, the drivers will only be females.
        <br></br>
        The registration process is to be completed positively. <br></br>The
        submission of the required documents is necessary. <br></br>Actions may
        be taken in case of multiple complaints (Inappropriate Behaviour,
        Carelessness, Multiple Cancellation etc.)<br></br> The minimum balance
        is need to be maintained in the PAHEL wallet for smooth working.{" "}
        <br></br>Credits points earned through referral and performance will
        directly be added to the PAHEL wallet.<br></br> In case of any query,
        feel free to contact us.
      </p>
    </div>
  );
};

export default TermsConditions;
