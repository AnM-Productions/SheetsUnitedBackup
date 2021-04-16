import React, { useState }from 'react'
import { Dialog, Grid } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { DialogTitle } from '@material-ui/core'
import { TextField } from '@material-ui/core'

const styles = {
    field: {
        padding: '10px'
    },
    title: {
      textAlign: 'center'
    },
    dialogContainer: {
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      paddingBottom: '10px'
    },
    paperStyle: {
        height: '100px',
        textAlign: 'center',
        '&:hover': {
          opacity: '0.75'
        },
    },
    attrName: {
      fontSize: '20px',
      fontWeight: '600'
    },
};

function Stat(props) {
    const { classes } = props;
    const [open, setOpen] = useState(false)


    const handleClose = () => {
      setOpen(false)
    }

    const handleClickOpen = () => {
      setOpen(true)
    }


    return (
        <Grid 
            container 
            spacing={2}
        >
                <Grid item xs={6}>
                  <Paper onClick={handleClickOpen} className={classes.paperStyle}>
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
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle className={classes.title}>Set Character Stats</DialogTitle>
                    <Grid container className={classes.dialogContainer} spacing={0}>
                      <Grid className={classes.field} item xs={6}><TextField label="Dexterity"></TextField></Grid>
                      <Grid className={classes.field} item xs={6}><TextField label="Intelligence"></TextField></Grid>
                      <Grid className={classes.field} item xs={6}><TextField label="Strength"></TextField></Grid>
                      <Grid className={classes.field} item xs={6}><TextField label="Wisdom"></TextField></Grid>
                      <Grid className={classes.field} item xs={6}><TextField label="Constitution"></TextField></Grid>
                      <Grid className={classes.field} item xs={6}><TextField label="Charisma"></TextField></Grid>
                    </Grid>
                  </Dialog>
                </Grid>
                <Grid item xs={6}>
                  <Paper onClick={handleClickOpen} className={classes.paperStyle}>
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
                  <Paper onClick={handleClickOpen} className={classes.paperStyle}>
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
                  <Paper onClick={handleClickOpen} className={classes.paperStyle}>
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
                  <Paper onClick={handleClickOpen} className={classes.paperStyle}>
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
                  <Paper onClick={handleClickOpen} className={classes.paperStyle}>
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