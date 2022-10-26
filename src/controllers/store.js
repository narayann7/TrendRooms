import { configureStore } from "@reduxjs/toolkit";
import authStepReducer from "./slices/authStepSlice";
import toastLoaderReducer from "./slices/loaderSlice";

export const store = configureStore({
  reducer: { authStepReducer, toastLoaderReducer },
});
