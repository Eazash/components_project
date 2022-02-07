import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { id: null, email: null, username: null, isAdmin: false },
  users: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      console.log(action.payload);
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
    saveUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { saveUser, removeUser, saveUsers } = authSlice.actions;

export default authSlice.reducer;

export const isLoggedIn = createSelector(
  [
    (state) => {
      return state.auth.value;
    },
  ],
  (user) => user.id !== null && user.id !== ""
);

export const isAdmin = createSelector(
  [(state) => state.auth.value],
  (user) => user.isAdmin
);

export const getUsers = createSelector(
  [(state) => state.auth.users],
  (users) => users
);
