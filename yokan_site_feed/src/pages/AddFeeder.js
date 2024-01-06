import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Spin } from "antd";
import "../styles/addFeeder.css";

const AddFeeder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    checkbox: false,
  };

  const validationSchema = yup.object({
    userName: yup.string().required("Required"),
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
  });

  const handleFormSubmit = async (values, onSubmitProps) => {
    const { userName, firstName, lastName, email, phoneNumber, password } =
      values;
    try {
      setError(null);
      setLoading(true);

      const signupResponse = await fetch(
        "http://localhost:3001/dataFeeder/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userName,
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
          }),
        }
      );

      console.log(signupResponse);

      if (signupResponse.status === 400) {
        setError(
          "Phone number or User name is already registered. Please use another."
        );
      } else if (signupResponse.status === 201) {
        alert("User registered successfully");
        navigate("/dashboard");
      } else {
        setError("Something occurred.");
      }

      onSubmitProps.resetForm();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      onSubmitProps.resetForm();
      console.log("Error state:", e);
      setError("An error occurred. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit,
  });

  const NotificationComponent = () => {
    return (
      <div className='notificationContainer'>
        <div className='notificationBox'>
          <i className='fas fa-question-circle'></i>
          <p className='message '>{error}</p>
        </div>
      </div>
    );
  };

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
          name='userName'
          value={formik.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='User Name'
          className='signup-input'
        />
        {formik.touched.userName && formik.errors.userName ? (
          <p className='error-text'>{formik.errors.userName}</p>
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
      {loading && (
        <div className='loading-spin'>
          <Spin size='large' />
        </div>
      )}
      {error && <NotificationComponent />}
    </div>
  );
};

export default AddFeeder;
