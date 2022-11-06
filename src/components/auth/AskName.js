import React, { useEffect, useState } from "react";
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
import { showSnackbar } from "./../../controllers/slices/snackbarSlice";
function AskName({ updateData, setupdateData }) {
  const dispatch = useDispatch();

  const onchange = (e) => {
    e.preventDefault();
    setupdateData({ ...updateData, name: e.target.value });
  };

  const next = () => {
    //regex for name
    let regex = /^[a-zA-Z ]{3,30}$/;
    //trimming the name
    let trimmedName = updateData.name.trim();
    //remove extra spaces
    trimmedName = trimmedName.replace(/\s+/g, " ");
    if (!regex.test(trimmedName)) {
      dispatch(
        showSnackbar({
          message: "Name should be atleast 3 characters long",
          type: "error",
        })
      );
      return;
    }
    setupdateData({ ...updateData, name: trimmedName });
    console.log("name", updateData);
    dispatch(nextStep());
  };

  return (
    <Box sx={center_column}>
      <Text variant="h6">🤔 What's your name? </Text>
      <Spacer height={10} />
      <Box className="name_textfield" sx={textfield_style}>
        <InputBase
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              next();
            }
          }}
          type="text"
          value={updateData.name}
          onChange={onchange}
          placeholder="Your name"
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

export default AskName;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
