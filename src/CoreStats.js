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
    const [ values, setValues ] = useState({
        health: "0",
        ac: "0",
        hit_die: "0",
        initiative: "0",
        movement: "0",
        proficiency: "0",
      })
    


    const handleClose = () => {
      setOpen(false)
    }

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleChange = (props) => (event) => {
        setValues({ ...values, [props]: event.target.value})
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
                            {values.health}
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
                        {values.ac}
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
                        {values.hit_die}
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
                        {values.initiative}
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
                        {values.movement}
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
                        {values.proficiency}
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={classes.title}>Set Character Details</DialogTitle>  
                <Grid container className={classes.dialogContainer} spacing={0}>
                    <Grid className={classes.field} item xs={4}><TextField label="Health" onChange={handleChange('health')}></TextField></Grid>
                    <Grid className={classes.field} item xs={4}><TextField label="AC" onChange={handleChange('ac')}></TextField></Grid>
                    <Grid className={classes.field} item xs={4}><TextField label="Hit Die" onChange={handleChange('hit_die')}></TextField></Grid>
                    <Grid className={classes.field} item xs={4}><TextField label="Initiative" onChange={handleChange('initiative')}></TextField></Grid>
                    <Grid className={classes.field} item xs={4}><TextField label="Movement" onChange={handleChange('movement')}></TextField></Grid>
                    <Grid className={classes.field} item xs={4}><TextField label="Proficiency" onChange={handleChange('proficiency')}></TextField></Grid>
                </Grid>
            </Dialog>
        </Grid>

    );
}

export default withStyles(styles)(CoreStats);