import React from "react";
import Button from "./navbar/Button";
import "./ApplyForJob.css";

const ApplyForJob = () => {
  return (
    <div className='partner-job'>
      <div>
        <p className='partner-job-text'>Want to join the team?</p>
        <p>Send us your CV and best cover letter</p>
      </div>
      <Button path='/contactUs' text='Apply for a Job' />
    </div>
  );
};

export default ApplyForJob;
