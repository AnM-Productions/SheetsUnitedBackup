import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
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
    
}


function CoreStats(props){
    const { classes, handleClickOpen } = props;


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper onClick={handleClickOpen} className={classes.paperStyle}>
                    <Typography>
                        <Box fontSize={30} fontWeight={600} lineHeight={3}>
                            Character Name Placeholder
                        </Box>
                    </Typography>
                </Paper>
            </Grid>
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
        </Grid>

    );
}

export default withStyles(styles)(CoreStats);