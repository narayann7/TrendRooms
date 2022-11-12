import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setUser, logout } from "../controllers/slices/userSlice";
import { showSnackbar } from "../controllers/slices/snackbarSlice";
import LocalStorage from "../services/localStorage";
import AppSnackbar from "../components/AppSnackbar";
import axiosClient from "../services/axiosClient";
import Urls from "../services/urls";

function HomePage() {
  const userData = useSelector((state) => state.userReducer.user);
  const { open } = useSelector((state) => state.snackbarReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutOnClick = () => {
    navigate("/auth", {
      replace: true,
    });
    dispatch(logout());
    dispatch(
      showSnackbar({
        message: "Logged out successfully",
        type: "info",
      })
    );
  };

  useEffect(() => {
    var data = LocalStorage.getUserData();
    dispatch(setUser(data));
    console.log(data);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div>{userData.email}</div>
        <Button
          onClick={logoutOnClick}
          sx={{
            color: "white",
            backgroundColor: "#212123",
            "&:hover": {
              backgroundColor: "#212123",
            },
            marginTop: "15px",
          }}
        >
          Logout
        </Button>
        <AppSnackbar />
      </div>
    </>
  );
}

export default HomePage;
