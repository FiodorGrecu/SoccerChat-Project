import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import games from "./teams";
import {games as fixtures} from "./teams";
import { Link } from '@material-ui/core';
import Background_pic from '/Users/Work/Desktop/MyProject/frontend/src/components/background.png';
import Moment from 'react-moment';
import Date from 'react-moment';
import Timestamp from 'react-moment';

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
  leagueName: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 40,
    color: 'purple',
  }

}));

export default function CenteredGrid() {
  const classes = useStyles();

  // api/one_game/<fixture_id>

  const [fixture, setFixture] = useState({});
  const fixture_id = 592215;
  const unixTimestamp = 1604752200;

  // const date = new Date(1604752200).toLocaleDateString("en-US");

  // const date = new Date(unixTimestamp*1000);
  // const hours = date.getHours();
  // const minutes = "0" + date.getMinutes();
  // const time = hours + ":" + minutes.substr(-2);

  useEffect(() => {
    async function gameDetails() {
      const response = await fetch(`http://localhost:5000/api/one_game/${fixture_id}`);
      const data = await response.json();
      console.log(data.fixtures.response[0])
      setFixture(data.fixtures.response[0])
    
    }
    gameDetails();
  }, [] )

  const gameDate = fixture.fixture && fixture.fixture.date;
  
  const leagueName = fixture.league && fixture.league.name;
  const leagueLogo = fixture.league && fixture.league.logo;
  
  const hometeamName = fixture.lineups && fixture.lineups[0].team.name;
  const awayteamName = fixture.lineups && fixture.lineups[1].team.name;

  const hometeamCoach = fixture.lineups && fixture.lineups[0].coach.name;
  const awayteamCoach = fixture.lineups && fixture.lineups[1].coach.name;

  const hometeamLogo = fixture.lineups && fixture.lineups[0].team.logo;
  const awayteamLogo = fixture.lineups && fixture.lineups[1].team.logo;

  const homePlayers = fixture.lineups && fixture.lineups[0].startXI.map(player =>(

    <Grid item xs={50}>
        <Paper className={classes.paper}>{player.player.name} {player.player.number}</Paper>
    </Grid>
    
  ));
  
  const awayPlayers = fixture.lineups && fixture.lineups[1].startXI.map(player => (
    <Grid item xs={50}>
        <Paper className={classes.awayPlayers}>{player.player.name} {player.number}</Paper>
    </Grid>
  ));

  const homeSubs = fixture.lineups && fixture.lineups[0].substitutes.map(substitutes => (
    <Grid item xs={150}>
        <Paper className={classes.paper}>{substitutes.player.name} {substitutes.player.number}</Paper>
    </Grid>

  
  ));

  const awaySubs = fixture.lineups && fixture.lineups[1].substitutes.map(substitutes => (

    <Grid item xs={150}>
      <Paper className={classes.paper}>{substitutes.player.name} {substitutes.player.number}</Paper>
    </Grid>
  ));

  
 

  return (
    <div className={classes.root}>
    {/* <img src={Background_pic} className="Background" alt="Stadium picture" /> */}
    
        <React.Fragment>

          <Grid container spacing={1}>
               
                <div className={classes.leagueName}>{leagueName}</div>
                <Moment unix>{unixTimestamp}</Moment>
                {/* <Moment unix>{time}</Moment> */}
                {/* <Moment unix>{date}</Moment> */}

                {/* <Moment unix>{date}</Moment> */}
                {/* <Timestamp date={Date} options={{ includeDay: true, twentyFourHour: true }} />  */}
                {/* <div className={classes.date}>{gameDate}</div> */}
                <div className={classes.leagueLogo}><img src={leagueLogo} style={{width:50, height:50, paddingLeft:2, paddingRight:2}}/></div>

                {/* <Link style={{color:"white", padding:200}}>Home_Stats</Link> */}
                
            
            <Grid item xs={5}>
                <div>{hometeamName}</div>
                <img src={hometeamLogo} style={{width:35, height:35, paddingLeft:2, paddingRight:2}}/>
              <Grid item xs={5}>
                <Paper className={classes.paper}>Starting XI</Paper>
                  <div>{homePlayers}</div> 
              </Grid>
            </Grid>
            
            <Grid item xs={2}>
                <Paper className={classes.paper}>vs</Paper>
            </Grid>
            
            <Grid item xs={5}>
                <div>{awayteamName}</div>
                <img src={awayteamLogo} style={{width:35, height:35, paddingLeft:2, paddingRight:2}}/>
              <Grid item xs={15}>
                <Paper className={classes.paper}>Starting XI</Paper>
              <div>{awayPlayers}</div>
              </Grid>
            </Grid>
            
            <Grid item xs={5}>
              <Paper className={classes.paper}>Coach<div>{hometeamCoach}</div></Paper>
                  
            </Grid>
            
             <Grid item xs={5}>
              <Paper className={classes.subs}>Substitutions<div>{homeSubs}</div></Paper>
            </Grid>
                <Grid >
                  
                </Grid>
                <Grid item xs={5}>
              <Paper className={classes.paper}>Coach<div>{awayteamCoach}</div></Paper>
                  
            </Grid>
           <Grid item xs={5}>
              <Paper className={classes.subs}>Substitutions{awaySubs}</Paper>
            </Grid>
            <Grid>
               
            </Grid>
          
            
          </Grid>
  
        </React.Fragment>
    
    </div>
  );
}
