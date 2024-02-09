import React from "react";
import ShipmentPackageImage from "../assets/shipment-package.jpeg";
import Description from "../components/homeComponent/Description";
import Footer from "../components/Footer";
import CompanyProfile from "../components/homeComponent/CompanyProfile";
import Slider from "../components/Slider";
import CompanySlider from "../components/homeComponent/CompanySlider";
import WhyUs from "../components/homeComponent/WhyUs";
import StartShiping from "../components/homeComponent/StartShiping";
import "../components/homeComponent/Home.css";

const Home = () => {
  return (
    <>
      <div className='home-component-top-div'>
        <Slider />
      </div>
      <CompanySlider />
      {/* <CompanyProfile img={ShipmentPackageImage} /> */}
      <StartShiping />
      <WhyUs />
      <Description />
      <Footer />
    </>
  );
};

export default Home;
