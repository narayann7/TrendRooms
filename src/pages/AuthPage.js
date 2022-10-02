import React from "react";
import common_components from "../components/CommonComponents";
import { Box } from "@mui/material";
import { base_box, auth_center_box, bg } from "../theme/CommonStyles";
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
        <Box sx={auth_center_box}></Box>
      </Box>
    </Box>
  );
}

export default AuthPage;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
