import { Typography } from "@mui/material";
import React from "react";
import { useAuthorizedUser } from "../utils/AuthContext";

export const Home = () => {
  const user = useAuthorizedUser();

  return (
    <div>
      <Typography variant="h6">
        Hi {user?.displayName?.split(" ")[0]}!
      </Typography>
    </div>
  );
};
