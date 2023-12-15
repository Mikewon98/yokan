import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   id: "1",
  //   userId: "awd",
  //   trackingNumber: "awwd",
  //   packageType: "Mawd",
  //   weight: 4534,
  //   length: "This a pharmaceutical product",
  //   width: 34,
  //   height: 23,
  //   dropOffDate: "23/3/23",
  // },
];

export const shipmentDataItemSlice = createSlice({
  name: "shipmentDataItem",
  initialState,
  reducers: {
    shipmentItemAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(
        userId,
        packageType,
        weight,
        discription,
        length,
        width,
        height,
        dropOffDate
        // trackingNumber
      ) {
        return {
          payload: {
            id: nanoid(),
            userId,
            packageType,
            weight,
            discription,
            length,
            width,
            height,
            dropOffDate,
            // trackingNumber,
          },
        };
      },
    },
    clearShipmentItemAdded: (state) => {
      return initialState;
    },
  },
});

export const selectShipmentItem = (state) => state.shipmentDataItem;

export const { shipmentItemAdded, clearShipmentItemAdded } =
  shipmentDataItemSlice.actions;

export default shipmentDataItemSlice.reducer;
