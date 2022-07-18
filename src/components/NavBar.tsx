import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles: any = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            TrackDaBaby
          </Typography>
          <Button color="inherit">Sign-in</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
