import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQ.css";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Passengers");
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    Passengers: [
      { q: "Who can use PAHEL?", a: "Rides within PAHEL are exclusively for women passengers. Our goal is to create a safe and supportive travel environment." },
      { q: "Why should I choose PAHEL for my rides?", a: "PAHEL is designed with women’s safety and comfort at its core. With verified female drivers, a women-focused environment, it offers a travel experience built on trust, respect, and reliability." },
      { q: "How safety is ensured within PAHEL?", a: "PAHEL works with verified women drivers. They undergo a verification process where important documents and background details are reviewed before they are onboarded." },
      { q: "What types of rides are available on PAHEL?", a: "PAHEL offers multiple ride options including: Two-wheelers (Scooty), Three-wheelers (Auto), and Four-wheelers (Car)." },
      { q: "In which cities are PAHEL available?", a: "PAHEL is currently launching in Aligarh, Uttar Pradesh and nearby cities, with plans to expand across India." },
      { q: "How can I book a ride with PAHEL?", a: "Download the app from Play Store, Register/Sign in, Enter locations, Select vehicle type, and Confirm." },
      { q: "Can I share my ride details with family?", a: "Yes, you can share live ride details with family or friends for additional safety using the app." }
    ],
    Sakhis: [
      { q: "Who are Sakhis?", a: "Sakhis are the women drivers in PAHEL who provide safe rides while building their own financial independence." },
      { q: "How can I become a Sakhi?", a: "Simply click on 'Apply Now' or contact 7895409555 to get started." },
      { q: "Who all can join PAHEL?", a: "Any female above 18 years who knows driving, including housewives and students. You get flexible schedules and a supportive community." },
      { q: "What are the document requirements?", a: "A valid driving license, government ID proof, and vehicle RC (if applicable)." },
      { q: "Do I need my own vehicle?", a: "No, you can join even without owning a vehicle. We provide easy access to vehicles." },
      { q: "Does PAHEL provide training?", a: "Yes, we provide comprehensive training in driving, customer service, and self-defence." }
    ],
    "Pricing & Investment": [
      { q: "How are ride fares calculated?", a: "Fares are based on distance and vehicle type without any surge pricing." },
      { q: "What makes PAHEL different?", a: "PAHEL focuses on both safety and empowerment by connecting women passengers with female drivers." },
      { q: "How can I collaborate or invest?", a: "Reach out to us at admin@pinkpahel.in for opportunities." },
      { q: "Is PAHEL only about rides?", a: "No, it is an initiative aimed at safer mobility and creating growth opportunities for women." }
    ]
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-glass-card">
        <header className="faq-header">
          <span className="sub-tag">Have Questions?</span>
          <h1>Frequently Asked Questions</h1>
          <div className="header-line"></div>
        </header>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          {Object.keys(faqData).map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion Section */}
        <div className="accordion-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {faqData[activeTab].map((item, index) => (
                <div key={index} className={`faq-item ${openIndex === index ? "active" : ""}`}>
                  <div className="faq-question" onClick={() => handleToggle(index)}>
                    <span>{item.q}</span>
                    <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="faq-answer"
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FAQ;