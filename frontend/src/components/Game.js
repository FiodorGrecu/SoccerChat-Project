import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import games from "./teams";
import {games as fixtures} from "./teams";
import { Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "#F0E4C8"
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const homePlayers = fixtures[0].home.players.map(player =>(

    <Grid item xs={5}>
        <Paper className={classes.paper}>{player.name} {player.number}</Paper>
    </Grid>
    
  ));
  
  const awayPlayers = fixtures[0].away.players.map(player => (
    <Grid item xs={5}>
        <Paper className={classes.paper}>{player.name} {player.number}</Paper>
    </Grid>
  ));
  
  return (
    <div className={classes.root}>
    
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ backgroundColor: ('grey'),}}>
                <Paper className={classes.paper}>Date</Paper>
            </Grid>
            <Grid item xs={5}>
              <Paper className={classes.paper}>{fixtures[0].home.name }</Paper>
              <Grid item xs={5}>
                <Paper className={classes.paper}>Starting XI</Paper>
              </Grid>
              {homePlayers}
            </Grid>
            
            <Grid item xs={1}>
                {/* <Paper className={classes.paper}>vs</Paper> */}
            </Grid>
            <Grid item xs={5}>
              <Paper className={classes.paper}>{fixtures[0].away.name}</Paper>
              <Grid item xs={5}>
                <Paper className={classes.paper}>Starting XI</Paper>
              </Grid>
              {awayPlayers}
            </Grid>
            
             <Grid item xs={3}>
              <Paper className={classes.paper}>Substitutions</Paper>
            </Grid>
            
           <Grid item xs={3}>
              <Paper className={classes.paper}>Substitutions</Paper>
            </Grid>
            
            
          </Grid>
  
        </React.Fragment>
    
    </div>
  );
}
