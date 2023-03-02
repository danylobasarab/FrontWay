import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
// save store for update
const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
// save store for update
persistStore(store);
export default store;
