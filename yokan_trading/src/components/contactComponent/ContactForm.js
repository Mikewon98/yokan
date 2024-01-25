import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const handleValidation = yup.object().shape({
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email().required("Email is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    trackingNumber: yup.string().optional(),
    messageText: yup.string().required("Text message is required"),
  });

  const initialValues = {
    country: "",
    city: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    trackingNumber: "",
    messageText: "",
  };

  const handleFormSubmit = (values, event) => {
    emailjs
      .sendForm(
        "service_yc0crlk",
        "template_g1n0epr",
        form.current,
        "zYO703aorvvHoJgoO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: handleValidation,
    onSubmit: handleFormSubmit,
  });
  return (
    <div className='contact-form-container'>
      <div className=' contact-form-div' data-aos='fade-right'>
        <h1 className=' contact-form-div-heading'>
          Have Questions? Get in touch!
        </h1>
        <p className=' contact-form-div-text'>
          Our relationship with you means everything to us and we'd like to know
          how we're doing. Please take a few moments to send us your questions,
          comments or suggestions and we will respond as quickly as possible.
        </p>
        <div className='contact-texts'>
          <i className='fa-solid fa-location-dot'></i>
          <p> Setema Building -Tropics office -First floor - room no. 102</p>
        </div>
        <div className='contact-texts'>
          <i className='fa-solid fa-phone'></i>
          <p> +251923974353</p>
        </div>
        <div className='contact-texts'>
          <i className='fa-solid fa-envelope'></i>
          <p> yokanlogistics@gmail.com</p>
        </div>
      </div>
      <form
        className='contact-email'
        data-aos='fade-left'
        ref={form}
        onSubmit={formik.handleSubmit}
      >
        <input
          name='country'
          type='text'
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Country'
        />
        {formik.touched.country && formik.errors.country ? (
          <p className='error-text'>{formik.errors.country}</p>
        ) : null}
        <input
          name='city'
          type='text'
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='City'
        />
        {formik.touched.city && formik.errors.city ? (
          <p className='error-text'>{formik.errors.city}</p>
        ) : null}
        <input
          name='fullName'
          type='text'
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Full Name'
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <p className='error-text'>{formik.errors.fullName}</p>
        ) : null}
        <input
          name='email'
          type='text'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Email'
        />
        {formik.touched.email && formik.errors.email ? (
          <p className='error-text'>{formik.errors.email}</p>
        ) : null}
        <input
          name='phoneNumber'
          type='number'
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Phone Number'
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <p className='error-text'>{formik.errors.phoneNumber}</p>
        ) : null}
        <input
          name='trackingNumber'
          type='text'
          value={formik.values.trackingNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Tracking Number'
        />
        {formik.touched.trackingNumber && formik.errors.trackingNumber ? (
          <p className='error-text'>{formik.errors.trackingNumber}</p>
        ) : null}
        <textarea
          name='messageText'
          type='text'
          rows={5}
          value={formik.values.messageText}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Message'
        />
        {formik.touched.messageText && formik.errors.messageText ? (
          <p className='error-text'>{formik.errors.messageText}</p>
        ) : null}
        <div className='contact-email-div'>
          <button className='contact-button'>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
