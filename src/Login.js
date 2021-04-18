import React from 'react'
import { Paper, Typography, withStyles, Button, TextField } from '@material-ui/core'



const styles = {
    loginPage: {
        marginTop: '6em',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '400px'
    },
    loginSubmit: {
        width: '40%',
        backgroundColor: '#4285F4',
        color: 'white',
        margin: '5px'
    },
    loginGuest: {
        width: '40%',
        backgroundColor: '#808080',
        color: 'white',
        margin: '5px'
    },
    loginField: {
        width: '80%',
        marginBottom: '2em',
    }

}



function Login (props){
    const { classes } = props;



    return (
        <Paper
            className={classes.loginPage}

        >
            <Typography variant="h5">
                Please enter your credentials
            </Typography>
            <TextField label="username" className={classes.loginField}></TextField>
            <TextField label="password" className={classes.loginField}></TextField>
            <Button
                variant="contained"
                onClick={props.fadeLogin}
                className={classes.loginSubmit}
            >
                Enter
            </Button>
            <Button
                variant="contained"
                onClick={props.fadeLogin}
                className={classes.loginGuest}
            >
                Guest
            </Button>
        </Paper>

    );

}


export default withStyles(styles)(Login)