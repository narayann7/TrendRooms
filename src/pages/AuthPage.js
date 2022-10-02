import React from "react";
import common_components from "../components/CommonComponents";
import { Box } from "@mui/material";
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
    </Box>
  );
}

export default AuthPage;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
