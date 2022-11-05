import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setUser } from "../controllers/slices/userSlice";
import LocalStorage from "../services/local_storage";

function HomePage() {
  const userData = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("user data");

    var data = LocalStorage.getUserData();
    dispatch(setUser(data));
  }, []);

  return (
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
        onClick={() => {
          localStorage.removeItem("refreshToken");
          navigate("/auth");
        }}
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
    </div>
  );
}

export default HomePage;
