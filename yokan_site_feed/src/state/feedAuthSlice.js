import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feederUser: null,
  feederToken: null,
  feederTokenExpiration: null,
};

export const feederAuthSlice = createSlice({
  name: "feederAuth",
  initialState,
  reducers: {
    loginFeeder: (state, action) => {
      const { feederUser, feederToken, feederTokenExpiration } = action.payload;
      state.feederUser = feederUser;
      state.feederToken = feederToken;
      state.feederTokenExpiration = feederTokenExpiration;
    },
    logoutFeeder: (state) => {
      state.feederUser = null;
      state.feederToken = null;
      state.feederTokenExpiration = null;
    },
  },
});

export const { loginFeeder, logoutFeeder } = feederAuthSlice.actions;
export const SelectFeeder = (state) => state.feederAuth.feederUser;
export const SelectFeederToken = (state) => state.feederAuth.feederToken;
export const SelectFeederTokenExpiration = (state) =>
  state.feederAuth.feederTokenExpiration;

export default feederAuthSlice.reducer;
