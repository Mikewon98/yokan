import React, { useState } from "react";
import axios from "axios";
import { Steps } from "antd";
import "./Track.css";

const api = axios.create({
  baseURL: "http://localhost:3001", // Replace with your API base URL
});

api.interceptors.request.use(
  (config) => {
    // Check for network connectivity before making a request
    if (navigator.onLine) {
      return config;
    } else {
      // Handle offline mode (e.g., show a message to the user)
      // You can also throw an error to stop the request
      console.log("You are currently offline.");
      // For example, you can throw an error:
      // return Promise.reject(new Error('Network Error: You are offline.'));
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Track = () => {
  const [trackNumber, setTrackNumber] = useState("");
  const [shipment, setShipment] = useState({});
  const [responseShipment, setResponseShipment] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [responseStatus, setResponseStatus] = useState({});

  const getShipment = async () => {
    try {
      const shipmentResponse = await axios.get(
        `http://localhost:3001/shipment/getShipment/${trackNumber}`
      );

      setResponseStatus(shipmentResponse.status);
      console.log(shipmentResponse.status);
      if (shipmentResponse.status === 200) {
        setResponseShipment(true);
      } else {
        setResponseShipment(false);
      }

      const shipmentObject = shipmentResponse.data;
      const shipment = shipmentObject["shipments"];
      console.log(shipment);
      setShipment(shipment);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(responseStatus);
  // console.log(shipment.length);

  const handleClick = () => {
    getShipment();
    setButtonClicked(true);
  };

  const TrackData = () => {
    let current = 0;

    if (shipment.status === "pickUp") {
      current = 0;
    } else if (shipment.status === "DocumentProcessing") {
      current = 1;
    } else if (shipment.status === "ShipmentProcessing") {
      current = 2;
    } else if (shipment.status === "InTransit") {
      current = 3;
    } else if (shipment.status === "Delivered") {
      current = 4;
    } else if (shipment.status === "Finished") {
      current = 5;
    } else {
      current = 6;
    }

    if (buttonClicked) {
      if (responseShipment) {
        return (
          <div className='tracking-display'>
            <div className='track-data'>
              <div className='steps-div'>
                <Steps
                  direction='vertical'
                  current={current}
                  responsive='true'
                  status='process'
                  items={[
                    {
                      title: "Pick Up",
                      description:
                        "Your pick up request has been requested successfully",
                    },
                    {
                      title: "Document Processing",
                      description:
                        "verifying your addresses and preparing customs documents for shipments",
                    },
                    {
                      title: "Shipment Processing",
                      description: "Sorting and packaging your shipment ",
                    },
                    {
                      title: "In Transit",
                      description: "Your package has reached its destination",
                    },
                    {
                      title: "Delivered",
                      description: "Your Packaged has been delivered",
                    },
                  ]}
                />
              </div>
              <table className='shipment-table'>
                <tbody>
                  <tr className='shipment-table-row colored'>
                    <td>Tracking Number</td>
                    <td className='shipment-table-td'>
                      <span>{shipment.trackingNumber}</span>
                    </td>
                  </tr>
                  <tr className='shipment-table-row'>
                    <td>From</td>
                    <td className='shipment-table-td'>
                      <span>{shipment.senderAddress}</span>
                    </td>
                  </tr>
                  <tr className='shipment-table-row colored'>
                    <td>To</td>
                    <td className='shipment-table-td'>
                      <span>{shipment.reciverAddress}</span>
                    </td>
                  </tr>

                  <tr className='shipment-table-row'>
                    <td>Origin</td>
                    <td className='shipment-table-td'>
                      <span>{shipment.originCountry}</span>
                    </td>
                  </tr>

                  <tr className='shipment-table-row colored'>
                    <td>Destination</td>
                    <td className='shipment-table-td'>
                      <span>{shipment.destinationCountry}</span>
                    </td>
                  </tr>
                  <tr className='shipment-table-row colored'>
                    <td>Weight </td>
                    <td className='shipment-table-td'>
                      <span>{shipment.shipmentWidth}</span>
                    </td>
                  </tr>

                  <tr className='shipment-table-row'>
                    <td>Sender fullname</td>
                    <td className='shipment-table-td'>
                      <span>{shipment.senderFullName}</span>
                    </td>
                  </tr>
                  <tr className='shipment-table-row colored'>
                    <td>Reciver fullname </td>
                    <td className='shipment-table-td'>
                      <span>{shipment.reciverFullName}</span>
                    </td>
                  </tr>
                  <tr className='shipment-table-row colored'>
                    <td>Package Type </td>
                    <td className='shipment-table-td'>
                      <span>{shipment.shipmentType}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      } else {
        <p>Please enter the correct Tracking number</p>;
      }
    }
  };

  const NotificationComponent = () => {
    return (
      <div className='notificationContainer'>
        <div className='notificationBox'>
          <i className='fas fa-question-circle'></i>
          <p className='message '>Please enter correct Tracking number</p>
        </div>
      </div>
    );
  };

  return (
    <div className='track'>
      <div className='main-container'>
        <div className='track-container'>
          <p className='track-heading'>
            <i className='fa-solid fa-magnifying-glass'></i>Track
          </p>
          <div className='sub-container'>
            <p>Enter tracking number down below</p>
            <div>
              <a href='/'>Help</a>
              <i className='fa-regular fa-circle-question'></i>
            </div>
          </div>
          <input
            value={trackNumber}
            onChange={(e) => setTrackNumber(e.target.value)}
            className='input-track'
          />
          <p className='sub-container-sub-text'>
            <a href='/'>Verify your payment account</a> information for full
            tracking details.
          </p>
          <div className='track-btn' onClick={handleClick}>
            Track <i className='fa-solid fa-chevron-right' />
          </div>
        </div>
      </div>
      {responseShipment ? (
        <TrackData />
      ) : buttonClicked ? (
        <NotificationComponent />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Track;
