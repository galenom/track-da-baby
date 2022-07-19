import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
// import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import React from "react";
import "./DiaperSelect.css";
import { DiaperState } from "../utils/diaper/types";
import { useAuthorizedUser } from "../utils/AuthContext";
import { logDiaperState } from "../utils/firebase/database";

interface DiaperSelectProps {}

export const DiaperSelect = (_: DiaperSelectProps) => {
  const user = useAuthorizedUser();

  const handleClick = (diaperState: DiaperState) => {
    if (user) {
      logDiaperState(user.uid, diaperState);
    }
  };

  return (
    <div className="diaper-select-container">
      <Typography variant="subtitle1">Select a diaper type</Typography>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <IconButton size="large" onClick={() => handleClick(DiaperState.DRY)}>
          🍀
        </IconButton>
        <IconButton size="large" onClick={() => handleClick(DiaperState.MIXED)}>
          ☣️
        </IconButton>
        <IconButton size="large" onClick={() => handleClick(DiaperState.DIRTY)}>
          💩
        </IconButton>
        <IconButton size="large" onClick={() => handleClick(DiaperState.WET)}>
          💧
        </IconButton>
      </ButtonGroup>
      {/* TODO: Allow custom diaper time  */}
      {/* <IconButton size="large">
        <DashboardCustomizeIcon />
      </IconButton> */}
    </div>
  );
};
