import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import LocalStorage from "./../services/localStorage";

function ProtectedRoute() {
  const refreshToken = LocalStorage.getRefreshToken();
  const accessToken = LocalStorage.getAccessToken();
  return ((refreshToken == null || !(refreshToken.length >= 200)) &&
    accessToken == null) ||
    !(accessToken.length >= 200) ? (
    <Navigate to={"/"} replace />
  ) : (
    <Outlet />
  );
}

export default ProtectedRoute;
