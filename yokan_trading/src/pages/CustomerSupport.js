import React from "react";
import Hero from "../components/Hero";
import SupportImg from "../assets/support.webp";
import Support from "../components/Support";
import Footer from "../components/Footer";

const CustomerSupport = () => {
  return (
    <>
      <Hero
        cName='hero-support'
        heroImg={SupportImg}
        title='Customer Support'
      />
      <Support />
      <Footer />
    </>
  );
};

export default CustomerSupport;
