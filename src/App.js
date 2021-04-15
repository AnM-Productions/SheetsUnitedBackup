import React from 'react';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Stat from './Stat';
import Character from './Character';
import Proficiency from './Proficiency';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    girdGap: theme.spacing(3)
  },
  gridItem: {
    height: '100%'
  },
  column: {
    height: '100vh',
    margin: '10px'
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
    alighItems: "center",
    justify: "center",
    backgroundColor: '#565656',
  },
  card: {
    backgroundColor: '#d7cec7',
    padding: '10px',
    marginTop: '2em'
  }

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
    <Grid 
      container
      justify="center"
      alightItems="center"
      style = {{ minHeight: "100vh" }}
      spacing={0}
    > 
      <Grid className={classes.column} xs={3} item>

      </Grid>
      <Grid className={classes.column} xs={3} item>
        <Grid container direction="column" >
          <Paper className={classes.card} >
            <Grid className={classes.gridItem} xs={12} item>
              <Character></Character>
            </Grid>
          </Paper>
          <Paper className={classes.card} >
            <Grid className={classes.gridItem} xs={12} item>
              <Stat></Stat>
            </Grid>
          </Paper>
          <Paper className={classes.card} >
            <Grid className={classes.gridItem} xs={12} item>
              <Proficiency></Proficiency>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      
      <Grid className={classes.column} xs={3} item>
        
      </Grid>
      
    </Grid>
    
  </div>
);
}

