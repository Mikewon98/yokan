import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearShipmentData } from "../../state/shipmentDataSlice";
import { clearShipmentItemAdded } from "../../state/shipmentDataItemSlice";
import { selectShipment } from "../../state/shipmentDataSlice";
import { selectShipmentItem } from "../../state/shipmentDataItemSlice";
import { Selectuser } from "../../state/authSlice";
import chappa from "../../assets/Chapa Logo.png";
import { Spin } from "antd";
import "./ShipmentPayment.css";
import { selectTrackingNumber } from "../../state/shipmentDataSlice";

const ShipmentPayment = () => {
  const [paymentModal, setPaymentModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shipment = useSelector(selectShipment);
  const shipmentItem = useSelector(selectShipmentItem);
  const user = useSelector(Selectuser);
  const shipmentArray = shipment[0];
  const shipmentItemArray = shipmentItem[0];
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [verifyError, setVerifyError] = useState(null);
  const [checkbox, setCheckbox] = useState(true);
  const [txt_ref, setTxt_ref] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(false);
  // const [priceLoading, setPriceLoading] = useState(false);
  // const [priceError, setPriceError] = useState(null);
  // const [currentPrice, setCurrentPrice] = useState({});
  const trackingNumber = useSelector(selectTrackingNumber);
  console.log(trackingNumber);

  /* 

  useEffect(() => {
    const getPrice = async () => {
      try {
        setPriceError(null);
        setPriceLoading(true);
        const response = await axios.get(
          `http://localhost:3001/price/getprice`
        );
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
  }, []);

  const priceVat = shipmentItemArray?.price * 0.15 ?? 0;

  const priceVat = price * 0.15;

  */

  const addShipment = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const shipmentDataResponse = await axios.post(
        "http://localhost:3001/shipment/createShipment",
        {
          userId: user._id,
          trackingNumber: shipmentArray.trackingNumber,
          originCountry: shipmentArray.originCountry,
          originState: shipmentArray.originState,
          originCity: shipmentArray.originCity,
          originPostalCode: shipmentArray.originPostalCode,
          senderFullName: shipmentArray.originFullName,
          senderAddress: shipmentArray.originAddress,
          senderAddressTwo: shipmentArray.originAddressTwo,
          senderEmail: shipmentArray.senderEmail,
          senderPhoneNumber: shipmentArray.senderPhoneNumber,
          destinationCountry: shipmentArray.destinationCountry,
          destinationState: shipmentArray.destinationState,
          destinationCity: shipmentArray.destinationCity,
          destinationPostalCode: shipmentArray.destinationPostalCode,
          reciverFullName: shipmentArray.destinationFullName,
          reciverAddress: shipmentArray.destinationAddress,
          reciverAddressTwo: shipmentArray.destinationAddressTwo,
          reciverEmail: shipmentArray.reciverEmail,
          reciverPhoneNumber: shipmentArray.reciverPhoneNumber,
          shipmentType: shipmentItemArray.packageType,
          shipmentWeight: shipmentItemArray.weight,
          shipmentLength: shipmentItemArray.length,
          shipmentWidth: shipmentItemArray.width,
          shipmentHeight: shipmentItemArray.height,
          shipmentDropOffDate: shipmentItemArray.dropOffDate,
          shipmentDescription: shipmentItemArray.discription,
          price: shipmentItemArray.price,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      await shipmentDataResponse.data;
      // setPaymentModal(!paymentModal);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError("An error occurred. Please try again.");
    }
  }, [shipmentArray, shipmentItemArray, user]);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        setVerifyError(null);
        setVerifyLoading(true);

        const response = await fetch(
          `http://localhost:3001/api/order/verify-payment/${txt_ref}`
        );
        const data = await response.json();

        if (data.status === "success") {
          setVerificationStatus(true);
          console.log("Payment was successfully verified");
          setTxt_ref(null);
          addShipment();
        } else if (data.status !== "success") {
          setVerifyError("Payment can't be verified please try again!");
        }
        setVerifyLoading(false);

        console.log(data);
      } catch (err) {
        setVerificationStatus(false);
        setVerifyLoading(false);
        console.log("Payment can't be verified", err);
        setVerifyError("Payment can't be verified");
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User switched tabs or left the page
        console.log("Will start verifying when you come back");
      } else {
        verifyPayment();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [txt_ref, addShipment]);

  /* 
  const addShipment = async () => {
    try {
      setError(null);
      setLoading(true);
      const shipmentDataResponse = await axios.post(
        "http://localhost:3001/shipment/createShipment",
        {
          userId: user._id,
          trackingNumber: shipmentArray.trackingNumber,
          originCountry: shipmentArray.originCountry,
          originState: shipmentArray.originState,
          originCity: shipmentArray.originCity,
          originPostalCode: shipmentArray.originPostalCode,
          senderFullName: shipmentArray.originFullName,
          senderAddress: shipmentArray.originAddress,
          senderAddressTwo: shipmentArray.originAddressTwo,
          senderEmail: shipmentArray.senderEmail,
          senderPhoneNumber: shipmentArray.senderPhoneNumber,
          destinationCountry: shipmentArray.destinationCountry,
          destinationState: shipmentArray.destinationState,
          destinationCity: shipmentArray.destinationCity,
          destinationPostalCode: shipmentArray.destinationPostalCode,
          reciverFullName: shipmentArray.destinationFullName,
          reciverAddress: shipmentArray.destinationAddress,
          reciverAddressTwo: shipmentArray.destinationAddressTwo,
          reciverEmail: shipmentArray.reciverEmail,
          reciverPhoneNumber: shipmentArray.reciverPhoneNumber,
          shipmentType: shipmentItemArray.packageType,
          shipmentWeight: shipmentItemArray.weight,
          shipmentLength: shipmentItemArray.length,
          shipmentWidth: shipmentItemArray.width,
          shipmentHeight: shipmentItemArray.height,
          shipmentDropOffDate: shipmentItemArray.dropOffDate,
          shipmentDescription: shipmentItemArray.discription,
          price: shipmentItemArray.price,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      await shipmentDataResponse.data;
      // setPaymentModal(!paymentModal);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  */

  /* 
  const checkOutToPayment = async () => {
    try {
      setError(null);
      setLoading(true);

      const response = await fetch("http://localhost:3001/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          amount: shipmentItemArray.price ?? 0,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const checkoutUrl = data.responseData.data.checkout_url;
      const txRef = data.txRef;

      console.log(txRef);

      console.log(checkoutUrl);

      setTxt_ref(txRef);

      window.open(checkoutUrl, "_blank");

      // console.log(response.status);

      // const data = await response.json();
      // const checkoutUrl = data.data.checkout_url;
      // window.open(checkoutUrl, "_blank");

      if (response.status === 400) {
        setError(" Required Attribute: [ “validation.required”]");
      } else if (response.status === 200 || response.status === 201) {
        // checkVerificationStatus();
        // setVerificationStatus(await verifyPayment(txt_ref));
        // const verificationStatus = await verifyPayment(txt_ref);
        // if (verificationStatus) {
        //   await addShipment();
        //   console.log("Shipment added successfully!");
        // } else {
        //   console.log("Payment verification failed.");
        // }
        // addShipment();
        // dispatch(clearShipmentData());
        // dispatch(clearShipmentItemAdded());
        // navigate("/");
      } else {
        setError("Something occurred now.");
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("Error state:", e);
      setError("An error occurred. Please try again.");
    }
  };
*/
  console.log(verificationStatus);
  console.log(txt_ref);
  console.log(verifyError);

  const verifyPayment = async () => {
    console.log(txt_ref);
    try {
      setVerifyError(null);
      setVerifyLoading(true);
      // await axios.get(
      //   `http://localhost:3001/api/order/verify-payment/${txt_ref}`,
      //   {
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );

      const response = await fetch(
        `http://localhost:3001/api/order/verify-payment/${txt_ref}`
      );
      const data = await response.json();

      if (data.status === "success") {
        setVerificationStatus(true);
        console.log("Payment was successfully verified");
        setTxt_ref(null);
        addShipment();
      } else if (data.status !== "success") {
        setVerifyError("Payment can't be verified please try again!");
      }
      setVerifyLoading(false);

      console.log(data);

      // console.log("Payment was successfully verified");
      // setVerificationStatus(true);
      // setTxt_ref(null);
      // setVerifyLoading(false);

      // await addShipment();
    } catch (err) {
      setVerificationStatus(false);
      setVerifyLoading(false);
      console.log("Payment can't be verified", err);
      setVerifyError("Payment can't be verified");
    }
  };

  /* 
  const checkVerificationStatus = async () => {
    let duration = 120; // 2 minutes in seconds
    let elapsedTime = 0;

    const intervalId = setInterval(async () => {
      if (verificationStatus) {
        console.log("Payment verification successful. Stopping interval.");
        clearInterval(intervalId);
        return;
      }

      elapsedTime += 10; // Interval is 10 seconds
      console.log(
        `Checking payment verification status... Elapsed time: ${elapsedTime}s`
      );

      if (elapsedTime >= duration) {
        console.log("Stopping interval after 2 minutes.");
        clearInterval(intervalId);
      } else {
        setVerificationStatus(await verifyPayment(txt_ref));
      }
    }, 5000); // Check every 5 seconds

    // Stop the interval after the specified duration
    setTimeout(() => {
      console.log("Stopping interval after 2 minutes.");
      clearInterval(intervalId);
    }, duration * 1000);
  };
*/

  // const handlePayment = () => {
  //   // setPaymentModal(!paymentModal);
  //   checkOutToPayment();
  //   // addShipment();
  // };

  const handlePayment = async () => {
    try {
      setError(null);
      setLoading(true);
      setVerificationStatus(false);

      const response = await fetch("http://localhost:3001/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          amount: shipmentItemArray.price ?? 0,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (response.status === 400) {
        setError(" Required Attribute: [ “validation.required”]");
      }

      const data = await response.json();

      const checkoutUrl = data.responseData.data.checkout_url;
      const txRef = data.txRef;

      console.log(txRef);

      console.log(checkoutUrl);

      setTxt_ref(txRef);

      window.open(checkoutUrl, "_blank");

      setPaymentModal(!paymentModal);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("Error state:", e);
      setError("An error occurred. Please try again.");
    }
  };

  const clearDispatch = () => {
    dispatch(clearShipmentData());
    dispatch(clearShipmentItemAdded());
    document.body.classList.remove("active-modal");
    navigate("/");
  };

  const cancelVerify = () => {
    setPaymentModal(!paymentModal);
    document.body.classList.remove("active-modal");
  };

  const handleCloseModal = () => {
    setPaymentModal(!paymentModal);
    clearDispatch();
  };

  const handleProductRemove = () => {
    navigate("/createshipment");
    dispatch(clearShipmentData());
    dispatch(clearShipmentItemAdded());
  };
  console.log(checkbox);

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  if (paymentModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const productTable = shipmentItem?.map((item) => (
    <div key={item.id}>
      <p>{item.packageType}</p>
      <p>{item.weight} kg</p>
    </div>
  ));

  const senderTable = shipment?.map((item) => (
    <div key={item.id}>
      <p>{item.originFullName}</p>
      <p>{item.originCountry}</p>
      <p>{item.originCity}</p>
      <p>{item.senderEmail}</p>
    </div>
  ));

  const reciverTable = shipment?.map((item) => (
    <div key={item.id}>
      <p>{item.destinationFullName}</p>
      <p>{item.destinationCountry}</p>
      <p>{item.destinationCity}</p>
      <p>{item.reciverEmail}</p>
    </div>
  ));

  const priceTable = shipmentItem?.map((item) => (
    <p key={item.id}>{item.price} birr</p>
  ));

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

  // console.log(shipment[0].originFullName);

  // console.log(shipment);
  // console.log(user._id);
  // console.log(shipmentArray);
  // console.log(shipmentItemArray);
  // console.log(shipmentItemArray.itemDescription);
  // console.log(JSON.stringify(shipment));
  // console.log(JSON.stringify(shipmentItem, null, 2));

  return (
    <>
      <div className='shipment-item-div'>
        <div className='shipment-item-div-heading'>
          <h2>Reiview and pay your labels</h2>
        </div>
        <div className='shipment-main-div'>
          <div className='shipment-shoping-cart'>
            <div className='shipment-main-container'>
              <div className='shipment-main-heading'>
                <h3>Shoping Cart</h3>
              </div>
              <div className='shipment-product-table'>
                <div className='shipment-products'>
                  <div className='shipment-products-header'>
                    <h3>Product</h3>
                  </div>
                  <div className='shipment-products-content'>
                    {productTable}
                  </div>
                </div>
                <div className='shipment-products'>
                  <div className='shipment-products-header'>
                    <h3>Sender</h3>
                  </div>
                  <div className='shipment-products-content'>{senderTable}</div>
                </div>
                <div className='shipment-products'>
                  <div className='shipment-products-header'>
                    <h3>Recipient</h3>
                  </div>
                  <div className='shipment-products-content'>
                    {reciverTable}
                  </div>
                </div>{" "}
                {/* */}
                <div className='shipment-products'>
                  <div className='shipment-products-header'>
                    <h3>Price</h3>
                  </div>
                  <div className='shipment-products-content'>
                    {/* <p>{shipmentItemArray?.price ?? 0} birr</p> */}
                    {priceTable}
                  </div>
                </div>
              </div>

              <div className='shipment-action-buttons'>
                {/* <p
                  className='shipment-action-button-change-product'
                  onClick={handleChangeProduct}
                >
                  Change Product
                </p>
                <p
                  className='shipment-action-button-change-person'
                  onClick={handleChangePerson}
                >
                  Change Sender/reciver{" "}
                </p> */}
                <p
                  className='shipment-action-button-remove'
                  onClick={handleProductRemove}
                >
                  Remove Product
                </p>
              </div>
              <div className='shipment-total-display'>
                <div className='shipment-amount-text'>
                  <p>Amount to pay</p>
                  <p>of which VAT</p>
                </div>
                <div className='shipment-amount-number'>
                  <p>{shipmentItemArray?.price ?? 0} Birr</p>
                  <p> {shipmentItemArray?.price * 0.15 ?? 0} Birr</p>
                </div>
              </div>
            </div>
            <div className='shipment-banking-container'>
              <div className='shipment-main-heading'>
                <h3>Payment method</h3>
              </div>
              <div className='shipment-payment-method'>
                <div className='shipment-payment-row'>
                  <p>Chappa</p>
                  <div className='shipment-payment-row-img'>
                    <img src={chappa} alt='Chappa' />
                  </div>
                </div>
              </div>
            </div>
            <div className='shipment-terms-and-condition'>
              <div className='shipment-main-heading'>
                <h3>Terms and Condition</h3>
              </div>
              <div className='shipment-terms-and-condition-text'>
                <label className='custom-checkbox'>
                  <input
                    name='checkbox'
                    value={checkbox}
                    onChange={handleCheckbox}
                    type='checkbox'
                  />
                  <span className='checkmark'></span>I verify that my shipments
                  are within the dimensions and weight limits for selected
                  products and approve the terms of service, distance agreement
                  terms and general terms.
                </label>
              </div>
            </div>
            <div className='shipment-final-payment'>
              {/* <div
                className='shipment-final-payment-button'
                onClick={handlePayment}
                // disabled={currentPrice ? false : true}
              >
                <p>Continue to payment</p>
              </div> */}
              <button
                className='shipment-final-payment-button'
                onClick={handlePayment}
                disabled={checkbox}
              >
                Continue Payment
              </button>
            </div>

            <div className='shipment-white-space'></div>
          </div>
        </div>
        {loading && (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        )}
        {error && <NotificationComponent error={error} />}
        {/* {priceLoading && (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        )}
        {priceError && <NotificationComponent error={priceError} />} */}
      </div>

      {paymentModal && (
        <div className='payment-modal'>
          <div onClick={handleCloseModal} className='payment-overlay'></div>
          {verificationStatus ? (
            <div className='payment-modal-content'>
              <h1 className='payment-modal-content-heading'>
                Payment Completed
              </h1>

              <div className='payment-show-tracking-number'>
                <h2>{shipmentArray?.trackingNumber}</h2>
              </div>
              <div>
                <p className='payment-tracking-number-text'>
                  This is your tracking number you can use it to track your
                  shipment form anywhere at anytime!
                </p>
                <p className='payment-tracking-number-warning'>
                  N:B Please dont forget your Tracking number
                </p>
              </div>
              <div className='payment-close-modal' onClick={handleCloseModal}>
                <i className='fa-solid fa-x'></i>
              </div>
            </div>
          ) : (
            <div className='payment-modal-content'>
              <h1 className='payment-modal-content-heading'>Verify Payment</h1>

              <button
                className='shipment-final-payment-button'
                onClick={verifyPayment}
                disabled={verifyLoading ? true : false}
              >
                Verify
              </button>
              <div>
                {verifyLoading && (
                  <div className='verify-loading-spin'>
                    <Spin />
                  </div>
                )}
                {verifyError ? (
                  <p className='payment-verifying-warning'>{verifyError}</p>
                ) : (
                  <p className='payment-tracking-number-warning'>
                    Verify your payment
                  </p>
                )}
              </div>
              <div className='payment-close-modal' onClick={cancelVerify}>
                <i className='fa-solid fa-x'></i>
              </div>
            </div>
          )}
          {/* <div className='payment-modal-content'>
            <h1 className='payment-modal-content-heading'>Payment Completed</h1>

            <div className='payment-show-tracking-number'>
              <h2>{shipmentArray?.trackingNumber}</h2>
            </div>
            <div>
              <p className='payment-tracking-number-text'>
                This is your tracking number you can use it to track your
                shipment form anywhere at anytime!
              </p>
              <p className='payment-tracking-number-warning'>
                N:B Please dont forget your Tracking number
              </p>
            </div>
            <div className='payment-close-modal' onClick={handleCloseModal}>
              <i className='fa-solid fa-x'></i>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default ShipmentPayment;
