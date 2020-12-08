import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center ",
    // this weird symbols are the paper for some reason
    "& > *": {
      margin: theme.spacing(3),
      width: theme.spacing(39),
      height: theme.spacing(25),
      textAlign: "center",     
      backgroundColor: "aliceblue",
      padding: 70,
      fontWeight: (700),

    },
    paper1: {
      margin: 30,
      color: 'red'
    }
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
        
        <Paper elevation={4} className={classes.paper1}>
            Team1 vs Team2
        </Paper>
        <Paper elevation={4} className={classes.paper2}>
            Team1 vs Team2
        </Paper>
        <Paper elevation={4} className={classes.paper3}>
            Team1 vs Team2
        </Paper>
        <Paper elevation={4} className={classes.paper4}>
            Team1 vs Team2
        </Paper>
        <Paper elevation={4} className={classes.paper5}>
            Team1 vs Team2
        </Paper>
        <Paper elevation={4} className={classes.paper6}>
            Team1 vs Team2
        </Paper>        
        {/* it is funny hoe this creteds anothe paper */}
        <Divider/>  
     
    </div>
  );
}
