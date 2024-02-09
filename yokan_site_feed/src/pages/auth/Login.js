import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../state/adminAuthSlice";
import { loginFeeder } from "../../state/feedAuthSlice";
import { Spin } from "antd";
import * as yup from "yup";
import { jwtDecode } from "jwt-decode";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const validationSchema = yup.object().shape({
    userName: yup.string().required("User name is required"),
    password: yup.string().required("Password is required"),
  });

  const initialValues = {
    userName: "",
    password: "",
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
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
      // console.log(loggedInResponse.status);
      // console.log(loggedIn.user);
      // console.log(loggedIn.token);
      // console.log(loggedInResponse);

      const decodedToken = jwtDecode(loggedIn.token);

      if (loggedInResponse.status === 200) {
        dispatch(
          loginFeeder({
            feederUser: loggedIn.user,
            feederToken: loggedIn.token,
            feederTokenExpiration: decodedToken.exp * 1000,
          })
        );

        onSubmitProps.resetForm();
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

  const handleAdminFormSubmit = async (values, onSubmitProps) => {
    try {
      setError(null);
      setLoading(true);
      const loggedInResponse = await fetch(
        "http://localhost:3001/admin/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      const loggedIn = await loggedInResponse.json();
      // console.log(loggedInResponse.status);
      // console.log(loggedIn.user);
      // console.log(loggedIn.token);
      // console.log(loggedInResponse);

      console.log("Logged in response" + loggedIn);

      const decodedToken = jwtDecode(loggedIn.token);

      console.log(decodedToken);

      if (loggedInResponse.status === 200) {
        dispatch(
          loginAdmin({
            adminUser: loggedIn.user,
            adminToken: loggedIn.token,
            adminTokenExpiration: decodedToken.exp * 1000,
          })
        );

        onSubmitProps.resetForm();
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

  const formikAdmin = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleAdminFormSubmit,
  });

  const handleLink = () => {
    setIsAdmin(!isAdmin);
  };

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
    <div className='login-main-container'>
      {isAdmin ? (
        <div className='login-div'>
          <h1 className='login-header'> Admin Login</h1>
          <form
            className='feeder-login-form'
            onSubmit={formikAdmin.handleSubmit}
          >
            <div className='login-input'>
              <label className='login-input-label'>
                <p className='input-label-text'>User name</p>
                <input
                  type='text'
                  name='userName'
                  onChange={formikAdmin.handleChange}
                  onBlur={formikAdmin.handleBlur}
                  value={formikAdmin.values.userName}
                  className={
                    formikAdmin.touched.userName && formikAdmin.errors.userName
                      ? "input-error"
                      : ""
                  }
                />
                {formikAdmin.touched.userName && formikAdmin.errors.userName ? (
                  <p className='error-text'>{formikAdmin.errors.userName}</p>
                ) : null}
              </label>
            </div>
            <div className='login-input'>
              <label className='login-input-label'>
                <p className='input-label-text'>Password</p>
                <input
                  type='password'
                  name='password'
                  onChange={formikAdmin.handleChange}
                  onBlur={formikAdmin.handleBlur}
                  value={formikAdmin.values.password}
                  className={
                    formikAdmin.touched.password && formikAdmin.errors.password
                      ? "input-error"
                      : ""
                  }
                />
                {formikAdmin.touched.password && formikAdmin.errors.password ? (
                  <p className='error-text'>{formikAdmin.errors.password}</p>
                ) : null}
              </label>
            </div>
            <div className='login-button-div'>
              <button type='submit' className='login-button'>
                Sign In
              </button>
              <p className='send-to-admin' onClick={handleLink}>
                Login as a staff
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className='login-div'>
          <h1 className='login-header'>Staff Login</h1>
          <form className='feeder-login-form' onSubmit={formik.handleSubmit}>
            <div className='login-input'>
              <label className='login-input-label'>
                <p className='input-label-text'>User name</p>
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
            <div className='login-input'>
              <label className='login-input-label'>
                <p className='input-label-text'>Password</p>
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
            <div className='login-button-div'>
              <button type='submit' className='login-button'>
                Sign In
              </button>
              <p className='send-to-admin' onClick={handleLink}>
                Login as an Admin
              </p>
            </div>
          </form>
        </div>
      )}

      {loading && (
        <div className='loading-spin-feeder-login'>
          <Spin size='large' />
        </div>
      )}
      {error && <NotificationComponent />}
    </div>
  );
};

export default Login;
