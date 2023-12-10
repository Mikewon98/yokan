import React from "react";
import AboutUsImg from "../../assets/company-profile.jpeg";
import "./AboutUsDescription.css";

const AboutUsDescription = () => {
  return (
    <div className='aboutus-description'>
      <h1>Yokan Automated Tracking System</h1>
      <div className='aboutus-description-container-first'>
        <div className='aboutus-description-text'>
          <h2>Company Profile</h2>
          <p>
            Yokan Trading PLC is a reputable and forward thinking transit and
            forwarding company in Ethiopia. We have in-depth knowledge of
            international trade and banking, custom procedure and facilitation,
            custom valuation, freight forwarding and maritime law. The company
            clears goods from the port of Djibouti through the Addis Ababa
            customs office and other customs branch offices, as well as for
            goods originating from Ethiopia to various countries. With strong
            commitment to ethical business practice, safety and compliance,
            speed & efficiency, convenience and confidentiality, we are
            dedicated to contributing to the growth of the logistic sector in
            Ethiopian and also fostering global trade relationships.
          </p>
        </div>
        <div className='image'>
          <img alt='Mountain' src={AboutUsImg} />
        </div>
      </div>
      <div className='aboutus-description-container-second'>
        <h1>Yokan Delivery Steps</h1>
        <p>
          Though the steps may vary depending on the specific services chosen
          and the destination of the shipment, the steps for Yokan delivery
          typically include:
        </p>
        <div>
          <p className='aboutus-description-container-second-text'>
            Pickup Request:
          </p>
          <p>
            The sender schedules a pickup or drops off the package at a nearby
            Yokan service point.
          </p>
        </div>
        <div>
          <p className='aboutus-description-container-second-text'>
            Shipment Processing:
          </p>
          <p>
            Yokan processes the shipment, which involves verifying addresses,
            preparing customs documents for international shipments, and more.
          </p>
        </div>
        <div>
          <p className='aboutus-description-container-second-text'>
            Packaging:
          </p>
          <p>
            The shipment is appropriately packaged to ensure it's secure during
            transportation.
          </p>
        </div>
        <div>
          <p className='aboutus-description-container-second-text'>
            Transportation:
          </p>
          <p>
            Yokan transports the package to the nearest distribution center or
            hub.
          </p>
        </div>
        <div>
          <p className='aboutus-description-container-second-text'>Sorting:</p>
          <p>Packages are sorted based on their destination.</p>
        </div>
        <div>
          <p className='aboutus-description-container-second-text'>
            International Customs:
          </p>
          <p>For international shipments, customs clearance is completed.</p>
        </div>
        <div>
          <p className='aboutus-description-container-second-text'>
            Local Delivery:
          </p>
          <p>
            The package is transported to a local Yokan service point or for the
            final delivery.
          </p>
        </div>
        <div>
          <p className='aboutus-description-container-second-text'>Delivery:</p>
          <p>The package is delivered to the recipient.</p>
        </div>
        <div>
          <p className='aboutus-description-container-second-text'>
            Proof of Delivery:
          </p>
          <p>The recipient signs for the package as proof of delivery.</p>
        </div>
        <div>
          <p className='aboutus-description-container-second-text'>Tracking:</p>
          <p>Senders and recipients can track the package's status online.</p>
        </div>
        <div>
          <p className='aboutus-description-container-second-text'>
            Delivery Confirmation:
          </p>
          <p>The sender and recipient receive a delivery confirmation.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDescription;
