import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center ",
    // this weird symbols arethe paper for some reason
    "& > *": {
      margin: theme.spacing(3),
      width: theme.spacing(39),
      height: theme.spacing(25),
      textAlign: "center",     
      backgroundColor: "#F0E4C8",
      padding: 70,
      fontWeight: (700),

    },
    paper: {
      
    }
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
        
        <Paper elevation={4} className={classes.paper}>
            Team1 vs Team2
        </Paper>
        <Paper elevation={4} className={classes.paper}>
            Team1 vs Team2
        </Paper>
        <Paper elevation={4} className={classes.paper}>
            Team1 vs Team2
        </Paper>
        <Paper elevation={4} className={classes.paper}>
            Team1 vs Team2
        </Paper>
        <Paper elevation={4} className={classes.paper}>
            Team1 vs Team2
        </Paper><Paper elevation={4} className={classes.paper}>
            Team1 vs Team2
        </Paper>

      {/* <Paper elevation={4}>Team1 vs  Team2</Paper> */}
     
    </div>
  );
}
