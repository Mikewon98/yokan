import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroMobile from "../components/trackByMobileComponent/HeroMobile";
import Footer from "../components/Footer";
import MobileDesc from "../components/trackByMobileComponent/MobileDesc";

const TrackByMobile = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroMobile />
      <MobileDesc />
      <Footer />
    </>
  );
};

export default TrackByMobile;
