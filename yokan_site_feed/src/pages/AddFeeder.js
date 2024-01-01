import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "../styles/addFeeder.css";

const AddFeeder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  };

  const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Required"),
    phoneNumber: yup
      .number()
      .positive()
      .integer("Please enter an integer")
      .required("Required"),
    password: yup.string().required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Required"),
    checkbox: yup.boolean().oneOf([true], "Please accept terms of service"),
  });

  const handleFormSubmit = () => {
    console.log("form submit");
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <div className='addFeeder'>
      <form className='signup-container' onSubmit={formik.handleSubmit}>
        <p className='signup-container-header'>Add Staff Member</p>
        <input
          name='firstName'
          value={formik.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='First Name'
          className='signup-input'
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p className='error-text'>{formik.errors.firstName}</p>
        ) : null}
        <input
          name='lastName'
          value={formik.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Last Name'
          className='signup-input'
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p className='error-text'>{formik.errors.lastName}</p>
        ) : null}
        <input
          name='email'
          value={formik.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Email'
          className='signup-input'
        />
        {formik.touched.email && formik.errors.email ? (
          <p className='error-text'>{formik.errors.email}</p>
        ) : null}
        <input
          name='phoneNumber'
          value={formik.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Phone number'
          className='signup-input'
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <p className='error-text'>{formik.errors.phoneNumber}</p>
        ) : null}
        <input
          name='password'
          value={formik.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Password'
          type='password'
          className='signup-input'
        />
        {formik.touched.password && formik.errors.password ? (
          <p className='error-text'>{formik.errors.password}</p>
        ) : null}
        <input
          name='confirmPassword'
          value={formik.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Confirm Password'
          type='password'
          className='signup-input'
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p className='error-text'>{formik.errors.confirmPassword}</p>
        ) : null}
        <button
          className='signup-form-btn'
          type='submit'
          disabled={formik.isSubmitting}
        >
          Register <i className='fa-solid fa-chevron-right'></i>
        </button>
      </form>
    </div>
  );
};

export default AddFeeder;
