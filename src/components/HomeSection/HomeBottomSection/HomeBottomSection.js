import React from "react";
// import Lottie from "lottie-react";
// import improvedSafety from "../../../assets/Animations/Improved_Safety.json"
import "./HomeBottomSection.css";

import pinkLine from "../../../assets/images/rectangle-bg.png";
import squarebg from "../../../assets/images/square-bg.png";
import improvedsafe from "../../../assets/images/improvedsafe.png";
import employement from "../../../assets/images/employment.png";
import encourage from "../../../assets/images/encourage.png";
import disrupt from "../../../assets/images/disrupt.png"
import gendergap from "../../../assets/images/gendergap.png"
import womens from "../../../assets/images/womens.png";
import customericon from "../../../assets/images/customericon.png";
import logo from "../../../assets/images/logo.png";
import women_bg from "../../../assets/images/women_bg.png"; 

const HomeBottomSection = () => {
  return (
    <div className="home-bottom-main-section">
      {/* <img src={squarebg} className="bottom-square-bg" /> */}
      <div className="Home-bottom-section">
        <div className="bottom-info-container">
          <img src={squarebg} className="bottom-square-bg" />
          <img src={pinkLine} />
          <h2 className="font-zilla">Why Nation needs PAHEL?</h2>
          <p className="font-zilla font-500">
            Women-only transportation services can provide a safe and
            comfortable environment for women who are traveling alone or with
            their children. Women often feel uneasy and vulnerable when
            traveling alone, especially at night. A female driver may be more
            empathetic and understanding towards female passengers' concerns.
            The passengers will feel more secure and relaxed, reducing the
            chances of any incidents of harassment or assault.
          </p>
        </div>
        <div className="bottom-info-second">
          <img src={improvedsafe} />
          {/* <Lottie animationData={improvedSafety} /> */}
          <div className="bottom-info-second-description">
            <h2 className="font-zilla">Improved Safety</h2>
            <p className="font-zilla font-500">
              Women-only transportation services can provide a safe and
              comfortable environment for women who are traveling alone or with
              their children. Women often feel uneasy and vulnerable when
              traveling alone, especially at night. A female driver may be more
              empathetic and understanding towards female passengers' concerns.
              The passengers will feel more secure and relaxed, reducing the
              chances of any incidents of harassment or assault.
            </p>
          </div>
        </div>
        <div className="bottom-info-second reverse-second">
          <img src={employement} />
          <div className="bottom-info-second-description">
            <h2 className="font-zilla">Employment Opportunities</h2>
            <p className="font-zilla font-500">
              This initiative can create employment opportunities for women
              drivers who face discrimination or bias in the traditional
              transportation industry. It can empower women by providing them
              with a means of livelihood and financial independence.
            </p>
          </div>
        </div>
        {/* <img src={squarebg} className="bottom-square-second-bg" /> */}
        <div className="bottom-info-second">
          <img src={encourage} />
          <div className="bottom-info-second-description">
            <img src={squarebg} className="bottom-square-second-bg" />
            <h2 className="font-zilla">Encourages Women Empowerment</h2>
            <p className="font-zilla font-500">
              Women-only transportation services can promote women's empowerment
              by encouraging them to venture out and pursue their goals. Women
              who feel safe and comfortable traveling can participate more
              actively in the workforce, education, and social activities.
            </p>
          </div>
        </div>
        <div className="bottom-info-second reverse-second">
          <img className="disrupt-img" src={disrupt} />
          <div className="bottom-info-second-description">
            <h2 className="font-zilla">Disrupt the Traditional Stereotypes</h2>
            <p className="font-zilla font-500">
              It can challenge the traditional gender roles associated with the
              transportation industry, which has historically been
              male-dominated. By creating a female-centric transportation
              service, it can break down barriers and pave the way for more
              women to enter and succeed in traditionally male-dominated
              industries.
            </p>
          </div>
        </div>
        {/* <img src={squarebg} className="bottom-third-second-bg" /> */}
        <div className="bottom-info-second">
          <img src={gendergap} />
          <div className="bottom-info-second-description">
            <img src={squarebg} className="bottom-third-second-bg" />
            <h2 className="font-zilla">Reducing Gender Gaps</h2>
            <p className="font-zilla font-500">
              Women often face limitations due to transportation barriers, which
              can lead to a lack of access to education and job opportunities.
              By providing a transportation service exclusively for women, this
              service can help bridge this gap and enable women to be more
              self-sufficient.
            </p>
          </div>
        </div>
        <div className="last-info-section">
          <img src={womens} />
          <img src={women_bg} className="women-img-bg" />
          <img src={logo} className="last-info-logo-1" />
          <img src={logo} className="last-info-logo-2" />
          <div className="last-info-description">
            <img src={pinkLine} />
            <h2 className="font-zilla">Making innovations for Women</h2>
            <ul>
              <li>
                <img src={customericon} />
                <div>
                  <p className="font-zilla font-semibold">For Customers</p>
                  <p className="font-500">
                    We aim to provide exceptional customer service, meeting the
                    needs and exceptations of our customers by delivering
                    quality services that are efficient,affordable and reliable.
                  </p>
                </div>
              </li>
              <li>
                <img src={customericon} />
                <div>
                  <p className="font-zilla font-semibold">For Drivers</p>
                  <p className="font-500">
                    Female who know driving, are housewives want to do part time
                    job,generate passive income or are unemployed can join with
                    us.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <img src={squarebg} className="bottom-third-second-bg" /> */}
      </div>
    </div>
  );
};

export default HomeBottomSection;
