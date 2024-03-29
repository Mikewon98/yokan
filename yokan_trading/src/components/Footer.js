import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>Yokan</h1>
          <p>Your favorite choice</p>
        </div>
        <div>
          <a href='/'>
            <i className='fa-brands fa-facebook'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-instagram'></i>
          </a>
          {/* <a href='/'>
            <i className='fa-brands fa-behance'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-twitter'></i>
          </a> */}
        </div>
      </div>
      <div className='bottom'>
        <div className='bottom-div'>
          <h4>About Yokan Trading</h4>
          <a href='/createshipment'>Create Shipment</a>
          <a href='/trackShipment'>Track Shipment</a>
          <a href='/partner'>Join the Team</a>
          <a href='/aboutUs'>About Us</a>
        </div>
        <div className='bottom-div'>
          <h4>Contact Us</h4>
          {/* <a href='/'>Phone</a>
          <a href='/'>yokantrading@gmail.com</a>
          <a href='/'>P.O Box</a> */}
          <div className='footer-texts'>
            <i className='fa-solid fa-phone'></i>
            <p> +251915980830</p>
          </div>
          <div className='footer-texts'>
            <i className='fa-solid fa-phone'></i>
            <p> +251962174520</p>
          </div>
          <div className='footer-texts'>
            <i className='fa-solid fa-phone'></i>
            <p> +251921768382</p>
          </div>
          <div className='footer-texts'>
            <i className='fa-solid fa-envelope'></i>
            {/* <p> yokantrading@gmail.com</p> */}
            <a href='/'>yokantrading@gmail.com</a>
          </div>
          {/* <div className='footer-texts'>
            <p>P.O Box</p>
            <p> 1123</p>
          </div> */}
        </div>
        <div className='bottom-div'>
          <h4>Help</h4>
          <a href='/customerSuport'>Support</a>
          {/* <a href='/customerSuport'>Troubleshooting</a> */}
          <a href='/contactus'>Contact Us</a>
        </div>
        <div className='bottom-div'>
          <h4>Others</h4>
          <a href='/#'>Terms and Conditions</a>
          <a href='/privacyPolicy'>Privacy Policy</a>
          <a href='/'>License</a>
        </div>
      </div>
      <hr />
      <div className='bottom-last'>
        <h4>Yokan Automated Tracking System</h4>
      </div>
    </div>
  );
};

export default Footer;
