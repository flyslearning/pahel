import React, { useState, useRef } from "react";
import "./HomeMidSection.css";
import { Autocomplete } from "@react-google-maps/api";

import working from "../../../assets/images/working.png";
import empowerment from "../../../assets/images/empowerment.png";
import square from "../../../assets/images/square-bg.png";
import pinkLine from "../../../assets/images/rectangle-bg.png";
import greencheck from "../../../assets/images/greencheck.png";
import Card from "../../Card/Card";

const HomeMidSection = () => {
  const [showPrice, setShowPrice] = useState(false);

  // Structured Address State
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const [pickupDetails, setPickupDetails] = useState(null);
  const [dropDetails, setDropDetails] = useState(null);

  const pickupRef = useRef(null);
  const dropRef = useRef(null);

  const handleCalculate = () => {
    console.log("Pickup Full Data:", pickupDetails);
    console.log("Drop Full Data:", dropDetails);
    setShowPrice(true);
  };

  const onPickupLoad = (autocomplete) => {
    pickupRef.current = autocomplete;
  };

  const onDropLoad = (autocomplete) => {
    dropRef.current = autocomplete;
  };

  const extractAddressDetails = (place) => {
    let plotNo = "";
    let street = "";
    let area = "";
    let city = "";
    let state = "";
    let postalCode = "";

    if (!place.address_components) return null;

    place.address_components.forEach((component) => {
      const types = component.types;

      if (types.includes("street_number")) {
        plotNo = component.long_name;
      }
      if (types.includes("route")) {
        street = component.long_name;
      }
      if (
        types.includes("sublocality") ||
        types.includes("sublocality_level_1")
      ) {
        area = component.long_name;
      }
      if (types.includes("locality")) {
        city = component.long_name;
      }
      if (types.includes("administrative_area_level_1")) {
        state = component.long_name;
      }
      if (types.includes("postal_code")) {
        postalCode = component.long_name;
      }
    });

    const latitude = place.geometry?.location?.lat();
    const longitude = place.geometry?.location?.lng();

    return {
      plotNo,
      street,
      area,
      city,
      state,
      postalCode,
      latitude,
      longitude,
      formattedAddress: place.formatted_address,
    };
  };

  const onPickupPlaceChanged = () => {
    const place = pickupRef.current.getPlace();
    if (!place) return;

    const details = extractAddressDetails(place);
    if (details) {
      setPickup(details.formattedAddress);
      setPickupDetails(details);
    }
  };

  const onDropPlaceChanged = () => {
    const place = dropRef.current.getPlace();
    if (!place) return;

    const details = extractAddressDetails(place);
    if (details) {
      setDrop(details.formattedAddress);
      setDropDetails(details);
    }
  };

  return (
    <>
      <div className="min-info-container" id="featured">
        <div className="top-ride-calculator">
          <div className="calculator-wrapper">
            <h2 className="font-zilla calculator-title">
              Estimate Your Ride Fare
            </h2>

            <div className="calculator-inputs-row">
              <Autocomplete
              
                onLoad={onPickupLoad}
                onPlaceChanged={onPickupPlaceChanged}
                options={{
                  fields: [
                    "address_components",
                    "formatted_address",
                    "geometry",
                  ],
                }}
              >
                <input
                  type="text"
                  placeholder="Pickup location"
                  className="ride-input"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </Autocomplete>

              <Autocomplete
                onLoad={onDropLoad}
                onPlaceChanged={onDropPlaceChanged}
                options={{
                  fields: [
                    "address_components",
                    "formatted_address",
                    "geometry",
                  ],
                }}
              >
                <input
                  type="text"
                  placeholder="Drop location"
                  className="ride-input"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                />
              </Autocomplete>

              <button className="ride-calc-btn" onClick={handleCalculate}>
                Calculate
              </button>
            </div>

            {showPrice && (
              <div className="price-results-overlay">
                <div className="price-cards-grid">

                  <div className="price-item">
                    <span className="vehicle-icon">🏍️</span>
                    <span className="vehicle-name">Bike / Scooty</span>
                    <span className="vehicle-price">₹40 - ₹60</span>
                  </div>

                  <div className="price-item">
                    <span className="vehicle-icon">🛺</span>
                    <span className="vehicle-name">Auto</span>
                    <span className="vehicle-price">₹70 - ₹100</span>
                  </div>

                  <div className="price-item">
                    <span className="vehicle-icon">🛵</span>
                    <span className="vehicle-name">E Rickshaw</span>
                    <span className="vehicle-price">₹60 - ₹90</span>
                  </div>

                  <div className="price-item">
                    <span className="vehicle-icon">🚙</span>
                    <span className="vehicle-name">Mini</span>
                    <span className="vehicle-price">₹120 - ₹180</span>
                  </div>

                  <div className="price-item">
                    <span className="vehicle-icon">🚗</span>
                    <span className="vehicle-name">Sedan</span>
                    <span className="vehicle-price">₹150 - ₹250</span>
                  </div>

                  <div className="price-item">
                    <span className="vehicle-icon">🚘</span>
                    <span className="vehicle-name">SUV</span>
                    <span className="vehicle-price">₹200 - ₹350</span>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>

      {/* 3. HOW IT WORKS SECTION */}
      <div className="mid-bottom-container">
        <img src={square} className="mid-square-bg" alt="bg" />
        <div className="left-mid-bottom-info-container">
          <img src={working} alt="Working" className="working-hero" />
        </div>
        <div className="right-mid-bottom-info-container">
          <img src={pinkLine} alt="accent" />
          <h2 className="font-zilla display-font">How <span className="pink-gradient-text">PAHEL</span> Works</h2>
          <p className="font-zilla font-500 section-desc">
            As the service will be provided 24*7 to all, the clause for security
            and safety of female drivers has also been handled by PAHEL.
          </p>
          <ul className="step-list">
            {[
              "Female drivers will be able to register themselves via application.",
              "Female Passengers will be able to book a ride via application.",
              "The main and unique feature of PAHEL is NO ASK NO GIVE.",
              "There will be the recharge system in application.",
              "There will be corporate offices in every district for better monitoring."
            ].map((text, i) => (
              <li key={i} className="step-item">
                <img src={greencheck} alt="check" />
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>


      </div>
    </>
  );
};

export default HomeMidSection;
