import React from 'react';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import {  makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  containerStyle: {
    backgroundColor: '#d7cec7',
    height: '400px',
    marginTop: '40px',
  },
  paperStyle: {
    height: '100px',
    textAlign: 'center'
  },
  attrName: {
    fontSize: '20px',
    fontWeight: '600'
  },
  field: {
    padding: '10px'
  },
  column: {
    height: '90vh'
  },
  title: {
    marginLeft: '20px',
    marginTop: '10px'
  },
  titleBar: {
    backgroundColor: '#76323f',
    height: '50px'
  },
  back: {
    backgroundColor: '#565656'
  },
  
}))


export default function App() {
  const classes = useStyles();

  return (
  <div className={classes.back}>
    <AppBar className={classes.titleBar} position="static">
      <Typography variant="h6" className={classes.title}>
        Sheets United
      </Typography>
    </AppBar>
    <Grid className={classes.base} container spacing={3}>
      <Grid className={classes.column} item xs={4}>
        <Container 
          maxWidth="sm"
          className={classes.containerStyle}>
        </Container>
      </Grid>
      <Grid className={classes.column} item xs={4}>
        <Grid container>
          <Grid item xs={12}>
            <Container 
              maxWidth="sm"
              className={classes.containerStyle}>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container
            maxWidth="sm"
            className={classes.containerStyle}
            >
              <Grid container spacing={3}>
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
            </Container>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.column} item xs={4}>
        <Container 
          maxWidth="sm"
          className={classes.containerStyle}>
        </Container>
      </Grid>
    </Grid>
    
  </div>
);
}

