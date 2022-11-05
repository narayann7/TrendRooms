import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
  const token = localStorage.getItem("refreshToken");
  return token == null || !(token.length >= 30) ? (
    <Outlet />
  ) : (
    <Navigate to={"/home"} replace />
  );
}

export default PublicRoute;
