import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

// Assets
import pinkline from "../../assets/images/rectangle-bg.png";
import upglobal1 from "../../assets/images/upglobal1.png";
import upglobal2 from "../../assets/images/upglobal2.png";
import upglobal3 from "../../assets/images/upglobal3.png";
import upglobal4 from "../../assets/images/upglobal4.png";
import upglobal5 from "../../assets/images/upglobal5.png";
import upglobal6 from "../../assets/images/upglobal6.png";
import upglobal7 from "../../assets/images/upglobal7.png";
import upglobal8 from "../../assets/images/upglobal8.png";
import upglobal9 from "../../assets/images/upglobal9.png";
import upglobal10 from "../../assets/images/upglobal10.png";
import upglobal11 from "../../assets/images/upglobal11.png";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const events = [
    {
      title: "UP Global Investors Summit 2023",
      description: "Recognized among Aligarh's top 10 industries. Presented our mission at the state-level summit in Lucknow.",
      images: [upglobal1, upglobal2], 
      tag: "Recognition"
    },
    {
      title: "Ground Breaking Ceremony 2024",
      description: "Representing PAHEL's operational growth and impact in the presence of industry leaders.",
      images: [upglobal3, upglobal4],
      tag: "Milestone"
    },
    {
      title: "Women’s Day 2024",
      description: "Awarded 'Nari Shakti Samman' by Amar Ujala for our dedication to safer women's mobility.",
      images: [upglobal5],
      tag: "Award"
    },
    {
      title: "MSME Day 2025",
      description: "Showcasing local innovation on the international stage during MSME Day celebrations.",
      images: [upglobal6],
      tag: "Innovation"
    }
  ];

  const pressImages = [upglobal7, upglobal8, upglobal9, upglobal10, upglobal11];

  return (
    <div className="gallery-page">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <button className="close-btn" onClick={() => setSelectedImg(null)}>&times;</button>
            <motion.img 
              src={selectedImg} 
              className="full-view-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <header className="gallery-header">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gallery-badge">Impact & Recognition</span>
          <h1 className="gallery-title">Events & Media</h1>
          <img src={pinkline} className="gallery-decor" alt="" />
          <p className="gallery-subtitle">A visual journey of our milestones and community presence.</p>
        </motion.div>
      </header>

      <main className="gallery-content">
        {events.map((event, index) => (
          <section key={index} className="event-block">
            <div className="event-text">
              <span className="mini-tag">{event.tag}</span>
              <h2 className="event-heading">{event.title}</h2>
              <p className="event-copy">{event.description}</p>
            </div>

            <div className="event-visuals">
              {event.images.map((imgSrc, i) => (
                <motion.div 
                  className="img-wrapper-professional" 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedImg(imgSrc)}
                >
                  <img src={imgSrc} alt={event.title} className="refined-img" loading="lazy" />
                  <div className="img-overlay-hint">
                    <span className="view-text">Expand View</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        <section className="press-section">
          <div className="press-header">
            <h3>Press Coverage</h3>
            <div className="accent-line"></div>
          </div>
          <div className="press-grid">
            {pressImages.map((imgSrc, index) => (
              <motion.div 
                key={index} 
                className="press-card-new"
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                onClick={() => setSelectedImg(imgSrc)}
              >
                 <img src={imgSrc} alt="Press News" className="press-img" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;