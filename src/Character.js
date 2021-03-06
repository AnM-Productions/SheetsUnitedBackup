import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Dialog, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Stat from "./Stat";
import CoreStats from "./CoreStats";
import Proficiency from "./Proficiency";
import InfoBar from "./InfoBar";
import { Fade } from "@material-ui/core";
import Notes from "./Notes";

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
    maxWidth: "1024px",
  },
  card: {
    backgroundColor: "#d7cec7",
    padding: "10px",
    // marginTop: "1em",
    // minWidth: "440px",
  },
  column: {
    margin: "10px",
  },
  gridItem: {
    // margin: "10px",
    // height: "50%",
  },
  topRow: {
    margin: "10px 20px 0px 20px",
    height: "100%",
  },
  gridRow: {
    margin: "0px 20px 0px 20px",
    height: "100%",
    display: "flex",
  },
  stats: {
    margin: "10px 0px",
    // height: "100%",
  },
};

function ProfOrNotes(props) {
  if (props.details === true) {
    //return a notes object
    return <Notes></Notes>;
  } else {
    // return proficiencies with all the props
    return (
      <Proficiency
        values={props.values}
        mods={props.mods}
        disabled={props.disabled}
        handleSingleChange={props.handleSingleChange}
        handleDoubleChange={props.handleDoubleChange}
      ></Proficiency>
    );
  }
}

function Character(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container className={classes.page} spacing={1}>
      <Grid item xs={12} className={classes.topRow}>
        <Paper className={classes.card}>
          <InfoBar
            values={props.values}
            handleChange={props.handleChange}
          ></InfoBar>
        </Paper>
      </Grid>
      <Grid container xs={12} className={classes.gridRow} spacing={1}>
        <Grid item sm={5} xs={12} className={classes.gridItem}>
          <Grid item className={classes.stats}>
            <Paper className={classes.card}>
              <Stat
                values={props.values}
                mods={props.mods}
                handleStatChange={props.handleStatChange}
              ></Stat>
            </Paper>
          </Grid>
        </Grid>
        <Grid item sm={7} xs={12} className={classes.gridItem}>
          <Grid item className={classes.stats}>
            <Paper className={classes.card}>
              <CoreStats
                values={props.values}
                handleChange={props.handleChange}
              ></CoreStats>
            </Paper>
          </Grid>
          <Grid item className={classes.stats}>
            <Paper className={classes.card}>{ProfOrNotes(props)}</Paper>
          </Grid>
        </Grid>
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
