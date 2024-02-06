import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./feature/userSlice";
import cartSlice from "./feature/CartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const presistcartConfig = {
  key: "cart",
  storage,
};
const presistuserConfig = {
  key: "login",
  storage,
};

const presisiteduser = persistReducer(presistuserConfig, loginSlice);

const presisitedCart = persistReducer(presistcartConfig, cartSlice);

export const store = configureStore({
  reducer: {
    login: presisiteduser,
    cart: presisitedCart,
  },
});

export const persistor = persistStore(store);
