import React from "react";
import { Box } from "@mui/system";
import common_components from "../CommonComponents";
import { center_column } from "./../../theme/CommonStyles";
import Spacer from "../Spacer";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Urls from "../../services/urls";
import axiosClient from "./../../services/axiosClient";

function Welcome() {
  return (
    <Box sx={center_column}>
      <Text variant="h4">Welcome ✨ </Text>
      <Spacer height={30} />
      <AppButton
        className="google_button"
        onClick={() => {
          window.location.href = Urls.loginWithGoogleUrl;
        }}
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
      </AppButton>
      <Spacer height={10} />
      <AppButton
        className="github_button"
        onClick={() => {
          window.location.href = Urls.loginWithGithubUrl;
        }}
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
        className="linkedin_button"
        onClick={() => {
          window.location.href = Urls.loginWithLinkedinUrl;
        }}
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
  );
}

export default Welcome;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
