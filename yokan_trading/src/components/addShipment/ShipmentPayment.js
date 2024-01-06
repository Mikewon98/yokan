import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearShipmentData } from "../../state/shipmentDataSlice";
import { clearShipmentItemAdded } from "../../state/shipmentDataItemSlice";
import { selectShipment } from "../../state/shipmentDataSlice";
import { selectShipmentItem } from "../../state/shipmentDataItemSlice";
import { Selectuser } from "../../state/authSlice";
import chappa from "../../assets/Chapa Logo.png";
import axios from "axios";
import { Spin } from "antd";
import "./ShipmentPayment.css";

const ShipmentPayment = () => {
  const [paymentModal, setPaymentModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shipment = useSelector(selectShipment);
  const shipmentItem = useSelector(selectShipmentItem);
  const user = useSelector(Selectuser);
  const shipmentArray = shipment[0];
  const shipmentItemArray = shipmentItem[0];
  const [priceLoading, setPriceLoading] = useState(false);
  const [priceError, setPriceError] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPrice, setCurrentPrice] = useState({});

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

  const price =
    currentPrice.price *
    shipmentItemArray.length *
    shipmentItemArray.width *
    shipmentItemArray.height;

  const priceVat = price * 0.15;

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
          price: price,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      await shipmentDataResponse.data;
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  // dispatch(clearShipmentItemAdded());

  const handlePayment = () => {
    setPaymentModal(!paymentModal);
    addShipment();
  };

  const clearDispatch = () => {
    dispatch(clearShipmentData());
    dispatch(clearShipmentItemAdded());
    document.body.classList.remove("active-modal");
    navigate("/");
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

  if (paymentModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const productTable = shipmentItem?.map((item) => (
    <div key={item.id}>
      <p>{item.packageType}</p>
      <p>{item.weight}</p>
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
                    <p>{price > 0 ? price : 0} birr</p>
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
                  <p>{price > 0 ? price : 0} Birr</p>
                  <p> {priceVat > 0 ? priceVat : 0} Birr</p>
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
                  <input type='checkbox' />
                  <span className='checkmark'></span>I verify that my shipments
                  are within the dimensions and weight limits for selected
                  products and approve the terms of service, distance agreement
                  terms and general terms.
                </label>
              </div>
            </div>
            <div className='shipment-final-payment'>
              <div
                className='shipment-final-payment-button'
                onClick={handlePayment}
                // disabled={currentPrice ? false : true}
              >
                <p>Continue to payment</p>
              </div>
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
        {priceLoading && (
          <div className='loading-spin'>
            <Spin size='large' />
          </div>
        )}
        {priceError && <NotificationComponent error={priceError} />}
      </div>

      {paymentModal && (
        <div className='payment-modal'>
          <div onClick={handleCloseModal} className='payment-overlay'></div>
          <div className='payment-modal-content'>
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
          </div>
        </div>
      )}
    </>
  );
};

export default ShipmentPayment;
