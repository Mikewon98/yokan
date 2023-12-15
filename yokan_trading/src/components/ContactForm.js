import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as yup from "yup";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const handleValidation = yup.object().shape({
    country: yup.string().required("country is required"),
    city: yup.string().required("city is required"),
    fullName: yup.string().required("full Name is required"),
    email: yup.string().email().required("email is required"),
    phoneNumber: yup.string().required("phone Number is required"),
    trackingNumber: yup.string().optional(),
    messageText: yup
      .string()
      .max(300, "mesage must be less than 300 characters")
      .required("text message is required"),
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
        "service_3xtaahk",
        "yokan_template",
        form.current,
        "eHNlGXYqjn3Eo4NVR"
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
    <form
      ref={form}
      className='main-contact-container'
      onSubmit={formik.handleSubmit}
    >
      <div className='sub-contact-container'>
        <p className='main-contact-title'>Contact Form</p>
        <p className='main-contact-text'>
          Our relationship with you means everything to us and we'd like to know
          how we're doing. Please take a few moments to send us your questions,
          comments or suggestions and we will respond as quickly as possible.
        </p>
        <div className='form-input'>
          <label className='form-input-label'>
            Country*
            <input
              name='country'
              type='text'
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.country && formik.errors.country
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.country && formik.errors.country ? (
              <p className='error-text'>{formik.errors.country}</p>
            ) : null}
          </label>
        </div>
        <div className='form-input'>
          <label className='form-input-label'>
            City*
            <input
              name='city'
              type='text'
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.city && formik.errors.city ? "input-error" : ""
              }
            />
            {formik.touched.city && formik.errors.city ? (
              <p className='error-text'>{formik.errors.city}</p>
            ) : null}
          </label>
        </div>
        <div className='form-input'>
          <label className='form-input-label'>
            Full Name*
            <input
              name='fullName'
              type='text'
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.fullName && formik.errors.fullName
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <p className='error-text'>{formik.errors.fullName}</p>
            ) : null}
          </label>
        </div>
        <div className='form-input'>
          <label className='form-input-label'>
            Email*
            <input
              name='email'
              type='text'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.email && formik.errors.email ? "input-error" : ""
              }
            />
            {formik.touched.email && formik.errors.email ? (
              <p className='error-text'>{formik.errors.email}</p>
            ) : null}
          </label>
        </div>
        <div className='form-input'>
          <label className='form-input-label'>
            Phone Number*
            <input
              name='phoneNumber'
              type='number'
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <p className='error-text'>{formik.errors.phoneNumber}</p>
            ) : null}
          </label>
        </div>
        <div className='form-input'>
          <label className='form-input-label'>
            Tracking Number
            <input
              name='trackingNumber'
              type='text'
              value={formik.values.trackingNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.trackingNumber && formik.errors.trackingNumber
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.trackingNumber && formik.errors.trackingNumber ? (
              <p className='error-text'>{formik.errors.trackingNumber}</p>
            ) : null}
          </label>
        </div>
        <div className='form-input'>
          <label className='form-input-label'>
            Write your message here*
            <textarea
              name='messageText'
              type='text'
              rows={5}
              value={formik.values.messageText}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.messageText && formik.errors.messageText
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.messageText && formik.errors.messageText ? (
              <p className='error-text'>{formik.errors.messageText}</p>
            ) : null}
          </label>
        </div>
      </div>
      <button type='submit' className='submit-btn'>
        Submit <i className='fa-solid fa-chevron-right' />
      </button>
    </form>
  );
};

export default ContactForm;
