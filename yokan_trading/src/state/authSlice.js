import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  tokenExpiration: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      const { user, token, tokenExpiration } = action.payload;
      state.user = user;
      state.token = token;
      state.tokenExpiration = tokenExpiration;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.tokenExpiration = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export const Selectuser = (state) => state.auth.user;
export const SelectToken = (state) => state.auth.token;
export const SelectTokenExpiration = (state) => state.auth.tokenExpiration;

export default authSlice.reducer;
