import React from "react";
import { Box } from "@mui/system";
import common_components from "../CommonComponents";
import { center_column } from "./../../theme/CommonStyles";
import Spacer from "../Spacer";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  hideLoader,
  showLoader,
  setTitle,
} from "./../../controllers/slices/snackbarSlice";
import {
  nextStep,
  previousStep,
} from "./../../controllers/slices/authStepSlice";
import Urls from "../../services/urls";
import axiosClient from "./../../services/axios_client";
import LocalStorage from "./../../services/local_storage";

function Welcome() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => {
    return {
      isLoading: state.snackbarReducer.isLoading,
      loaderTitle: state.snackbarReducer.title,
    };
  });
  return (
    <Box sx={center_column}>
      <Text variant="h4">Welcome ✨ </Text>
      <Spacer height={30} />
      <AppButton
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
        onClick={() => {
          // console.log("token", axiosClient.defaults.headers);
          var token = LocalStorage.getRefreshToken();
          axiosClient.defaults.headers = {
            Authorization: `Bearer ${token}`,
          };
          axiosClient.get(Urls.getUser).then((res) => {
            console.log("res", res.data);
          });

          // var refreshToken = localStorage.getItem("refreshToken");
          // console.log("refreshToken", refreshToken);

          // dispatch(setTitle("Signing in with Github"));
          // if (isLoading) {
          //   dispatch(hideLoader());
          // } else {
          //   dispatch(showLoader());
          // }
          // dispatch(nextStep());
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
        onClick={() => {
          // dispatch(setTitle("Signing in with LinkedIn"));
          // if (isLoading) {
          //   dispatch(hideLoader());
          // } else {
          //   dispatch(showLoader());
          // }
          dispatch(nextStep());
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
