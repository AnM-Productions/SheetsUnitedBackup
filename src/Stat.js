import React, { useEffect, useState } from "react";
import { Dialog, Grid, IconButton, Typography, Box } from "@material-ui/core";
import CasinoIcon from "@material-ui/icons/Casino";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { DialogTitle } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import rolld20 from "./dice";

const styles = {
  field: {
    padding: "5px 0px",
    fontSize: "15px",
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
    // height: "100px",
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
  const [windowWidth, setWindowWidth] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  function rollSave(name, modifier) {
    let mod = parseInt(modifier);
    let roll = rolld20();
    let rollmsg = `${name}: ${roll} `;
    if (mod >= 0) rollmsg = rollmsg + `+ ${mod} = ${roll + mod}`;
    else rollmsg = rollmsg + `- ${mod * -1} = ${roll + mod}`;
    // Multiplying by -1 for easy formatting
    alert(rollmsg);
  }

  function modOrModifier() {
    //Just returns the word mod or modifier depending on screen size
    if (windowWidth > 1023) return "Modifier";
    else return "Mod";
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper className={classes.paperStyle}>
          <Grid container spacing={0}>
            <Grid className={classes.attrName} item xs={12}>
              Dexterity
            </Grid>
            <Grid container direction="row" xs={12} alignItems="baseline">
              <Grid className={classes.field} item xs={6}>
                Value: {props.values.dexterity}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                {modOrModifier()}: {props.mods.dexterity}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Save: {props.mods.dexterity}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollSave("Dexterity Saving Throw", props.mods.dexterity)
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
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
        <Paper className={classes.paperStyle}>
          <Grid container spacing={0}>
            <Grid className={classes.attrName} item xs={12}>
              Intelligence
            </Grid>
            <Grid container direction="row" xs={12} alignItems="baseline">
              <Grid className={classes.field} item xs={6}>
                Value: {props.values.intelligence}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                {modOrModifier()}: {props.mods.intelligence}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Save: {props.mods.intelligence}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollSave(
                      "Intelligence Saving Throw",
                      props.mods.intelligence
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paperStyle}>
          <Grid container spacing={0}>
            <Grid className={classes.attrName} item xs={12}>
              Strength
            </Grid>
            <Grid container direction="row" xs={12} alignItems="baseline">
              <Grid className={classes.field} item xs={6}>
                Value: {props.values.strength}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                {modOrModifier()}: {props.mods.strength}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Save: {props.mods.strength}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollSave("Strength Saving Throw", props.mods.strength)
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paperStyle}>
          <Grid container spacing={0}>
            <Grid className={classes.attrName} item xs={12}>
              Wisdom
            </Grid>
            <Grid container direction="row" xs={12} alignItems="baseline">
              <Grid className={classes.field} item xs={6}>
                Value: {props.values.wisdom}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                {modOrModifier()}: {props.mods.wisdom}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Save: {props.mods.wisdom}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollSave("Wisdom Saving Throw", props.mods.wisdom)
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paperStyle}>
          <Grid container spacing={0}>
            <Grid className={classes.attrName} item xs={12}>
              Constitution
            </Grid>
            <Grid container direction="row" xs={12} alignItems="baseline">
              <Grid className={classes.field} item xs={6}>
                Value: {props.values.constitution}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                {modOrModifier()}: {props.mods.constitution}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Save: {props.mods.constitution}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollSave(
                      "Constitution Saving Throw",
                      props.mods.constitution
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paperStyle}>
          <Grid container spacing={0}>
            <Grid className={classes.attrName} item xs={12}>
              Charisma
            </Grid>
            <Grid container direction="row" xs={12} alignItems="baseline">
              <Grid className={classes.field} item xs={6}>
                Value: {props.values.charisma}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                {modOrModifier()}: {props.mods.charisma}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Save: {props.mods.charisma}
              </Grid>
              <Grid className={classes.field} item xs={6}>
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollSave("Charisma Saving Throw", props.mods.charisma)
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
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
