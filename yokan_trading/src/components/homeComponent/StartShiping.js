import React from "react";
import { useNavigate } from "react-router-dom";
import ShipmentPackageImage from "../../assets/shipment-package.jpeg";
import "./StartShiping.css";

const StartShiping = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/createShipment");
  };

  return (
    <div className='container startShiping-margin'>
      <div className='row  startShiping-main-div'>
        <div className='col-lg-6 startShiping-image-div '>
          <img
            alt='Shipment Package'
            className='startShiping-profile-image'
            src={ShipmentPackageImage}
          />
        </div>
        <div className='col-lg-6 startShiping-content-div'>
          <div className='startShiping-header-card'>
            <h2 className='startShiping-headline'>Reach Customers Faster</h2>
          </div>
          <div className='startShiping-body-card'>
            <p>
              Trust us to deliver your goods swiftly and reliably to their
              destinations, ensuring peace of mind every step of the way.
            </p>
            <button className='startShiping-button' onClick={handleNavigate}>
              <p>Start Shiping</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartShiping;
