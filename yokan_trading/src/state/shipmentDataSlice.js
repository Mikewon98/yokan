import { createSlice, nanoid } from "@reduxjs/toolkit";

export const GeneratedTrackingString = nanoid(10).toUpperCase();

// export const generateRandomString = () => {
//   const randomString = nanoid(10).toUpperCase();
//   console.log(randomString);
//   // You can perform other actions with the generated string here if needed
//   return randomString;
// };

const initialState = [];

export const shipmentDataSlice = createSlice({
  name: "shipmentData",
  initialState,
  reducers: {
    shipmentAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(
        userId,
        trackingNumber,
        originCountry,
        originFullName,
        originAddress,
        originAddressTwo,
        originCity,
        originState,
        originPostalCode,
        senderEmail,
        senderPhoneNumber,
        destinationCountry,
        destinationFullName,
        destinationAddress,
        destinationAddressTwo,
        destinationCity,
        destinationState,
        destinationPostalCode,
        reciverEmail,
        reciverPhoneNumber
      ) {
        return {
          payload: {
            id: nanoid(),
            userId,
            trackingNumber,
            originCountry,
            originFullName,
            originAddress,
            originAddressTwo,
            originCity,
            originState,
            originPostalCode,
            senderEmail,
            senderPhoneNumber,
            destinationCountry,
            destinationFullName,
            destinationAddress,
            destinationAddressTwo,
            destinationCity,
            destinationState,
            destinationPostalCode,
            reciverEmail,
            reciverPhoneNumber,
          },
        };
      },
    },
    clearShipmentData: (state) => {
      return initialState;
    },
  },
});

export const selectShipment = (state) => state.shipmentData;

export const selectTrackingNumber = (state) =>
  state.shipmentData[0]?.trackingNumber;

export const { shipmentAdded, clearShipmentData } = shipmentDataSlice.actions;

export default shipmentDataSlice.reducer;
