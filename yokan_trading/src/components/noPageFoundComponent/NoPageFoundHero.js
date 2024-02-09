import React from "react";
import image from "../../assets/Women_looking_through_binoculars.jpeg";
import "./NoPageFoundHero.css";

const NoPageFoundHero = () => {
  return (
    <div className='noPageFound-hero'>
      <div className='noPageFound-hero-content'>
        <h1>Sorry! We Can't Find That Page.</h1>
        <p>
          Looks like the page you’re trying to find may have been moved or
          deleted.
        </p>
      </div>
      <div className='noPageFound-hero-image'>
        <img src={image} alt='Women looking through binoculars' />
      </div>
    </div>
  );
};

export default NoPageFoundHero;
