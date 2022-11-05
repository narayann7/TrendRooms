import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStepindex: 1,
};

export const authStepSlice = createSlice({
  name: "authStep",
  initialState,
  reducers: {
    nextStep: (state) => {
      var index = state.authStepindex;
      if (index + 1 !== 5) {
        index += 1;
      }
      state.authStepindex = index;
    },
    previousStep: (state) => {
      var index = state.authStepindex;
      if (index - 1 !== 1) {
        index -= 1;
      }
      state.authStepindex = index;
    },
  },
});

export const { nextStep, previousStep } = authStepSlice.actions;

export default authStepSlice.reducer;
