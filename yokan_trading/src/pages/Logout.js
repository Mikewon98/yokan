import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogout } from "../state/authSlice";
import { useNavigate } from "react-router-dom";
import "../components/Logout.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { nanoid } from "@reduxjs/toolkit";
import { Selectuser } from "../state/authSlice";
import { useSelector } from "react-redux";
import { selectShipment, clearShipmentData } from "../state/shipmentDataSlice";
import { clearShipmentItemAdded } from "../state/shipmentDataItemSlice";

const Logout = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector(Selectuser);
  const myshipment = useSelector(selectShipment);

  const handleLogoutBtn = () => {
    try {
      dispatch(setLogout());
      navigate("/");
      console.log("User logged out succesfully");
    } catch (e) {
      console.log(e);
    }
  };

  const generateRandomString = () => {
    const randomString = nanoid(10).toUpperCase(); // 10-character alphanumeric string
    console.log(randomString);
  };

  const checkAuth = (e) => {
    e.preventDefault();
    setUser(auth);
    console.log(auth._id);
    console.log(user);
  };

  const checkReduxState = () => {
    console.log(myshipment);
    console.log(JSON.stringify(myshipment, null, 2));
    dispatch(clearShipmentData());
    dispatch(clearShipmentItemAdded());
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className='logout-div'>
        <button className='logout-btn' onClick={handleLogoutBtn}>
          LogOut
        </button>

        <button className='logout-btn' onClick={generateRandomString}>
          Generate
        </button>
        <button className='logout-btn' onClick={checkAuth}>
          Check Auth
        </button>
        <button className='logout-btn' onClick={checkReduxState}>
          check redux state
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Logout;
