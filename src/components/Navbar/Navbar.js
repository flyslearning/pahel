import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { ReactComponent as CloseMenu } from "../../assets/svgs/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/svgs/menu.svg";

import PahelLogo from "../../assets/images/pahellogo.png";
import RoundBtn from "../RoundBtn/RoundBtn";
import helpline from "../../assets/images/helpline icon.png";

const Header = ({ openForm }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/" className="redirects">
            <img src={PahelLogo} className="logo" />
          </Link>
        </div>
        <div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li
              className="option"
              onClick={() => {
                closeMobileMenu();
              }}
            >
              <NavLink
                to="/"
                exact
                activeClassName="active-link"
                className="redirects"
              >
                Home
              </NavLink>
            </li>
            <li
              className="option"
              onClick={() => {
                closeMobileMenu();
              }}
            >
              <NavLink
                to="/sakhi"
                exact
                activeClassName="active-link"
                className="redirects"
              >
                Become Sakhi
              </NavLink>
            </li>
          
    
            <li
              className="option"
              onClick={() => {
                closeMobileMenu();
              }}
            >
              <NavLink
                to="/our-team"
                exact
                activeClassName="active-link"
                className="redirects"
              >
                Our Team
              </NavLink>
            </li>
            <li
              className="option"
              onClick={() => {
                closeMobileMenu();
              }}
            >
              <NavLink
                to="/resources"
                exact
                activeClassName="active-link"
                className="redirects"
              >
                Resources
              </NavLink>
            </li>
             <li
              className="option"
              onClick={() => {
                closeMobileMenu();
              }}
            >
              <NavLink
                to="/contact"
                exact
                activeClassName="active-link"
                className="redirects"
              >
                Contact
              </NavLink>
            </li>
            
          <li className="option mobile-menu" onClick={closeMobileMenu}>
            <Link to="/schedule-ride" className="redirects">
              <RoundBtn
                className="join-us-button"
                name={"Schedule Ride"}
              />
            </Link>
          </li>
          </ul>
        </div>
        <div>
          <ul className="nav-right option">
           <li className="joinus option" onClick={closeMobileMenu}>
              <Link to="/schedule-ride" className="redirects desktop-menu">
                <RoundBtn name={"Schedule Ride"} />
              </Link>
            </li>
            <li onClick={closeMobileMenu} className="helpline-design">
              <img src={helpline} className="helpline-image"></img>
              <Link to="tel:+91 8368629913" className="phone-number-design">
                <div className="helpline-text desktop-menu">
                  Helpline Number<br></br>
                  <p className="phone-text">+91 8368629913</p>
                </div>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
