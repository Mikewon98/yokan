import React from "react";
import MobileImg from "../../assets/women-holding-phone.png";
import PlayStore from "../../assets/app-store-icon.png";
import AppStore from "../../assets/android-app-store-icon.png";
import "./HeroMobile.css";

const HeroMobile = () => {
  return (
    <>
      <div className='hero-mobile'>
        <img alt='HeroImg' src={MobileImg} />
        <div className='hero-mobile-text'>
          <h1>Stay in Control with the</h1>
          <h1>Yokan Mobile App</h1>
          <p>
            Download the app to get real-time alerts on shipping and deliveries,
            as well as create shipments, find drop-off locations and more. All
            from your phone.
          </p>
          <div className='mobile-logo'>
            <a href='/'>
              <img className='logo' alt='PlayStore' src={PlayStore} />
            </a>
            <a href='/'>
              <img className='logo' alt='AppStore' src={AppStore} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMobile;
