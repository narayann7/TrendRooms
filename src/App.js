import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";
import Test from "./pages/Test";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="auth" />} />
      <Route path="test" element={<Test />} />

      <Route path="auth" element={<AuthPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="home" element={<HomePage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
