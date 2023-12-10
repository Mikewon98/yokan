import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminUser: null,
  adminToken: null,
};

export const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    loginAdmin: (state, action) => {
      const { adminUser, adminToken } = action.payload;
      state.adminUser = adminUser;
      state.adminToken = adminToken;
    },
    logoutAdmin: (state) => {
      state.adminUser = null;
      state.adminToken = null;
    },
  },
});

export const { loginAdmin, logoutAdmin } = adminAuthSlice.actions;
export const SelectAdmin = (state) => state.adminAuth.adminUser;
export const SelectAdminToken = (state) => state.adminAuth.adminToken;

export default adminAuthSlice.reducer;
