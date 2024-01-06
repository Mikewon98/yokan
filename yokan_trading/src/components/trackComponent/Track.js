import React, { useState } from "react";
import axios from "axios";
import { Steps, Spin } from "antd";
import { useSelector } from "react-redux";
import { Selectuser } from "../../state/authSlice";
import { useNavigate } from "react-router-dom";
import "./Track.css";

const api = axios.create({
  baseURL: "http://localhost:3001", // Replace with your API base URL
});

api.interceptors.request.use(
  (config) => {
    // Check for network connectivity before making a request
    if (navigator.onLine) {
      alert("You are currently online.");
      return config;
    } else {
      // Handle offline mode (e.g., show a message to the user)
      // You can also throw an error to stop the request

      console.log("You are currently offline.");
      alert(
        "You are currently offline. Please check your internet connection."
      );
      // For example, you can throw an error:
      // return Promise.reject(new Error('Network Error: You are offline.'));
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Track = () => {
  const navigate = useNavigate();
  const auth = useSelector(Selectuser);
  const [trackNumber, setTrackNumber] = useState("");
  const [shipment, setShipment] = useState({});
  const [responseShipment, setResponseShipment] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getShipment = async () => {
    try {
      setError(null);
      setLoading(true);

      const shipmentResponse = await axios.get(
        `http://localhost:3001/shipment/getShipment/${trackNumber}`
      );

      setResponseShipment(shipmentResponse.status === 200);

      const shipmentObject = shipmentResponse.data;
      const shipment = shipmentObject["shipments"];
      setShipment(shipment);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setResponseShipment(false);
      setError("An error occurred. Please try again.");
    }
  };

  const handleClick = () => {
    getShipment();
    setButtonClicked(true);
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  const TrackData = () => {
    let current = 0;

    if (shipment.status === "pickUp") {
      current = 0;
    } else if (shipment.status === "Document Processing") {
      current = 1;
    } else if (shipment.status === "Shipment Processing") {
      current = 2;
    } else if (shipment.status === "InTransit") {
      current = 3;
    } else if (shipment.status === "Local Delivery") {
      current = 4;
    } else if (shipment.status === "Delivered") {
      current = 5;
    } else if (shipment.status === "Finished") {
      current = 6;
    } else {
      current = 0;
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
                      title: "Local Delivery",
                      description: "Your Packaged is on Local delivery",
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
          <p className='message '>{error}</p>
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
            {auth ? null : (
              <div className='header-login' onClick={handleClickLogin}>
                <i className='fa-solid fa-lock'></i>
                <p>Login</p>
              </div>
            )}
          </div>
          <input
            value={trackNumber}
            placeholder='Track Number'
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
      {loading && (
        <div className='loading-spin'>
          <Spin size='large' />
        </div>
      )}
      {responseShipment && <TrackData />}

      {error && <NotificationComponent />}
    </div>
  );
};

export default Track;
