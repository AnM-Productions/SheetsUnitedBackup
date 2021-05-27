import React, { useState } from "react";
import { Grid, Box, IconButton, Typography } from "@material-ui/core";
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
import rolld20 from "./dice";
import CasinoIcon from "@material-ui/icons/Casino";

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
  profDisclaimer: {
    fontWeight: "700",
    fontSize: "12px",
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

  function proficiencyCheck(skill) {
    if (skill === 1) return "\tP";
    else if (skill === 2) return "\tE";
  }

  function rollCheck(name, prof, profbonus, modifier) {
    let mod = parseInt(modifier);
    let roll = rolld20();
    let rollmsg = `${name}`;
    if (prof === 1) rollmsg = rollmsg + ` (with Proficiency)`;
    else if (prof === 2) rollmsg = rollmsg + ` (with Expertise)`;
    rollmsg = rollmsg + `: ${roll} `;
    if (mod + prof * profbonus >= 0)
      rollmsg =
        rollmsg +
        `+ ${mod + prof * profbonus} = ${roll + mod + prof * profbonus}`;
    else rollmsg = rollmsg + `- ${mod * -1} = ${roll + mod}`;
    // Multiplying by -1 for easy formatting
    alert(rollmsg);
  }

  function displaySkill(modifier, proficiency, profBonus) {
    let total = parseInt(modifier) + proficiency * profBonus;
    if (total >= 0) return `+${total}`;
    else return `-${total}`;
  }
  return (
    <Grid container spacing={0}>
      <Grid container xs={6}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>
            <Grid container spacing={1}>
              <Grid className={classes.attrName} item xs={12}>
                Wisdom: {props.mods.wisdom}
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Perception
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.perception))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.wisdom,
                  props.values.perception,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Perception Check",
                      props.values.perception,
                      props.values.proficiency,
                      props.mods.wisdom
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />{" "}
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Survival
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.survival))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.wisdom,
                  props.values.survival,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Survival Check",
                      props.values.survival,
                      props.values.proficiency,
                      props.mods.wisdom
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Insight{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.insight))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.wisdom,
                  props.values.insight,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Insight Check",
                      props.values.insight,
                      props.values.proficiency,
                      props.mods.wisdom
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Medicine{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.medicine))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.wisdom,
                  props.values.medicine,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Perception Check",
                      props.values.medicine,
                      props.values.proficiency,
                      props.mods.wisdom
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Animal Handling{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.animalHandling))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.wisdom,
                  props.values.animalHandling,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Animal Handling Check",
                      props.values.animalHandling,
                      props.values.proficiency,
                      props.mods.wisdom
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>
            <Grid container spacing={1}>
              <Grid className={classes.attrName} item xs={12}>
                Intelligence: {props.mods.intelligence}
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Arcana{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.arcana))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.intelligence,
                  props.values.arcana,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Arcana Check",
                      props.values.arcana,
                      props.values.proficiency,
                      props.mods.intelligence
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Investigation{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.investigation))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.intelligence,
                  props.values.investigation,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Investigation Check",
                      props.values.investigation,
                      props.values.proficiency,
                      props.mods.intelligence
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Religion{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.religion))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.intelligence,
                  props.values.religion,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Religion Check",
                      props.values.religion,
                      props.values.proficiency,
                      props.mods.intelligence
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Nature{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.nature))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.intelligence,
                  props.values.nature,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Nature Check",
                      props.values.nature,
                      props.values.proficiency,
                      props.mods.intelligence
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                History{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.history))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.intelligence,
                  props.values.history,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "History Check",
                      props.values.history,
                      props.values.proficiency,
                      props.mods.intelligence
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
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
                Stength: {props.mods.strength}
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Athletics{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.athletics))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.strength,
                  props.values.athletics,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Athletics Check",
                      props.values.athletics,
                      props.values.proficiency,
                      props.mods.strength
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>
            <Grid container spacing={1}>
              <Grid className={classes.attrName} item xs={12}>
                Dexterity: {props.mods.dexterity}
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Acrobatics{"\t"}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.acrobatics))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.dexterity,
                  props.values.acrobatics,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Acrobatics Check",
                      props.values.acrobatics,
                      props.values.proficiency,
                      props.mods.dexterity
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Stealth{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.stealth))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.dexterity,
                  props.values.stealth,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Stealth Check",
                      props.values.stealth,
                      props.values.proficiency,
                      props.mods.dexterity
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Sleight of Hand{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.sleightOfHand))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.dexterity,
                  props.values.sleightOfHand,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Sleight of Hand Check",
                      props.values.sleightOfHand,
                      props.values.proficiency,
                      props.mods.dexterity
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>
            <Grid container spacing={1}>
              <Grid className={classes.attrName} item xs={12}>
                Charisma: {props.mods.charisma}
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Persuasion{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.persuasion))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.charisma,
                  props.values.persuasion,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Investigation Check",
                      props.values.persuasion,
                      props.values.proficiency,
                      props.mods.charisma
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Intimidation{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.intimidation))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.charisma,
                  props.values.intimidation,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Intimidation Check",
                      props.values.intimidation,
                      props.values.proficiency,
                      props.mods.charisma
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Deception{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.deception))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.charisma,
                  props.values.deception,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Deception Check",
                      props.values.deception,
                      props.values.proficiency,
                      props.mods.charisma
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
              <Grid className={classes.field} item xs={7}>
                Performance{" "}
                <Box component="span" className={classes.profDisclaimer}>
                  {proficiencyCheck(parseInt(props.values.performance))}
                </Box>
              </Grid>
              <Grid className={classes.field} item xs={5}>
                {displaySkill(
                  props.mods.charisma,
                  props.values.performance,
                  props.values.proficiency
                )}
                <IconButton
                  aria-label="roll dice"
                  onClick={() =>
                    rollCheck(
                      "Performance Check",
                      props.values.performance,
                      props.values.proficiency,
                      props.mods.charisma
                    )
                  }
                  size="small"
                >
                  <CasinoIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper onClick={handleClickOpen} className={classes.paperStyle}>
          <Typography align="center" className={classes.attrName}>
            <Box component="span" textAlign="center" display="inline">
              Edit Proficiencies
            </Box>
          </Typography>
        </Paper>
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
                          onChange={props.handleDoubleChange("sleightOfHand")}
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
