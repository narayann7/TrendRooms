import { configureStore } from "@reduxjs/toolkit";
import authStepReducer from "./slices/authStepSlice";
export const store = configureStore({
  reducer: { authStepReducer },
});
