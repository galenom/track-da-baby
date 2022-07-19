import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthorizedUser } from "../utils/AuthContext";
import { auth } from "../utils/firebase/init";

interface RequireAuthProps {
  children: any;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();

  if (!useAuthorizedUser()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
