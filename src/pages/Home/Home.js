import React, { useEffect } from "react";
import HomeTopSection from "../../components/HomeSection/HomeTopSection/HomeTopSection";
import HomeMidSection from "../../components/HomeSection/HomeMidSection/HomeMidSection";
import HomeBottomSection from "../../components/HomeSection/HomeBottomSection/HomeBottomSection";
import FAQ from "../../components/HomeSection/FAQ/FAQ";
import AppLaunchInfo from "../../components/HomeSection/AppLaunchInfo/AppLaunchInfo";
import Popup from "../../components/ResourcePopup/Popup/Popup";

const Home = ({ isOpen, onClose }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div>
      <HomeTopSection />
      <Popup isOpen={isOpen} onClose={onClose} />
      <HomeMidSection />
      <HomeBottomSection />
      <FAQ />
      <AppLaunchInfo />
    </div>
  );
};

export default Home;
