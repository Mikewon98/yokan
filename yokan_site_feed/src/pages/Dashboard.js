import React, { useEffect, useState, useMemo, useRef } from "react";
import ReactToPrint from "react-to-print";
import logo from "../assets/images/Yokan-Crop.png";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constant/constant";
import { DateTime } from "luxon";
import { Spin } from "antd";
import axios from "axios";
import TableComponents from "../components/TableComponents";
// import PrintInvoice from "../components/PrintInvoice";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const componentRef = useRef();

  const [shipmentData, setShipmentData] = useState("");
  const [userData, setUserData] = useState("");
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trackNumber, setTrackNumber] = useState("");
  const [error, setError] = useState(null);
  const [shipmentLoading, setShipmentLoading] = useState(false);
  const [shipment, setShipment] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/auth/getUser`);
        const fetchedDatas = response.data.user;
        setDatas(fetchedDatas);
        setLoading(false);
        console.log("Data:", fetchedDatas);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error.message);
      }
    };

    const fetchShipmentData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/shipment/getAllShipment`);
        const fetchedDatas = response.data.shipments.length;
        setShipmentData(fetchedDatas);
        setLoading(false);
        console.log("Data:", fetchedDatas);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error.message);
      }
    };

    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/auth/getUser`);
        const fetchedDatas = response.data.user.length;
        setUserData(fetchedDatas);
        setLoading(false);
        console.log("Data:", fetchedDatas);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error.message);
      }
    };

    fetchShipmentData();

    fetchUserData();

    fetchData();
  }, []);

  const getShipment = async () => {
    try {
      setError(null);
      setShipmentLoading(true);

      const shipmentResponse = await axios.get(
        `http://localhost:3001/shipment/getShipment/${trackNumber}`
      );

      const shipmentObject = shipmentResponse.data;
      const shipment = shipmentObject["shipments"];
      console.log(shipment);
      setShipment(shipment);
      setShipmentLoading(false);
    } catch (e) {
      console.log(e);
      setShipmentLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  const handleCancel = () => {
    setShipment({});
    setTrackNumber("");
  };

  // const data = useMemo(() => datas, [datas]);

  // const columns = [
  //   {
  //     header: "ID",
  //     accessorKey: "_id",
  //     footer: "ID",
  //   },
  //   {
  //     header: "First Name",
  //     accessorKey: "firstName",
  //   },
  //   {
  //     header: "Last Name",
  //     accessorKey: "lastName",
  //   },
  //   {
  //     header: "Email",
  //     accessorKey: "email",
  //   },
  //   {
  //     header: "User Created",
  //     accessorKey: "createdAt",
  //     cell: (info) =>
  //       DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
  //   },
  // ];

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

  const PrintInvoice = () => {
    if (!Object.keys(shipment).length) {
      return (
        <div className='PrintInvoice-no-shipment-display'>
          No shipment data available.
        </div>
      );
    }

    return (
      <main>
        <>
          <ReactToPrint
            trigger={() => (
              <button className='trigger-btn'>Print / Download</button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className='print-invoice-main'>
            <header className='header'>
              <div className='header-img'>
                <img src={logo} alt='Yokan logo' />
              </div>
              <div>
                <h1 className='header-heading'>Yokan Trading P.L.C</h1>
              </div>
            </header>

            <section className='main-detail-section'>
              <h2 className='main-detail-heading'>Invoice</h2>
            </section>

            <section className='clients-detail-section'>
              <p>
                The following is the proof of delivery for tracking number:{" "}
                <span className='footer-print-span'>
                  {shipment.trackingNumber}
                </span>
              </p>
            </section>

            <div className='shiping-detail'>
              <div className='shiping-detail-shiping-div'>
                <div className='shiping-detail-header-div'>
                  <hr />
                  <p className='shiping-detail-header-div-text'>
                    Delivery Information:
                  </p>
                  <hr />
                </div>
                <div className='shiping-detail-div'>
                  <div className='shiping-detail-content'>
                    <div className='shiping-detail-content-div'>
                      <p>Consignor:</p>
                      <p>{shipment.senderFullName}</p>
                    </div>
                    <div className='shiping-detail-content-div'>
                      <p>Shiping Country:</p>
                      <p>{shipment.originCountry}</p>
                    </div>
                    <div className='shiping-detail-content-div'>
                      <p>Shiping Address:</p>
                      <p>{shipment.senderAddress}</p>
                    </div>
                  </div>
                  <div>
                    <div className='shiping-detail-content-div'>
                      <p>Consignee:</p>
                      <p>{shipment.reciverFullName}</p>
                    </div>
                    <div className='shiping-detail-content-div'>
                      <p>Delivery Country:</p>
                      <p>{shipment.destinationCountry}</p>
                    </div>
                    <div className='shiping-detail-content-div'>
                      <p>Delivery address:</p>
                      <p>{shipment.reciverAddress}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='shiping-detail-shiping-div'>
                <div className='shiping-detail-header-div'>
                  <hr />
                  <p className='shiping-detail-header-div-text'>
                    Shiping Information:
                  </p>
                  <hr />
                </div>
                <div className='shiping-detail-div'>
                  <div className='shiping-detail-content'>
                    <div className='shiping-detail-content-div'>
                      <p>Tracking Number:</p>
                      <p> {shipment.trackingNumber}</p>
                    </div>
                    <div className='shiping-detail-content-div'>
                      <p>Status:</p>
                      <p> {shipment.status}</p>
                    </div>
                    <div className='shiping-detail-content-div'>
                      <p>Weight:</p>
                      <p>{shipment.shipmentWeight} kg</p>
                    </div>
                    {/* <div className='shiping-detail-content-div'>
                      <p>Shipment Id:</p>
                      <p> {shipment._id}</p>
                    </div> */}
                  </div>
                  <div>
                    <div className='shiping-detail-content-div'>
                      <p>Shipment date:</p>
                      <p>
                        {DateTime.fromISO(shipment.createdAt).toLocaleString(
                          DateTime.DATE_MED
                        )}
                      </p>
                    </div>
                    <div className='shiping-detail-content-div'>
                      <p>Price:</p>
                      <p>{shipment.price} Birr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className='notes-text'>
              <p className='notes-text'>
                Description :{shipment.shipmentDescription}
              </p>
            </section>

            <footer className='footer-print'>
              <div className='shiping-detail-header-div'>
                <hr />
              </div>
              <ul className='footer-print-ul'>
                <li>
                  <span className='footer-print-span'>Email: </span>
                  yokanTrading@gmail.com
                </li>
                <li>
                  <span className='footer-print-span'>Phone Number:</span>{" "}
                  +251915980830 / +251962174520 / +251921768382
                </li>
                <li>
                  <span className='footer-print-span'>website: </span>
                  <a href='www.yokantrading.com'>www.yokantrading.com</a>
                </li>
              </ul>
            </footer>
          </div>
        </>
      </main>
    );
  };

  return (
    <div className='dashboard'>
      <div className='dashboard-container'>
        <div
          className='dashboard-card'
          onClick={() => navigate("/createShipment")}
        >
          <i className='fa-solid fa-ship'></i>
          <p>Shipments</p>
        </div>
        <div className='dashboard-card' onClick={() => navigate("/addUser")}>
          <i className='fa-solid fa-user'></i>
          <p>Users</p>
        </div>
        <div
          className='dashboard-card'
          onClick={() => navigate("/updateStatus")}
        >
          <i className='fa-solid fa-pen-nib'></i>
          <p>Update</p>
        </div>
      </div>
      <div className='dashboard-container-small'>
        <div
          className='dashboard-card-sub'
          onClick={() => navigate("/allShipment")}
        >
          <p>{shipmentData ?? 0}</p>
          <p className='dashboard-card-sub-text'>Total Shipment</p>
        </div>
        <div
          className='dashboard-card-sub'
          onClick={() => navigate("/viewUsers")}
        >
          <p>{userData ?? 0}</p>
          <p className='dashboard-card-sub-text'>Total Users</p>
        </div>
      </div>

      <div className='dashboard-container-header'>
        <h3>Print shipment</h3>
      </div>

      <div className='dashboard-search-div'>
        <input
          type='text'
          placeholder='Enter tracking number to print'
          onChange={(e) => setTrackNumber(e.target.value)}
        />
        <button
          className='dashboard-search-btn'
          onClick={getShipment}
          disabled={!trackNumber}
        >
          Search
        </button>
        <button
          className='updateStatus-update-btn-cancel'
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>

      {shipmentLoading ? (
        <div className='loading-spin'>
          <Spin size='large' />
        </div>
      ) : (
        <div>
          <PrintInvoice />
        </div>
      )}
      {error && <NotificationComponent />}
    </div>
  );
};

export default Dashboard;
