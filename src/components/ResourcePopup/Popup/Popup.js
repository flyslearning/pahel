import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdClose } from "react-icons/md";
import "./Popup.css";

function Popup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    additionalDetails: "",
  });

  const handleValidationErrors = () => {
    // Custom validation logic
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    }

    if (
      !formData.age.trim() ||
      isNaN(parseInt(formData.age, 10)) ||
      parseInt(formData.age, 10) < 1
    ) {
      errors.age = "Invalid age";
    }

    // You can add more custom validation rules as needed

    return errors;
  };

  const handleSubmit = async () => {
    const validationErrors = handleValidationErrors();

    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log("Submitting form data:", formData);

        const response = await fetch("https://api.pinkpahel.in/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("User creation response:", data);
          toast.success("Form submitted successfully!");
        } else {
          const data = await response.json();
          console.error("API error response:", data);
          toast.error(data.error || "Error occurred");
        }
      } catch (error) {
        console.error("Network or unexpected error:", error);
        toast.error("Please try again after some time");
      }
    } else {
      Object.values(validationErrors).forEach((error) => {
        toast.error(error);
      });
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-form">
      <div className="popup-form-content">
        <div className="popup-header">
          <div className="close-button" onClick={onClose}>
            <MdClose size={30} />
          </div>
          <p className="font-zilla font-500 popup-form-heading">Join Us</p>
        </div>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label htmlFor="name" className="font-zilla font-500">
            Name:
          </label>
          <input
            className="input font-zilla font-500"
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <label htmlFor="email" className="font-zilla font-500">
            Email:
          </label>
          <input
            className="input font-zilla font-500"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <label htmlFor="phoneNumber" className="font-zilla font-500">
            Phone Number:
          </label>
          <input
            className="input font-zilla font-500"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />

          <label htmlFor="age" className="font-zilla font-500">
            Age:
          </label>
          <input
            className="input font-zilla font-500"
            type="number"
            id="age"
            name="age"
            min={18}
            placeholder="Age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />

          <label htmlFor="additionalDetails" className="font-zilla font-500">
            Additional Details:
          </label>
          <textarea
            className="input textarea font-zilla font-500"
            id="additionalDetails"
            name="additionalDetails"
            placeholder="Type a message ..."
            value={formData.additionalDetails}
            onChange={(e) =>
              setFormData({ ...formData, additionalDetails: e.target.value })
            }
          ></textarea>

          <button type="submit" className="round-btn-popup">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Popup;
