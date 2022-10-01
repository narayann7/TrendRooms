import React from "react";
import common_components from "../components/CommonComponents";
import { Box } from "@mui/material";
import { app_button_2, textfield_style } from "../theme/CommonStyles";
import Spacer from "../components/Spacer";
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
    <Box sx={textfield_style}>
      {" "}
      <Text variant="h6"> Okay 🥺 please select a Pic! </Text>
      <Spacer height={20} />
      <div>
        <input
          onChange={captureImage}
          id="avatarInput"
          type="file"
          style={{ display: "none" }}
        />
        <label
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "100px",
            width: "100px",
            backgroundColor: "white",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          htmlFor="avatarInput"
        >
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
