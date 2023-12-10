import React from "react";
import Navbar from "../components/navbar/Navbar";
import PartnerImg from "../assets/shaking-hands.jpg";
import Hero from "../components/Hero";
import PartnerDesc from "../components/PartnerDesc";
import Footer from "../components/Footer";

const Partners = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero
        cName='hero'
        heroImg={PartnerImg}
        title='Partner With Us'
        text='Our mission it to help freight forwarders worldwide streamline their operations, scale their businesses, and thrive in technology-driven and integrated supply chains.'
      />
      <PartnerDesc />

      <Footer />
    </>
  );
};

export default Partners;
