import React from "react";
import common_components from "../components/CommonComponents";
import { Box } from "@mui/material";
import { base_box, auth_center_box, bg } from "../theme/CommonStyles";
import Welcome from "./../components/auth/Welcome";
import AskName from "./../components/auth/AskName";
import SelectAvatar from "./../components/auth/SelectAvatar";
import AskBio from "./../components/auth/AskBio";
import { useSelector } from "react-redux";

function AuthPage() {
  const authStepIndex = useSelector(
    (state) => state.authStepReducer.authStepindex
  );
  return (
    <Box>
      <Box
        sx={{
          ...base_box,
          ...bg,
        }}
      ></Box>
      <Box sx={base_box}>
        <Box sx={auth_center_box}>{authStepHash[authStepIndex]}</Box>
      </Box>
    </Box>
  );
}

const authStepHash = {
  1: <Welcome />,
  2: <AskName />,
  3: <SelectAvatar />,
  4: <AskBio />,
};

export default AuthPage;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
