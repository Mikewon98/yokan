import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { Spin } from "antd";
import { loginFeeder } from "../../state/feedAuthSlice";
import "./FeederLoginPage.css";

const FeederLoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validationSchema = yup.object().shape({
    userName: yup.string().required("User name is required"),
    password: yup.string().required("User name is required"),
  });

  const initialValues = {
    userName: "",
    password: "",
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    // try {
    //   const loggedInResponse = await axios.post(
    // "http://localhost:3001/dataFeeder/login",
    //     values,
    //     {
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );

    //   const loggedIn = loggedInResponse.data;

    //   console.log(loggedIn);

    //   console.log(loggedIn.user);
    //   // console.log(loggedIn.token);

    //   onSubmitProps.resetForm();

    //   if (loggedIn) {
    //     dispatch(
    // loginFeeder({
    //   feederUser: loggedIn.user,
    //   feederToken: loggedIn.token,
    // })
    //     );
    //     navigate("/dashboard");
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    try {
      setError(null);
      setLoading(true);
      const loggedInResponse = await fetch(
        "http://localhost:3001/dataFeeder/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      const loggedIn = await loggedInResponse.json();
      console.log(loggedInResponse.status);
      console.log(loggedIn.user);
      console.log(loggedIn.token);
      onSubmitProps.resetForm();

      console.log(loggedInResponse);

      if (loggedInResponse.status === 200) {
        dispatch(
          loginFeeder({
            feederUser: loggedIn.user,
            feederToken: loggedIn.token,
          })
        );
        navigate("/dashboard");
      } else {
        setError("Incorrect Credentials. Please try again.");
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("Error state:", e);
      setError("An error occurred. Please try again.");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  const NotificationComponent = () => {
    return (
      <div className='notificationContainer-login'>
        <div className='notificationBox'>
          <i className='fas fa-question-circle'></i>
          <p className='message '>{error}</p>
        </div>
      </div>
    );
  };

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
            <Link className='send-to-admin' to='/admin'>
              Login as an Admin
            </Link>
          </div>
        </form>
      </div>
      {loading && (
        <div className='loading-spin-feeder-login'>
          <Spin size='large' />
        </div>
      )}
      {error && <NotificationComponent />}
    </div>
  );
};

export default FeederLoginPage;
