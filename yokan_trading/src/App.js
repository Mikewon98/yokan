import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import TrackShipment from "./pages/TrackShipment";
import TrackByMobile from "./pages/TrackByMobile";
import CustomerSuport from "./pages/CustomerSupport";
import AboutUs from "./pages/AboutUs";
import Partners from "./pages/Partners";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import AddShipment from "./pages/AddShipment";
import Logout from "./pages/Logout";
import ShipWhat from "./pages/ShipWhat";
import ShipPayment from "./pages/ShipPayment";
import { Selectuser } from "./state/authSlice";
import NavBar from "./components/navbar/Navbar";

function App() {
  const isAuth = useSelector(Selectuser);
  console.log(isAuth);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trackShipment' element={<TrackShipment />} />
        <Route path='/trackByMobile' element={<TrackByMobile />} />
        <Route path='/customerSuport' element={<CustomerSuport />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/partner' element={<Partners />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/shipwhat' element={<ShipWhat />} />
        <Route path='/createshipment' element={<AddShipment />} />
        <Route path='/shippayment' element={<ShipPayment />} />
        <Route
          path='/addshipment'
          element={isAuth ? <AddShipment /> : <LogIn />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
