import { configureStore } from "@reduxjs/toolkit";
import authStepReducer from "./slices/authStepSlice";
import toastLoaderReducer from "./slices/loaderSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: { authStepReducer, toastLoaderReducer, userReducer },
});
