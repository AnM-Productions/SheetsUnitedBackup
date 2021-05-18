import React from "react";
import {
  Paper,
  Typography,
  withStyles,
  Button,
  TextField,
  Grid,
  Divider
} from "@material-ui/core";

const styles = {
  loginPage: {
    marginTop: "6em",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "40%",
  },
  loginContainer: {
      justifyContent: "space-around"
  },
  loginItem: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "2px"
  },
  loginSubmit: {
    width: "90%",
    backgroundColor: "#4285F4",
    color: "white",
    margin: "5px",
  },
  loginField: {
    width: "80%",
    marginBottom: "2em",
  },
};

function Login(props) {
  const { classes } = props;

  return (
    <Paper className={classes.loginPage}>
      <Grid container spacing={0} className={classes.loginContainer}>
        <Grid item xs={5} className={classes.loginItem}>
            <Typography variant="h5">Please enter your credentials</Typography>
            <TextField label="username" className={classes.loginField}></TextField>
            <TextField label="password" className={classes.loginField}></TextField>
            <Button
                variant="contained"
                onClick={props.fadeLogin}
                className={classes.loginSubmit}
            >
                Enter
            </Button>
        </Grid>
        <Divider orientation = "vertical"></Divider>
        <Grid item xs={5} className={classes.loginItem}>
            <Typography variant="h5">Don't have an account yet?</Typography>
            <TextField label="new username" className={classes.loginField}></TextField>
            <TextField label="new password" className={classes.loginField}></TextField>
            <TextField label="confirm password" className={classes.loginField}></TextField>
            <Button
                variant="contained"
                onClick={props.fadeLogin}
                className={classes.loginSubmit}
            >
                Create Account
            </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Login);
