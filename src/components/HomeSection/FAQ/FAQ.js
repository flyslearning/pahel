import React, { useState } from "react";
import "./FAQ.css";

import plus from "../../../assets/images/plusicon.png";

const FAQ = () => {
  const faqData = [
    {
      question: " Is it safe for women to become cab drivers?",
      answer:
        "Yes, women can become cab drivers just like men. Safety depends on various factors such as location, company policies, and personal precautions.",
    },
    {
      question: "What are the requirements to become a female cab driver?",
      answer:
        "Requirements vary by location and company, but generally, you will need a valid drivers license, a clean driving record, and may have to meet certain age and vehicle requirements..",
    },
    {
      question: "Can women choose their working hours as cab drivers?",
      answer:
        "Many female cab drivers have the flexibility to choose their working hours, allowing them to balance work and personal life.",
    },
    {
      question: "How can female cab drivers ensure their safety while working?",
      answer:
        "Female cab drivers can take safety precautions such as keeping their vehicle well-maintained, staying in well-lit areas, and having a communication device for emergencies.",
    },
    {
      question: "Is there a demand for female cab drivers?",
      answer:
        "The demand for female cab drivers is increasing, as some passengers prefer female drivers for comfort and security reasons.",
    },
    {
      question: "Are there any training programs for female cab drivers?",
      answer:
        "Some companies offer training programs that focus on safety, customer service, and driving skills for female drivers.",
    },
    {
      question: "How can I start my career as a female cab driver?",
      answer:
        "To start a career as a female cab driver, you can apply to ride-sharing companies, get the necessary licenses, and meet any other requirements in your area.",
    },
    {
      question: "Are there any support networks for female cab drivers?",
      answer:
        "Some organizations and associations provide support networks, resources, and advice for female cab drivers.",
    },
    {
      question:
        "What can female cab drivers do to ensure a comfortable experience for passengers?",
      answer:
        "Female cab drivers can maintain a clean and well-maintained vehicle, provide good customer service, and respect passengers preferences for a pleasant ride.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-main-section">
      <div className="faq-section">
        <p className="faq-header">Frequently Asked Questions</p>
        {faqData.map((faq, index) => (
          <div key={index} className="accordion-item">
            <div
              className={`accordion-question ${
                openIndex === index ? "open" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <span>{faq.question}</span>
              <span className="accordian-icon">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div
                className="accordion-answer"
                style={{ backgroundColor: faq.answerColor }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
