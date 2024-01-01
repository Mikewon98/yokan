import React from "react";
import AboutUsComponent from "../components/aboutusComponent/AboutUsComponent";
import Footer from "../components/Footer";
import CompanyProfile from "../components/homeComponent/CompanyProfile";
import AboutUsImage from "../assets/company-profile.jpeg";
import AboutUsStatList from "../components/AboutUsStatList";
import Banner from "../components/aboutusComponent/Banner";
import CompanyService from "../components/aboutusComponent/CompanyService";

const AboutUs = () => {
  return (
    <>
      <Banner />
      <CompanyProfile img={AboutUsImage} />
      <CompanyService />
      <AboutUsStatList />
      <AboutUsComponent />
      <Footer />
    </>
  );
};

export default AboutUs;
