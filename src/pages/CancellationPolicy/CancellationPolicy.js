import React, { useEffect } from "react";
import "../Teams/Teams.css";
import "../PrivacyPolicy/PrivacyPolicy.css";

const CancellationPolicy = () => {
  useEffect(() => {
    // Reset the scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="Teams main-privacy">
      <h2 className="founder-header">Cancellation & Refund Policy</h2>
      <p className="description-info privacy-description">
        Cancellation can be done at anytime through the PAHEL app, but may be
        charged a cancellation fee if you cancel after you are matched with your
        driver. Cancellation fees pay drivers for the time and effort they spend
        getting to your location. <br></br>
        Ride request should only be made when you are ready to ride and near the
        pickup location. This helps ensure smooth pickups for drivers and a
        seamless experience for riders. <br></br>
        <br></br>
        <b>
          The cancellation fee in the case of rider will be applied in case of
          following reasons:
        </b>
        <br></br>• You cancel after the grace period of 3 minutes after the
        driver accepts the trip.<br></br>• In case of Intercity the grace period
        changes to 5 minutes after the driver accepts the trip.<br></br>• Your
        driver cancels after waiting for a minimum of 5-8 minutes at your pickup
        location.
        <br></br>• If you cancel the scheduled ride after the grace period of 2
        days after the driver has accepted it.<br></br><br></br>
        <b>The cancellation fee in case of driver will be applied in case of
        following reasons</b><br></br>• In case of multiple cancellations done from
        your side. <br></br>• Your rider cancels the ride after waiting for too long <br></br>• If
        you cancel the scheduled ride after accepting it, you can only do it
        till the next day of accepting it
      </p>
    </div>
  );
};

export default CancellationPolicy;
