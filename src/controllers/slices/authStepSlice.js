import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStepindex: 1,
};

export const authStepSlice = createSlice({
  name: "authStep",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.authStep += 1;
    },
    previousStep: (state) => {
      state.authStep -= 1;
    },
  },
});

export const { nextStep, previousStep } = authStepSlice.actions;

export default authStepSlice.reducer;
