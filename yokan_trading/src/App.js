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
import NavBar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToUp";
import Success from "./pages/Success";

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
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/payment-success' element={<Success />} />
        <Route path='/shipwhat' element={<ShipWhat />} />
        <Route path='/shippayment' element={<ShipPayment />} />
        <Route
          path='/createshipment'
          element={isAuth ? <AddShipment /> : <LogIn />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
