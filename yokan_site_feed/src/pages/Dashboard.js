import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constant/constant";
import { DateTime } from "luxon";
import { Spin } from "antd";
import axios from "axios";
import TableComponents from "../components/TableComponents";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [shipmentData, setShipmentData] = useState("");
  const [userData, setUserData] = useState("");
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const data = useMemo(() => datas, [datas]);

  const columns = [
    {
      header: "ID",
      accessorKey: "_id",
      footer: "ID",
    },
    {
      header: "First Name",
      accessorKey: "firstName",
    },
    {
      header: "Last Name",
      accessorKey: "lastName",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "User Created",
      accessorKey: "createdAt",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
  ];

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
      <div className='viewUsers'>
        {loading ? (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        ) : (
          <TableComponents
            tableClassName={"table-container "}
            columns={columns}
            data={data}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
