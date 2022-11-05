import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  //for the loader
  isLoading: false,
  title: "loading",
  //for alert
  open: false,
  message: "",
  type: "success",
  //type can be success, error, warning, info
};
export const snackbarSlice = createSlice({
  name: "appSnackbar",
  initialState,
  reducers: {
    //for the loader
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
    //for alert
    showSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload.message ?? "";
      state.type = action.payload.type ?? "success";
    },
    closeSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const {
  showLoader,
  hideLoader,
  setTitle,
  makeDefaultTitle,
  showSnackbar,
  closeSnackbar,
} = snackbarSlice.actions;
export default snackbarSlice.reducer;
