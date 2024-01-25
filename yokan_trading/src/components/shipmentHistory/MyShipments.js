import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { Selectuser } from "../../state/authSlice";
import "./MyShipments.css";

const MyShipments = () => {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(false);
  const auth = useSelector(Selectuser);
  const id = auth._id;

  console.log(id);

  useEffect(() => {
    const getShipment = async () => {
      try {
        setLoading(true);

        const shipmentResponse = await axios.get(
          `http://localhost:3001/shipment/viewShipment/${id}`
        );

        const shipmentObject = shipmentResponse.data;
        const shipment = shipmentObject["shipments"];
        console.log(shipment);
        setShipments(shipment);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };

    getShipment();
  }, [id]);

  const HistoryComponent = ({
    trackingNumber,
    price,
    originCountry,
    originCity,
    senderFullName,
    senderPhoneNumber,
    destinationCountry,
    destinationCity,
    reciverFullName,
    reciverPhoneNumber,
  }) => {
    return (
      <div className='myshipments-div'>
        <div className='myshipments-sub-div'>
          <div className='myshipments-div-header'>
            <p>Tracking Number: </p>
            <p className='myshipments-div-header-p'>{trackingNumber}</p>
          </div>
          <hr />
          <div className='myshipments-div-sub-header'>
            <p>
              Shipment Price: <strong>{price}</strong> birr
            </p>
          </div>
          <div className='myshipments-contents-div'>
            <div className='myshipments-div-contents-sender'>
              <div className='myshipments-div-contents-text'>
                <p className='myshipments-div-contents-text-p'>
                  Origin Country:{" "}
                </p>
                <p> {originCountry}</p>
              </div>
              <div className='myshipments-div-contents-text'>
                <p className='myshipments-div-contents-text-p'>Origin City:</p>
                <p> {originCity}</p>
              </div>
              <div className='myshipments-div-contents-text'>
                <p className='myshipments-div-contents-text-p'>
                  Sender fullname:{" "}
                </p>
                <p> {senderFullName}</p>
              </div>
              <div className='myshipments-div-contents-text'>
                <p className='myshipments-div-contents-text-p'>
                  Sender po.Number:
                </p>
                <p> +{senderPhoneNumber}</p>
              </div>
            </div>
            <div className='myshipments-div-contents-reciver'>
              <div className='myshipments-div-contents-text'>
                <p className='myshipments-div-contents-text-p'>
                  Origin Country:{" "}
                </p>
                <p> {destinationCountry}</p>
              </div>
              <div className='myshipments-div-contents-text'>
                <p className='myshipments-div-contents-text-p'>Origin City: </p>
                <p> {destinationCity}</p>
              </div>
              <div className='myshipments-div-contents-text'>
                <p className='myshipments-div-contents-text-p'>
                  Sender fullname:
                </p>
                <p> {reciverFullName}</p>
              </div>
              <div className='myshipments-div-contents-text'>
                <p className='myshipments-div-contents-text-p'>
                  Sender po.Number:{" "}
                </p>
                <p> +{reciverPhoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='myshipments-main-div'>
      {shipments.length !== 0 ? (
        <h1>Total Shipments: {shipments.length ?? 0}</h1>
      ) : null}

      {shipments.length === 0 ? (
        <div className='myshipment-no-shipment'>
          <p className='myshipment-no-shipment-text'>No shipment history</p>
        </div>
      ) : (
        shipments.map((shipment) => (
          <HistoryComponent
            key={shipment._id}
            price={shipment.price}
            trackingNumber={shipment.trackingNumber}
            originCountry={shipment.originCountry}
            originCity={shipment.originCity}
            senderFullName={shipment.senderFullName}
            senderPhoneNumber={shipment.senderPhoneNumber}
            destinationCountry={shipment.destinationCountry}
            destinationCity={shipment.destinationCity}
            reciverFullName={shipment.reciverFullName}
            reciverPhoneNumber={shipment.reciverPhoneNumber}
          />
        ))
      )}
      {loading && (
        <div className='loading-spin'>
          <Spin size='large' />
        </div>
      )}
    </div>
  );
};

export default MyShipments;
