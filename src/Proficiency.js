import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  field: {
    padding: "10px",
  },
  paperStyle: {
    paddingLeft: '5px',
    margin: '8px',
    
  },
  attrName: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
  },
};

function Proficiency(props) {
  const { classes } = props;
  return (
    <Grid container spacing={0}>
      <Grid container xs={6}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>
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
          <Paper className={classes.paperStyle}>
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
          <Paper className={classes.paperStyle}>
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
          <Paper className={classes.paperStyle}>
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
          <Paper className={classes.paperStyle}>
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
    </Grid>
  );
}

export default withStyles(styles)(Proficiency);
