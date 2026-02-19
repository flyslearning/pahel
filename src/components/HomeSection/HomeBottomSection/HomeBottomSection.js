import React from "react";
import "./HomeBottomSection.css";

// Assets
import pinkLine from "../../../assets/images/rectangle-bg.png";
import improvedsafe from "../../../assets/images/improvedsafe.png";
import employement from "../../../assets/images/employment.png";
import encourage from "../../../assets/images/encourage.png";
import disrupt from "../../../assets/images/disrupt.png";
import gendergap from "../../../assets/images/gendergap.png";
import womens from "../../../assets/images/womens.png";
import customericon from "../../../assets/images/customericon.png";
import logo from "../../../assets/images/logo.png";

const HomeBottomSection = () => {
  const features = [
    {
      img: improvedsafe,
      title: "Improved Safety",
      desc: "Women-only transportation services provide a safe, secure environment for women and children. Female drivers offer empathy and understanding, significantly reducing concerns about harassment.",
      reverse: false,
    },
    {
      img: employement,
      title: "Employment Opportunities",
      desc: "This initiative creates professional pathways for women drivers, empowering them with financial independence and a means of livelihood in a traditionally male-dominated sector.",
      reverse: true,
    },
    {
      img: encourage,
      title: "Encourage Empowerment",
      desc: "When women feel safe traveling, they participate more actively in the workforce, education, and social activities, pursuing their goals without hesitation.",
      reverse: false,
    },
    {
      img: disrupt,
      title: "Disrupt Stereotypes",
      desc: "By putting women at the wheel, we challenge traditional gender roles and pave the way for more women to succeed in industries once considered off-limits.",
      reverse: true,
    },
    {
      img: gendergap,
      title: "Reducing Gender Gaps",
      desc: "Transportation barriers often limit access to education. PAHEL bridges this gap, enabling women to be self-sufficient and mobile on their own terms.",
      reverse: false,
    },
  ];

  return (
    <section className="pahel-premium-wrapper">
      {/* Dynamic Background Elements */}
      <div className="bg-gradient-blur"></div>
      
      <div className="pahel-container">
        
        {/* Main Header */}
        <div className="pahel-header-reveal">
          <img src={pinkLine} className="pulse-accent" alt="" />
          <h2 className="title-display">
            Why Nation needs <span className="highlight-pink">PAHEL?</span>
          </h2>
          <p className="subtitle-lead">
            Redefining safety and mobility through a female-centric ecosystem. 
            We provide more than just a ride; we provide peace of mind.
          </p>
        </div>

        {/* Feature Grid with Smooth Reveal */}
        <div className="features-stack">
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`feature-card-row ${item.reverse ? "is-reversed" : ""}`}
            >
              <div className="feature-visual">
                <div className="blob-backdrop"></div>
                <img src={item.img} alt={item.title} className="floating-hero" />
              </div>
              <div className="feature-info">
                <span className="step-number">0{index + 1}</span>
                <h3 className="feature-heading">{item.title}</h3>
                <p className="feature-body">{item.desc}</p>
                <div className="animated-bar"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Innovation Card */}
        <div className="innovation-master-card">
          <div className="innovation-grid">
            <div className="visual-composition">
              <img src={womens} className="main-display-img" alt="PAHEL Women" />
              <div className="badge-logo float-tl"><img src={logo} alt="PAHEL" /></div>
              <div className="badge-logo float-br"><img src={logo} alt="PAHEL" /></div>
            </div>

            <div className="innovation-text-group">
              <img src={pinkLine} className="line-mini" alt="" />
              <h2 className="innovation-h2">Making Innovations for Women</h2>
              
              <div className="benefit-glass-item">
                <div className="icon-wrap"><img src={customericon} alt="icon" /></div>
                <div className="benefit-content">
                  <h4>For Customers</h4>
                  <p>Exceptional service meeting the expectations of modern women by delivering quality that is efficient, affordable, and reliable.</p>
                </div>
              </div>

              <div className="benefit-glass-item">
                <div className="icon-wrap"><img src={customericon} alt="icon" /></div>
                <div className="benefit-content">
                  <h4>For Drivers (Sakhis)</h4>
                  <p>Join our mission. Whether you are a housewife or looking for part-time income, generate financial freedom with us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBottomSection;