import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import AboutUsImg from "../assets/yokan-know-about-us.jpg";
import AboutUsComponent from "../components/aboutusComponent/AboutUsComponent";
import Footer from "../components/Footer";
import AboutUsDescription from "../components/aboutusComponent/AboutUsDescription";

const AboutUs = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero
        cName='hero'
        title='Know About Us'
        heroImg={AboutUsImg}
        text='Since 2022, Yokan has been developing the best transportation management system for forward-thinking freight forwarders, shipping lines, and NVOCCs.'
      />
      <AboutUsDescription />
      <AboutUsComponent />
      <Footer />
    </>
  );
};

export default AboutUs;
