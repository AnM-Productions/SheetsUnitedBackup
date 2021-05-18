import React, { useState } from "react";
import {
  Paper,
  Typography,
  withStyles,
  Button,
  TextField,
  Grid,
  Divider
} from "@material-ui/core";
import axios from "axios";

const styles = {
  loginPage: {
    marginTop: "6em",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "40%",
    minWidth: "400px"
  },
  loginContainer: {
      justifyContent: "space-around",
  },
  loginItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "space-between",
    flexWrap: "wrap",
    padding: "2px"
  },
  loginSubmit: {
    width: "90%",
    backgroundColor: "#4285F4",
    color: "white",
    margin: "5px",
    height: "4em"
  },
  loginField: {
    width: "80%",
    marginBottom: "2em",
  },
};

const {REACT_APP_FUNCTION_KEY} = process.env

function Login(props) {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const changeUsername = (event) => {
        setUsername(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    const loginAttempt = async () =>{
        var url = `https://postaccount.azurewebsites.net/api/get?code=${REACT_APP_FUNCTION_KEY}&id=${username}&details=${password}`
        var result = await axios.get(url)
            .then((response) => {
                props.fadeLogin()
                props.changeName(username)
            })
            .catch((error) => {
                console.log(error)
            })
    }

  const { classes } = props;

  return (
    <Paper className={classes.loginPage}>
      <Grid container spacing={0} className={classes.loginContainer}>
        <Grid item xs={5} className={classes.loginItem}>
            <Typography variant="h5">Please enter your credentials</Typography>
            <TextField label="username" className={classes.loginField} onChange={changeUsername}></TextField>
            <TextField label="password" className={classes.loginField} onChange={changePassword}></TextField>
            <Button
                variant="contained"
                className={classes.loginSubmit}
                onClick={loginAttempt}
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
