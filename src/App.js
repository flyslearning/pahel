import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";

import Navbar from "./components/Navbar/Navbar";
import NotificationBanner from "./components/NotificationBanner/NotificationBanner";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

import Home from "./pages/Home/Home";
import Resources from "./pages/Resources/Resources";
import Teams from "./pages/Teams/Teams";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./pages/AboutUs/AboutUs";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";
import CancellationPolicy from "./pages/CancellationPolicy/CancellationPolicy";
import TermsConditions from "./pages/TermsCondition/TermsCondition";
import Shipping from "./pages/Shipping/Shipping";
import Pricing from "./pages/Pricing/Pricing";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";
import ScheduleRide from "./pages/ScheduleRide/ScheduleRide";
import Contact from "./pages/Contact/Contact"; 
import BecomeSakhi from "./pages/BecomeSakhi/BecomeSakhi"; 
import Safety from "./pages/Safety/Safety"; 
import Gallery from "./pages/Gallery/Gallery"; 

const libraries = ["places"]; 

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show popup ONLY when homepage is refreshed
    if (location.pathname === "/") {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [location]);

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <div className="App">

        {/* Popup */}
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}

        <NotificationBanner />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/our-team" element={<Teams />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route
            path="/cancellation-refund-policy"
            element={<CancellationPolicy />}
          />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/sakhi" element={<BecomeSakhi />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/schedule-ride" element={<ScheduleRide />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />  
        </Routes>

        <Footer />
      </div>
    </LoadScript>
  );
}

export default App;