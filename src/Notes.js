import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { Grid, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { Tabs, Tab, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  paperStyle: {
    height: "400px",
    textAlign: "left",
    "&:hover": {
      opacity: "0.75",
    },
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

function Notes(props) {
  const { classes } = props;
  //   const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const handleChange = (event, newValue) => {
    setPage(newValue);
  };
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

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
    </Grid>
  );
}

export default withStyles(styles)(Notes);
