import React from "react";
import { Paper } from "@material-ui/core";
import { sizing } from "@material-ui/system";
import { Grid } from "@material-ui/core";
import { Dialog, TextField, TextareaAutosize } from "@material-ui/core";
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

function Notes(props) {
  const { classes } = props;
  //   const [open, setOpen] = useState(false);

  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper className={classes.paperStyle}>
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
        </Paper>
      </Grid>
      {/* Once this is working, I'd like to add a dialog box that pops up for more entry */}
    </Grid>
  );
}

export default withStyles(styles)(Notes);
