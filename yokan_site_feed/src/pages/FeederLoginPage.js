import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import "./FeederLoginPage.css";
import axios from "axios";
import { loginFeeder } from "../state/feedAuthSlice";

const FeederLoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    userName: yup.string().required("User name is required"),
    password: yup.string().required("User name is required"),
  });

  const initialValues = {
    userName: "",
    password: "",
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    try {
      const loggedInResponse = await axios.post(
        "http://localhost:3001/dataFeeder/login",
        values,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const loggedIn = loggedInResponse.data;

      console.log(loggedIn.user);
      console.log(loggedIn.token);

      onSubmitProps.resetForm();

      if (loggedIn) {
        dispatch(
          loginFeeder({
            feederUser: loggedIn.user,
            feederToken: loggedIn.token,
          })
        );
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <div className='feeder-login-main-container'>
      <div className='feeder-login-div'>
        <h1 className='feeder-login-header'>Login</h1>
        <form className='feeder-login-form' onSubmit={formik.handleSubmit}>
          <div className='feeder-login-input'>
            <label className='feeder-input-label'>
              <p className='feeder-input-label-text'>User name</p>
              <input
                type='text'
                name='userName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                className={
                  formik.touched.userName && formik.errors.userName
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.userName && formik.errors.userName ? (
                <p className='error-text'>{formik.errors.userName}</p>
              ) : null}
            </label>
          </div>
          <div className='feeder-login-input'>
            <label className='feeder-input-label'>
              <p className='feeder-input-label-text'>Password</p>
              <input
                type='password'
                name='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={
                  formik.touched.password && formik.errors.password
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.password && formik.errors.password ? (
                <p className='error-text'>{formik.errors.password}</p>
              ) : null}
            </label>
          </div>
          <div className='feeder-login-button-div'>
            <button type='submit' className='feeder-login-button'>
              Sign In
            </button>
            <Link to='/admin'>Login as an Admin</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeederLoginPage;
