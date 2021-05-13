import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Button, IconButton } from "@material-ui/core";
import { ArrowBack, LibraryBooks } from "@material-ui/icons";
import { Fade } from "@material-ui/core";
import Character from "./Character";
import Login from "./Login";
import Details from "./Details";

const useStyles = makeStyles((theme) => ({
  page: {
    position: "absolute",
  },
  container: {
    display: "grid",
    girdGap: theme.spacing(3),
  },
  gridItem: {
    height: "100%",
  },
  column: {
    height: "100vh",
    margin: "10px",
  },
  titleBar: {
    backgroundColor: "#76323f",
    height: "60px",
    paddingBottom: "5px",
  },
  tool: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolLeft: {
    display: "flex",
    alignItems: "center",
  },
  back: {
    backgroundColor: "#565656",
    alighItems: "center",
    justify: "center",
    flexWrap: "nowrap",
    height: "1420px",
    margin: "0px",
  },
  card: {
    backgroundColor: "#d7cec7",
    padding: "10px",
    marginTop: "2em",
    flexWrap: "nowrap",
  },
  classMenu: {
    marginLeft: "16px",
  },
  loginButton: {
    marginRight: "16px",
  },
}));

export default function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [details, setDetails] = useState(false);
  const [login, setLogin] = useState(true);
  const [values, setValues] = useState({
    health: "0",
    ac: "0",
    hit_die: "0",
    initiative: "0",
    movement: "0",
    proficiency: "0",
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const swapDetails = () => {
    setDetails((prev) => !prev);
  };

  const fadeLogin = () => {
    setLogin((prev) => !prev);
  };

  const handleChange = (props) => (event) => {
    console.log("handle Change called");
    setValues({ ...values, [props]: event.target.value });
    console.log(values);
  };

  const handleSave = () => {
    /* Pass up functions to character.js, corestats.js, details.js, stat.js
     * They can save pass back their data, then it gets saved here?
     * or they individually call save functions. */
    console.log("Saved");
  };

  return (
    <div className={classes.back}>
      <AppBar className={classes.titleBar} position="static">
        <Toolbar className={classes.tool}>
          <div className={classes.toolLeft}>
            <IconButton
              variant="contained"
              onClick={fadeLogin}
              className={classes.loginButton}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Sheets United
            </Typography>
          </div>
          <div class={classes.toolRight}>
            <IconButton variant="contained" onClick={swapDetails}>
              <LibraryBooks />
            </IconButton>
            <Button
              className={classes.classMenu}
              variant="contained"
              onClick={handleSave}
              edge="end"
            >
              Save Character
            </Button>
            <Button
              className={classes.classMenu}
              variant="contained"
              onClick={handleClick}
              edge="end"
            >
              Choose a Theme
            </Button>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Fighter</MenuItem>
              <MenuItem onClick={handleMenuClose}>Barbarian</MenuItem>
              <MenuItem onClick={handleMenuClose}>Paladin</MenuItem>
              <MenuItem onClick={handleMenuClose}>Ranger</MenuItem>
              <MenuItem onClick={handleMenuClose}>Rogue</MenuItem>
              <MenuItem onClick={handleMenuClose}>Monk</MenuItem>
              <MenuItem onClick={handleMenuClose}>Cleric</MenuItem>
              <MenuItem onClick={handleMenuClose}>Bard</MenuItem>
              <MenuItem onClick={handleMenuClose}>Wizard</MenuItem>
              <MenuItem onClick={handleMenuClose}>Sorcerer</MenuItem>
              <MenuItem onClick={handleMenuClose}>Warlock</MenuItem>
              <MenuItem onClick={handleMenuClose}>Druid</MenuItem>
              <MenuItem onClick={handleMenuClose}>Artificer</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Fade in={!details & !login}>
        <Grid
          className={classes.page}
          container
          justify="center"
          alightItems="center"
          spacing={0}
        >
          <Character values={values} handleChange={handleChange}></Character>
        </Grid>
      </Fade>
      <Fade in={details & !login}>
        <Grid
          className={classes.page}
          container
          justify="center"
          alightItems="center"
          spacing={0}
        >
          <Details></Details>
        </Grid>
      </Fade>
      <Fade in={login}>
        <Grid
          className={classes.page}
          container
          justify="center"
          alightItems="center"
          spacing={0}
        >
          <Login fadeLogin={fadeLogin}></Login>
        </Grid>
      </Fade>
    </div>
  );
}
