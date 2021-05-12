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
  dialogContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: "10px",
  },
  field: {
    padding: "10px",
  },
  page: {
    position: "absolute",
  },
  card: {
    backgroundColor: "#d7cec7",
    padding: "10px",
    marginTop: "1em",
    minWidth: "440px",
  },
  column: {
    margin: "10px",
  },
  gridItem: {
    margin: "10px",
    height: "50%",
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
    /* This Grid is kind of ugly. I think we should explore something like react-grid-layout, https://github.com/react-grid-layout/react-grid-layout
     * which looks like it supports bootstrap style grids with more flexibility with items spanning rows,
     * that way our boxes dont all need to be the same height
     * Unless theres a way to do that with Material UI! But I haved found anything. It seems pretty inflexible when
     * It comes to items spanning multiple rows.
     * Maybe we could also import just the grid component of bootstrap?
     * */
    <Grid className={classes.page} container justify="center" spacing={0}>
      <Grid xs={11} item className={classes.gridItem}>
        <Paper className={classes.card}>
          <InfoBar></InfoBar>
        </Paper>
      </Grid>
      <Grid className={classes.gridItem} xs={4} item>
        <Paper className={classes.card}>
          <Stat handleClickOpen={handleClickOpen}></Stat>
        </Paper>
      </Grid>
      <Grid className={classes.gridItem} xs={7} item>
        <Paper className={classes.card}>
          <CoreStats handleClickOpen={handleClickOpen}></CoreStats>
        </Paper>
      </Grid>
      <Grid className={classes.gridItem} xs={7} item>
        <Paper className={classes.card}>
          <Proficiency></Proficiency>
        </Paper>
      </Grid>

      <Grid className={classes.column} direction="row" xs={12} item></Grid>
      <Dialog open={open} onClose={handleClose}>
        <Grid className={classes.dialogContainer} spacing={0}>
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
