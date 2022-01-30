import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const indexToDelete = state.value.findIndex(
        (product) => product.id === action.payload.id
      );
      state.value.splice(indexToDelete, 1);
    },
    setProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addProduct, deleteProduct, setProducts } = productSlice.actions;

export default productSlice.reducer;
