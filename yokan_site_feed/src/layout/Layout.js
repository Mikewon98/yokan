import React from "react";
import Router from "../routes/Routes";
import SideBar from "../sidebar/SideBar";
import TopNav from "../topNav/TopNav";
import { useSelector } from "react-redux";
import { SelectFeeder } from "../state/feedAuthSlice";
import { SelectAdmin } from "../state/adminAuthSlice";

const Layout = () => {
  const isFeederOnline = useSelector(SelectFeeder);
  const isAdminOnline = useSelector(SelectAdmin);

  return (
    <>
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
        <Router />
      )}
      ;
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
