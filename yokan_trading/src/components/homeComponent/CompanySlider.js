import React from "react";
import CEO from "../../assets/image-24-copyright-150x150.jpg";
import "./CompanySlider.css";

const CompanySlider = () => {
  return (
    <div className='container '>
      <div className='row'>
        <div
          className='col-lg-6 mt-5 p-3'
          // data-aos='fade-right'
          // data-aos-duration='4000'
        >
          {/* <p className='fs-2'>We Offer You</p> */}
          <p className='company-slider-header'>We Offer You</p>
          <h1 className='company-slider-heading'>
            {/* <h1 className='display-5 fw-bold text-start'> */}
            Full range of transportation services
          </h1>
          {/* <p className='fs-3'> */}
          <p className='company-slider-content'>
            We do our best to implement your ideas into the project to make it
            successful and profitable.
          </p>
          <div className='company-slider-div-img'>
            <img className='company-slider-img' src={CEO} alt='CEO' />
            <p className='company-slider-ceo-text'>CEO Director</p>
          </div>
        </div>
        <div
          className='col-lg-6 company-slider-div-text'
          // data-aos='fade-left'
          // data-aos-duration='4000'
        >
          <p className='first company-slider-text'>
            Yokan Trading PLC is a reputable and forward thinking transit and
            forwarding company in Ethiopia. We have in-depth knowledge of
            international trade and banking, custom procedure and facilitation,
            custom valuation, freight forwarding and maritime law.
          </p>
          <p className='company-slider-text'>
            The company clears goods from the port of Djibouti through the Addis
            Ababa customs office and other customs branch offices, as well as
            for goods originating from Ethiopia to various countries.
          </p>
          <p className='company-slider-text'>
            With strong commitment to ethical business practice, safety and
            compliance, speed & efficiency, convenience and confidentiality, we
            are dedicated to contributing to the growth of the logistic sector
            in Ethiopian and also fostering global trade relationships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
