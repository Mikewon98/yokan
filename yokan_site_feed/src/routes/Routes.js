import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import UpdateStatus from "../pages/UpdateStatus";
import AllShipment from "../pages/AllShipment";
import CreateShipment from "../pages/CreateShipment";
import AddFeeder from "../pages/AddFeeder";
import AddUser from "../pages/AddUser";
import ViewUsers from "../pages/ViewUsers";
import AddAdmin from "../pages/AddAdmin";
import { useSelector } from "react-redux";
import { SelectFeeder } from "../state/feedAuthSlice";
import { SelectAdmin } from "../state/adminAuthSlice";
import Login from "../pages/auth/Login";
import NoPageFound from "../pages/NoPageFound";
import ActiveShipment from "../pages/ActiveShipment";
import CompletedShipment from "../pages/CompletedShipment";
const Router = () => {
  const isFeederOnline = useSelector(SelectFeeder);
  const isAdminOnline = useSelector(SelectAdmin);

  // if (!isFeederOnline && !isAdminOnline) {
  //   return <Navigate to='/' replace />;
  // }

  // if (isFeederOnline == null || !isAdminOnline == null) {
  //   return navigate("/");
  // }

  return (
    <>
      <Routes>
        {/* <Route
          path='/'
          element={
            isFeederOnline || isAdminOnline ? (
              <Dashboard />
            ) : (
              <FeederLoginPage />
            )
          }
        /> */}
        {/* <Route path='/' element={<FeederLoginPage />} /> */}
        <Route path='/' element={<Navigate replace to='/dashboard' />} />
        <Route path='/viewUsers' element={<ViewUsers />} />
        <Route path='/activeShipment' element={<ActiveShipment />} />
        <Route path='/completedShipment' element={<CompletedShipment />} />
        {/* <Route
          path='/admin'
          element={
            isFeederOnline || isAdminOnline ? (
              <Dashboard />
            ) : (
              <FeederLoginPage />
            )
          }
        /> */}
        {/* <Route path='/admin' element={<AdminLoginPage />} /> */}
        <Route path='/admin' element={<Navigate replace to='/dashboard' />} />
        <Route path='/home' element={<HomePage />} />

        <Route
          path='/dashboard'
          element={isFeederOnline || isAdminOnline ? <Dashboard /> : <Login />}
        />

        {/* <Route path='/addFeeder' element={<AddFeeder />} /> */}
        {/* <Route path='/addAdmin' element={<AddAdmin />} /> */}
        {/* <Route path='/settings' element={<Settings />} /> */}
        <Route
          path='/settings'
          element={isAdminOnline ? <Settings /> : <Dashboard />}
        />
        <Route
          path='/addAdmin'
          element={isAdminOnline ? <AddAdmin /> : <Dashboard />}
        />
        <Route
          path='/addFeeder'
          element={isAdminOnline ? <AddFeeder /> : <Dashboard />}
        />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/updateStatus' element={<UpdateStatus />} />
        <Route path='/createShipment' element={<CreateShipment />} />
        <Route path='/allShipment' element={<AllShipment />} />
        <Route path='*' element={<NoPageFound />} />
      </Routes>
    </>
  );
};

export default Router;
