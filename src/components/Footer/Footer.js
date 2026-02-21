import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import pahellogo from "../../assets/images/pahellogo.png";

import {
  FaLinkedin,
  FaFacebookMessenger,
  FaTwitter,
  // FaTwoo,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer" id="footer">
      <div className="footer-container">
        <div className="footer-inner-container">
          <div className="footer-top">
            <div className="first-footer-block">
              <div>
                <Link to="/" className="redirects">
                  <img src={pahellogo} className="footer-pahel-logo" />
                </Link>
                <p>
                  Of Women, For Women, By Women
                  <br />
                  <br /> स्त्रियाः स्त्रियाः कृते स्त्रियाः कृते
                </p>
                <div>
                  {/* LinkedIn Icon */}
                  <div className="media-icon">
                    <Link to="/">
                      <FaLinkedin size={20} color="#E55A7B" />
                    </Link>
                  </div>

                  {/* Messenger Icon */}
                  <div className="media-icon">
                    <Link to="/">
                      <FaFacebookMessenger size={20} color="#E55A7B" />
                    </Link>
                  </div>

                  {/* Twitter Icon */}
                  <div className="media-icon">
                    <Link to="/">
                      <FaTwitter size={20} color="#E55A7B" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-footer-block">
              <p className="footer-heading">Explore</p>
              <p className="footer-points">
                <a href="/about-us" className="footer-hyperlink-text-block">
                  About Us
                </a>
              </p>
              <p className="footer-points">
                <a href="/contact" className="footer-hyperlink-text-block">
                  Contact Us
                </a>
              </p>
              <p className="footer-points">
                <a href="/schedule-ride" className="footer-hyperlink-text-block">
                  Schedule Ride
                </a>
              </p>
              <p className="footer-points">
                <Link to="/our-team" className="footer-hyperlink-text-block">
                  Our Team
                </Link>
              </p>
              <p className="footer-points">
                <Link to="/safety" className="footer-hyperlink-text-block">
                  Safety
                </Link>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="third-footer-block">
              <p className="footer-heading">Important Links</p>
              <p className="footer-points">
                <Link to="/pricing" className="footer-hyperlink-text-block">
                  Pricing
                </Link>
              </p>
              <p className="footer-points">
                <Link
                  to="/privacy-policy"
                  className="footer-hyperlink-text-block"
                >
                  Privacy Policy
                </Link>
              </p>
              <p className="footer-points">
                <Link to="/sakhi" className="footer-hyperlink-text-block">
                  Become Sakhi
                </Link>
              </p>
              {/* <p className="footer-points">
                <Link to="/refund-policy" className="footer-hyperlink-text-block">
                  Refund Policy
                </Link>
              </p> */}
              <p className="footer-points">
                <Link
                  to="/terms-conditions"
                  className="footer-hyperlink-text-block"
                >
                  Terms and Conditions
                </Link>
              </p>
              <p className="footer-points">
                <Link
                  to="/cancellation-refund-policy"
                  className="footer-hyperlink-text-block"
                >
                  Cancellation & Refund Policy
                </Link>
              </p>
            </div>
            <div className="fourth-footer-block">
              <p className="footer-heading">Get in Touch</p>
              <p className="footer-points">
                Address : B1 sector -1, Ramghat Road (UPSIDA), Aligarh, 202001
              </p>
              <p className="footer-points">
                E-mail :&nbsp;
                <Link
                  to="mailto:pahel.pvtltd@gmail.com"
                  className="footer-hyperlink"
                >
                  pahel.pvtltd@gmail.com
                </Link>
              </p>
              <p className="footer-points">
                Phone Number :&nbsp;
                <Link to="tel: +91 8368629913" className="footer-hyperlink">
                  +91 8368629913
                </Link>
              </p>
              {/* <p className="footer-points">
                <Link to="tel: +91 8279975840" className="footer-hyperlink">
                  +91 8279975840
                </Link>
                &nbsp;,&nbsp;
                <Link to="tel: +91 9837013530" className="footer-hyperlink">
                  +91 9837013530
                </Link>
              </p> */}
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <p className="copyright-info">
            Copyright @ Pahel 2026. Developed by{" "}
            <Link to="https://soinech.com/" className="copyright-info-link">
              Soinech
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
