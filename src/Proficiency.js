import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle } from "@material-ui/core";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const styles = {
  field: {
    padding: "5px",
  },
  checkbox: {
    padding: "2%",
    width: "65%",
    justifyContent: "space-between",
  },
  checkbox2: {
    padding: "2%",
    width: "20%",
  },
  formContainer: {
    justifyContent: "space-between",
  },
  paperStyle: {
    paddingLeft: "5px",
    margin: "8px",
    "&:hover": {
      opacity: "0.75",
    },
  },
  attrName: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
    padding: "5px",
  },
  dialogContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingBottom: "10px",
  },
};

function Proficiency(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Grid container spacing={0}>
      <Grid container xs={6}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle} onClick={handleClickOpen}>
            <Grid container spacing={1}>
              <Grid className={classes.attrName} item xs={12}>
                Wisdom +0
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
                Intelligence +0
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
                Stength +0
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
                Dexterity +0
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
                Charisma +0
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
                <FormLabel className={classes.attrName}>Wisdom</FormLabel>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("perception")}
                        />
                      }
                      labelPlacement="start"
                      label="Perception"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.perception}
                          onChange={props.handleDoubleChange("perception")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("insight")}
                        />
                      }
                      labelPlacement="start"
                      label="Insight"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.insight}
                          onChange={props.handleDoubleChange("insight")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("survival")}
                        />
                      }
                      labelPlacement="start"
                      label="Survival"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.survival}
                          onChange={props.handleDoubleChange("survival")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("medicine")}
                        />
                      }
                      labelPlacement="start"
                      label="Medicine"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.medicine}
                          onChange={props.handleDoubleChange("medicine")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("animalHandling")}
                        />
                      }
                      labelPlacement="start"
                      label="Animal Handling"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.animalHandling}
                          onChange={props.handleDoubleChange("animalHandling")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel className={classes.attrName}>Intelligence</FormLabel>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("investigation")}
                        />
                      }
                      labelPlacement="start"
                      label="Investigation"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.investigation}
                          onChange={props.handleDoubleChange("investigation")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("arcana")}
                        />
                      }
                      labelPlacement="start"
                      label="Arcana"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.arcana}
                          onChange={props.handleDoubleChange("arcana")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("history")}
                        />
                      }
                      labelPlacement="start"
                      label="History"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.history}
                          onChange={props.handleDoubleChange("history")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("religion")}
                        />
                      }
                      labelPlacement="start"
                      label="Religion"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.religion}
                          onChange={props.handleDoubleChange("religion")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("nature")}
                        />
                      }
                      labelPlacement="start"
                      label="Nature"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.nature}
                          onChange={props.handleDoubleChange("nature")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid className={classes.field} item xs={6}>
            <FormControl>
              <FormGroup>
                <FormLabel className={classes.attrName}>Strength</FormLabel>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("athletics")}
                        />
                      }
                      labelPlacement="start"
                      label="Athletics"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.athletics}
                          onChange={props.handleDoubleChange("athletics")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel className={classes.attrName}>Dexterity</FormLabel>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("stealth")}
                        />
                      }
                      labelPlacement="start"
                      label="Stealth"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.stealth}
                          onChange={props.handleDoubleChange("stealth")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormControl className={classes.formContainer}>
                    <FormGroup row="false">
                      <FormControlLabel
                        className={classes.checkbox}
                        control={
                          <Checkbox
                            onChange={props.handleSingleChange("acrobatics")}
                          />
                        }
                        labelPlacement="start"
                        label="Acrobatics"
                      />
                      <FormControlLabel
                        className={classes.checkbox2}
                        control={
                          <Checkbox
                            disabled={props.disabled.acrobatics}
                            onChange={props.handleDoubleChange("acrobatics")}
                          />
                        }
                      />
                    </FormGroup>
                  </FormControl>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("sleightOfHand")}
                        />
                      }
                      labelPlacement="start"
                      label="Sleight of Hand"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.sleightOfHand}
                          onChange={props.handleDoubleChange("sleight of hand")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel className={classes.attrName}>Charisma</FormLabel>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("persuasion")}
                        />
                      }
                      labelPlacement="start"
                      label="Persuasion"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.persuasion}
                          onChange={props.handleDoubleChange("persuasion")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("deception")}
                        />
                      }
                      labelPlacement="start"
                      label="Deception"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.deception}
                          onChange={props.handleDoubleChange("deception")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("intimidation")}
                        />
                      }
                      labelPlacement="start"
                      label="Intimidation"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.intimidation}
                          onChange={props.handleDoubleChange("intimidation")}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl className={classes.formContainer}>
                  <FormGroup row="false">
                    <FormControlLabel
                      className={classes.checkbox}
                      control={
                        <Checkbox
                          onChange={props.handleSingleChange("performance")}
                        />
                      }
                      labelPlacement="start"
                      label="Performance"
                    />
                    <FormControlLabel
                      className={classes.checkbox2}
                      control={
                        <Checkbox
                          disabled={props.disabled.performance}
                          onChange={props.handleDoubleChange("performance")}
                        />
                      }
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
