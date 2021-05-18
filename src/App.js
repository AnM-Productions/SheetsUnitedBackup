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
  const [name, setName] = useState("")
  const [disabled, setDisabled] = useState({
    perception: true,
    survival: true,
    insight: true,
    medicine: true,
    animalHandling: true,
    arcana: true,
    investigation: true,
    religion: true,
    nature: true,
    history: true,
    athletics: true,
    acrobatic: true,
    stealth: true,
    sleightOfHand: true,
    persuasion: true,
    intimidation: true,
    deception: true,
    performance: true,
  });
  const [checked, setChecked] = useState(true);
  const [values, setValues] = useState({
    health: "0",
    ac: "0",
    hit_die: "0",
    initiative: "0",
    movement: "0",
    proficiency: "0",
    dexterity: "0",
    intelligence: "0",
    strength: "0",
    wisdom: "0",
    constitution: "0",
    charisma: "0",
    // Prof Note: 0 is not proficient, 1 = proficient, 2 = expertise
    perception: "0",
    survival: "0",
    insight: "0",
    medicine: "0",
    animalHandling: "0",
    arcana: "0",
    investigation: "0",
    religion: "0",
    nature: "0",
    history: "0",
    athletics: "0",
    acrobatic: "0",
    stealth: "0",
    sleightOfHand: "0",
    persuasion: "0",
    intimidation: "0",
    deception: "0",
    performance: "0",
  });

  const [mods, setMods] = useState({
    dexterity: "+0",
    intelligence: "+0",
    strength: "+0",
    wisdom: "+0",
    consitution: "+0",
    charisma: "+0",
  });

  const handleStatChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
    let mod = Math.floor((event.target.value - 10) / 2);
    if (mod >= 0) mod = `+${mod}`;
    console.log(mod);
    setMods({ ...mods, [props]: mod });
  };

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

  const changeName = (props) => {
    setName(props);
    console.log(name)
  }

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const handleSave = () => {
    /* Pass up functions to character.js, corestats.js, details.js, stat.js
     * They can save pass back their data, then it gets saved here?
     * or they individually call save functions. */
    console.log("Saved");
  };

  const handleSingleChange = (props) => (event) => {
    console.log("clicked!");
    if (event.target.checked) {
      setValues({ ...values, [props]: 1 });
      setDisabled({ ...disabled, [props]: false });
      console.log(`Single change called. Value of disabled ${disabled}`);
    } else {
      setValues({ ...values, [props]: 0 });
      //setChecked({ ...checked, [props]: false });
      setDisabled({ ...disabled, [props]: true });
      console.log(
        `single changed called, box unchecked, value of disabled ${disabled}`
      );
    }
    console.log(checked);
  };
  const handleDoubleChange = (props) => (event) => {
    if (event.target.checked) {
      setValues({ ...values, [props]: 2 });
      console.log(props);
    } else {
      setValues({ ...values, [props]: 1 });
      console.log(props);
    }
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
          <Character
            values={values}
            mods={mods}
            disabled={disabled}
            checked={checked}
            handleChange={handleChange}
            handleStatChange={handleStatChange}
            handleSingleChange={handleSingleChange}
            handleDoubleChange={handleDoubleChange}
          ></Character>
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
          <Login fadeLogin={fadeLogin} changeName={changeName}></Login>
        </Grid>
      </Fade>
    </div>
  );
}
