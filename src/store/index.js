import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
