import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SelectFeeder } from "../state/feedAuthSlice";
import { SelectAdmin } from "../state/adminAuthSlice";
import axios from "axios";
import { Spin } from "antd";
import "../styles/updateStatus.css";

const UpdateStatus = () => {
  const [trackNumber, setTrackNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shipment, setShipment] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("myPackage");

  const isFeedOnline = useSelector(SelectFeeder);
  const isAdminOnline = useSelector(SelectAdmin);

  const user = isFeedOnline ? isFeedOnline : isAdminOnline;

  const getShipment = async () => {
    try {
      setError(null);
      setFetchLoading(true);

      const shipmentResponse = await axios.get(
        `http://localhost:3001/shipment/getShipment/${trackNumber}`
      );

      const shipmentObject = shipmentResponse.data;
      const shipment = shipmentObject["shipments"];
      console.log(shipment);
      setShipment(shipment);
      setFetchLoading(false);
    } catch (e) {
      console.log(e);
      setFetchLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  const updateShipment = async () => {
    try {
      setError(null);
      setLoading(true);

      if (!trackNumber) {
        throw new Error("Please provide a valid tracking number.");
      }

      const currentDate = new Date(); // Create a new Date object

      switch (selectedStatus) {
        case "pickUp":
          await axios.patch(
            `http://localhost:3001/shipment/updateShipment/${trackNumber}`,
            {
              status: selectedStatus,
              pickUpUpdatedBy: user.firstName,
              pickUpLastUpdate: currentDate,
            }
          );
          break;
        case "Document Processing":
          await axios.patch(
            `http://localhost:3001/shipment/updateShipment/${trackNumber}`,
            {
              status: selectedStatus,
              documentProcessingUpdatedBy: user.firstName,
              documentProcessingLastUpdate: currentDate,
            }
          );
          break;
        case "Shipment Processing":
          await axios.patch(
            `http://localhost:3001/shipment/updateShipment/${trackNumber}`,
            {
              status: selectedStatus,
              shipmentProcessingUpdatedBy: user.firstName,
              shipmentProcessingLastUpdate: currentDate,
            }
          );
          break;
        case "InTransit":
          await axios.patch(
            `http://localhost:3001/shipment/updateShipment/${trackNumber}`,
            {
              status: selectedStatus,
              intransitUpdatedBy: user.firstName,
              intransitLastUpdate: currentDate,
            }
          );
          break;
        case "Local Delivery":
          await axios.patch(
            `http://localhost:3001/shipment/updateShipment/${trackNumber}`,
            {
              status: selectedStatus,
              localDeliveryUpdatedBy: user.firstName,
              localDeliveryLastUpdate: currentDate,
            }
          );
          break;
        case "Delivered":
          await axios.patch(
            `http://localhost:3001/shipment/updateShipment/${trackNumber}`,
            {
              status: selectedStatus,
              deliveryUpdatedBy: user.firstName,
              deliveryLastUpdate: currentDate,
            }
          );
          break;
        case "Finished":
          await axios.patch(
            `http://localhost:3001/shipment/updateShipment/${trackNumber}`,
            {
              status: selectedStatus,
              finishedUpdatedBy: user.firstName,
              finishedLastUpdate: currentDate,
            }
          );
          break;

        default:
          setError("An error occurred. Please try again.");
          break;
      }

      // await axios.patch(
      //   `http://localhost:3001/shipment/updateShipment/${trackNumber}`,
      //   { status: selectedStatus }
      // );

      getShipment();
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  const handleCancel = () => {
    setShipment({});
    setTrackNumber("");
  };

  const TrackDataDisplay = () => {
    if (!Object.keys(shipment).length) {
      return (
        <div className='TrackDataDisplay-no-shipment-display'>
          No shipment data available.
        </div>
      );
    }

    return (
      <table className='TrackDataDisplay-table'>
        <tbody>
          <tr className='TrackDataDisplay-table-row'>
            <td>Tracking Number</td>
            <td>Sender fullname</td>
            <td>Sender Address</td>
            <td>Origin Country</td>
            <td>Reciver fullname </td>
            <td>Reciver Address</td>
            <td>Destination Country</td>
            <td>Status </td>
          </tr>
          <tr className='TrackDataDisplay-table-row'>
            <td className='TrackDataDisplay-table-td'>
              <span>{shipment.trackingNumber}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{shipment.senderFullName}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{shipment.senderAddress}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{shipment.originCountry}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{shipment.reciverFullName}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{shipment.reciverAddress}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{shipment.destinationCountry}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{shipment.status}</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
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
    <div className='updateStatus'>
      <div className='updateStatus-container-header'>
        <h3>Update Status</h3>
      </div>
      <div className='updateStatus-search-div'>
        <input
          type='text'
          placeholder='Search here'
          onChange={(e) => setTrackNumber(e.target.value)}
        />
        <button
          className='updateStatus-search-btn'
          onClick={getShipment}
          disabled={!trackNumber}
        >
          Search
        </button>
      </div>

      {fetchLoading ? (
        <div className='loading-spin'>
          <Spin size='large' />
        </div>
      ) : (
        <div>
          <TrackDataDisplay />
        </div>
      )}

      <div className='updateStatus-update-div'>
        <p>Status update</p>
        <div className='updateStatus-select'>
          <select
            name='statusUpdate'
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value='pickUp'>Pick up</option>
            <option value='Document Processing'>Document Processing</option>
            <option value='Shipment Processing'>Shipment Processing</option>
            <option value='InTransit'>InTransit</option>
            <option value='Local Delivery'>Local Delivery</option>
            <option value='Delivered'>Delivered</option>
            <option value='Finished'>Finished</option>
          </select>
          <button
            className='updateStatus-update-btn'
            onClick={updateShipment}
            disabled={Object.keys(shipment).length === 0 ? true : false}
          >
            Update
          </button>
          <button
            className='updateStatus-update-btn-cancel'
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
      {loading && (
        <div className='loading-spin'>
          <Spin size='large' />
        </div>
      )}
      {error && <NotificationComponent />}
    </div>
  );
};

export default UpdateStatus;
