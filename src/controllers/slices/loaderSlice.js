import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  title: "loading",
};
export const toastLoaderSlice = createSlice({
  name: "toastLoader",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    makeDefaultTitle: (state) => {
      state.title = "loading";
    },
    showLoader: (state) => {
      state.isLoading = true;
    },
    hideLoader: (state) => {
      state.isLoading = false;
    },
  },
});

export const { showLoader, hideLoader, setTitle, makeDefaultTitle } =
  toastLoaderSlice.actions;
export default toastLoaderSlice.reducer;
