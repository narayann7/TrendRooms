import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import { selectAvatarLable } from "../theme/CommonStyles";
import { setUser, logout } from "../controllers/slices/userSlice";
import { showSnackbar } from "../controllers/slices/snackbarSlice";
import LocalStorage from "../services/localStorage";
import AppSnackbar from "../components/AppSnackbar";
import axiosClient from "../services/axiosClient";
import Urls from "../services/urls";
import Spacer from "../components/Spacer";
import Header from "./../components/Header";
import Rooms from "../components/home/Rooms";

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
      <Header />
      <Outlet />
    </>
  );
}

export default HomePage;
{
  /* <div
style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
}}
>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "50vh",
    width: "30vw",
    borderRadius: "10px",
    backgroundColor: "#212123",
  }}
>
  <div>
    <img
      referrerPolicy="no-referrer"
      style={selectAvatarLable}
      height={100}
      src={userData.displayPicture}
      alt="select avatar"
      loading="lazy"
    />
  </div>
  <Spacer height={20} />
  <div>{userData.name}</div>
  <Spacer height={10} />
  <div>{userData.email}</div>

  <Button
    onClick={logoutOnClick}
    sx={{
      color: "white",
      backgroundColor: "#212123",
      "&:hover": {
        backgroundColor: "black",
      },
      marginTop: "15px",
    }}
  >
    Logout
  </Button>
  <AppSnackbar />
</div>
</div> */
}
