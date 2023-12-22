import React from "react";
import Hero from "../components/Hero";
import HeroImg from "../assets/shipment-container-1.jpeg";
import Description from "../components/homeComponent/Description";
import Footer from "../components/Footer";
import CompanyProfile from "../components/homeComponent/CompanyProfile";

const Home = () => {
  return (
    <>
      <Hero
        cName='hero'
        heroImg={HeroImg}
        title='Welcome to Yokan Trading'
        url='/trackShipment'
        btnClass='show'
        buttonText='Find My Shipment'
      />
      <CompanyProfile />
      <Description />
      <Footer />
    </>
  );
};

export default Home;
