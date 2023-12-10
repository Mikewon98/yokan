import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Selectuser, setLogin } from "../state/authSlice";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values, onSubmitProps) => {
    try {
      const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const loggedIn = await loggedInResponse.json();
      console.log(loggedIn.user);
      console.log(loggedIn.token);
      onSubmitProps.resetForm();
      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );

        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
    },
    validationSchema: yup.object({
      phoneNumber: yup.string().required("Required"),
      password: yup.string().required("Required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div className='login-form'>
      <form className='login-container' onSubmit={formik.handleSubmit}>
        <p className='login-container-header'>Log In</p>
        <div className='login-text-container'>
          <p>Don't have a profile?</p>
          <Link to='/signup'>SignUp</Link>
        </div>
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name='phoneNumber'
          value={formik.values.phoneNumber}
          placeholder='Phone Number'
          className={
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? "input-error"
              : ""
          }
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <p className='error-text'>{formik.errors.phoneNumber}</p>
        ) : null}
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name='password'
          value={formik.values.password}
          placeholder='Password'
          type='password'
          className={
            formik.touched.password && formik.errors.password
              ? "input-error"
              : ""
          }
        />
        {formik.touched.password && formik.errors.password ? (
          <p className='error-text'>{formik.errors.password}</p>
        ) : null}
        <div className='login-text-container'>
          <p>By continuing, I agree to the</p>
          <Link to='/signup'>Yokan Trading Agreement.</Link>
        </div>
        <button type='submit' className='login-form-btn'>
          Log In <i className='fa-solid fa-chevron-right'></i>
        </button>
        <Link to='/signup'>Forgot Email or Password</Link>
      </form>
    </div>
  );
};

export default LoginForm;

// try {
//   const loggedInResponse = await axios.post(
//     "http://localhost:3001/auth/login",
//     values,
//     {
//       headers: { "Content-Type": "application/json" },
//     }
//   );

//   const loggedIn = loggedInResponse.data;

//   console.log(loggedIn.user);
//   console.log(loggedIn.token);

//   onSubmitProps.resetForm();

//   if (loggedIn) {
//     dispatch(
//       setLogin({
//         user: loggedIn.user,
//         token: loggedIn.token,
//       })
//     );
//     navigate("/");
//   }
// } catch (e) {
//   console.log(e);
// }
