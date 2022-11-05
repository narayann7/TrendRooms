import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const token = localStorage.getItem("refreshToken");

  return token == null || !(token.length >= 30) ? (
    <Navigate to={"/"} replace />
  ) : (
    <Outlet />
  );
}

export default ProtectedRoute;
