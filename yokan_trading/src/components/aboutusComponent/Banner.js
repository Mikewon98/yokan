import React from "react";
import "./Banner.css";
import land from "../../assets/land.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const buttonNavigate = () => {
    navigate("/createshipment");
  };

  return (
    <div className='banner'>
      <img className='banner-image' src={land} alt='ship' />
      <section>
        <h1>Your Gateway to any Destination in the World</h1>
        <p>
          We specialize in providing comprehensive logistics solutions that
          extend beyond the borders of Ethiopia. Whether it's the seamless
          movement of goods within the nation or navigating the complexities of
          international logistics, Yokan Trading PLC ensures a smooth and
          reliable process from origin to destination.
        </p>
        <div className='btn-background'>
          <button className='banner-btn' type='button' onClick={buttonNavigate}>
            <div className='dark'></div> Start Shipping
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
