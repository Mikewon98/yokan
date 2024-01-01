import React from "react";
import "./AboutUsStatList.css";

const AboutUsStatList = () => {
  return (
    <ul className='aboutus-stat-list'>
      <li className='aboutus-stat-item'>
        <p className='aboutus-stat-value'>5+</p>
        <p className='aboutus-stat-label'>Years of service</p>
      </li>
      <li className='aboutus-stat-item'>
        <p className='aboutus-stat-value'>100+</p>
        <p className='aboutus-stat-label'>Employees</p>
      </li>
      <li className='aboutus-stat-item'>
        <p className='aboutus-stat-value'>5+</p>
        <p className='aboutus-stat-label'>Countries</p>
      </li>
      <li className='aboutus-stat-item'>
        <p className='aboutus-stat-value'>90+</p>
        <p className='aboutus-stat-label'>Couriers</p>
      </li>
      <li className='aboutus-stat-item'>
        <p className='aboutus-stat-value'>1000+</p>
        <p className='aboutus-stat-label'>Products Shipped</p>
      </li>
      <li className='aboutus-stat-item'>
        <p className='aboutus-stat-value'>10+</p>
        <p className='aboutus-stat-label'>Business Partners</p>
      </li>
    </ul>
  );
};

export default AboutUsStatList;
