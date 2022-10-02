import React from "react";
import { Box, InputBase } from "@mui/material";
import Spacer from "../Spacer";
import common_components from "../CommonComponents";
import {
  center_column,
  textfield_style,
  app_button_2,
} from "./../../theme/CommonStyles";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  nextStep,
  previousStep,
} from "./../../controllers/slices/authStepSlice";

function AskBio() {
  const dispatch = useDispatch();

  return (
    <Box sx={center_column}>
      <Text variant="h6">Tell me about yourself 💭 </Text>
      <Spacer height={10} />
      <Box
        sx={{
          ...textfield_style,
          height: "120px",
        }}
      >
        <InputBase
          multiline="true"
          rows="4"
          type="text"
          placeholder="enter your bio..."
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

export default AskBio;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
