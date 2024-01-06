import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import { BASE_URL } from "../constant/constant";
import TableComponents from "../components/TableComponents";
import "../styles/viewUsers.css";

const ViewUsers = () => {
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
    <div className='viewUsers'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TableComponents columns={columns} data={data} />
      )}
    </div>
  );
};

export default ViewUsers;
