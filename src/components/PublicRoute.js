import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import LocalStorage from "../services/localStorage";

function PublicRoute() {
  var refreshToken = LocalStorage.getRefreshToken();
  var accessToken = LocalStorage.getAccessToken();
  return (refreshToken == null || !(refreshToken.length >= 200)) &&
    (accessToken == null || !(accessToken.length >= 200)) ? (
    <Outlet />
  ) : (
    <Navigate to={"/home"} replace />
  );
}

export default PublicRoute;
