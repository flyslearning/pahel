import React, { useState, useEffect } from "react";
import { 
  MapPin, Calendar, Clock, Car, Phone, User, 
  ChevronRight, CheckCircle, Shield, Star, Crown, Smartphone 
} from "lucide-react";
import "./ScheduleRide.css";
// import pinkline from "../../assets/images/rectangle-bg.png"; // Uncomment this when using locally

const ScheduleRide = () => {
  const [formData, setFormData] = useState({
    name: "", 
    pickup: "", 
    drop: "", 
    phone: "",
    altPhone: "",
    date: "", 
    time: "", 
    vehicleType: "Standard",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const vehicleOptions = [
    { id: "Standard", label: "Standard", icon: <Car size={22} />, desc: "Reliable Sedan" },
    { id: "Business", label: "Business", icon: <Shield size={22} />, desc: "Premium SUV" },
    { id: "Luxury", label: "Luxury", icon: <Crown size={22} />, desc: "First Class" },
    { id: "Women", label: "Pink Ride", icon: <Star size={22} />, desc: "Female Driven" },
  ];

  return (
    <div className="ScheduleRide">
      <div className="ride-header-wrapper">
        {/* <img src={pinkline} className="ride-pinkline" alt="Design Element" /> */}
        <h2 className="ride-main-header">Schedule Ride</h2>
        <p className="ride-tagline">Premium Mobility Solutions for Your Journey</p>
      </div>

      <div className="booking-layout">
        <aside className="booking-sidebar">
          <div className="sidebar-card">
            <h3>Why Choose Us?</h3>
            <ul className="benefits-list">
              <li><CheckCircle size={18} /> <span>Punctuality Guaranteed</span></li>
              <li><CheckCircle size={18} /> <span>Professional Chauffeurs</span></li>
              <li><CheckCircle size={18} /> <span>Sanitized Vehicles</span></li>
              <li><CheckCircle size={18} /> <span>24/7 Concierge Support</span></li>
            </ul>
            <div className="support-box">
              <p>Need help booking?</p>
              <strong>+91 8368629913</strong>
            </div>
          </div>
        </aside>

        <main className="form-container-main">
          {isSuccess ? (
            <div className="success-state">
              <div className="success-icon-bg"><CheckCircle size={50} /></div>
              <h2>Booking Confirmed!</h2>
              <p>Thank you for choosing Ride. Confirmation sent to your contact.</p>
              <button onClick={() => setIsSuccess(false)} className="rebook-btn">Schedule Another Trip</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form-element">
              
              <div className="form-step-header">
                <span className="step-num">01</span>
                <h4>Trip Destinations</h4>
              </div>
              
              <div className="form-grid">
                <div className="input-field full-width">
                  <MapPin className="field-icon" size={18} />
                  <input type="text" name="pickup" placeholder="Pickup Address" onChange={handleChange} required />
                </div>
                <div className="input-field full-width">
                  <MapPin className="field-icon" size={18} />
                  <input type="text" name="drop" placeholder="Drop-off Destination" onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <Calendar className="field-icon" size={18} />
                  <input type="date" name="date" onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <Clock className="field-icon" size={18} />
                  <input type="time" name="time" onChange={handleChange} required />
                </div>
              </div>

              <div className="form-step-header">
                <span className="step-num">02</span>
                <h4>Select Vehicle Class</h4>
              </div>

              <div className="vehicle-grid">
                {vehicleOptions.map((v) => (
                  <div 
                    key={v.id} 
                    className={`v-option-card ${formData.vehicleType === v.id ? 'active' : ''}`}
                    onClick={() => setFormData({...formData, vehicleType: v.id})}
                  >
                    <div className="v-icon">{v.icon}</div>
                    <div className="v-info">
                        <strong>{v.label}</strong>
                        <span>{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="form-step-header">
                <span className="step-num">03</span>
                <h4>Passenger Details</h4>
              </div>

              <div className="form-grid">
                <div className="input-field full-width">
                  <User className="field-icon" size={18} />
                  <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <Phone className="field-icon" size={18} />
                  <input type="tel" name="phone" placeholder="Mobile Number" onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <Smartphone className="field-icon" size={18} />
                  <input type="tel" name="altPhone" placeholder="Alternate Mobile" onChange={handleChange} />
                </div>
              </div>

              <button type="submit" className="booking-cta-btn" disabled={isSubmitting}>
                {isSubmitting ? "Booking..." : "Schedule Your Ride"}
                <ChevronRight size={20} />
              </button>
            </form>
          )}
        </main>
      </div>
    </div>
  );
};

export default ScheduleRide;