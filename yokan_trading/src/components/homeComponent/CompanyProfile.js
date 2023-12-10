import React from "react";
import "./CompanyProfile.css";
import AboutUsImg from "../../assets/shipment-package.jpeg";

const CompanyProfile = () => {
  return (
    <div className='home-description'>
      <h1>Yokan Automated Tracking System</h1>
      <div className='home-description-container-first'>
        <div className='home-description-text'>
          <h2>Company Profile</h2>
          <p>
            Yokan Trading PLC is a reputable and forward thinking transit and
            forwarding company in Ethiopia. We have in-depth knowledge of
            international trade and banking, custom procedure and facilitation,
            custom valuation, freight forwarding and maritime law. The company
            clears goods from the port of Djibouti through the Addis Ababa
            customs office and other customs branch offices, as well as for
            goods originating from Ethiopia to various countries. With strong
            commitment to ethical business practice, safety and compliance,
            speed & efficiency, convenience and confidentiality, we are
            dedicated to contributing to the growth of the logistic sector in
            Ethiopian and also fostering global trade relationships.
          </p>
        </div>
        <div className='image'>
          <img alt='Mountain' src={AboutUsImg} />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
