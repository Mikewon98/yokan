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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/shipment/getAllShipment`);
        const fetchedDatas = response.data.shipments;
        setDatas(fetchedDatas);
        setLoading(false);
        console.log("Data:", fetchedDatas);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  // const columns = [
  //   {
  //     header: "ID",
  //     accessorKey: "id",
  //     footer: "ID",
  //   },
  //   {
  //     header: "Name",
  //     accessorFn: (row) => `${row.first_name} ${row.last_name}`,
  //   },
  //   {
  //     header: "Email",
  //     accessorKey: "email",
  //     footer: "Email",
  //   },
  //   {
  //     header: "Gender",
  //     accessorKey: "gender",
  //     footer: "Gender",
  //   },
  //   {
  //     header: "Date of birth",
  //     accessorKey: "dob",
  //     cell: (info) =>
  //       DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
  //     footer: "Date of birth",
  //   },
  // ];

  // const data = useMemo(() => mData, []);

  const data = useMemo(() => datas, [datas]);

  const columns = [
    {
      header: "ID",
      accessorKey: "_id",
    },
    {
      header: "Tracking Number",
      accessorKey: "trackingNumber",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Origin Country",
      accessorKey: "originCountry",
    },
    {
      header: "Origin State",
      accessorKey: "originState",
    },
    {
      header: "Origin City",
      accessorKey: "originCity",
    },
    {
      header: "Origin Postal Code",
      accessorKey: "originPostalCode",
    },
    {
      header: "Sender Name",
      accessorKey: "senderFullName",
    },
    {
      header: "Sender Address",
      accessorKey: "senderAddress",
    },
    {
      header: "Sender Address #2",
      accessorKey: "senderAddressTwo",
    },
    {
      header: "Sender Email",
      accessorKey: "senderEmail",
    },
    {
      header: "Sender Phone Number",
      accessorKey: "senderPhoneNumber",
    },
    {
      header: "Destination Country",
      accessorKey: "destinationCountry",
    },
    {
      header: "Destination State",
      accessorKey: "destinationState",
    },
    {
      header: "Destination City",
      accessorKey: "destinationCity",
    },
    {
      header: "Destination Postal Code",
      accessorKey: "destinationPostalCode",
    },
    {
      header: "Reciver Full Name",
      accessorKey: "reciverFullName",
    },
    {
      header: "Reciver Address",
      accessorKey: "reciverAddress",
    },
    {
      header: "Reciver Address #2",
      accessorKey: "reciverAddressTwo",
    },
    {
      header: "Reciver Email",
      accessorKey: "reciverEmail",
    },
    {
      header: "Reciver Phone Number",
      accessorKey: "reciverPhoneNumber",
    },
    {
      header: "Shipment Type",
      accessorKey: "shipmentType",
    },
    {
      header: "Reciver Weight",
      accessorKey: "shipmentWeight",
    },
    {
      header: "Shipment Length",
      accessorKey: "shipmentLength",
    },
    {
      header: "Shipment Width",
      accessorKey: "shipmentWidth",
    },
    {
      header: "Shipment Height",
      accessorKey: "shipmentHeight",
    },
    {
      header: "Shipment Drop Off",
      accessorKey: "shipmentDropOffDate",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
    {
      header: "Shipment description",
      accessorKey: "shipmentDescription",
    },
    {
      header: "Shipment Created",
      accessorKey: "createdAt",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
  ];

  return (
    <div className='allShipment'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TableComponents
          columns={columns}
          data={data}
          tableClassName={"table-container-shipment "}
        />
      )}
    </div>
  );
};

export default AllShipment;
