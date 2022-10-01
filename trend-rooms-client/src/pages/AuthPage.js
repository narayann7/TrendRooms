import React from "react";
import common_components from "../components/CommonComponents";
import { Box, TextField, InputBase } from "@mui/material";
import Welcome from "./../components/Welcome";
import {
  base_box,
  auth_center_box,
  center_column,
  app_button_2,
  bg,
  textfield_style,
} from "../theme/CommonStyles";
import Spacer from "../components/Spacer";
import AskName from "../components/AskName";
import { FaPlus } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import app_images from "./../assets/exportImage";
import AskBio from "./../components/AskBio";
function AuthPage() {
  return (
    <Box>
      <Box
        sx={{
          ...base_box,
          ...bg,
        }}
      ></Box>
      <Box sx={base_box}>
        <Box sx={auth_center_box}>
          <AskBio />
        </Box>
      </Box>
    </Box>
  );
}

export default AuthPage;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
