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
import AppSnackbar from "../components/AppSnackbar";
import AskBio from "./../components/auth/AskBio";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { previousStep, nextStep } from "./../controllers/slices/authStepSlice";
import {
  setTitle,
  hideLoader,
  showLoader,
} from "./../controllers/slices/snackbarSlice";
import LocalStorage from "../services/local_storage";
import axiosClient from "./../services/axios_client";
import Urls from "./../services/urls";
function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const authStepIndex = useSelector(
    (state) => state.authStepReducer.authStepindex
  );
  //signup steps
  const authStepsHash = {
    1: <Welcome />,
    2: <AskName />,
    3: <SelectAvatar />,
    4: <AskBio />,
  };

  useEffect(() => {
    //getting the token and authType from the params
    let authType = searchParams.get("authType");
    let refreshToken = searchParams.get("token");

    //if the refreshToken is not null
    if (refreshToken) {
      //setting the token in the local storage
      LocalStorage.setRefreshToken(refreshToken);

      //deleting the token from the params
      searchParams.delete("authType");
      searchParams.delete("token");
      setSearchParams(searchParams);

      //checking the authType if signup or login
      if (authType === "signup") {
        //if signup then setting the next signup step
        dispatch(nextStep());
      } else {
        //saving the token in local storage
        var token = LocalStorage.getRefreshToken();
        //setting the token in the axios client
        axiosClient.defaults.headers = {
          Authorization: `Bearer ${token}`,
        };
        dispatch(setTitle("Logging you in..."));
        dispatch(showLoader());
        //getting the user data from the server
        axiosClient.get(Urls.getUser).then((res) => {
          if (res.status === 200) {
            //if the user data is fetched successfully
            //then navigating to the home page
            console.log("res", res.data.user);
            dispatch(hideLoader());
            //setting the user data in local storage
            LocalStorage.setUserData(res.data.user);

            navigate("/home");
          } else {
            console.log("error", res);
          }
        });
      }
    }
  }, []);
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
            className="dots"
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
      <AppSnackbar />
    </Box>
  );
}

export default AuthPage;
