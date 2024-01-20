import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Spin } from "antd";
import "../styles/addUser.css";

const AddUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    country: yup.string().required("Required"),
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

  const handleSubmit = async (values, onSubmitProps) => {
    const { firstName, lastName, email, phoneNumber, password, country } =
      values;
    try {
      setError(null);
      setLoading(true);

      const signupResponse = await fetch(
        "http://localhost:3001/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            country,
            password,
          }),
        }
      );

      formik.resetForm();
      console.log(signupResponse);

      if (signupResponse.status === 201) {
        alert("User registered successfully");
        navigate("/dashboard");
      } else if (signupResponse.status === 400) {
        setError(
          "Phone number or User name is already registered. Please use another."
        );
      } else {
        setError("Something occurred.");
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
      formik.resetForm();
      console.log("Error state:", e);
      setError("An error occurred. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
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
    <div className='addUser'>
      <form
        className='signup-container'
        onSubmit={formik.handleSubmit}
        autoComplete='off'
      >
        <div className='signup-container-header'>
          <h3>Add User</h3>
        </div>
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
          name='country'
          value={formik.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Country'
          className='signup-input'
        />
        {formik.touched.country && formik.errors.country ? (
          <p className='error-text'>{formik.errors.country}</p>
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
        <button className='signup-form-btn' type='submit'>
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

export default AddUser;
