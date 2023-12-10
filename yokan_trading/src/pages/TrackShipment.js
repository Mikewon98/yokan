import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import TrackImg from "../assets/trackyour-shipment.jpg";
import Track from "../components/Track";
import Footer from "../components/Footer";

const TrackShipment = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero
        cName='hero-track'
        heroImg={TrackImg}
        title='Track your Shipment'
        text='Enter your Tracking number down below to find your shipment'
      />
      <Track />
      <Footer />
    </>
  );
};

export default TrackShipment;
