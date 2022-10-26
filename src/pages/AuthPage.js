import React from "react";
import common_components from "../components/CommonComponents";
import { Box, Snackbar, CircularProgress } from "@mui/material";
import {
  base_box,
  center_row,
  auth_center_box,
  bg,
  back_button,
} from "../theme/CommonStyles";
import Welcome from "./../components/auth/Welcome";
import AskName from "./../components/auth/AskName";
import SelectAvatar from "./../components/auth/SelectAvatar";
import AskBio from "./../components/auth/AskBio";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { previousStep } from "./../controllers/slices/authStepSlice";
import Spacer from "./../components/Spacer";
function AuthPage() {
  const authStepsHash = {
    1: <Welcome />,
    2: <AskName />,
    3: <SelectAvatar />,
    4: <AskBio />,
  };
  const authStepIndex = useSelector(
    (state) => state.authStepReducer.authStepindex
  );
  const dispatch = useDispatch();
  const { isLoading, loaderTitle } = useSelector((state) => {
    return {
      isLoading: state.toastLoaderReducer.isLoading,
      loaderTitle: state.toastLoaderReducer.title,
    };
  });
  return (
    <Box>
      <Box
        sx={{
          ...base_box,
          ...bg,
        }}
      ></Box>
      <Box sx={base_box}>
        <Box
          sx={{
            ...auth_center_box,
            position: "relative",
          }}
        >
          <Box
            onClick={() => {
              dispatch(previousStep());
            }}
            sx={{
              ...back_button,
              display: authStepIndex === 1 ? "none" : "flex",
            }}
          >
            <MdOutlineKeyboardArrowLeft size={25} />
          </Box>
          {authStepsHash[authStepIndex]}
          <Box
            sx={{
              ...center_row,
              position: "absolute",
              display: authStepIndex === 1 ? "none" : "flex",
              bottom: "15px",
            }}
          >
            {[2, 3, 4].map((index) => {
              return (
                <Box
                  sx={{
                    height: "6px",
                    width: "6px",
                    padding: "3.5px",
                    margin: "3px",
                    backgroundColor:
                      authStepIndex === index ? "white" : "#212123",
                    borderRadius: "50%",
                  }}
                ></Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <ToastLoader isLoading={isLoading} loaderTitle={loaderTitle} />
    </Box>
  );
}

function ToastLoader({ isLoading, loaderTitle }) {
  return (
    <Snackbar
      open={isLoading}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      tabIndex
    >
      <Box
        sx={{
          backgroundColor: "#212123",
          display: "flex",
          paddingLeft: "1.2rem",
          paddingRight: "0.3rem",
          paddingTop: "0.3rem",
          paddingBottom: "0.3rem",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          outline: "none",
          borderRadius: "5px",
        }}
      >
        <Text>{loaderTitle}</Text>
        <Spacer width={20} />
        <CircularProgress
          size={20}
          sx={{ color: "white", marginRight: "10px" }}
        />
      </Box>
    </Snackbar>
  );
}

export default AuthPage;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
