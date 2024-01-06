import React from "react";
import Router from "../routes/Routes";
import SideBar from "../sidebar/SideBar";
import TopNav from "../topNav/TopNav";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectFeeder } from "../state/feedAuthSlice";
import { SelectAdmin } from "../state/adminAuthSlice";
import FeederLoginPage from "../pages/auth/FeederLoginPage";
import AdminLoginPage from "../pages/auth/AdminLoginPage";

const Layout = () => {
  const isFeederOnline = useSelector(SelectFeeder);
  const isAdminOnline = useSelector(SelectAdmin);

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
