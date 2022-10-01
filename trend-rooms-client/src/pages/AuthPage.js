import React from "react";
import { Box } from "@mui/system";
import {
  base_box,
  auth_center_box,
  bg,
  center_row,
  center_column,
} from "../theme/CommonStyles";
import common_components from "../components/CommonComponents";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Spacer from "../components/Spacer";

function AuthPage() {
  return (
    <Box>
      <Box
        sx={{
          ...base_box,
          ...bg,
        }}
      ></Box>
      <Box
        sx={{
          ...base_box,
        }}
      >
        <Box sx={auth_center_box}>
          <Text variant="h4">Welcome ✨ </Text>
          <Spacer height={20} />
          <AppButton
            startIcon={
              <FcGoogle
                style={{
                  fontSize: "30px",
                  marginRight: "10px",
                }}
              />
            }
          >
            <Text>continue with Google </Text>
          </AppButton>{" "}
          <Spacer height={10} />
          <AppButton
            startIcon={
              <BsGithub
                style={{
                  fontSize: "30px",
                  marginRight: "10px",
                  color: "white",
                }}
              />
            }
          >
            <Text>continue with GitHub</Text>
          </AppButton>
          <Spacer height={10} />
          <AppButton
            startIcon={
              <FaLinkedin
                style={{
                  fontSize: "30px",
                  color: "#0078d4",
                }}
              />
            }
          >
            <Text>continue with Linkedin</Text>
          </AppButton>
        </Box>
      </Box>
    </Box>
  );
}

export default AuthPage;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
