import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Selectuser } from "../../state/authSlice";
import "./AddShipmentHeader.css";

const AddshipmentHeader = () => {
  const auth = useSelector(Selectuser);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/login");
  };

  const currentLocation = location.pathname.split("/")[1];

  console.log(currentLocation);

  return (
    <div className='addshipment-header'>
      <h1>Create Shipment</h1>
      <div className='header-first-div'>
        {auth ? null : (
          <div className='header-login'>
            <i className='fa-solid fa-lock' onClick={handleClick}></i>
            <p>Login</p>
          </div>
        )}
        <p>* indicates required</p>
      </div>
      <div className='progress-bar'>
        <div className='progress-bar-div'>
          <div className='progress-bar-container'>
            <i className='fa-solid fa-box'></i>
            <p>Product</p>
            <div
              className={`progress-bar-container-line ${
                currentLocation === "addshipment" ? "blue-div " : ""
              }`}
            ></div>
          </div>
          <div className='progress-bar-container'>
            <i className='fa-solid fa-location-dot'></i>
            <p>Where</p>
            <div
              className={`progress-bar-container-line ${
                currentLocation === "shipwhat" ? "blue-div " : ""
              }`}
            ></div>
          </div>

          <div className='progress-bar-container'>
            <i className='fa-solid fa-credit-card'></i>
            <p>Payment </p>
            <div
              className={`progress-bar-container-line ${
                currentLocation === "shippayment" ? "blue-div " : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddshipmentHeader;
