import React from "react";
import { Link } from "react-router-dom";
import "./NoPageFoundLinks.css";

const NoPageFoundLinks = () => {
  return (
    <div className='noPageFound-links'>
      <div className='noPageFound-component-header'>
        <h1>Let’s Get You Back on Track</h1>
        <p>Here are some popular links that may help.</p>
      </div>
      <div className='noPageFound-component-body'>
        <ul className='noPageFound-list-items'>
          <li className='noPageFound-list'>
            <Link to='/'> Home </Link>
          </li>
          <li className='noPageFound-list'>
            <Link to='/createshipment'> Create a Shipment </Link>
          </li>
          <li className='noPageFound-list'>
            <Link to='/trackShipment'> Track a Package </Link>
          </li>
          <li className='noPageFound-list'>
            <Link to='/customerSuport'> Customer Support </Link>
          </li>
          <li className='noPageFound-list'>
            <Link to='/aboutUs'> About us </Link>
          </li>
          <li className='noPageFound-list'>
            <Link to='/contactus'> Contact Us </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NoPageFoundLinks;
