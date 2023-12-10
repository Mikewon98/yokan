import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import axios from "axios";
import "./AdminLoginPage.css";
import { loginAdmin } from "../state/adminAuthSlice";

const AdminLoginPage = () => {
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
        "http://localhost:3001/admin/login",
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
          loginAdmin({
            adminUser: loggedIn.user,
            adminToken: loggedIn.token,
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
            <Link to='/'>Login as Feeder</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
