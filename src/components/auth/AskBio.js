import React from "react";
import common_components from "./CommonComponents";
import { Box, InputBase } from "@mui/material";
import {
  center_column,
  textfield_style,
  app_button_2,
} from "../theme/CommonStyles";
import Spacer from "./Spacer";
import { RiArrowRightSLine } from "react-icons/ri";
function AskBio() {
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
