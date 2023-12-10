import React from "react";
import AddshipmentHeader from "../components/addShipment/AddshipmentHeader";
import Navbar from "../components/navbar/Navbar";
import ShipItem from "../components/addShipment/ShipItem";
import Footer from "../components/Footer";

const ShipWhat = () => {
  return (
    <>
      {/* <Navbar /> */}
      <AddshipmentHeader />
      <ShipItem />
      <Footer />
    </>
  );
};

export default ShipWhat;
