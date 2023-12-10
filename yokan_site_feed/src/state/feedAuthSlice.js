import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feederUser: null,
  feederToken: null,
};

export const feederAuthSlice = createSlice({
  name: "feederAuth",
  initialState,
  reducers: {
    loginFeeder: (state, action) => {
      const { feederUser, feederToken } = action.payload;
      state.feederUser = feederUser;
      state.feederToken = feederToken;
    },
    logoutFeeder: (state) => {
      state.feederUser = null;
      state.feederToken = null;
    },
  },
});

export const { loginFeeder, logoutFeeder } = feederAuthSlice.actions;
export const SelectFeeder = (state) => state.feederAuth.feederUser;
export const SelectFeederToken = (state) => state.feederAuth.feederToken;

export default feederAuthSlice.reducer;
