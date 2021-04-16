import React from 'react'
import { Paper } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { AppBar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Stat from './Stat'
import Character from './Character'
import Proficiency from './Proficiency'



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
  titleBar: {
    backgroundColor: '#76323f',
    height: '60px',
    paddingBottom: '5px'
  },
  toolLeft: {
    display: 'flex',
    justifyContent: 'space-between'
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
  const [anchorEl, setAnchorEl] = React.useState(null)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
      setAnchorEl(null)
  }
 
  

  return (
  <div className={classes.back}>
    <AppBar className={classes.titleBar} position="static">
      <Toolbar className={classes.toolLeft}>
          <Typography variant="h6" className={classes.title}>
            Sheets United
          </Typography>
        <div>
          <Button
              className={classes.classMenu}
              variant="contained"
              onClick={handleClick}
              edge="end"
          >
              Choose a Class
          </Button>
          <Menu 
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
          >
              <MenuItem onClick={handleMenuClose}>Fighter</MenuItem>
              <MenuItem onClick={handleMenuClose}>Barbarian</MenuItem>
              <MenuItem onClick={handleMenuClose}>Paladin</MenuItem>
              <MenuItem onClick={handleMenuClose}>Ranger</MenuItem>
              <MenuItem onClick={handleMenuClose}>Rogue</MenuItem>
              <MenuItem onClick={handleMenuClose}>Monk</MenuItem>
              <MenuItem onClick={handleMenuClose}>Cleric</MenuItem>
              <MenuItem onClick={handleMenuClose}>Bard</MenuItem>
              <MenuItem onClick={handleMenuClose}>Wizard</MenuItem>
              <MenuItem onClick={handleMenuClose}>Sorcerer</MenuItem>
              <MenuItem onClick={handleMenuClose}>Warlock</MenuItem>
              <MenuItem onClick={handleMenuClose}>Druid</MenuItem>
              <MenuItem onClick={handleMenuClose}>Artificer</MenuItem>
          </Menu>

        </div>
        </Toolbar>
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

