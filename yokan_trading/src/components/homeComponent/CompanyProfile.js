import React from "react";
import "./CompanyProfile.css";

const CompanyProfile = ({ img }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div
          className='col-lg-6 mt-5 p-3 fs-5 d-flex justify-content-center flex-column align-items-center'
          data-aos='fade-right'
          data-aos-duration='5000'
        >
          <img alt='Mountain' className='company-profile-image' src={img} />
        </div>
        <div
          className='col-lg-6 mt-5 p-5 d-flex justify-content-center flex-column'
          data-aos='fade-left'
          data-aos-duration='5000'
        >
          <h2 className='display-6 fw-bold text-center'>Company Profile</h2>
          <div className='home-description-container-first'>
            <div className='home-description-text'>
              <p>
                Yokan Trading PLC is a dynamic and forward-thinking logistics
                company based in Ethiopia. Established with a vision to redefine
                the standards of transportation services, It's a catalyst for
                progress, a testament to innovation, and a guardian of
                reliability. Yokan Trading PLC has emerged as a trusted name in
                the logistics industry. Our journey began with a vision to
                revolutionize transportation services in Ethiopia and beyond,
                setting new benchmarks for efficiency, sustainability, and
                customer-centricity. We specialize in providing comprehensive
                logistics solutions for the seamless movement of goods both
                within Ethiopia and across international borders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
