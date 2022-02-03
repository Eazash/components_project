import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      const indexToDelete = state.value.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      state.value.splice(indexToDelete, 1);
    },
  },
});

export default basketSlice.reducer;
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const getBasket = createSelector(
  [(state) => state.basket.value],
  (basket) => {
    console.log(basket);
    return basket;
  }
);

export const getBasketTotal = createSelector(
  [(state) => state.basket.value],
  (basket) => basket?.reduce((amount, item) => item.price + amount, 0)
);
