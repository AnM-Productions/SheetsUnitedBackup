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
        height: '100px',
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


function CoreStats(props){
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
            <Grid item xs={4}>
                <Paper onClick={handleClickOpen} className={classes.paperStyle}>
                    <Typography>
                        <Box fontWeight={600} lineHeight={3}>
                            Health
                        </Box>
                        <Box fontWeight={600} lineHeight={2}>
                            0
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper onClick={handleClickOpen} className={classes.paperStyle}>
                    <Typography>
                        <Box fontWeight={600} lineHeight={3}>
                            AC
                        </Box>
                        <Box fontWeight={600} lineHeight={2}>
                            0
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper onClick={handleClickOpen} className={classes.paperStyle}>
                    <Typography>
                        <Box fontWeight={600} lineHeight={3}>
                            Hit Die
                        </Box>
                        <Box fontWeight={600} lineHeight={2}>
                            0
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper onClick={handleClickOpen} className={classes.paperStyle}>
                    <Typography>
                        <Box fontWeight={600} lineHeight={3}>
                            Initiative
                        </Box>
                        <Box fontWeight={600} lineHeight={2}>
                            0
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper onClick={handleClickOpen} className={classes.paperStyle}>
                    <Typography>
                        <Box fontWeight={600} lineHeight={3}>
                            Movement
                        </Box>
                        <Box fontWeight={600} lineHeight={2}>
                            0
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper onClick={handleClickOpen} className={classes.paperStyle}>
                    <Typography>
                        <Box fontWeight={600} lineHeight={3}>
                            Proficiency
                        </Box>
                        <Box fontWeight={600} lineHeight={2}>
                            0
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={classes.title}>Set Character Details</DialogTitle>  
                <Grid container className={classes.dialogContainer} spacing={0}>
                    <Grid className={classes.field} item xs={4}><TextField label="Health"></TextField></Grid>
                    <Grid className={classes.field} item xs={4}><TextField label="AC"></TextField></Grid>
                    <Grid className={classes.field} item xs={4}><TextField label="Hit Die"></TextField></Grid>
                    <Grid className={classes.field} item xs={4}><TextField label="Initiative"></TextField></Grid>
                    <Grid className={classes.field} item xs={4}><TextField label="Movement"></TextField></Grid>
                    <Grid className={classes.field} item xs={4}><TextField label="Proficiency"></TextField></Grid>
                </Grid>
            </Dialog>
        </Grid>

    );
}

export default withStyles(styles)(CoreStats);