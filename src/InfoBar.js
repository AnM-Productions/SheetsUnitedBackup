import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Dialog } from '@material-ui/core'
import { DialogTitle } from '@material-ui/core'
import { TextField } from '@material-ui/core'


const styles = {
    paperStyle: {
        height: '80px',
        textAlign: 'center',
        '&:hover': {
            opacity: '0.75'
        },
        
    },
    field: {
        padding: '20px'
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
    
}


function InfoBar(props){
    const { classes } = props;
    const [open, setOpen] = useState(false)
    


    const handleClose = () => {
      setOpen(false)
    }

    const handleClickOpen = () => {
      setOpen(true)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Paper onClick={handleClickOpen} className={classes.paperStyle}>
                    <Typography>
                        <Box fontSize={24} fontWeight={600} lineHeight={3}>
                            Name
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper onClick={handleClickOpen} className={classes.paperStyle}>
                    <Typography>
                        <Box fontSize={24} fontWeight={600} lineHeight={3}>
                            Race
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper onClick={handleClickOpen} className={classes.paperStyle}>
                    <Typography>
                        <Box fontSize={24} fontWeight={600} lineHeight={3}>
                            Class
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={3}>
                <Paper onClick={handleClickOpen} className={classes.paperStyle}>
                    <Typography>
                        <Box fontSize={24} fontWeight={600} lineHeight={3}>
                            Level 1
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
            <DialogTitle className={classes.title}>Set Character Info</DialogTitle>      
                <Grid container className={classes.dialogContainer} spacing={0}>
                    <Grid className={classes.field} item xs={6}><TextField label="Name"></TextField></Grid>
                    <Grid className={classes.field} item xs={6}><TextField label="Race"></TextField></Grid>
                    <Grid className={classes.field} item xs={6}><TextField label="Class"></TextField></Grid>
                    <Grid className={classes.field} item xs={6}><TextField label="Level"></TextField></Grid>
                </Grid>
            </Dialog>
        </Grid>
    )
}



export default withStyles(styles)(InfoBar)
