import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../state/adminAuthSlice";
import * as yup from "yup";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Spin } from "antd";
import "./AdminLoginPage.css";

const AdminLoginPage = () => {
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
    //     "http://localhost:3001/admin/login",
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
    // loginAdmin({
    //   adminUser: loggedIn.user,
    //   adminToken: loggedIn.token,
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
    <div className='admin-login-main-container'>
      <div className='admin-login-div'>
        <h1 className='admin-login-header'>Admin Login</h1>
        <form className='admin-login-form' onSubmit={formik.handleSubmit}>
          <div className='admin-login-input'>
            <label className='admin-input-label'>
              <p className='admin-input-label-text'>User name</p>
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
          <div className='admin-login-input'>
            <label className='admin-input-label'>
              <p className='admin-input-label-text'>Password</p>
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
          <div className='admin-login-button-div'>
            <button type='submit' className='admin-login-button'>
              Sign In
            </button>
            {/* here change login path */}
            <Link className='send-to-login' to='/'>
              Login as Feeder
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

export default AdminLoginPage;
