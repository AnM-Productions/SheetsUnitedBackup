import React, {useState} from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle } from '@material-ui/core'
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core'

const styles = {
  field: {
    padding: "5px",
  },
  checkbox: {
    padding: "10px",
    maxWidth: "50%"
  },
  paperStyle: {
    paddingLeft: '5px',
    margin: '8px',
    "&:hover": {
      opacity: "0.75",
    },
  },
  attrName: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
  },
  dialogContainer: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    paddingBottom: '10px'
  },
};

function Proficiency(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }


  return (
    <Grid container spacing={0}>
      <Grid container xs={6}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle} onClick={handleClickOpen}>
            <Grid container spacing={1}>
              <Grid className={classes.attrName} item xs={12}>
                Wisdom  +0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Perception
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Survival
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Insight
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Medicine
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Animal Handling
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle} onClick={handleClickOpen}>
            <Grid container spacing={1}>
              <Grid className={classes.attrName} item xs={12}>
                Intelligence  +0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Arcana
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Investigation
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Religion
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Nature
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                History
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container xs={6}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle} onClick={handleClickOpen}>
            <Grid container spacing={1}>
              <Grid className={classes.attrName} item xs={12}>
                Stength  +0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Athletics
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle} onClick={handleClickOpen}>
            <Grid container spacing={1}>
              <Grid className={classes.attrName} item xs={12}>
                Dexterity  +0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Acrobatics
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Stealth
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Sleight of Hand
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle} onClick={handleClickOpen}>
            <Grid container spacing={1}>
              <Grid className={classes.attrName} item xs={12}>
                Charisma  +0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Persuasion
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Intimidation
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Deception
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
              <Grid className={classes.field} item xs={6}>
                Performance
              </Grid>
              <Grid className={classes.field} item xs={6}>
                0
              </Grid>
            </Grid>
          </Paper>
        </Grid>  
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.title}>Set Character Info</DialogTitle>      
            <Grid container className={classes.dialogContainer} spacing={0}>
              <Grid className={classes.field} item xs={6}>
                <FormControl>
                  <FormGroup>
                    <FormLabel className={classes.field}>Wisdom</FormLabel>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                  </FormGroup>
                  <FormGroup>
                    <FormLabel className={classes.field}>Intelligence</FormLabel>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid className={classes.field} item xs={6}>
                <FormControl>
                  <FormGroup>
                    <FormLabel className={classes.field}>Strength</FormLabel>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                  </FormGroup>
                  <FormLabel className={classes.field}>Dexterity</FormLabel>
                  <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                  <FormGroup>
                    <FormLabel>Charisma</FormLabel>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                    <FormControl className={classes.formGroup}>
                      <FormGroup row="false">
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                          labelPlacement="start"
                          label="Perception"
                        />
                        <FormControlLabel
                          className={classes.checkbox}
                          control={<Checkbox/>}
                        />
                      </FormGroup>
                    </FormControl>
                  </FormGroup>
                </FormControl>
              </Grid>
            </Grid>
        </Dialog>
    </Grid>
  );
}

export default withStyles(styles)(Proficiency);
