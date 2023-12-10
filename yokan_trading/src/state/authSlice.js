import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export const Selectuser = (state) => state.auth.user;
export const SelectToken = (state) => state.auth.token;

export default authSlice.reducer;
