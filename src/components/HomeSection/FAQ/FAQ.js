import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQ.css";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Passengers");
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    
  Passengers: [
    { 
      q: "Who can use PAHEL?", 
      a: "Rides within PAHEL are exclusively for women passengers. Our goal is to create a safe and supportive travel environment." 
    },
    { 
      q: "Why should I choose PAHEL for my rides?", 
      a: "PAHEL is designed with women’s safety and comfort at its core. With verified female drivers and a women-focused environment, it offers a travel experience built on trust, respect, and reliability." 
    },
    { 
      q: "How safety is ensured within PAHEL?", 
      a: "PAHEL works with verified women drivers to create a secure and comfortable travel environment for women. They undergo a verification process where important documents and background details are reviewed before they are onboarded onto the platform." 
    },
    { 
      q: "What types of rides are available on PAHEL?", 
      a: "PAHEL offers multiple ride options including: Two-wheelers (Scooty rides), Three-wheelers (Auto rides), and Four-wheelers (Car rides)." 
    },
    { 
      q: "In which cities are PAHEL available?", 
      a: "PAHEL is currently launching operations in Aligarh, Uttar Pradesh and its nearby cities and will gradually expand to more locations across India." 
    },
    { 
      q: "How can I book a ride with PAHEL?", 
      a: "Download the app from Play Store, Register/Sign in, Enter your pickup and drop location, Select vehicle type, and Confirm ride." 
    },
    { 
      q: "Can I share my ride details with family?", 
      a: "Yes, you can share live ride details with family or friends for additional safety using the app." 
    }
  ],
  Sakhis: [
    { 
      q: "Who are Sakhis?", 
      a: "Sakhis are the women drivers in PAHEL who provide safe rides while building their own financial independence." 
    },
    { 
      q: "How can I become a Sakhi?", 
      a: "Simply click on become a sakhi or contact 7895409555 and get started." 
    },
    { 
      q: "Who all can join PAHEL what is the benefit to be one?", 
      a: "Any female above 18 years of age who knows driving, housewives, students etc, can join. Sakhis get an opportunity to earn independently, work with flexible schedules, and be part of a supportive women-led community." 
    },
    { 
      q: "What are the document requirements?", 
      a: "One should have a valid driving licence and a government approved ID proof and vehicle RC (if applicable)." 
    },
    { 
      q: "Do I need my own vehicle?", 
      a: "No, you can even join without owning a vehicle. We provide an easy access to vehicles to use." 
    },
    { 
      q: "Does PAHEL provide training support and guidance to Sakhi drivers?", 
      a: "Yes, comprehensive training is provided to all our Sakhis—including driving training, customer service and self-defence. We also provide ongoing support in insurance, documents verification and connecting with training institutes." 
    }
  ],
  "Pricing and Charges": [
    { 
      q: "How are ride fares calculated?", 
      a: "Ride fares are based on distance and vehicle type without any surge pricing." 
    },
    { 
      q: "What payment methods are available?", 
      a: "PAHEL accepts multiple payment modes including in-app wallet, digital payments and cash options." 
    },
    { 
      q: "Are there any hidden charges?", 
      a: "No, we aim to keep fares fair and transparent avoiding any excessive surge pricing." 
    }
  ],
  "Collaborators and Investors": [
    { 
      q: "Is PAHEL only about rides?", 
      a: "No, PAHEL is more than just a ride service. As its name says it’s an initiative aimed at ensuring safer mobility for women while creating opportunities for women drivers to earn and grow." 
    },
    { 
      q: "What makes PAHEL different from other ride services?", 
      a: "PAHEL focuses on both safety and empowerment. The platform connects women passengers with female drivers, creating a community-driven transport ecosystem where women feel safer traveling and drivers gain meaningful income opportunities." 
    },
    { 
      q: "Is PAHEL open to collaborations and investment?", 
      a: "Yes. we welcome collaboration with organizations, institutions, and investors to be a part of our vision of safer mobility and women’s empowerment." 
    },
    { 
      q: "How can I collaborate or invest with PAHEL?", 
      a: "Reach out to us on admin@pinkpahel.in for details of opportunities." 
    },
    { 
      q: "Why is PAHEL a promising investment opportunity?", 
      a: "By focusing on women’s safety and women-led employment, PAHEL taps into a growing mobility market with a model designed for both social impact and sustainable growth." 
    }
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
          <footer className="faq-footer">
          <div className="footer-line"></div>
          <div className="footer-content">
            <p>Still have questions? <span className="highlight">We're here to help!</span></p>
            <a href="/contact" className="contact-now-btn">
              Contact Now
            </a>
          </div>
        </footer>
        </div>
      </div>
      
    </div>
  );
};

export default FAQ;