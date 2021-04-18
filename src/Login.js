import React from 'react'
import { Paper, Typography, withStyles, Button } from '@material-ui/core'



const styles = {
    loginPage: {
        marginTop: '2em',
        padding: '15px'
    },
    loginSubmit: {
        width: '100%',
        backgroundColor: '#4285F4',
        color: 'white'
    }

}



function Login (props){
    const { classes } = props;



    return (
        <Paper
            className={classes.loginPage}

        >
            <Typography variant="h4">
                Please enter your credentials
            </Typography>
            <Button
                variant="contained"
                onClick={props.fadeLogin}
                className={classes.loginSubmit}
            >
                Enter
            </Button>
        </Paper>

    );

}


export default withStyles(styles)(Login)