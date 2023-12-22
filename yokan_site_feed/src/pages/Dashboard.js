import React from "react";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard-container'>
        <div className='dashboard-card'>
          <i className='fa-solid fa-ship'></i>
          <p>Shipments</p>
        </div>
        <div className='dashboard-card'>
          <i className='fa-solid fa-user'></i>
          <p>Users</p>
        </div>
        <div className='dashboard-card'>
          <i className='fa-solid fa-pen-nib'></i>
          <p>Update</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
