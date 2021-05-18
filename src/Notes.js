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
  Menu,
  MenuItem,
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [query2, setQuery2] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    async function getWeapons() {
      await axios
        .get(props.url)
        .then((temp) => {
          // Testing
          // Danger risk!
          setQuery2(temp.data.equipment);
        })
        .catch((temp) => {
          console.log(`Error getting data from ${props.url}`);
          temp = [];
        });
    }
    getWeapons();
  }, [setQuery2]);
  return (
    <div>
      <Button variant="contained" onClick={handleClick} edge="end">
        {`${props.name}`}
      </Button>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <List>
            {query2.map((i) => (
              <ListItem button key={`${i.index}`}>
                <ListItemText primary={`${i.name}`} />
              </ListItem>
            ))}
          </List>
        </MenuItem>
      </Menu>
    </div>
  );
}

function FetchCategories(props) {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    async function getWeapons() {
      await axios
        .get(props.url)
        .then((temp) => {
          // Danger risk!
          setQuery(temp.data.results);
        })
        .catch((temp) => {
          console.log(`Error getting data from ${props.url}`);
          temp = [];
        });
    }
    getWeapons();
  }, [setQuery]);
  return (
    <List>
      {query.map((i) => (
        <ListItem button key={`${i.index}`}>
          <FetchData url={`${props.url}/${i.index}`} name={i.name} />
        </ListItem>
      ))}
    </List>
  );
}

// Spells are organized differently than equipment and must be search by specfic level.
// This function creates all the buttons that call queries for specific levels.
function FetchSpells(props) {
  const [query, setQuery] = useState([]);
  // api for spell level is https://www.dnd5eapi.co/api/spells?level=X where x is level
  // props.url has everything but X
  const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <List>
      {levels.map((i) => (
        <ListItem button key={`spells-level-${i}`}>
          <FetchSpellLevels url={`${props.url}${i}`} name={`Level: ${i}`} />
        </ListItem>
      ))}
    </List>
  );
}

function FetchSpellLevels(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [query, setQuery] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    async function getSpellLevels() {
      await axios
        .get(props.url)
        .then((temp) => {
          // Danger risk!
          setQuery(temp.data.results);
        })
        .catch((temp) => {
          console.log(`Error getting data from ${props.url}`);
          temp = [];
        });
    }
    getSpellLevels();
  }, [setQuery]);
  return (
    <div>
      <Button variant="contained" onClick={handleClick} edge="end">
        {`${props.name}`}
      </Button>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <List>
            {query.map((i) => (
              <ListItem button key={`${i.index}`}>
                <ListItemText primary={`${i.name}`} />
              </ListItem>
            ))}
          </List>
        </MenuItem>
      </Menu>
    </div>
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
            <Typography variant="h2"> Equipment</Typography>
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
        <FetchCategories url="https://www.dnd5eapi.co/api/equipment-categories" />
      </Dialog>
      <Dialog open={spellDialogOpen} onClose={handleDialogClose}>
        <DialogTitle className={classes.title}>Add Spells</DialogTitle>

        <FetchSpells url="https://www.dnd5eapi.co/api/spells?level=" />
      </Dialog>
    </Grid>
  );
}

export default withStyles(styles)(Notes);
