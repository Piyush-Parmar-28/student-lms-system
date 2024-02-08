import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const myState = useSelector((state: any) => state.manageAuth);

  if (!myState.authorized) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
