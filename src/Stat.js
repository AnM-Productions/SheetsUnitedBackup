import React, { useState } from "react";
import { Dialog, Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { DialogTitle } from "@material-ui/core";
import { TextField } from "@material-ui/core";

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
  attrName: {
    fontSize: "20px",
    fontWeight: "600",
  },
};

function Stat(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const [stats, setStats] = useState({
    dexterity: "0",
    intelligence: "0",
    strength: "0",
    wisdom: "0",
    constitution: "0",
    charisma: "0",
  });
  const [mods, setMods] = useState({
    dexterity: "+0",
    intelligence: "+0",
    strength: "+0",
    wisdom: "+0",
    consitution: "+0",
    charisma: "+0",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (props) => (event) => {
    setStats({ ...stats, [props]: event.target.value });
    let mod = Math.floor((event.target.value - 10) / 2);
    if (mod >= 0) mod = `+${mod}`;
    console.log(mod);
    setMods({ ...mods, [props]: mod });
  };

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
              {stats.dexterity}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {mods.dexterity}
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
                onChange={handleChange("dexterity")}
              ></TextField>
            </Grid>
            <Grid className={classes.field} item xs={6}>
              <TextField
                label="Intelligence"
                onChange={handleChange("intelligence")}
              ></TextField>
            </Grid>
            <Grid className={classes.field} item xs={6}>
              <TextField
                label="Strength"
                onChange={handleChange("strength")}
              ></TextField>
            </Grid>
            <Grid className={classes.field} item xs={6}>
              <TextField
                label="Wisdom"
                onChange={handleChange("wisdom")}
              ></TextField>
            </Grid>
            <Grid className={classes.field} item xs={6}>
              <TextField
                label="Constitution"
                onChange={handleChange("constitution")}
              ></TextField>
            </Grid>
            <Grid className={classes.field} item xs={6}>
              <TextField
                label="Charisma"
                onChange={handleChange("charisma")}
              ></TextField>
            </Grid>
          </Grid>
        </Dialog>
      </Grid>
      <Grid item xs={6}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
          <Grid container spacing={1}>
            <Grid className={classes.attrName} item xs={12}>
              Intelligence
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
              {stats.intelligence}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {mods.intelligence}
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
              {stats.strength}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {mods.strength}
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
              {stats.wisdom}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {mods.wisdom}
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
              {stats.constitution}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {mods.constitution}
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
              {stats.charisma}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              {mods.charisma}
            </Grid>
            <Grid className={classes.field} item xs={4}>
              0
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Stat);
