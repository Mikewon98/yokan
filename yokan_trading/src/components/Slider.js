import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import land from "../assets/land.png";
import port from "../assets/port.jpg";
import water from "../assets/water.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <Carousel fade interval={4000}>
      <Carousel.Item>
        <img className='slider-img' src={port} alt='First slide' />
        <Carousel.Caption>
          <h1 className='slider-heading-one'>
            Full Sustainable Cargo Solution
          </h1>
          <p className='fw-bold'>INTERNATIONAL LOGISTIC</p>
          <div className='carousel-btn'>
            <Button as={Link} to={"/aboutUs"} variant='outline-warning'>
              Who We Are
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='slider-img' src={land} alt='First slide' />
        <Carousel.Caption>
          <h1 className='slider-heading-two'>WE DELIVER AROUND WORLD</h1>
          <p className='fw-bold'>international delivery</p>
          <div className='carousel-btn'>
            <Button as={Link} to={"/aboutUs"} variant='outline-warning'>
              Who We Are
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='slider-img' src={water} alt='First slide' />
        <Carousel.Caption>
          <h1 className='slider-heading-two'>
            INTERNATIONAL FREIGHT DELIVERY SERVICES
          </h1>
          <p className='fw-bold'>We Provide Solutions</p>
          <div className='carousel-btn'>
            <Button as={Link} to={"/aboutUs"} variant='outline-warning'>
              Who We Are
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
