import React from "react";

const DescCard = (props) => {
  return (
    <div className='d-card'>
      <div className='d-image'>
        <img alt='Trip pic' src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default DescCard;
