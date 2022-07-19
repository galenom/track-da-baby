import { Typography } from "@mui/material";
import React from "react";
import { DiaperSelect } from "../components/DiaperSelect";
import { useAuthorizedUser } from "../utils/AuthContext";

export const Home = () => {
  const user = useAuthorizedUser();

  return (
    <div>
      <Typography variant="h6" textAlign="center">
        Hi {user?.displayName?.split(" ")[0]}!
      </Typography>
      <DiaperSelect />
    </div>
  );
};
