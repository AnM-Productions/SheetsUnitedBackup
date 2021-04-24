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
// async function getWeapons() {
//   // need to check for status.
//   // from api to list that we can display
//   // in dialog, list of all clubs,
//   // returns to "equipment window"
//   // equipment window has a list/display of items
//   // this eventually gets initialized from db
//   let url = "https://www.dnd5eapi.co/api/equipment-categories/weapon";
//   const response = await axios.get(url);
//   console.log(response);
//   return (
//     <List>
//       {[1, 2, 3, 4].map((i) => (
//         <ListItem key={`weapon-${i}`}>
//           <ListItemText primary={`${i}`} />
//         </ListItem>
//       ))}
//     </List>
//   );
// }
function FetchData(props) {
  let [query, setQuery] = useState([]);
  // const [url, setUrl] = useState(null);
  // if (props.type === "weapons") {
  //   setUrl("https://www.dnd5eapi.co/api/equipment-categories/weapon/");
  // } else if (props.type === "equipment") {
  //   setUrl("https://www.dnd5eapi.co/api/equipment/");
  // } /* spells */ else {
  //   setUrl("https://www.dnd5eapi.co/api/spells/");
  // }
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
          console.log(`error getting ${props.url}`);
          response = [];
        });
    }
    console.log(props.url);
    getWeapons();
  }, [setQuery]);
  return (
    <List>
      {query.map((i) => (
        <ListItem key={`weapon-${i}`}>
          <ListItemText primary={`${i}`} />
        </ListItem>
      ))}
    </List>
  );
}

function Notes(props) {
  const { classes } = props;
  //   const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setPage(newValue);
  };
  const handleDialogOpen = () => {
    setDialogOpen(true);
    // fetchData('weapons');
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
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
            <Button variant="contained" onClick={handleDialogOpen}>
              Add Equipment
            </Button>
          </TabPanel>
          <TabPanel value={page} index={2}>
            <Typography variant="h2"> tab 3 </Typography>
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
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle className={classes.title}>Add Equipment</DialogTitle>
        <FetchData url="https://www.dnd5eapi.co/api/equipment-categories/weapon" />
      </Dialog>
    </Grid>
  );
}

export default withStyles(styles)(Notes);
