import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Test from "./pages/Test";
import ErrorPage from "./pages/ErrorPage";

import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="auth" />} />
      <Route path="auth" element={<AuthPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="home" element={<HomePage />} />
        <Route path="test" element={<Test />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
