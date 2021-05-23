import React, { useState } from "react";
import {
  Paper,
  Typography,
  withStyles,
  Button,
  TextField,
  Grid,
  Divider,
  Collapse,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axios from "axios";

const styles = {
  loginPage: {
    marginTop: "6em",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "40%",
    minWidth: "400px",
  },
  loginContainer: {
    justifyContent: "space-around",
  },
  loginItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "space-between",
    flexWrap: "wrap",
    padding: "2px",
  },
  loginSubmit: {
    width: "90%",
    backgroundColor: "#4285F4",
    color: "white",
    margin: "5px",
    height: "4em",
  },
  loginField: {
    width: "80%",
    marginBottom: "2em",
  },
};

const { REACT_APP_GET_KEY, REACT_APP_POST_KEY } = process.env;

function Login(props) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirm, setConfirm] = useState("");
  const [collapsed, setCollapsed] = useState(0)

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeConfirm = (event) => {
    setConfirm(event.target.value);
  };

  const loginAttempt = async () => {
    var url = `https://postaccount.azurewebsites.net/api/get?code=${REACT_APP_GET_KEY}&id=${username}&details=${password}`;
    var result = await axios
      .get(url)
      .then((response) => {
        setCollapsed(0)
        props.fadeLogin();
        props.changeName(username);
      })
      .catch((error) => {
        setCollapsed(1)
        console.log(error);
      });
  };

  const createAccount = () => {
    var check = `https://postaccount.azurewebsites.net/api/get?code=${REACT_APP_GET_KEY}&id=${username}&details=${password}`;
    var make = `https://postaccount.azurewebsites.net/api/post?code=${REACT_APP_POST_KEY}`;
    if (password != confirm) {
      result = "passwords do not match";
      setCollapsed(2)
      return result;
    }
    async function post() {
      await axios
        .get(check)
        .then(() => {
          result = "user already exists";
          setCollapsed(3)
        })
        .catch((error) => {
          if (error.response.data.error == "false") {
            result = "user already exists";
            setCollapsed(3)
          } else if (error.response.data.error == "does not exist") {
            async function create() {
              await axios
                .post(make, { username: username, password: password })
                .then((response) => {
                  result = response.data.response;
                  setCollapsed(0)
                  props.fadeLogin();
                  props.changeName(username);
                })
                .catch((error) => {
                  result = error;
                });
              return result;
            }
            result = create();
          } else {
            result = "Invalid Entry";
          }
        });
      return result;
    }
    var result = post();
  };

  const { classes } = props;

  return (
    <Paper className={classes.loginPage}>
      <Grid container spacing={0} className={classes.loginContainer}>
        <Grid item xs={5} className={classes.loginItem}>
          <Typography variant="h5">Please enter your credentials</Typography>
          <TextField
            label="username"
            className={classes.loginField}
            onChange={changeUsername}
          ></TextField>
          <TextField
            label="password"
            className={classes.loginField}
            onChange={changePassword}
          ></TextField>
          <Button
            variant="contained"
            className={classes.loginSubmit}
            onClick={loginAttempt}
          >
            Enter
          </Button>
          <Collapse in={collapsed === 1}>
            <Alert severity="error">Incorrect username or password</Alert>
          </Collapse>
        </Grid>
        <Divider orientation="vertical"></Divider>
        <Grid item xs={5} className={classes.loginItem}>
          <Typography variant="h5">Don't have an account yet?</Typography>
          <TextField
            label="new username"
            className={classes.loginField}
            onChange={changeUsername}
          ></TextField>
          <TextField
            label="new password"
            className={classes.loginField}
            onChange={changePassword}
          ></TextField>
          <TextField
            label="confirm password"
            className={classes.loginField}
            onChange={changeConfirm}
          ></TextField>
          <Button
            variant="contained"
            onClick={createAccount}
            className={classes.loginSubmit}
          >
            Create Account
          </Button>
          <Collapse in={collapsed === 3}>
            <Alert severity="error">User already exists</Alert>
          </Collapse>
          <Collapse in={collapsed === 2}>
            <Alert severity="error">The passwords do not match</Alert>
          </Collapse>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Login);
