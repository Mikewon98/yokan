import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className='contact-main-container'>
      <div className='contact-main-container-iframe'>
        <iframe
          style={{ border: "0", margin: "0", padding: "0" }}
          title='Yokan'
          className='w-100 h-100'
          width='700'
          height='600'
          loading='lazy'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002.3298077842464!2d38.82579643004263!3d9.02341928106313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b3dad01b6fd%3A0x9ba0b1b0f2d988b!2sSetema%20Building%20-Tropics%20office%20-First%20floor%20-%20room%20no.%20102!5e0!3m2!1sen!2set!4v1703704677183!5m2!1sen!2set'
        ></iframe>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
