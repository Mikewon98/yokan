import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, BrowserRouter } from "react-router-dom";
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
import {
  Selectuser,
  setLogout,
  SelectTokenExpiration,
} from "./state/authSlice";
import { clearShipmentData } from "./state/shipmentDataSlice";
import { clearShipmentItemAdded } from "./state/shipmentDataItemSlice";
import NavBar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToUp";
import Success from "./pages/Success";
import ShipmentHistory from "./pages/ShipmentHistory";
import NoPageFound from "./pages/NoPageFound";
import PrivacyPolicyComponent from "./components/policies/PrivacyPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const dispatch = useDispatch();
  const tokenExpiration = useSelector(SelectTokenExpiration);
  const isAuth = useSelector(Selectuser);
  console.log(isAuth);

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (tokenExpiration && Date.now() > tokenExpiration) {
        // Token has expired, log the user out
        dispatch(setLogout());
        dispatch(clearShipmentData());
        dispatch(clearShipmentItemAdded());
      }
    };

    // Check token expiration every minute (adjust as needed)
    const intervalId = setInterval(checkTokenExpiration, 60 * 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [dispatch, tokenExpiration]);

  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trackShipment' element={<TrackShipment />} />
        <Route path='/trackByMobile' element={<TrackByMobile />} />
        <Route path='/customerSuport' element={<CustomerSuport />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/partner' element={<Partners />} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/payment-success' element={<Success />} />
        <Route path='/shipwhat' element={isAuth ? <ShipWhat /> : <LogIn />} />
        <Route
          path='/shippayment'
          element={isAuth ? <ShipPayment /> : <LogIn />}
        />
        <Route
          path='/shipmentHistory'
          element={isAuth ? <ShipmentHistory /> : <LogIn />}
        />
        <Route
          path='/createshipment'
          element={isAuth ? <AddShipment /> : <LogIn />}
        />
        <Route path='*' element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
