import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import games from "./teams";
import {games as fixtures} from "./teams";
import { Link } from '@material-ui/core';
import Background_pic from '/Users/Work/Desktop/MyProject/frontend/src/components/background.png';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgb(238, 238, 240)',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#525252',
    backgroundColor: "#F0E4C8"
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  // api/one_game/<fixture_id>

  const [fixture, setFixture] = useState({});
  const fixture_id = 592215;

  useEffect(() => {
    async function gameDetails() {
      const response = await fetch(`http://localhost:5000/api/one_game/${fixture_id}`);
      const data = await response.json();
      console.log(data.fixtures.response[0])
      setFixture(data.fixtures.response[0])
    }
    gameDetails();
  }, [] )

  const homePlayers = fixture.lineups && fixture.lineups[1].startXI.map(player =>(

    <Grid item xs={5}>
        <Paper className={classes.paper}>{player.player.name} {player.player.number}</Paper>
    </Grid>
    
  ));
  
  const awayPlayers = fixture.lineups && fixture.lineups[0].startXI.map(player => (
    <Grid item xs={5}>
        <Paper className={classes.paper}>{player.player.name} {player.number}</Paper>
    </Grid>
  ));

  const homeSubs = fixture.lineups && fixture.lineups[0].substitutes.map(subs => (
    <Grid item xs={5}>
        <Paper className={classes.paper}>{subs.name} {subs.number}</Paper>
    </Grid>

  
  ));

  const awaySubs = fixture.lineups && fixture.lineups[1].substitutes.map(subs =>(
    <Grid item xs={5}>
      <Paper className={classes.paper}>{subs.name} {subs.number}</Paper>
    </Grid>
  ));

  return (
    <div className={classes.root}>
    {/* <img src={Background_pic} className="Background" alt="Stadium picture" /> */}
    
        <React.Fragment>

          <Grid container spacing={3}>
            <Grid item xs={12} style={{ backgroundColor: ('gray'), justifyContent: 100}}>
                <Paper className={classes.paper}>Date</Paper>
                <Link style={{color:"white", padding:200}}>Home_Stats</Link>
                <Link style={{color:"white", padding:400}}>Away_Stats</Link>
            </Grid>
            <Grid item xs={5}>
              <Paper className={classes.paper}>{fixtures[0].home.name }</Paper>
              <Grid item xs={5}>
                <Paper className={classes.paper}>Starting XI</Paper>
                <div className={classes.homeplayers}>
                  {homePlayers}
                </div>
              </Grid>
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
            
             <Grid item xs={5}>
              <Paper className={classes.paper}>Substitutions</Paper>
            </Grid>
                <Grid >
                  {homeSubs}
                </Grid>
            
           <Grid item xs={5}>
              <Paper className={classes.paper}>Substitutions</Paper>
            </Grid>
            <Grid>
               {awaySubs}
            </Grid>
          
            
          </Grid>
  
        </React.Fragment>
    
    </div>
  );
}
