import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import AddshipmentHeader from "../components/addShipment/AddshipmentHeader";
import WhereForm from "../components/addShipment/WhereForm";

const AddShipment = () => {
  return (
    <>
      {/* <Navbar /> */}
      <AddshipmentHeader />
      <WhereForm />
      <Footer />
    </>
  );
};

export default AddShipment;
