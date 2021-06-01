import React, { useState, useEffect } from "react";
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
import {
  ArrowBack,
  KeyboardReturnOutlined,
  LibraryBooks,
  ViewArray,
} from "@material-ui/icons";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import { Fade } from "@material-ui/core";
import Character from "./Character";
import Login from "./Login";
import axios from "axios";
import Details from "./Details";

const post_char_key = process.env.REACT_APP_POST_CHAR_KEY;
const get_char_key = process.env.REACT_APP_GET_CHAR_KEY;

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
    alighItems: "center",
    justify: "center",
    flexWrap: "nowrap",
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
    color: "white",
  },
  rightIcon: {
    color: "white",
  },
  drawer: {
    width: 250,
  },
  sideDrawerItem: {},
  nested: {
    paddingLeft: "10px",
  },
}));

export default function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState("");
  const [details, setDetails] = useState(false);
  const [login, setLogin] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [options, setOptions] = useState(false);
  const [chars, setChars] = useState([]);
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
    charName: "Name",
    race: "Race",
    class: "Class",
    level: "0",
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
    let mod = calcMod(event.target.value);
    setMods({ ...mods, [props]: mod });
    console.log(`handle stat change. props: ${props} mod: ${mod}`);
  };

  function calcMod(num) {
    let mod = Math.floor((num - 10) / 2);
    if (mod >= 0) mod = `+${mod}`;
    return mod;
  }

  function updateAllMods() {
    // Kind of a heavy handed way to update all modifiers after a char is loaded.
    let strMod = calcMod(values.strength);
    let dexMod = calcMod(values.dexterity);
    let conMod = calcMod(values.constitution);
    let intMod = calcMod(values.intelligence);
    let wisMod = calcMod(values.wisdom);
    let charMod = calcMod(values.charisma);
    setMods({ strength: strMod });
    setMods({ dexterity: dexMod });
    setMods({ constitution: conMod });
    setMods({ ...mods, intelligence: intMod });
    setMods({ ...mods, wisdom: wisMod });
    setMods({ ...mods, charisma: charMod });
  }

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
    setValues({ ...values, [props]: event.target.value });
  };

  const handleDrawerOpen = () => {
    setDrawerOpen((drawerOpen) => !drawerOpen);
  };

  const handleOptions = () => {
    setOptions((options) => !options);
    getChars(name);
  };
  const changeName = (props) => {
    // Change name is called on login. This will also call getChars so we only perform the get once.
    setName(props);
    // Fetch all character names using getChars, handleChars is called inside getChars
    // getChars(props)
  };

  const handleChars = (props) => {
    setChars(props);
    console.log(`setChars called. chars is now:`);
    console.log(chars);
  };

  const handleSave = () => {
    var make = `https://postaccount.azurewebsites.net/api/postCharacter?code=${post_char_key}`;
    var result = "";
    async function postChar() {
      const temp = { name: name };
      const char = {};
      Object.assign(char, values, temp);
      console.log(char);
      await axios
        .post(make, char)
        .then((response) => {
          result = response.data.response;
          console.log(response);
        })
        .catch((error) => {
          result = error;
          console.log(`error: ${error}`);
        });
      return result;
    }
    result = postChar();
  };

  function getChars(name) {
    // get characters of username from API, to be implemented.
    // Return map list of all characters names. On click loads that name (later)
    // ADD username arguments
    // const chars = ["Fighter", "Rogue", "Ranger", "Wizard"];
    console.log(`Getting characters from user ${name}`);
    const url = `https://postaccount.azurewebsites.net/api/getCharacter?code=${get_char_key}&user=${name}`;
    async function fetchChars() {
      await axios
        .get(url)
        .then((response) => {
          const temp = response.data.value.map((a) => a.charName);
          handleChars(temp);
          return response.data.value;
        })
        .catch((temp) => {
          console.log(`Error getting data from database`);
          return [];
        });
    }
    var query = fetchChars();
    return query;
  }

  function loadChar(charName) {
    console.log(`Loading ${charName}`);
    const url = `https://postaccount.azurewebsites.net/api/getCharacter?code=${get_char_key}&user=${name}&id=${charName}`;
    async function fetchChar() {
      await axios
        .get(url)
        .then((response) => {
          var temp = response.data;
          // Deleting some of the data that gets returned but isn't needed
          delete temp.PartitionKey;
          delete temp.RowKey;
          delete temp.Timestamp;
          delete temp.name;
          // delete temp.name;
          console.log(temp);
          // save rest of values to char sheet
          Object.assign(values, temp);
          console.log(values);
          return;
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
          return;
        });
    }
    fetchChar();
    updateAllMods();
  }
  // const handleLoad = () => {
  //   var url = "https://postaccount.azurewebsites.net/api/getCharacter?code=jQTZRfjxnfekLMXIWpY68aovK9czJU9NU/WeWRq19bTtkKSIq4fRDQ=="
  // }

  const handleSingleChange = (props) => (event) => {
    if (event.target.checked) {
      setValues({ ...values, [props]: 1 });
      setDisabled({ ...disabled, [props]: false });
    } else {
      setValues({ ...values, [props]: 0 });
      setDisabled({ ...disabled, [props]: true });
    }
  };
  const handleDoubleChange = (props) => (event) => {
    if (event.target.checked) {
      setValues({ ...values, [props]: 2 });
    } else {
      setValues({ ...values, [props]: 1 });
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
              aria-label="return to menu"
            >
              <ArrowBack />
            </IconButton>
            <Typography variant="h1" className={classes.title}>
              Sheets United
            </Typography>
          </div>
          <div class={classes.toolRight}>
            <IconButton
              variant="contained"
              onClick={swapDetails}
              className={classes.rightIcon}
              aria-label="details"
            >
              <LibraryBooks />
            </IconButton>
            <IconButton
              variant="contained"
              aria-label="menu"
              onClick={handleDrawerOpen}
              className={classes.rightIcon}
            >
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
                        {/* Displaying Characters */}
                        {chars.map((i) => (
                          <ListItem
                            button
                            className={classes.nested}
                            paddingLeft="5px"
                            key={`${i}`}
                          >
                            <ListItemText
                              onClick={(event) => {
                                event.stopPropagation();
                                loadChar(i);
                              }}
                              primary={`${i}`}
                            />
                          </ListItem>
                        ))}
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
