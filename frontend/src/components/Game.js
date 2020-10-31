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
    backgroundColor: '#F5F5F5'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const homePlayers = fixtures[0].home.players.map(player =>(

    <Grid item xs={5}>
        <Paper className={classes.paper}>{player.name} {player.number}</Paper>
    </Grid>
    
  )) 

  

  return (
    <div className={classes.root}>
    
        <React.Fragment>
          
          <Grid item xs={12} style={{ backgroundColor: ("lightgrey"),}}>
              <Paper className={classes.paper}>Date</Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>{fixtures[0].home.name }</Paper>
          </Grid>
          <Grid>
              <Paper className={classes.paper}>vs</Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>{fixtures[0].away.name}</Paper>
          </Grid>
          {homePlayers}
          
          <Grid item xs={3}>
            <Paper className={classes.paper}>Substitutions</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Starting XI</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Substitutions</Paper>
          </Grid>
        
  
        </React.Fragment>
    
    </div>
  );
}
