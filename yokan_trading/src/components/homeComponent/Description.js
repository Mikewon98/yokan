import React from "react";
import "./Description.css";
import DescCard from "../DescCard";
import DescImg1 from "../../assets/customer-support.jpg";
import DescImg2 from "../../assets/plane-flight.jpg";
import DescImg3 from "../../assets/services.jpg";

const Description = () => {
  return (
    <>
      <div className='description'>
        <h2 className='description-heading'>
          When you and your customers need it most
        </h2>
        <p className='description-text'>
          Global efforts to stop the spread of COVID-19 have changed the
          world—and the way you do business—overnight. We’re here to help your
          business deliver when you and your customers need it most.{" "}
        </p>
        <div className='desc-card'>
          <DescCard
            image={DescImg1}
            heading='Customs Made Easier'
            text='Learn about all the tools Yokan Trading has to offer for shipping across borders. Prepare and find international documents, estimate duties and taxes, search country profiles, harmonized codes and much more.'
          />
          <DescCard
            image={DescImg2}
            heading='Create an account'
            text=' Benefit from our services and solutions designed to meet all of your shipping needs. Sign up for a new shipping account below. '
          />
          <DescCard
            image={DescImg3}
            heading='Get the best from our Service'
            text='Subscribe and get the best quality service guiding you every and each step. Recieve sms and email notification along every step '
          />
        </div>
      </div>
    </>
  );
};

export default Description;
