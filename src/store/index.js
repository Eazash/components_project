import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";
import productsReducer from "./productSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    products: productsReducer,
    auth: authReducer,
  },
});
