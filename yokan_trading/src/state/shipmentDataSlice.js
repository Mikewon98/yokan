import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const GeneratedTrackingString = nanoid(10).toUpperCase();

const initialState = [
  // {
  //   id: "1",
  //   userId: "awdb",
  //   trackingNumber: "YSWNMKVDQ3",
  //   originCountry: "Ethadwadiopia",
  //   originFullName: "Michaadddel",
  //   originAddress: "Bawdole",
  //   originAddressTwo: "sf",
  //   originCity: "sfef",
  //   originState: "sef",
  //   originPostalCode: "sffsef",
  //   senderEmail: "mikewsefcom",
  //   senderPhoneNumber: "2sf35",
  //   destinationCountry: "sef",
  //   destinationFullName: "sf f",
  //   destinationAddress: "efon",
  //   destinationAddressTwo: "",
  //   destinationCity: "sefity",
  //   destinationState: "ef",
  //   destinationPostalCode: "e",
  //   reciverEmail: "miefm",
  //   reciverPhoneNumber: "f",
  // },
];

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

export const { shipmentAdded, clearShipmentData } = shipmentDataSlice.actions;

export default shipmentDataSlice.reducer;
