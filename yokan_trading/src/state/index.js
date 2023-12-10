// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   token: null,
//   locationItem: [],
//   shipmentItem: [],
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setLogin: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     setLogout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//     setLocation: (state, action) => {
//       state.locationItem = action.payload.locationItem;
//     },
//     setShipmentItem: (state, action) => {
//       state.shipmentItem = action.payload.shipmentItem;
//     },
//   },
// });

// export const { setLogin, setLogout, setLocation, setShipmentItem } =
//   authSlice.actions;

// export default authSlice.reducer;
