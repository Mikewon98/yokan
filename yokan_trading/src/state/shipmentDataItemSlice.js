import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

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
        dropOffDate,
        price
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
            price,
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
