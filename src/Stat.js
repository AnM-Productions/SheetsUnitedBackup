import React, { useState } from "react";
import { Dialog, Grid, Button, Typography, Box } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { DialogTitle } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import rolld20 from "./dice";

const styles = {
  field: {
    padding: "10px",
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
  paperStyle: {
    height: "100px",
    textAlign: "center",
    "&:hover": {
      opacity: "0.75",
    },
  },
  sectionTitle: {
    margin: "0px 0px 0px 0px",
    padding: "0px 5px 0px 5px",
    height: "30px",
    "&:hover": {
      opacity: "0.75",
    },
  },
  attrName: {
    fontSize: "20px",
    fontWeight: "600",
  },
};

function Stat(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  function rollSave(name, modifier) {
    console.log("handling roll dialog box opening");
    const rollmsg = rolld20(name, parseInt(modifier));
    console.log(rollmsg);
    console.log(name);
    console.log(parseInt(modifier));
    alert(rollmsg);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
          <Grid container spacing={1}>
            <Grid className={classes.attrName} item xs={12}>
              Dexterity
            </Grid>
            <Grid className={classes.field} item xs={4}>
              value
            </Grid>
            <Grid className={classes.field} item xs={4}>
              modifier
            </Grid>
            <Grid className={classes.field} item xs={4}>
              save
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.values.dexterity}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.mods.dexterity}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              0
            </Grid>
          </Grid>
        </Paper>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className={classes.title}>
            Set Character Stats
          </DialogTitle>
          <Grid container className={classes.dialogContainer} spacing={0}>
            <Grid className={classes.field} item xs={6}>
              <TextField
                label="Dexterity"
                onChange={props.handleStatChange("dexterity")}
              ></TextField>
            </Grid>
            <Grid className={classes.field} item xs={6}>
              <TextField
                label="Intelligence"
                onChange={props.handleStatChange("intelligence")}
              ></TextField>
            </Grid>
            <Grid className={classes.field} item xs={6}>
              <TextField
                label="Strength"
                onChange={props.handleStatChange("strength")}
              ></TextField>
            </Grid>
            <Grid className={classes.field} item xs={6}>
              <TextField
                label="Wisdom"
                onChange={props.handleStatChange("wisdom")}
              ></TextField>
            </Grid>
            <Grid className={classes.field} item xs={6}>
              <TextField
                label="Constitution"
                onChange={props.handleStatChange("constitution")}
              ></TextField>
            </Grid>
            <Grid className={classes.field} item xs={6}>
              <TextField
                label="Charisma"
                onChange={props.handleStatChange("charisma")}
              ></TextField>
            </Grid>
          </Grid>
        </Dialog>
      </Grid>
      <Grid item xs={6}>
        <Paper
          onClick={() =>
            rollSave("Intelligence Saving Throw", props.mods.intelligence)
          }
          className={classes.paperStyle}
        >
          <Grid container spacing={1}>
            <Grid className={classes.attrName} item xs={12}>
              Intelligence
              <Button size="small">Roll Save</Button>
            </Grid>
            <Grid className={classes.field} item xs={4}>
              value
            </Grid>
            <Grid className={classes.field} item xs={4}>
              modifier
            </Grid>
            <Grid className={classes.field} item xs={4}>
              save
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.values.intelligence}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.mods.intelligence}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              0
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
          <Grid container spacing={1}>
            <Grid className={classes.attrName} item xs={12}>
              Strength
            </Grid>
            <Grid className={classes.field} item xs={4}>
              value
            </Grid>
            <Grid className={classes.field} item xs={4}>
              modifier
            </Grid>
            <Grid className={classes.field} item xs={4}>
              save
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.values.strength}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.mods.strength}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              0
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
          <Grid container spacing={1}>
            <Grid className={classes.attrName} item xs={12}>
              Wisdom
            </Grid>
            <Grid className={classes.field} item xs={4}>
              value
            </Grid>
            <Grid className={classes.field} item xs={4}>
              modifier
            </Grid>
            <Grid className={classes.field} item xs={4}>
              save
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.values.wisdom}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.mods.wisdom}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              0
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
          <Grid container spacing={1}>
            <Grid className={classes.attrName} item xs={12}>
              Constitution
            </Grid>
            <Grid className={classes.field} item xs={4}>
              value
            </Grid>
            <Grid className={classes.field} item xs={4}>
              modifier
            </Grid>
            <Grid className={classes.field} item xs={4}>
              save
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.values.constitution}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.mods.constitution}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              0
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
          <Grid container spacing={1}>
            <Grid className={classes.attrName} item xs={12}>
              Charisma
            </Grid>
            <Grid className={classes.field} item xs={4}>
              value
            </Grid>
            <Grid className={classes.field} item xs={4}>
              modifier
            </Grid>
            <Grid className={classes.field} item xs={4}>
              save
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.values.charisma}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {props.mods.charisma}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              0
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper onClick={handleClickOpen} className={classes.sectionTitle}>
          <Typography align="center" className={classes.attrName}>
            <Box component="span" textAlign="center" display="inline">
              Edit Stats
            </Box>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Stat);
