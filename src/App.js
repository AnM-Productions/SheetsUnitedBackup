import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Collapse,
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { ArrowBack, LibraryBooks } from "@material-ui/icons";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import { Fade } from "@material-ui/core";
import Character from "./Character";
import Login from "./Login";
import Details from "./Details";
import { setTokenSourceMapRange } from "typescript";

const useStyles = makeStyles((theme) => ({
  page: {
    position: "absolute",
  },
  title: {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "500",
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
    height: "60em",
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
  drawer: {
    width: 250,
  },
  sideDrawerItem: {},
  nested: {
    paddingLeft: "10px",
  },
}));

function GetChars() {
  const classes = useStyles();
  // get characters of username from API, to be implemented.
  // Return map list of all characters names. On click loads that name (later)
  // ADD username arguments
  const chars = ["Fighter", "Rogue", "Ranger", "Wizard"];
  return chars.map((i) => (
    <ListItem button className={classes.nested} paddingLeft="5px" key={`${i}`}>
      <ListItemText primary={`${i}`} />
    </ListItem>
  ));
}

export default function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState("");
  const [details, setDetails] = useState(false);
  const [login, setLogin] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [options, setOptions] = useState(false);
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
    acrobatics: true,
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
    acrobatics: "0",
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
    constitution: "+0",
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
    console.log(details);
    setDetails((prev) => !prev);
  };

  const fadeLogin = () => {
    setLogin((prev) => !prev);
  };

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const handleDrawerOpen = () => {
    setDrawerOpen((drawerOpen) => !drawerOpen);
  };

  const handleOptions = () => {
    setOptions((options) => !options);
  };
  const changeName = (props) => {
    setName(props);
  };

  const handleSave = () => {
    /* Pass up functions to character.js, corestats.js, details.js, stat.js
     * They can save pass back their data, then it gets saved here?
     * or they individually call save functions. */
    console.log("Saved");
  };

  const handleSingleChange = (props) => (event) => {
    if (event.target.checked) {
      setValues({ ...values, [props]: 1 });
      setDisabled({ ...disabled, [props]: false });
      console.log(`Single change called. Value of disabled ${disabled}`);
    } else {
      setValues({ ...values, [props]: 0 });
      setChecked(false);
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
            <Typography variant="h1" className={classes.title}>
              Sheets United
            </Typography>
          </div>
          <div class={classes.toolRight}>
            <IconButton variant="contained" onClick={swapDetails}>
              <LibraryBooks />
            </IconButton>
            <IconButton aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerOpen}>
              <div role="presentation" class={classes.drawer}>
                <List
                  subheader={
                    <ListSubheader component="div" id="menu-bar-subheader">
                      Hello {name}!
                    </ListSubheader>
                  }
                >
                  <ListItem button key="Save Character">
                    <ListItemText
                      className={classes.sideDrawerItem}
                      primary="Save Character"
                      onClick={handleSave}
                    />
                  </ListItem>
                  <ListItem button key="Choose Theme">
                    <ListItemText
                      className={classes.sideDrawerItem}
                      primary="Show All Characters"
                      onClick={handleOptions}
                    />
                    {options ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <ListItem>
                    <Collapse in={options} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {GetChars()}
                      </List>
                    </Collapse>
                  </ListItem>
                </List>
              </div>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
      <Fade in={!login}>
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
            details={details}
            handleChange={handleChange}
            handleStatChange={handleStatChange}
            handleSingleChange={handleSingleChange}
            handleDoubleChange={handleDoubleChange}
          ></Character>
        </Grid>
      </Fade>
      {/* <Fade in={details & !login}>
        <Grid
          className={classes.page}
          container
          justify="center"
          alightItems="center"
          spacing={0}
        >
          <Details></Details>
        </Grid>
      </Fade> */}
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
