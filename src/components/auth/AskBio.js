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
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "./../../controllers/slices/authStepSlice";
import { showSnackbar } from "./../../controllers/slices/snackbarSlice";
import Urls from "../../services/urls";
import axiosClient from "../../services/axios_client";
import LocalStorage from "../../services/local_storage";

function AskBio({ updateData, setupdateData }) {
  const dispatch = useDispatch();
  const onchange = (e) => {
    e.preventDefault();
    setupdateData({ ...updateData, bio: e.target.value });
  };
  const { isLoading } = useSelector((state) => state.snackbarReducer);
  const next = () => {
    //trimming the bio
    let bio = updateData.bio.trim();
    //remove extra spaces
    bio = bio.replace(/\s+/g, " ");
    setupdateData({ ...updateData, bio: bio });
    console.log(updateData);
    if (!isLoading) {
    }
  };
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
          className="bio_textfield"
          multiline={true}
          rows="4"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              next();
            }
          }}
          type="text"
          value={updateData.bio}
          onChange={onchange}
          placeholder="enter your bio..."
          sx={{
            color: "white",
          }}
        />
      </Box>
      <Spacer height={10} />
      <AppButton
        className="next_button"
        onClick={next}
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
