import React from "react";
import { useSelector } from "react-redux";
import { SelectFeeder } from "../state/feedAuthSlice";
import { SelectAdmin } from "../state/adminAuthSlice";

import "./TopNav.css";

const TopNav = () => {
  const isFeedOnline = useSelector(SelectFeeder);
  const isAdminOnline = useSelector(SelectAdmin);

  const user = isFeedOnline ? isFeedOnline : isAdminOnline;

  const auth = isFeedOnline ? "Staff" : "Admin";

  return (
    <div className='top__nav'>
      <div className='top__nav__wrapper'>
        <h2 className='top__nav__heading'>
          {user.firstName ?? ""} {user.lastName ?? ""}
        </h2>
        <h2 className='top__nav__heading'>{auth}</h2>
      </div>
    </div>
  );
};

export default TopNav;
