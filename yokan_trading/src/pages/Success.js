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
        <h1 className='success-modal-content-heading'>
          {" "}
          {trackingNumber ? "Payment Completed" : "Something Occured"}
        </h1>

        <div className='success-show-tracking-number'>
          <h2>{trackingNumber ?? "Please Try Again"}</h2>
        </div>
        <div>
          <p className='success-tracking-number-text'>
            This is your tracking number you can use it to track your shipment
            form anywhere at anytime!
          </p>
          <p className='success-tracking-number-warning'>
            N:B Please dont forget your Tracking number
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
