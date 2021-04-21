import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Dialog, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Stat from "./Stat";
import CoreStats from "./CoreStats";
import Proficiency from "./Proficiency";
import InfoBar from "./InfoBar";

const styles = {
  paperStyle: {
    height: "100px",
    textAlign: "center",
    "&:hover": {
      opacity: "0.75",
    },
  },
  dialogContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: "10px",
  },
  field: {
    padding: "20px",
  },
  page: {
    position: "absolute",
  },
  card: {
    backgroundColor: "#d7cec7",
    padding: "10px",
    marginTop: "2em",
  },
  column: {
    height: "100vh",
    margin: "10px",
  },
  gridItem: {
    height: "100%",
  },
};

function Character(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Grid
      className={classes.page}
      container
      justify="center"
      alightItems="center"
      spacing={1}
    >
      <Grid className={classes.column} xs={3} item></Grid>
      <Grid className={classes.column} xs={3} item>
        <Grid container direction="column">
          <Paper className={classes.card}>
            <Grid className={classes.gridItem} xs={12} item>
              <InfoBar></InfoBar>
            </Grid>
          </Paper>
          <Paper className={classes.card}>
            <Grid className={classes.gridItem} xs={12} item>
              <CoreStats handleClickOpen={handleClickOpen}></CoreStats>
            </Grid>
          </Paper>
          <Paper className={classes.card}>
            <Grid className={classes.gridItem} xs={12} item>
              <Stat handleClickOpen={handleClickOpen}></Stat>
            </Grid>
          </Paper>
          <Paper className={classes.card}>
            <Grid className={classes.gridItem} xs={12} item>
              <Proficiency></Proficiency>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid className={classes.column} xs={3} item>
        
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <Grid container className={classes.dialogContainer} spacing={0}>
          <Grid className={classes.field} item xs={4}>
            <TextField label="Health"></TextField>
          </Grid>
          <Grid className={classes.field} item xs={4}>
            <TextField label="AC"></TextField>
          </Grid>
          <Grid className={classes.field} item xs={4}>
            <TextField label="Hit Die"></TextField>
          </Grid>
          <Grid className={classes.field} item xs={4}>
            <TextField label="Initiative"></TextField>
          </Grid>
          <Grid className={classes.field} item xs={4}>
            <TextField label="Movement"></TextField>
          </Grid>
          <Grid className={classes.field} item xs={4}>
            <TextField label="Proficiency"></TextField>
          </Grid>
        </Grid>
      </Dialog>
    </Grid>
  );
}

export default withStyles(styles)(Character);
