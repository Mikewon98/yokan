import React from "react";
import "./Support.css";
import CallYokan from "../assets/Call_Yokan_Trading.png";
import AdditionalSupport from "../assets/Additional_Contact_Yokan.png";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/contactUs");
  };
  return (
    <>
      <div className='support-container'>
        <div className='support-container-text'>
          <p className='support-heading'>Let Us Help You</p>
          <p>
            Yokan is represented in by a nominated Service Contractor. For more
            information about the Yokan Tradings services please contact through
            the form:
          </p>
          <hr />
        </div>
        <div className='support-sub-container'>
          <div className='support-sub-sub-container'>
            <img className='logo-support' alt='Call Yokan' src={CallYokan} />
            <p className='mini-support-heading'>Call US</p>
            <p>
              <strong>Company:</strong> Yokan Automated Tracking System
            </p>
            <p>Bole, Africa Avenue Street</p>
            <p>Addis Ababa, Ethiopia</p>
            <p>
              <strong>Tel:</strong> +251 923974353
            </p>
            <p>Mikewon98@gmail.com</p>
            <p>
              <strong>Service Available:</strong> Export/Import/Custom Clearance
            </p>
          </div>
          <div className='support-sub-sub-container'>
            <img
              className='logo-support'
              alt='Additional call'
              src={AdditionalSupport}
            />
            <p className='mini-support-heading'>Write to Us</p>
            <p className='mini-support-heading-p'>
              Reach the right person the first time. Our contact forms will help
              you.
            </p>
            {/* <Button path='/contactUs' text='' /> */}
            <button className='send-to-contact-button' onClick={handleButton}>
              Go to the Form
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
