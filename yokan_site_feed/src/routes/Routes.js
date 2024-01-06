import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FeederLoginPage from "../pages/auth/FeederLoginPage";
import AdminLoginPage from "../pages/auth/AdminLoginPage";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import UpdateStatus from "../pages/UpdateStatus";
import AllShipment from "../pages/AllShipment";
import CreateShipment from "../pages/CreateShipment";
import AddFeeder from "../pages/AddFeeder";
import AddUser from "../pages/AddUser";
import ViewUsers from "../pages/ViewUsers";
import AddAdmin from "../pages/AddAdmin";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<FeederLoginPage />} />
        <Route path='/viewUsers' element={<ViewUsers />} />
        <Route path='/admin' element={<AdminLoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/addFeeder' element={<AddFeeder />} />
        <Route path='/addAdmin' element={<AddAdmin />} />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/updateStatus' element={<UpdateStatus />} />
        <Route path='/createShipment' element={<CreateShipment />} />
        <Route path='/allShipment' element={<AllShipment />} />
      </Routes>
    </>
  );
};

export default Router;
