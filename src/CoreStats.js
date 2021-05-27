import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const styles = {
  paperStyle: {
    height: "30px",
    textAlign: "center",
    "&:hover": {
      opacity: "0.75",
    },
  },
  field: {
    padding: "20px",
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
  column: {
    padding: "5px",
  },
  gridHolder: {
    justifyContent: "center",
    alignItems: "center",
  },
};

function CoreStats(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Grid container className={classes.gridHolder} spacing={2}>
      <Grid
        container
        direction="row"
        xs={4}
        spacing={1}
        className={classes.column}
      >
        <Grid item xs={12}>
          <Paper onClick={handleClickOpen} className={classes.paperStyle}>
            <Typography>
              <Box fontWeight={600}>Health: {props.values.health}</Box>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper onClick={handleClickOpen} className={classes.paperStyle}>
            <Typography>
              <Box fontWeight={600}>AC: {props.values.ac}</Box>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        xs={4}
        spacing={1}
        className={classes.column}
      >
        <Grid item xs={12}>
          <Paper onClick={handleClickOpen} className={classes.paperStyle}>
            <Typography>
              <Box fontWeight={600}>Hit Die: {props.values.hit_die}</Box>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper onClick={handleClickOpen} className={classes.paperStyle}>
            <Typography>
              <Box fontWeight={600}>Initiative: {props.values.initiative}</Box>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        xs={4}
        spacing={1}
        className={classes.column}
      >
        <Grid item xs={12}>
          <Paper onClick={handleClickOpen} className={classes.paperStyle}>
            <Typography>
              <Box fontWeight={600}>Movement: {props.values.movement}</Box>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper onClick={handleClickOpen} className={classes.paperStyle}>
            <Typography>
              <Box fontWeight={600}>
                Proficiency: {props.values.proficiency}
              </Box>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.title}>
          Set Character Details
        </DialogTitle>
        <Grid container className={classes.dialogContainer} spacing={0}>
          <Grid className={classes.field} item xs={4}>
            <TextField
              label="Health"
              onChange={props.handleChange("health")}
            ></TextField>
          </Grid>
          <Grid className={classes.field} item xs={4}>
            <TextField
              label="AC"
              onChange={props.handleChange("ac")}
            ></TextField>
          </Grid>
          <Grid className={classes.field} item xs={4}>
            <TextField
              label="Hit Die"
              onChange={props.handleChange("hit_die")}
            ></TextField>
          </Grid>
          <Grid className={classes.field} item xs={4}>
            <TextField
              label="Initiative"
              onChange={props.handleChange("initiative")}
            ></TextField>
          </Grid>
          <Grid className={classes.field} item xs={4}>
            <TextField
              label="Movement"
              onChange={props.handleChange("movement")}
            ></TextField>
          </Grid>
          <Grid className={classes.field} item xs={4}>
            <TextField
              label="Proficiency"
              onChange={props.handleChange("proficiency")}
            ></TextField>
          </Grid>
        </Grid>
      </Dialog>
    </Grid>
  );
}

export default withStyles(styles)(CoreStats);
