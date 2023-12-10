import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className='main-contact-container'>
      <div className='sub-contact-container'>
        <p className='main-contact-title'>Contact Form</p>
        <p className='main-contact-text'>
          Our relationship with you means everything to us and we'd like to know
          how we're doing. Please take a few moments to send us your questions,
          comments or suggestions and we will respond as quickly as possible.
        </p>
        <div className='form-input'>
          <p>Country *</p>
          <input />
        </div>
        <div className='form-input'>
          <p>First Name *</p>
          <input />
        </div>
        <div className='form-input'>
          <p>Last Name *</p>
          <input />
        </div>
        <div className='form-input'>
          <p>E-mail *</p>
          <input />
        </div>
        <div className='form-input'>
          <p>Phone Number</p>
          <input />
        </div>
        <div className='form-input'>
          <p>Postal code</p>
          <input />
        </div>
        <div className='form-input'>
          <p>Tracking number</p>
          <input />
        </div>
        <div className='form-input'>
          <p>Write your message here</p>
          <textarea className='contact-form-textarea' rows={5} />
        </div>
      </div>
      <div className='submit-btn'>
        Submit <i className='fa-solid fa-chevron-right' />
      </div>
      {/* <button className='contact-form-btn'>Submit</button> */}
    </div>
  );
};

export default ContactForm;
