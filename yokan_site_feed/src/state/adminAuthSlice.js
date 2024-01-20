import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminUser: null,
  adminToken: null,
  adminTokenExpiration: null,
};

export const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    loginAdmin: (state, action) => {
      const { adminUser, adminToken, adminTokenExpiration } = action.payload;
      state.adminUser = adminUser;
      state.adminToken = adminToken;
      state.adminTokenExpiration = adminTokenExpiration;
    },
    logoutAdmin: (state) => {
      state.adminUser = null;
      state.adminToken = null;
      state.adminTokenExpiration = null;
    },
  },
});

export const { loginAdmin, logoutAdmin } = adminAuthSlice.actions;
export const SelectAdmin = (state) => state.adminAuth.adminUser;
export const SelectAdminToken = (state) => state.adminAuth.adminToken;
export const SelectAdminTokenExpiration = (state) =>
  state.adminAuth.adminTokenExpiration;

export default adminAuthSlice.reducer;
