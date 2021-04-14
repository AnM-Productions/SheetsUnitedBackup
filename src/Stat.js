import React from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    field: {
        padding: '10px'
    },
    paperStyle: {
        height: '100px',
        textAlign: 'center',
    },
    attrName: {
      fontSize: '20px',
      fontWeight: '600'
    },
};

function Stat(props) {
    const { classes } = props;
    return (
        <Grid 
            container 
            spacing={2}
        >
                <Grid item xs={6}>
                  <Paper className={classes.paperStyle}>
                    <Grid container spacing={1}>
                      <Grid className={classes.attrName} item xs={12}>Dexterity</Grid>
                      <Grid className={classes.field} item xs={4}>value</Grid>
                      <Grid className={classes.field} item xs={4}>modifier</Grid>
                      <Grid className={classes.field} item xs={4}>save</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paperStyle}>
                  <Grid container spacing={1}>
                      <Grid className={classes.attrName} item xs={12}>Intelligence</Grid>
                      <Grid className={classes.field} item xs={4}>value</Grid>
                      <Grid className={classes.field} item xs={4}>modifier</Grid>
                      <Grid className={classes.field} item xs={4}>save</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paperStyle}>
                  <Grid container spacing={1}>
                      <Grid className={classes.attrName} item xs={12}>Strength</Grid>
                      <Grid className={classes.field} item xs={4}>value</Grid>
                      <Grid className={classes.field} item xs={4}>modifier</Grid>
                      <Grid className={classes.field} item xs={4}>save</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paperStyle}>
                  <Grid container spacing={1}>
                      <Grid className={classes.attrName} item xs={12}>Wisdom</Grid>
                      <Grid className={classes.field} item xs={4}>value</Grid>
                      <Grid className={classes.field} item xs={4}>modifier</Grid>
                      <Grid className={classes.field} item xs={4}>save</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paperStyle}>
                  <Grid container spacing={1}>
                      <Grid className={classes.attrName} item xs={12}>Constitution</Grid>
                      <Grid className={classes.field} item xs={4}>value</Grid>
                      <Grid className={classes.field} item xs={4}>modifier</Grid>
                      <Grid className={classes.field} item xs={4}>save</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.paperStyle}>
                  <Grid container spacing={1}>
                      <Grid className={classes.attrName} item xs={12}>Charisma</Grid>
                      <Grid className={classes.field} item xs={4}>value</Grid>
                      <Grid className={classes.field} item xs={4}>modifier</Grid>
                      <Grid className={classes.field} item xs={4}>save</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                      <Grid className={classes.field} item xs={4}>0</Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
    );
}


export default withStyles(styles)(Stat);