import { configureStore } from "@reduxjs/toolkit";
import authStepReducer from "./slices/authStepSlice";
import snackbarReducer from "./slices/snackbarSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: { authStepReducer, snackbarReducer, userReducer },
});
