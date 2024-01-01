import React from "react";
import ServiceContent from "../homeComponent/ServiceContent";
import ShipIcon from "../../assets/ship-icon.png";
import BusIcon from "../../assets/bus-icon.png";
import PlaneIcon from "../../assets/plane-icon.png";
import WarehouseIcon from "../../assets/warehouse-icon.png";
import "./CompanyService.css";

const CompanyService = () => {
  return (
    <div className='services-section'>
      <div className='heading'>
        <h1 className='display-text'>Safe & Reliable Cargo Solutions</h1>
      </div>
      <div className='content'>
        <div className='top-section'>
          <ServiceContent
            alt='ship'
            img={ShipIcon}
            heading='Sea Transport Services'
            content='Yokan Trading PLC extends its reach beyond borders with comprehensive sea transport services.'
          />
          <ServiceContent
            alt='warehouse'
            img={WarehouseIcon}
            heading='Warehousing Services'
            content='Our state-of-the-art warehousing facilities are the backbone of Yokan Tradings logistics excellence.'
          />
        </div>
        <div className='bottom-section'>
          <ServiceContent
            alt='palne'
            img={PlaneIcon}
            heading='Air Fright Services'
            content='Following the quality of our service thus having gained trust of our many clients.'
          />
          <ServiceContent
            alt='bus'
            img={BusIcon}
            heading='Local Shipping Services'
            content='We bring the same level of dedication and expertise to every corner of Ethiopia.'
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyService;
