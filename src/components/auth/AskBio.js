import React from "react";
import { Box, InputBase } from "@mui/material";
import Spacer from "../Spacer";
import common_components from "../CommonComponents";
import {
  center_column,
  textfield_style,
  app_button_2,
} from "./../../theme/CommonStyles";
import { RiArrowRightSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  showSnackbar,
  showLoader,
  hideLoader,
} from "./../../controllers/slices/snackbarSlice";
import { makeItInitial } from "./../../controllers/slices/authStepSlice";
import Urls from "../../services/urls";
import axiosClient from "../../services/axios_client";
import LocalStorage from "../../services/local_storage";
import { useNavigate } from "react-router-dom";

function AskBio({ updateData, setupdateData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onchange = (e) => {
    e.preventDefault();
    setupdateData({ ...updateData, bio: e.target.value });
  };
  const { isLoading } = useSelector((state) => state.snackbarReducer);
  const next = () => {
    //trimming the bio
    let bio = updateData.bio.trim();
    //remove extra spaces
    bio = bio.replace(/\s+/g, " ");
    setupdateData({ ...updateData, bio: bio });
    if (!isLoading) {
      var token = LocalStorage.getRefreshToken();
      //setting the token in the axios client
      axiosClient.defaults.headers = {
        Authorization: `Bearer ${token}`,
      };
      dispatch(showLoader());
      axiosClient
        .put(Urls.user, {
          name: updateData.name,
          bio: updateData.bio,
          displayPicture: updateData.displayPicture,
        })
        .then((res) => {
          if (res.status === 200) {
            dispatch(hideLoader());
            LocalStorage.setUserData(res.data.user);
            dispatch(makeItInitial());
            navigate("/home", {
              replace: true,
            });
            console.log(res.data);
          } else {
            throw new Error("Something went wrong");
          }
        })
        .catch((err) => {
          dispatch(hideLoader());
          dispatch(
            showSnackbar({ message: "Something went wrong", type: "error" })
          );
          console.log("error");
        });
    }
  };
  return (
    <Box sx={center_column}>
      <Text variant="h6">Tell me about yourself 💭 </Text>
      <Spacer height={10} />
      <Box
        sx={{
          ...textfield_style,
          height: "120px",
        }}
      >
        <InputBase
          className="bio_textfield"
          multiline={true}
          rows="4"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              next();
            }
          }}
          type="text"
          value={updateData.bio}
          onChange={onchange}
          placeholder="enter your bio..."
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

export default AskBio;
const Text = common_components.Text;
const AppButton = common_components.AppButton;
