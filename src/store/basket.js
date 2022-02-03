import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
    },
  },
});

export default basketSlice.reducer;

export const getBasket = createSelector(
  [(state) => state.basket.value],
  (basket) => basket
);

export const getBasketTotal = createSelector(
  [(state) => state.basket.value],
  (basket) => basket?.reduce((amount, item) => item.price + amount, 0)
);
