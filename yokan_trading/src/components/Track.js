import React, { useState } from "react";
import axios from "axios";
import "./Track.css";

const Track = () => {
  const [trackNumber, setTrackNumber] = useState("");
  const [shipmentData, setShipmentData] = useState({});
  const [shipmentItem, setShipmentItem] = useState({});
  const [responseShipmentData, setResponseShipmentData] = useState(false);
  const [responseShipmentItem, setResponseShipmentItem] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const getShipmentData = async () => {
    try {
      const shipmentDataResponse = await axios.get(
        `http://localhost:3001/shipmentData/getShipmentData/${trackNumber}`
      );

      const shipmentDataObject = shipmentDataResponse.data;
      const shipmentData = shipmentDataObject["shipments"];
      setShipmentData(shipmentData);
      if (shipmentDataResponse.status === 200) {
        setResponseShipmentData(true);
      } else {
        setResponseShipmentData(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getShipmentItem = async () => {
    try {
      const shipmentItemResponse = await axios.get(
        `http://localhost:3001/shipmentDataItem/getShipmentDataItem/${trackNumber}`
      );

      if (shipmentItemResponse.status === 200) {
        setResponseShipmentItem(true);
      } else {
        setResponseShipmentItem(false);
      }

      const shipmentItemObject = shipmentItemResponse.data;
      const shipmentItem = shipmentItemObject["shipments"];
      setShipmentItem(shipmentItem);
    } catch (e) {
      console.log(e);
    }
  };

  const ShipmentTable = () => {
    if (buttonClicked) {
      if (responseShipmentData && responseShipmentItem) {
        return (
          <table className='shipment-table'>
            <tbody>
              <tr className='shipment-table-row colored'>
                <td>Tracking Number</td>
                <td className='shipment-table-td'>
                  <span>{shipmentData.trackingNumber}</span>
                </td>
              </tr>
              <tr className='shipment-table-row'>
                <td>From</td>
                <td className='shipment-table-td'>
                  <span>{shipmentData.originAddress}</span>
                </td>
              </tr>
              <tr className='shipment-table-row'>
                <td>Origin</td>
                <td className='shipment-table-td'>
                  <span>{shipmentData.originCountry}</span>
                </td>
              </tr>
              <tr className='shipment-table-row colored'>
                <td>To</td>
                <td className='shipment-table-td'>
                  <span>{shipmentData.destinationAddress}</span>
                </td>
              </tr>
              <tr className='shipment-table-row colored'>
                <td>Destination</td>
                <td className='shipment-table-td'>
                  <span>{shipmentData.destinationCountry}</span>
                </td>
              </tr>
              <tr className='shipment-table-row'>
                <td>Sender fullname</td>
                <td className='shipment-table-td'>
                  <span>{shipmentData.originFullName}</span>
                </td>
              </tr>
              <tr className='shipment-table-row colored'>
                <td>Reciver fullname </td>
                <td className='shipment-table-td'>
                  <span>{shipmentData.destinationFullName}</span>
                </td>
              </tr>
              <tr className='shipment-table-row colored'>
                <td>Package Type </td>
                <td className='shipment-table-td'>
                  <span>{shipmentItem.packageType}</span>
                </td>
              </tr>
              <tr className='shipment-table-row colored'>
                <td>Height </td>
                <td className='shipment-table-td'>
                  <span>{shipmentItem.height}</span>
                </td>
              </tr>
              <tr className='shipment-table-row colored'>
                <td>Weight </td>
                <td className='shipment-table-td'>
                  <span>{shipmentItem.weight}</span>
                </td>
              </tr>
            </tbody>
          </table>
        );
      } else {
        // If status is not 200, render a message or placeholder
        return <p>No data available</p>;
      }
    }
  };

  const handleClick = () => {
    getShipmentData();
    getShipmentItem();
    setButtonClicked(true);
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
      <div className='tracking-display'>
        <div className='display-tile'>
          <ShipmentTable />
        </div>
      </div>
    </div>
  );
};

export default Track;
