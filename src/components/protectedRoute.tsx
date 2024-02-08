import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //  Get state (item) from redux store using useSelector
  //  The below code means: from all the available states in the store, get the state from manage
  const myState = useSelector((state: any) => state.manageAuth);

  if (!myState.authorized) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
