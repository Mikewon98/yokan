import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTrackingNumber } from "../state/shipmentDataSlice";
import "../components/Success.css";

const Success = () => {
  const trackingNumber = useSelector(selectTrackingNumber);
  console.log(trackingNumber);

  useEffect(() => {
    // const addShipment = async () => {
    //   try {
    //     setError(null);
    //     setLoading(true);
    //     const shipmentDataResponse = await axios.post(
    //       "http://localhost:3001/shipment/createShipment",
    //       {
    //         userId: user._id,
    //         trackingNumber: shipmentArray.trackingNumber,
    //         originCountry: shipmentArray.originCountry,
    //         originState: shipmentArray.originState,
    //         originCity: shipmentArray.originCity,
    //         originPostalCode: shipmentArray.originPostalCode,
    //         senderFullName: shipmentArray.originFullName,
    //         senderAddress: shipmentArray.originAddress,
    //         senderAddressTwo: shipmentArray.originAddressTwo,
    //         senderEmail: shipmentArray.senderEmail,
    //         senderPhoneNumber: shipmentArray.senderPhoneNumber,
    //         destinationCountry: shipmentArray.destinationCountry,
    //         destinationState: shipmentArray.destinationState,
    //         destinationCity: shipmentArray.destinationCity,
    //         destinationPostalCode: shipmentArray.destinationPostalCode,
    //         reciverFullName: shipmentArray.destinationFullName,
    //         reciverAddress: shipmentArray.destinationAddress,
    //         reciverAddressTwo: shipmentArray.destinationAddressTwo,
    //         reciverEmail: shipmentArray.reciverEmail,
    //         reciverPhoneNumber: shipmentArray.reciverPhoneNumber,
    //         shipmentType: shipmentItemArray.packageType,
    //         shipmentWeight: shipmentItemArray.weight,
    //         shipmentLength: shipmentItemArray.length,
    //         shipmentWidth: shipmentItemArray.width,
    //         shipmentHeight: shipmentItemArray.height,
    //         shipmentDropOffDate: shipmentItemArray.dropOffDate,
    //         shipmentDescription: shipmentItemArray.discription,
    //         price: price,
    //       },
    //       {
    //         headers: { "Content-Type": "application/json" },
    //       }
    //     );
    //     await shipmentDataResponse.data;
    //     setPaymentModal(!paymentModal);
    //     setLoading(false);
    //   } catch (e) {
    //     console.log(e);
    //     setLoading(false);
    //     setError("An error occurred. Please try again.");
    //   }
    // };
  }, []);

  return (
    <div className='success-main'>
      <div className='success-modal-content'>
        <h1 className='success-modal-content-heading'>Payment Completed</h1>
        <div>
          <p className='success-tracking-number-text'>
            You can view your shipment in the shipment history
          </p>
          <p className='success-tracking-number-warning'>
            You can use our tracking system to track your shipment at anytime
            using your Tracking Number
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
