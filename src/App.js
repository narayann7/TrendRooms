import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";
import Test from "./pages/Test";
import "./App.css";
import LocalStorage from "./services/local_storage";

function App() {
  const token = LocalStorage.getRefreshToken();
  const isDev = false;

  return !isDev ? (
    <Routes>
      <Route path="/" element={<Navigate to={!token ? "auth" : "home"} />} />

      <Route element={<PublicRoute />}>
        <Route path="auth" element={<AuthPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="home" element={<HomePage />} />
      </Route>
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/*" element={<Navigate to="test" />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
