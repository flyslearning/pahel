import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdClose } from "react-icons/md";
// import "./ServicesPopup.css";

function Popup({ isOpen, onClose }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    age: Yup.number().required("Age is required"),
    ServiceRequired: Yup.string(),
    additionalDetails: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      age: "",
      ServiceRequired: "",
      additionalDetails: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (parseInt(values.age, 10) < 18) {
        // Display a warning toast if age is less than 18
        toast.warning("Age must be 18 or older.");
      } else {
        // console.log("Form submitted with data:", values);
      }
    },
  });

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://api.pinkpahel.in/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formik.values),
      });

      if (response.ok) {
        toast.success("Applied successfully!");
      } else {
        const data = await response.json();
        console.error("Error creating user:", data.error);
        toast.error("Please fill all the required details.");
      }
    } catch (error) {
      console.error("Error creating user:", error.message);
      toast.error("Please try again after some time");
    }
  };

  const handleValidationErrors = () => {
    // Display validation errors using react-toastify
    Object.keys(formik.errors).forEach((field) => {
      toast.error(formik.errors[field]);
    });
  };

  return (
    <div className="popup-form ">
      <div className="popup-form-content">
        <div className="popup-header">
          <div className="close-button " onClick={onClose}>
            <MdClose size={30} />
          </div>
          <p className="font-zilla font-500 popup-form-heading">Join Us</p>
        </div>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            if (formik.isValid) {
              formik.handleSubmit();
            } else {
              handleValidationErrors();
            }
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
            value={formik.values.name}
            onChange={formik.handleChange}
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
            value={formik.values.email}
            onChange={formik.handleChange}
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
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
          />
          <label htmlFor="age" className="font-zilla font-500">
            Age:
          </label>
          <input
            className="input font-zilla font-500"
            type="number"
            id="age"
            name="age"
            placeholder="Age"
            min={18}
            value={formik.values.age}
            onChange={formik.handleChange}
          />
          <label htmlFor="ServiceRequired" className="font-zilla font-500">
            Choose the service(s) required?
          </label>
          <select
            className="input dropdown-form font-zilla font-500"
            id="ServiceRequired"
            name="ServiceRequired"
            value={formik.values.ServiceRequired}
            onChange={formik.handleChange}
          >
            <option value="" disabled>
              Select the service
            </option>
            <option value="Apply for Car Loan Assistance.">
              Apply for Car Loan Assistance.
            </option>
            <option value="Get Car Insurance Assistance.">
              Get Car Insurance Assistance.
            </option>
            <option value="Get help with your Driving License.">
              Get help with your Driving License.
            </option>
            <option value="Start your Training Journey.">
              Start your Training Journey.
            </option>
          </select>
          <label htmlFor="additionalDetails" className="font-zilla font-500">
            Additional Details:
          </label>
          <textarea
            className="input textarea font-zilla font-500"
            id="additionalDetails"
            name="additionalDetails"
            placeholder="Type a message ..."
            value={formik.values.additionalDetails}
            onChange={formik.handleChange}
          ></textarea>
          <button
            className="round-btn-popup"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Popup;
