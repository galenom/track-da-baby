import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../utils/firebase/init";

interface RequireAuthProps {
  children: any;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();

  console.log(auth);

  if (!auth?.currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
