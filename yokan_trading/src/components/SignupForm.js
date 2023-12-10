import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import "./SignupForm.css";

const SignupForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, onSubmitProps) => {
    const { firstName, lastName, email, phoneNumber, password } = values;
    await axios
      .post("http://localhost:3001/auth/register", {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

    onSubmitProps.resetForm();
    navigate("/login");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    },
    validationSchema: yup.object({
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
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div className='signup-form'>
      <form className='signup-container' onSubmit={formik.handleSubmit}>
        <p className='signup-container-header'>Sign Up</p>
        <div className='signup-text-container'>
          <p>Already have an account</p>
          <Link to='/login'>Log In</Link>
        </div>
        <input
          name='firstName'
          value={formik.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='First Name'
          className={
            formik.touched.firstName && formik.errors.firstName
              ? "signup-input input-error"
              : "signup-input"
          }
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
          className={
            formik.touched.lastName && formik.errors.lastName
              ? "signup-input input-error"
              : "signup-input"
          }
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
          className={
            formik.touched.email && formik.errors.email
              ? "signup-input input-error"
              : "signup-input"
          }
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
          className={
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? "signup-input input-error"
              : "signup-input"
          }
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
          className={
            formik.touched.password && formik.errors.password
              ? "signup-input input-error"
              : "signup-input"
          }
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
          className={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? "signup-input input-error"
              : "signup-input"
          }
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p className='error-text'>{formik.errors.confirmPassword}</p>
        ) : null}
        <div className='signup-text-container'>
          <p>By continuing, I agree to the</p>
          <Link to='/signup'>Yokan Trading Agreement.</Link>
        </div>
        <label className='checkbox-label'>
          <input
            className='checkbox'
            name='checkbox'
            value={formik.checkbox}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type='checkbox'
          />{" "}
          I agree to the Yokan Technology Agreement and confirm I've been given
          enough time to read it and understand that it contains important terms
          about my use of Yokan Technologies, like limiting Yokan's liability
          and my agreement on how disputes between Yokan and me will be handled.
          <Link to='/login'>View Yokan Technology Agreement </Link>
        </label>
        {formik.touched.checkbox && formik.errors.checkbox ? (
          <p className='error-text'>{formik.errors.checkbox}</p>
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

export default SignupForm;
