import React, { useState, useEffect } from "react";
import { 
  MapPin, Calendar, Clock, Car, Phone, User, 
  ChevronRight, CheckCircle, Smartphone, 
  Bike, Truck
} from "lucide-react";
import { supabase } from "../../supabase/supabaseClient";
import "./ScheduleRide.css";

const ScheduleRide = () => {
  const [formData, setFormData] = useState({
    name: "", 
    pickup: "", 
    drop: "", 
    phone: "",
    altPhone: "",
    date: "", 
    time: "", 
    vehicleType: "FourWheeler",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Time Format Fix: HH:mm ko HH:mm:ss mein convert karein
      let formattedTime = formData.time;
      if (formattedTime && formattedTime.split(":").length === 2) {
        formattedTime = `${formattedTime}:00`;
      }

      // 2. Supabase Insert Logic
      const { error } = await supabase
        .from('rides')
        .insert([
          { 
            passenger_name: formData.name, 
            phone_number: formData.phone,
            alt_phone: formData.altPhone || null, // Empty string ko null karein
            pickup_location: formData.pickup,
            drop_location: formData.drop,
            ride_date: formData.date,
            ride_time: formattedTime,
            vehicle_class: formData.vehicleType
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
    } catch (error) {
      console.error("Booking Error:", error.message);
      alert("Booking failed: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const vehicleOptions = [
    { id: "TwoWheeler", label: "2 Wheeler", icon: <Bike size={22} />, desc: "Motorcycle / Scooter" },
    { id: "ThreeWheeler", label: "3 Wheeler", icon: <Truck size={22} />, desc: "Auto / Rikshaw" },
    { id: "FourWheeler", label: "4 Wheeler", icon: <Car size={22} />, desc: "Car / SUV" },
  ];

  return (
    <div className="ScheduleRide">
      <div className="ride-header-wrapper">
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
              <p>Thank you for choosing PAHEL. Confirmation sent to {formData.phone}.</p>
              <button 
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    name: "", pickup: "", drop: "", phone: "",
                    altPhone: "", date: "", time: "", vehicleType: "FourWheeler"
                  });
                }} 
                className="rebook-btn"
              >
                Schedule Another Trip
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="booking-form-element">
              
              <div className="form-step-header">
                <span className="step-num">01</span>
                <h4>Passenger Details</h4>
              </div>

              <div className="form-grid">
                <div className="input-field full-width">
                  <User className="field-icon" size={18} />
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <Phone className="field-icon" size={18} />
                  <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <Smartphone className="field-icon" size={18} />
                  <input type="tel" name="altPhone" placeholder="Alternate Mobile" value={formData.altPhone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-step-header">
                <span className="step-num">02</span>
                <h4>Trip Destinations</h4>
              </div>
              
              <div className="form-grid">
                <div className="input-field full-width">
                  <MapPin className="field-icon" size={18} />
                  <input type="text" name="pickup" placeholder="Pickup Address" value={formData.pickup} onChange={handleChange} required />
                </div>
                <div className="input-field full-width">
                  <MapPin className="field-icon" size={18} />
                  <input type="text" name="drop" placeholder="Drop-off Destination" value={formData.drop} onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <Calendar className="field-icon" size={18} />
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="input-field">
                  <Clock className="field-icon" size={18} />
                  <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-step-header">
                <span className="step-num">03</span>
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

              <button type="submit" className="booking-cta-btn" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Schedule Your Ride"}
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