import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import mData from "../components/MOCK_DATA.json";
import { BASE_URL } from "../constant/constant";
import { DateTime } from "luxon";
import "../styles/allShipment.css";
import TableComponents from "../components/TableComponents";

const AllShipment = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(`${BASE_URL}/shipment/getAllShipment`);
  //       const fetchedDatas = response.data.shipments;
  //       setDatas(fetchedDatas);
  //       setLoading(false);
  //       console.log("Data:", fetchedDatas);
  //     } catch (error) {
  //       setLoading(false);
  //       console.error("Error fetching data:", error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Name",
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "Date of birth",
      accessorKey: "dob",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
      footer: "Date of birth",
    },
  ];

  const data = useMemo(() => mData, []);

  // const data = useMemo(() => datas, [datas]);

  // const columns = [
  //   {
  //     header: "ID",
  //     accessorKey: "_id",
  //     footer: "ID",
  //   },
  //   {
  //     header: "Name",
  //     accessorKey: "senderFullName",
  //     footer: "First name",
  //   },
  //   {
  //     header: "Email",
  //     accessorKey: "senderEmail",
  //     footer: "Email",
  //   },
  //   {
  //     header: "Tracking Number",
  //     accessorKey: "trackingNumber",
  //     footer: "Tracking Number",
  //   },
  //   {
  //     header: "Shipment Created",
  //     accessorKey: "createdAt",
  //     cell: (info) =>
  //       DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
  //     footer: "Date of birth",
  //   },
  // ];

  return (
    <div className='allShipment'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TableComponents columns={columns} data={data} />
      )}
    </div>
  );
};

export default AllShipment;
