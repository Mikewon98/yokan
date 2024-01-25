import React from "react";
import { Link } from "react-router-dom";
import "./ApplyForJob.css";

const ApplyForJob = () => {
  return (
    <div className='partner-job'>
      <div>
        <p className='partner-job-text'>Want to join the team?</p>
        <p>Hurry up and contact us!</p>
      </div>
      <Link to='/contactUs'>
        <button className='partner-btn'>Contact us</button>
      </Link>
    </div>
  );
};

export default ApplyForJob;
