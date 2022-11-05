import React, { useEffect } from "react";
import { Box, InputBase } from "@mui/material";
import common_components from "../CommonComponents";
import {
  center_column,
  textfield_style,
  app_button_2,
} from "./../../theme/CommonStyles";
import Spacer from "../Spacer";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  nextStep,
  previousStep,
} from "./../../controllers/slices/authStepSlice";
function AskName() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <Box sx={center_column}>
      <Text variant="h6">🤔 What's your full name? </Text>
      <Spacer height={10} />
      <Box sx={textfield_style}>
        <InputBase
          type="text"
          placeholder="Your name"
          sx={{
            color: "white",
          }}
        />
      </Box>
      <Spacer height={10} />
      <AppButton
        onClick={() => {
          dispatch(nextStep());
        }}
        sx={app_button_2}
        endIcon={<RiArrowRightSLine color="white" />}
      >
        <Text>Next</Text>
      </AppButton>
    </Box>
  );
}

export default AskName;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
