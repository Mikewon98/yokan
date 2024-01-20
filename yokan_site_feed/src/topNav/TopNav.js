import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SelectFeeder } from "../state/feedAuthSlice";
import { SelectAdmin } from "../state/adminAuthSlice";
import "./TopNav.css";

const TopNav = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const isFeedOnline = useSelector(SelectFeeder);
  const isAdminOnline = useSelector(SelectAdmin);

  const user = isFeedOnline ? isFeedOnline : isAdminOnline;

  const auth = isFeedOnline ? "Staff" : "Admin";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 30 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className='top__nav'>
      {/* <div className='top__nav__wrapper'>
        <p className='top__nav__heading'>{auth}: </p>
        <p className='top__nav__heading'>
          {user.firstName ?? ""} {user.lastName ?? ""}
        </p>
      </div>
      <div className='top__nav__wrapper'>
        <p className='top__nav__heading'>
          {currentDate.toLocaleString("en-US", options)}
        </p>
      </div> */}

      <div className='top__nav__wrapper'>
        <div className='top__nav__wrapper__column'>
          <div className='top__nav__wrapper__text'>
            <h2 className='top__nav__heading'>{auth}: </h2>
            <h2 className='top__nav__heading'>
              {user.firstName ?? ""} {user.lastName ?? ""}
            </h2>
          </div>
          <div>
            <h2 className='top__nav__heading'>
              {currentDate.toLocaleString("en-US", options)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
