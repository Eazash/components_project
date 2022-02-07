import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { id: null, email: null, username: null, isAdmin: false },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      const { id, email, username, isAdmin } = action.payload;
      state.value = {
        id,
        email,
        username,
        isAdmin: isAdmin !== undefined && isAdmin,
      };
    },
    removeUser: (state, action) => {
      state.value = {
        id: "",
        email: "",
        username: "",
        isAdmin: "",
      };
    },
  },
});

export const { saveUser, removeUser } = authSlice.actions;

export default authSlice.reducer;

export const isLoggedIn = createSelector(
  [
    (state) => {
      return state.auth.value;
    },
  ],
  (user) => user.id !== null && user.id !== ""
);
