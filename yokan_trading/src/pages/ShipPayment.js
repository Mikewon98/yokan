import React from "react";
import Navbar from "../components/navbar/Navbar";
import AddshipmentHeader from "../components/addShipment/AddshipmentHeader";
import Footer from "../components/Footer";
import ShipmentPayment from "../components/addShipment/ShipmentPayment";

const ShipPayment = () => {
  return (
    <>
      {/* <Navbar /> */}
      <AddshipmentHeader />
      <ShipmentPayment />
      <Footer />
    </>
  );
};

export default ShipPayment;
