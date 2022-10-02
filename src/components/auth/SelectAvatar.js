import React from "react";
import { Box } from "@mui/material";
import common_components from "../CommonComponents";
import {
  app_button_2,
  center_column,
  selectAvatarLable,
} from "./../../theme/CommonStyles";
import Spacer from "../Spacer";
import { FaPlus } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

function SelectAvatar() {
  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {};
  }
  return (
    <Box sx={center_column}>
      <Text variant="h6"> Okay 🥺 please select a Pic! </Text>
      <Spacer height={20} />
      <div>
        <input
          onChange={captureImage}
          id="avatarInput"
          type="file"
          style={{ display: "none" }}
        />
        <label style={selectAvatarLable} htmlFor="avatarInput">
          <FaPlus
            style={{
              fontSize: "35px",
              color: "black",
            }}
          />
        </label>
      </div>
      <Spacer height={30} />
      <AppButton
        sx={app_button_2}
        endIcon={<RiArrowRightSLine color="white" />}
      >
        <Text>Next</Text>
      </AppButton>
    </Box>
  );
}

export default SelectAvatar;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
