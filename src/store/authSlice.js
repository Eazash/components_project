import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  username: null,
  isAdmin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      const { id, email, username, isAdmin } = action.payload;
      state.id = id;
      state.email = email;
      state.username = username;
      state.isAdmin = isAdmin !== undefined && isAdmin;
    },
  },
});

export const { saveUser } = authSlice.actions;

export default authSlice.reducer;
