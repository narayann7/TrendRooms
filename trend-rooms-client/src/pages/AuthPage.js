import React from "react";
import common_components from "../components/CommonComponents";
import { Box, TextField, InputBase } from "@mui/material";
import Welcome from "./../components/Welcome";
import {
  base_box,
  auth_center_box,
  center_column,
  bg,
  textfield_style,
} from "../theme/CommonStyles";
import Spacer from "../components/Spacer";
import AskName from "../components/AskName";
import { FaPlus } from "react-icons/fa";
import app_images from "./../assets/exportImage";
function AuthPage() {
  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {};
  }
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
          <Text variant="h6"> Okay 🥺 please select a Pic! </Text>
          <Spacer height={20} />

          {/* <Box
            sx={{
              ...center_column,
              height: "100px",
              width: "100px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          >
            <FaPlus
              style={{
                fontSize: "35px",
                color: "black",
              }}
            />
          </Box> */}
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
        </Box>
      </Box>
    </Box>
  );
}

export default AuthPage;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
