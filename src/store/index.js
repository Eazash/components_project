import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";
import productsReducer from "./productSlice";
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    products: productsReducer,
  },
});
