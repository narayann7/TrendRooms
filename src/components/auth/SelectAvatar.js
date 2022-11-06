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
import { useDispatch } from "react-redux";
import { nextStep } from "./../../controllers/slices/authStepSlice";

function SelectAvatar({ updateData, setupdateData }) {
  const dispatch = useDispatch();

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {};
  }
  return (
    <Box sx={center_column}>
      <Text variant="h6"> Okay 🥺 please select an avatar </Text>
      <Spacer height={20} />
      <div>
        <img
          referrerPolicy="no-referrer"
          style={selectAvatarLable}
          height={100}
          src={updateData.displayPicture}
          alt="error"
          loading="lazy"
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          width: "100%",
          marginLeft: "30px",
        }}
      >
        <div>
          <input
            onChange={captureImage}
            id="avatarInput"
            type="file"
            style={{ display: "none" }}
          />
          <label
            style={{
              height: "20px",
              borderRadius: "5%",
              backgroundColor: "#212123",
              paddingLeft: "8px",
              paddingRight: "8px",
            }}
            htmlFor="avatarInput"
          >
            <Text variant="h7">{"choose"}</Text>
          </label>
        </div>
      </div>

      <AppButton
        onClick={() => {
          dispatch(nextStep());
        }}
        sx={{ ...app_button_2 }}
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
