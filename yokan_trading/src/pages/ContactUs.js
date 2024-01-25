import React from "react";
import Hero from "../components/Hero";
import ContactImg from "../assets/contact-us.jpg";
import Footer from "../components/Footer";
import Contact from "../components/contactComponent/Contact";

const ContactUs = () => {
  return (
    <>
      <Hero
        cName='hero-contact'
        heroImg={ContactImg}
        title='Contact Us'
        text='You’ve got questions, we’ve got answers.'
      />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactUs;
