import React from "react";
import Button from "./navbar/Button";
import "./ApplyForJob.css";

const ApplyForJob = () => {
  return (
    <div className='partner-job'>
      <div>
        <p className='partner-job-text'>Want to join the team?</p>
        <p>Hurry up and contact us!</p>
      </div>
      <Button path='/contactUs' text='Contact us' />
    </div>
  );
};

export default ApplyForJob;
