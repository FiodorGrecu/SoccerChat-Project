import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
      width: theme.spacing(39),
      height: theme.spacing(19)
    }
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={4} />
      <Paper elevation={4}/>
      <Paper elevation={4}/>
      <Paper elevation={4}/>
      <Paper elevation={4}/>
      <Paper elevation={4}/>
      <h2>Another Date</h2>
      {/* <hr style={{width:100, b}}></hr> */}
      <Paper elevation={4}/>
    </div>
  );
}
