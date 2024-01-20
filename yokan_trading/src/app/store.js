import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../state/authSlice";
import shipmentDataReducer from "../state/shipmentDataSlice";
import shipmentDataItemReducer from "../state/shipmentDataItemSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  // version: 1,
  storage,
};

const reducer = combineReducers({
  auth: authReducer,
  shipmentDataItem: shipmentDataItemReducer,
  shipmentData: shipmentDataReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
