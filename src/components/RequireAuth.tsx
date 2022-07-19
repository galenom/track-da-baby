import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LOCAL_STORAGE_REDIRECT_KEY } from "../App";
import { useAuthorizedUser } from "../utils/AuthContext";

interface RequireAuthProps {
  children: any;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const { pathname } = useLocation();

  if (!useAuthorizedUser()) {
    window.localStorage.setItem(LOCAL_STORAGE_REDIRECT_KEY, pathname);
    return <Navigate to="/login" replace />;
  }
  return children;
};
