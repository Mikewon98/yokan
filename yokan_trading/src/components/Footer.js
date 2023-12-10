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
          <a href='/'>
            <i className='fa-brands fa-behance'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-twitter'></i>
          </a>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h4>About Yokan Trading</h4>
          <a href='/aboutus'>Abour Us</a>
          <a href='/partner'>Become Partner</a>
          <a href='/partner'>Join the Team</a>
          <a href='/partner'>Apply for a Job</a>
        </div>
        <div>
          <h4>Contact Us</h4>
          <a href='/'>Phone</a>
          <a href='/'>Email</a>
          <a href='/'>P.O Box</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href='/customerSuport'>Support</a>
          <a href='/customerSuport'>Troubleshooting</a>
          <a href='/contactus'>Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href='/'>Terms of Service</a>
          <a href='/'>Terms and Conditions</a>
          <a href='/'>Privacy Policy</a>
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
