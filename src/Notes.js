import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { Grid, Box, Dialog, DialogTitle } from "@material-ui/core";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  TextField,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

const styles = {
  paperStyle: {
    height: "400px",
    textAlign: "left",
    margins: "0px 3px",
    padding: "5px",
  },
  textAreaStyle: {
    margin: "normal",
  },
  title: {
    textAlign: "center",
  },
  dialogContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: "10px",
  },
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={4}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function FetchData(props) {
  let [query, setQuery] = useState([]);
  console.log(props.url);
  useEffect(() => {
    async function getWeapons() {
      // need to check for status.
      // from api to list that we can display
      // in dialog, list of all clubs,
      // returns to "equipment window"
      // equipment window has a list/display of items
      // this eventually gets initialized from db
      // let url = "https://www.dnd5eapi.co/api/equipment-categories/weapon/";
      await axios
        .get(props.url)
        .then((response) => {
          console.log("useEffect" + response);
          setQuery(response.data.equipment);
        })
        .catch((response) => {
          console.log(`Error getting data from ${props.url}`);
          response = [];
        });
    }
    getWeapons();
  }, [setQuery]);
  return (
    <List>
      {query.map((i) => (
        <ListItem button key={`weapon-${i.index}`}>
          <ListItemText primary={`${i.name}`} />
        </ListItem>
      ))}
    </List>
  );
}

function FetchSpells(props) {
  let [query, setQuery] = useState([]);
  console.log(props.url);
  useEffect(() => {
    async function getSpells() {
      await axios
        .get(props.url)
        .then((response) => {
          console.log("useEffect" + response);
          setQuery(response.data.results);
        })
        .catch((response) => {
          console.log(`Error getting data from ${props.url}`);
          response = [];
        });
    }
    getSpells();
  }, [setQuery]);
  return (
    <List>
      {/*Option: make function to sort spells by school / level or something rather than alphabetical. or add a search bar */}
      {query.map((i) => (
        <ListItem button key={`spell-${i.index}`}>
          <ListItemText
            primary={`${i.name}`}
            secondary="Maybe we could add school or level here. Req separate API calls."
          />
        </ListItem>
      ))}
    </List>
  );
}

function Notes(props) {
  const { classes } = props;
  //   const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [weaponDialogOpen, setWeaponDialogOpen] = useState(false);
  const [spellDialogOpen, setSpellDialogOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setPage(newValue);
  };
  const handleWeaponDialogOpen = () => {
    setWeaponDialogOpen(true);
    // fetchData('weapons');
  };
  const handleSpellDialogOpen = () => {
    setSpellDialogOpen(true);
    // fetchData('weapons');
  };
  const handleDialogClose = () => {
    setWeaponDialogOpen(false);
    setSpellDialogOpen(false);
  };

  /* Here is where we fetch API data for displaying lists of equip/weapons/etc */
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper className={classes.paperStyle}>
          <Tabs value={page} onChange={handleChange}>
            <Tab label="Attacks" {...a11yProps(0)} />
            <Tab label="Equipment" {...a11yProps(1)} />
            <Tab label="Spells" {...a11yProps(2)} />
            <Tab label="Notes" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={page} index={0}></TabPanel>
          <TabPanel value={page} index={1}>
            <Typography variant="h2"> Tab 2</Typography>
            <Button variant="contained" onClick={handleWeaponDialogOpen}>
              Add Equipment
            </Button>
          </TabPanel>
          <TabPanel value={page} index={2}>
            <Typography variant="h2"> Spells </Typography>
            <Button variant="contained" onClick={handleSpellDialogOpen}>
              Add Spells
            </Button>
          </TabPanel>
          <TabPanel value={page} index={3}>
            <TextField
              className={classes.textAreaStyle}
              id="Note-area"
              label="Character Notes"
              rowsMax={12}
              placeholder="What kind of adventures have you had?"
              multiline
              fullWidth="true"
              height="100%"
            ></TextField>
          </TabPanel>
        </Paper>
      </Grid>
      {/* Once this is working, I'd like to add a dialog box that pops up for more entry */}
      <Dialog open={weaponDialogOpen} onClose={handleDialogClose}>
        <DialogTitle className={classes.title}>Add Equipment</DialogTitle>
        <FetchData url="https://www.dnd5eapi.co/api/equipment-categories/weapon" />
      </Dialog>
      <Dialog open={spellDialogOpen} onClose={handleDialogClose}>
        <DialogTitle className={classes.title}>Add Spells</DialogTitle>
        <FetchSpells url="https://www.dnd5eapi.co/api/spells" />
      </Dialog>
    </Grid>
  );
}

export default withStyles(styles)(Notes);
