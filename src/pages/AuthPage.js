import React, { useEffect } from "react";
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
import ToastLoader from "./../components/ToastLoader";
import AskBio from "./../components/auth/AskBio";
import { useSearchParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { previousStep, nextStep } from "./../controllers/slices/authStepSlice";
import LocalStorage from "../services/local_storage";
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
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    let authType = searchParams.get("authType");
    let refreshToken = searchParams.get("token");
    LocalStorage.setRefreshToken(refreshToken);
    searchParams.delete("authType");
    searchParams.delete("token");
    if (authType === "signup") {
      dispatch(nextStep());
    } else {
      if (refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
        console.log("refreshtoken", refreshToken);
        //get user data
      }
    }

    // return () => setSearchParams(searchParams);
  }, [dispatch, searchParams, setSearchParams]);
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
              display: authStepIndex <= 2 ? "none" : "flex",
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
                  key={index}
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
      <ToastLoader />
    </Box>
  );
}

export default AuthPage;
