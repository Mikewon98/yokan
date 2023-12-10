import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/contact-us.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero
        cName='hero-contact'
        heroImg={ContactImg}
        title='Contact Us'
        text='You’ve got questions, we’ve got answers.'
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactUs;
