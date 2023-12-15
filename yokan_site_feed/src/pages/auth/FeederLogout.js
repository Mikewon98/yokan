import React from "react";
import { useDispatch } from "react-redux";
import { logoutFeeder } from "../../state/feedAuthSlice";
import { logoutAdmin } from "../../state/adminAuthSlice";
import { useNavigate } from "react-router-dom";

const FeederLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutFeeder = () => {
    dispatch(logoutFeeder());
    navigate("/");
  };

  const handleLogoutAdmin = () => {
    dispatch(logoutAdmin());
    navigate("/");
  };

  return (
    <>
      <div>
        <button onClick={handleLogoutFeeder}>Logout Feeder</button>
      </div>
      <div>
        <button onClick={handleLogoutAdmin}>Logout Admin</button>
      </div>
    </>
  );
};

export default FeederLogout;
