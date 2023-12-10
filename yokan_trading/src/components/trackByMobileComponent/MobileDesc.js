import React from "react";
import DescImg1 from "../../assets/businessman-holding-mobile-phone.jpg";
import DescImg2 from "../../assets/delivery-your-way.png";
import DescImg3 from "../../assets/get-transit-times.jpg";
import DescCard from "../DescCard";

const MobileDesc = () => {
  return (
    <>
      <div className='description'>
        <h2 className='description-heading'>
          No matter where you are, the Yokan Mobile App has your back!
        </h2>
        <div className='desc-card'>
          <DescCard
            image={DescImg1}
            heading='Stay in control. Wherever you are.'
            text='Not always near a computer? No worries. Get tracking alerts, create shipments and more, right from your phone. Anytime, anywhere.'
          />
          <DescCard
            image={DescImg2}
            heading='Your shipments. Your way.'
            text='Get your shipment started wherever you are. It’s fast and easy to create a new shipment in the Yokan Mobile app. '
          />
          <DescCard
            image={DescImg3}
            heading='Get transit times'
            text='Plan ahead while you’re on the move by getting transit times and services availability instantly.'
          />
        </div>
      </div>
    </>
  );
};

export default MobileDesc;
