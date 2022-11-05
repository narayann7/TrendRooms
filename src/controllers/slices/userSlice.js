import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "../../services/local_storage";

const initialState = {
  user: {},
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = {};
    },
    logout: (state) => {
      state.user = {};
      LocalStorage.deleteAll();
    },
  },
});

export const { setUser, deleteUser, logout } = userSlice.actions;
export default userSlice.reducer;
