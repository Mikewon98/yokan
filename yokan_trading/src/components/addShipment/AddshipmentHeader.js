import React from "react";
import { useLocation } from "react-router-dom";
import "./AddShipmentHeader.css";

const AddshipmentHeader = () => {
  const location = useLocation();

  const currentLocation = location.pathname.split("/")[1];

  console.log(currentLocation);

  return (
    <div className='addshipment-header'>
      <h1>Create Shipment</h1>
      <div className='header-first-div'>
        <p>* indicates required</p>
      </div>
      <div className='progress-bar'>
        <div className='progress-bar-div'>
          <div className='progress-bar-container'>
            <i className='fa-solid fa-box'></i>
            <p>Product</p>
            <div
              className={`progress-bar-container-line ${
                currentLocation === "createshipment" ? "blue-div " : ""
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
