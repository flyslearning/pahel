import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AppLaunchInfo.css";

import pahelapp from "../../../assets/images/pahelapp.png";

const AppLaunchInfo = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await fetch("https://api.pinkpahel.in/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log(response);
        // Subscription successful
        toast.success("Subscribed successful!");
      } else {
        // Subscription failed
        toast.error("Please enter a valid email address");
      }
    } catch (error) {
      console.error("Error subscribing:", error.message);
      toast.error("Error subscribing");
    }
  };

  return (
    <div className="main-section-pahelapp">
      <div className="Pahelapp">
        <div className="pahelapp-image-container">
          <img src={pahelapp} alt="APP image" />
        </div>
        <div className="pahelapp-text-container">
          <p className="font-zilla font-bold">We are Launching Soon</p>
          <div className="input-container">
            <input
              placeholder="Your email address"
              className="subscribe-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button className="subscribe-btn" onClick={handleSubscribe}>
              Get Notified
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AppLaunchInfo;
