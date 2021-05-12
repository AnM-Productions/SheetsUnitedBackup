import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { flexbox } from "@material-ui/system";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Dialog } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const styles = {
  paperStyle: {
    height: "80px",
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
};

function InfoBar(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "Name",
    race: "Race",
    class: "Class",
    level: "0",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (props) => (event) => {
    setInfo({ ...info, [props]: event.target.value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
          <Typography>
            <Box
              fontSize={14}
              fontWeight={500}
              lineHeight={1}
              align="left"
              style={{ padding: "5px 0px 0px 5px" }}
            >
              Name:
            </Box>
            <Box fontSize={24} fontWeight={600} lineHeight={2}>
              {info.name}
            </Box>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
          <Typography>
            <Box
              fontSize={14}
              fontWeight={500}
              lineHeight={1}
              align="left"
              style={{ padding: "5px 0px 0px 5px" }}
            >
              Race:
            </Box>
            <Box fontSize={24} fontWeight={600} lineHeight={2}>
              {info.race}
            </Box>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
          <Typography>
            <Box
              fontSize={14}
              fontWeight={500}
              lineHeight={1}
              align="left"
              style={{ padding: "5px 0px 0px 5px" }}
            >
              Class:
            </Box>
            <Box fontSize={24} fontWeight={600} lineHeight={2}>
              {info.class}
            </Box>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
          <Typography>
            <Box fontSize={24} fontWeight={600} lineHeight={3}>
              Level {info.level}
            </Box>
          </Typography>
        </Paper>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.title}>Set Character Info</DialogTitle>
        <Grid container className={classes.dialogContainer} spacing={0}>
          <Grid className={classes.field} item xs={6}>
            <TextField label="Name" onChange={handleChange("name")}></TextField>
          </Grid>
          <Grid className={classes.field} item xs={6}>
            <TextField label="Race" onChange={handleChange("race")}></TextField>
          </Grid>
          <Grid className={classes.field} item xs={6}>
            <TextField
              label="Class"
              onChange={handleChange("class")}
            ></TextField>
          </Grid>
          <Grid className={classes.field} item xs={6}>
            <TextField
              label="Level"
              onChange={handleChange("level")}
            ></TextField>
          </Grid>
        </Grid>
      </Dialog>
    </Grid>
  );
}

export default withStyles(styles)(InfoBar);
