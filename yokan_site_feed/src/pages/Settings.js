import React, { useEffect, useState, useMemo } from "react";
import { DateTime } from "luxon";
import axios from "axios";
import { Spin } from "antd";
import { BASE_URL } from "../constant/constant";
import TableComponents from "../components/TableComponents";
import { useSelector } from "react-redux";
import { SelectAdmin } from "../state/adminAuthSlice";
import { SelectFeeder } from "../state/feedAuthSlice";
import "../styles/settings.css";

const Settings = () => {
  const isFeederOnline = useSelector(SelectFeeder);
  const isAdminOnline = useSelector(SelectAdmin);

  const [currentUser, setCurrentUser] = useState("");
  const [datas, setDatas] = useState([]);
  const [AdminDatas, setAdminDatas] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [priceLoading, setPriceLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const [shipmentLoading, setshipmentLoading] = useState(false);
  const [staffLoading, setStaffLoading] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const [staffDataLoading, setStaffDataLoading] = useState(false);
  const [adminDataLoading, setAdminDataLoading] = useState(false);
  const [priceError, setPriceError] = useState(null);
  const [userError, setUserError] = useState(null);
  const [shipmentError, setShipmentError] = useState(null);
  const [staffError, setStaffError] = useState(null);
  const [adminError, setAdminError] = useState(null);
  const [adminDataError, setAdminDataError] = useState(null);
  const [staffDataError, setStaffDataError] = useState(null);
  // const [trackNumber, setTrackNumber] = useState("");
  // const [error, setError] = useState(null);
  // const [display, setDisplay] = useState(false);
  // const [responseShipment, setResponseShipment] = useState(false);
  const [currentPrice, setCurrentPrice] = useState({});
  const [shipment, setShipment] = useState({});
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState({});
  const [staff, setStaff] = useState({});
  const [shipmentId, setShipmentId] = useState("");
  const [price, setPrice] = useState("");
  const [userId, setUSerId] = useState("");
  const [staffId, setStaffId] = useState("");
  const [adminId, setAdminId] = useState("");

  console.log(currentUser);

  useEffect(() => {
    if (isFeederOnline) {
      setCurrentUser(isFeederOnline.firstName);
    } else {
      setCurrentUser(isAdminOnline.firstName);
    }

    const fetchStaffData = async () => {
      try {
        setStaffDataError(null);
        setStaffDataLoading(true);
        const response = await axios.get(`${BASE_URL}/dataFeeder/getFeeder`);
        const fetchedDatas = response.data.user;
        setDatas(fetchedDatas);
        setStaffDataLoading(false);
        console.log("Data:", fetchedDatas);
      } catch (error) {
        setStaffDataLoading(false);
        setStaffDataError("Error fetching data:", error.message);
      }
    };
    fetchStaffData();

    const fetchAdminData = async () => {
      try {
        setAdminDataError(null);
        setAdminDataLoading(true);
        const response = await axios.get(`${BASE_URL}/admin/getAdminUser`);
        const fetchedDatas = response.data.user;
        setAdminDatas(fetchedDatas);
        setAdminDataLoading(false);
        console.log("Data:", fetchedDatas);
      } catch (error) {
        setAdminDataLoading(false);
        setAdminDataError("Error fetching data:", error.message);
      }
    };
    fetchAdminData();

    const getPrice = async () => {
      try {
        setPriceError(null);
        setPriceLoading(true);
        const response = await axios.get(`${BASE_URL}/price/getprice`);
        const fetchedDatas = response.data.prices[0];
        setCurrentPrice(fetchedDatas);
        console.log(fetchedDatas);
        setPriceLoading(false);
        console.log("Data price:", fetchedDatas);
      } catch (error) {
        setPriceLoading(false);
        setPriceError("Error fetching data:", error.message);
      }
    };

    getPrice();
  }, [isFeederOnline, isAdminOnline]);

  const data = useMemo(() => datas, [datas]);

  const adminData = useMemo(() => AdminDatas, [AdminDatas]);

  const columns = [
    {
      header: "ID",
      accessorKey: "_id",
      footer: "ID",
    },
    {
      header: "User Name",
      accessorKey: "userName",
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
      header: "Phone Number",
      accessorKey: "phoneNumber",
    },
    {
      header: "User Created",
      accessorKey: "createdAt",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
  ];

  const adminColumns = [
    {
      header: "ID",
      accessorKey: "_id",
      footer: "ID",
    },
    {
      header: "User Name",
      accessorKey: "userName",
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
      header: "Phone Number",
      accessorKey: "phoneNumber",
    },
    {
      header: "User Created",
      accessorKey: "createdAt",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
  ];

  const getIndividualUser = async () => {
    try {
      setUserError(null);
      setUserLoading(true);

      const shipmentResponse = await axios.get(
        `http://localhost:3001/auth/getIndividualUser/${userId}`
      );

      const userObject = shipmentResponse.data;
      console.log(userObject);
      const user = userObject["user"];
      console.log(user);
      setUser(user);
      setUserLoading(false);
    } catch (e) {
      console.log(e);
      setUserLoading(false);
      setUserError("An error occurred. Please try again.");
    }
  };

  const getIndividualStaff = async () => {
    try {
      setStaffError(null);
      setStaffLoading(true);

      const shipmentResponse = await axios.get(
        `http://localhost:3001/dataFeeder/getIndividualDataFeeder/${staffId}`
      );

      const userObject = shipmentResponse.data;
      console.log(userObject);
      const user = userObject["user"];
      console.log(user);
      setStaff(user);
      setStaffLoading(false);
    } catch (e) {
      console.log(e);
      setStaffLoading(false);
      setStaffError("An error occurred. Please try again.");
    }
  };

  const getIndividualAdmin = async () => {
    try {
      setAdminError(null);
      setAdminLoading(true);

      const shipmentResponse = await axios.get(
        `http://localhost:3001/admin/getIndividualAdminUser/${adminId}`
      );

      const userObject = shipmentResponse.data;
      console.log(userObject);
      const user = userObject["user"];
      console.log(user);
      setAdmin(user);
      setAdminLoading(false);
    } catch (e) {
      console.log(e);
      setAdminLoading(false);
      setAdminError("An error occurred. Please try again.");
    }
  };

  const updatePrice = async () => {
    try {
      setPriceError(null);
      setPriceLoading(true);

      const shipmentResponse = await axios.put(
        `http://localhost:3001/price/updateprice/6597f5fd7f46ad7749adf4b7`,
        {
          price: price,
          updatedBy: currentUser,
        }
      );

      await shipmentResponse.data;

      setPriceLoading(false);
      alert("New Price set successfully");
    } catch (e) {
      console.log(e);
      setPriceLoading(false);
      setPriceError("An error occurred. Please try again.");
    }
  };

  const deleteUser = async () => {
    try {
      setUserError(null);
      setUserLoading(true);

      await axios.post("http://localhost:3001/inActiveUser/setUserInactive", {
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        country: user.country,
      });

      await axios.delete(`http://localhost:3001/auth/deleteuser/${userId}`);

      setUserLoading(false);
      alert("User Deleted successfully");
      setUSerId("");
      setUser({});
      setUserError(null);
    } catch (e) {
      console.log(e);
      setUserLoading(false);
      setUserError("An error occurred. Please try again.");
    }
  };

  const deleteStaff = async () => {
    try {
      setStaffError(null);
      setStaffLoading(true);

      await axios.post(
        "http://localhost:3001/inActiveFeedUser/setFeedUserInactive",
        {
          userId: staff._id,
          userName: staff.userName,
          firstName: staff.firstName,
          lastName: staff.lastName,
          email: staff.email,
          phoneNumber: staff.phoneNumber,
        }
      );

      await axios.delete(
        `http://localhost:3001/dataFeeder/deleteFeeder/${staffId}`
      );

      setStaffLoading(false);
      alert("Staff Deleted successfully");
      setStaffId("");
      setStaff({});
      setStaffError(null);
    } catch (e) {
      console.log(e);
      setStaffLoading(false);
      setStaffError("An error occurred. Please try again.");
    }
  };

  const deleteAdmin = async () => {
    try {
      setAdminError(null);
      setAdminLoading(true);

      const inactiveAdmin = await axios.post(
        "http://localhost:3001/inActiveAdminUser/setAdminUserInactive",
        {
          userId: admin._id,
          userName: admin.userName,
          firstName: admin.firstName,
          lastName: admin.lastName,
          email: admin.email,
          phoneNumber: admin.phoneNumber,
        }
      );

      console.log(inactiveAdmin.data);

      const shipmentResponse = await axios.delete(
        `http://localhost:3001/admin/deleteAdminUser/${adminId}`
      );

      await shipmentResponse.data;

      setAdminLoading(false);
      setAdminId("");
      setAdmin({});
      setAdminError(null);
      alert("Admin Deleted successfully");
    } catch (e) {
      console.log(e);
      setAdminLoading(false);
      setAdminError("An error occurred. Please try again.");
    }
  };

  const deleteShipment = async () => {
    try {
      setShipmentError(null);
      setshipmentLoading(true);

      await axios.post(
        "http://localhost:3001/inActiveShipment/setShipmentInactive",
        {
          shipmentId: shipment._id,
          userId: shipment.userId,
          trackingNumber: shipment.trackingNumber,
          originCountry: shipment.originCountry,
          originState: shipment.originState,
          originCity: shipment.originCity,
          originPostalCode: shipment.originPostalCode,
          senderFullName: shipment.senderFullName,
          senderAddress: shipment.senderAddress,
          senderAddressTwo: shipment.senderAddressTwo,
          senderEmail: shipment.senderEmail,
          senderPhoneNumber: shipment.senderPhoneNumber,
          destinationCountry: shipment.destinationCountry,
          destinationState: shipment.destinationState,
          destinationCity: shipment.destinationCity,
          destinationPostalCode: shipment.destinationPostalCode,
          reciverFullName: shipment.reciverFullName,
          reciverAddress: shipment.reciverAddress,
          reciverAddressTwo: shipment.reciverAddressTwo,
          reciverEmail: shipment.reciverEmail,
          reciverPhoneNumber: shipment.reciverPhoneNumber,
          shipmentType: shipment.shipmentType,
          shipmentWeight: shipment.shipmentWeight,
          shipmentLength: shipment.shipmentLength,
          shipmentWidth: shipment.shipmentWidth,
          shipmentHeight: shipment.shipmentHeight,
          shipmentDropOffDate: shipment.shipmentDropOffDate,
          shipmentDescription: shipment.shipmentDescription,
          price: shipment.price,
          pickUpUpdatedBy: shipment.pickUpUpdatedBy,
          pickUpLastUpdate: shipment.pickUpLastUpdate,
          documentProcessingUpdatedBy: shipment.documentProcessingUpdatedBy,
          documentProcessingLastUpdate: shipment.documentProcessingLastUpdate,
          shipmentProcessingUpdatedBy: shipment.shipmentProcessingUpdatedBy,
          shipmentProcessingLastUpdate: shipment.shipmentProcessingLastUpdate,
          intransitUpdatedBy: shipment.intransitUpdatedBy,
          intransitLastUpdate: shipment.intransitLastUpdate,
          localDeliveryUpdatedBy: shipment.localDeliveryUpdatedBy,
          localDeliveryLastUpdate: shipment.localDeliveryLastUpdate,
          deliveryUpdatedBy: shipment.deliveryUpdatedBy,
          deliveryLastUpdate: shipment.deliveryLastUpdate,
          finishedUpdatedBy: shipment.finishedUpdatedBy,
          finishedLastUpdate: shipment.finishedLastUpdate,
        }
      );

      await axios.delete(
        `http://localhost:3001/shipment/deleteShipment/${shipmentId}`
      );

      setshipmentLoading(false);
      alert("Shipment Deleted successfully");
      setShipmentId("");
      setShipment({});
      setShipmentError(null);
    } catch (e) {
      console.log(e);
      setshipmentLoading(false);
      setShipmentError("An error occurred. Please try again.");
    }
  };

  const getShipmentById = async () => {
    try {
      setShipmentError(null);
      setshipmentLoading(true);

      const shipmentResponse = await axios.get(
        `http://localhost:3001/shipment/getShipmentById/${shipmentId}`
      );

      const shipmentObject = shipmentResponse.data;
      const shipment = shipmentObject["shipments"];
      setShipment(shipment);
      setshipmentLoading(false);
    } catch (e) {
      console.log(e);
      setshipmentLoading(false);
      setShipmentError("An error occurred. Please try again.");
    }
  };

  const TrackDataDisplay = () => {
    if (!Object.keys(shipment).length) {
      return (
        <div className='TrackDataDisplay-no-shipment-display'>
          No data available.
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
            <td>Price </td>
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
            <td className='TrackDataDisplay-table-td'>
              <span>{shipment.price}</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const UserDisplay = () => {
    if (!Object.keys(user).length) {
      return (
        <div className='TrackDataDisplay-no-shipment-display'>
          No data available.
        </div>
      );
    }

    return (
      <table className='TrackDataDisplay-table'>
        <tbody>
          <tr className='TrackDataDisplay-table-row'>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Country</td>
          </tr>
          <tr className='TrackDataDisplay-table-row'>
            <td className='TrackDataDisplay-table-td'>
              <span>{user.firstName}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{user.lastName}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{user.email}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{user.phoneNumber}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{user.country}</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const StaffDisplay = () => {
    if (!Object.keys(staff).length) {
      return (
        <div className='TrackDataDisplay-no-shipment-display'>
          No data available.
        </div>
      );
    }

    return (
      <table className='TrackDataDisplay-table'>
        <tbody>
          <tr className='TrackDataDisplay-table-row'>
            <td>userName</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Phone Number</td>
          </tr>
          <tr className='TrackDataDisplay-table-row'>
            <td className='TrackDataDisplay-table-td'>
              <span>{staff.userName}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{staff.firstName}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{staff.lastName}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{staff.email}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{staff.phoneNumber}</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const AdminDisplay = () => {
    if (!Object.keys(admin).length) {
      return (
        <div className='TrackDataDisplay-no-shipment-display'>
          No data available.
        </div>
      );
    }

    return (
      <table className='TrackDataDisplay-table'>
        <tbody>
          <tr className='TrackDataDisplay-table-row'>
            <td>userName</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Phone Number</td>
          </tr>
          <tr className='TrackDataDisplay-table-row'>
            <td className='TrackDataDisplay-table-td'>
              <span>{admin.userName}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{admin.firstName}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{admin.lastName}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{admin.email}</span>
            </td>
            <td className='TrackDataDisplay-table-td'>
              <span>{admin.phoneNumber}</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const NotificationComponent = ({ error }) => {
    return (
      <div className='notificationContainer'>
        <div className='notificationBox'>
          <i className='fas fa-question-circle'></i>
          <p className='message '>{error}</p>
        </div>
      </div>
    );
  };

  const PriceTable = () => {
    return (
      <div className='price-table'>
        <table className='shipment-table'>
          <tbody>
            <tr className='shipment-table-row colored'>
              <td>Current Price</td>
              <td className='shipment-table-td'>
                <span>{currentPrice.price ?? ""}</span>
              </td>
            </tr>
            <tr className='shipment-table-row'>
              <td>Updated By</td>
              <td className='shipment-table-td'>
                <span>{currentPrice.updatedBy ?? ""}</span>
              </td>
            </tr>
            <tr className='shipment-table-row colored'>
              <td>Last Update </td>
              <td className='shipment-table-td'>
                <span>
                  {currentPrice.updatedAt
                    ? DateTime.fromISO(currentPrice.updatedAt).toFormat(
                        "yyyy-MM-dd HH:mm:ss"
                      )
                    : ""}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className='settings'>
      <div className='settings-price'>
        <div className='settings-header'>
          <h3>Adjust Price</h3>
        </div>
        <PriceTable />
        <div className='settings-price-adjustment'>
          <p>Current Price</p>
          <p>
            <strong>{currentPrice.price ?? ""}</strong> Birr per weight
          </p>
        </div>
        <div className='price-adjustment-div'>
          <input
            type='number'
            placeholder='Enter new price '
            value={price}
            onChange={(e) => setPrice(e.target.value.trim())}
          />
          <button
            className='price-adjustment-btn'
            onClick={updatePrice}
            disabled={price.length === 0 ? true : false}
          >
            Set Price
          </button>
        </div>
        {priceLoading && (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        )}
        {priceError && <NotificationComponent error={priceError} />}
      </div>

      <div className='settings-delete-user'>
        <div className='settings-delete-user-header'>
          <h3>Delete User</h3>
        </div>
        <div className='updateStatus-search-div'>
          <input
            type='text'
            placeholder='Search here'
            value={userId}
            onChange={(e) => setUSerId(e.target.value.trim())}
          />
          <button
            className='updateStatus-search-btn'
            onClick={getIndividualUser}
            disabled={userId.length === 0 ? true : false}
          >
            Search
          </button>
        </div>

        <div>
          <UserDisplay />
        </div>
        <div className='updateStatus-update-div'>
          <p>Delete User</p>
          <div className='updateStatus-select'>
            <button
              className='updateStatus-update-btn-cancel'
              onClick={deleteUser}
              disabled={Object.keys(user).length === 0 ? true : false}
            >
              Delete
            </button>
            <button
              className='updateStatus-update-btn'
              onClick={() => {
                setUSerId("");
                setUser({});
                setUserError(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        {userLoading && (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        )}
        {userError && <NotificationComponent error={userError} />}
      </div>

      <div className='settings-delete-user'>
        <div className='settings-delete-user-header'>
          <h3>Delete Shipment</h3>
        </div>
        <div className='updateStatus-search-div'>
          <input
            type='text'
            placeholder='Search here'
            value={shipmentId}
            onChange={(e) => setShipmentId(e.target.value.trim())}
          />
          <button
            className='updateStatus-search-btn'
            onClick={getShipmentById}
            disabled={shipmentId.length === 0 ? true : false}
          >
            Search
          </button>
        </div>

        <div>
          <TrackDataDisplay />
        </div>
        <div className='updateStatus-update-div'>
          <p>Delete Shipment</p>
          <div className='updateStatus-select'>
            <button
              className='updateStatus-update-btn-cancel'
              onClick={deleteShipment}
              disabled={Object.keys(shipment).length === 0 ? true : false}
            >
              Delete
            </button>
            <button
              className='updateStatus-update-btn'
              onClick={() => {
                setShipmentId("");
                setShipment({});
                setShipmentError(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        {shipmentLoading && (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        )}
        {shipmentError && <NotificationComponent error={shipmentError} />}
      </div>

      <div className='display-staff-members'>
        <div className='display-staff-members-heading'>
          <h3>View Staff members</h3>
        </div>
        {staffDataLoading ? (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        ) : (
          <TableComponents
            columns={columns}
            data={data}
            tableClassName={"table-container"}
          />
        )}
        {staffDataLoading && (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        )}
        {staffDataError && <NotificationComponent error={staffDataError} />}
        <div className='settings-delete-user'>
          <div className='settings-delete-user-header'>
            <h3>Delete Staff Member</h3>
          </div>
          <div className='updateStatus-search-div'>
            <input
              type='text'
              placeholder='Search here'
              value={staffId}
              onChange={(e) => setStaffId(e.target.value.trim())}
            />
            <button
              className='updateStatus-search-btn'
              onClick={getIndividualStaff}
              disabled={staffId.length === 0 ? true : false}
            >
              Search
            </button>
          </div>

          <div>
            <StaffDisplay />
          </div>
          <div className='updateStatus-update-div'>
            <p>Delete Staff Member</p>
            <div className='updateStatus-select'>
              <button
                className='updateStatus-update-btn-cancel'
                onClick={deleteStaff}
                disabled={Object.keys(staff).length === 0 ? true : false}
              >
                Delete
              </button>
              <button
                className='updateStatus-update-btn'
                onClick={() => {
                  setStaffId("");
                  setStaff({});
                  setStaffError(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        {staffLoading && (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        )}
        {staffError && <NotificationComponent error={staffError} />}
      </div>

      <div className='display-staff-members'>
        <div className='display-staff-members-heading'>
          <h3>View Admins</h3>
        </div>
        {adminDataLoading ? (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        ) : (
          <TableComponents
            columns={adminColumns}
            data={adminData}
            tableClassName={"table-container"}
          />
        )}
        {adminDataLoading && (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        )}
        {adminDataError && <NotificationComponent error={adminDataError} />}
        <div className='settings-delete-user'>
          <div className='settings-delete-user-header'>
            <h3>Delete Admin</h3>
          </div>
          <div className='updateStatus-search-div'>
            <input
              type='text'
              placeholder='Search here'
              value={adminId}
              onChange={(e) => setAdminId(e.target.value.trim())}
            />
            <button
              className='updateStatus-search-btn'
              onClick={getIndividualAdmin}
              disabled={adminId.length === 0 ? true : false}
            >
              Search
            </button>
          </div>

          <div>
            <AdminDisplay />
          </div>
          <div className='updateStatus-update-div'>
            <p>Delete Admin</p>
            <div className='updateStatus-select'>
              <button
                className='updateStatus-update-btn-cancel'
                onClick={deleteAdmin}
                disabled={Object.keys(admin).length === 0 ? true : false}
              >
                Delete
              </button>
              <button
                className='updateStatus-update-btn'
                onClick={() => {
                  setAdminId("");
                  setAdmin({});
                  setAdminError(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        {adminLoading && (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        )}
        {adminError && <NotificationComponent error={adminError} />}
      </div>
    </div>
  );
};

export default Settings;
