import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = localStorage.getItem("response"); // check token or cookie

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
