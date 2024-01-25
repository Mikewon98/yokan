import React, { useEffect } from "react";
import Router from "../routes/Routes";
import SideBar from "../sidebar/SideBar";
import TopNav from "../topNav/TopNav";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  SelectFeeder,
  SelectFeederTokenExpiration,
  logoutFeeder,
} from "../state/feedAuthSlice";
import {
  SelectAdmin,
  SelectAdminTokenExpiration,
  logoutAdmin,
} from "../state/adminAuthSlice";
import FeederLoginPage from "../pages/auth/FeederLoginPage";
import AdminLoginPage from "../pages/auth/AdminLoginPage";

const Layout = () => {
  const dispatch = useDispatch();
  const isFeederOnline = useSelector(SelectFeeder);
  const isAdminOnline = useSelector(SelectAdmin);
  const TokenFeederExpiration = useSelector(SelectFeederTokenExpiration);
  const TokenAdminExpiration = useSelector(SelectAdminTokenExpiration);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isFeederOnline && !isAdminOnline) {
      navigate("/");
    }
    let intervalId; // Declare intervalId variable outside the condition

    if (isAdminOnline) {
      const checkAdminTokenExpiration = () => {
        if (TokenAdminExpiration && Date.now() > TokenAdminExpiration) {
          // Token has expired, log the user out
          dispatch(logoutAdmin());
        }
      };

      // Check token expiration every minute (adjust as needed)
      intervalId = setInterval(checkAdminTokenExpiration, 60 * 1000);
    } else {
      const checkFeederTokenExpiration = () => {
        if (TokenFeederExpiration && Date.now() > TokenFeederExpiration) {
          // Token has expired, log the user out
          dispatch(logoutFeeder());
        }
      };

      // Check token expiration every minute (adjust as needed)
      intervalId = setInterval(checkFeederTokenExpiration, 60 * 1000);
    }

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [
    dispatch,
    isFeederOnline,
    isAdminOnline,
    TokenFeederExpiration,
    TokenAdminExpiration,
    navigate,
  ]);

  return (
    <>
      {/* {isFeederOnline || isAdminOnline ? (
        <div className='layout'>
          <SideBar />
          <div className='main__layout'>
            <TopNav />
            <div className='content'>
              <Router />
            </div>
          </div>
        </div>
      ) : (
        <Router />
      )} */}

      {isFeederOnline || isAdminOnline ? (
        <div className='layout'>
          <SideBar />
          <div className='main__layout'>
            <TopNav />
            <div className='content'>
              <Router />
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<FeederLoginPage />} />
          <Route path='/admin' element={<AdminLoginPage />} />
        </Routes>
      )}
      {/*   */}
    </>
  );

  //   <div className='layout'>
  //     <SideBar />
  //     <div className='main__layout'>
  //       <TopNav />
  //       <div className='content'>
  //         <Router />
  //       </div>
  //     </div>
  //   </div>
};

export default Layout;
