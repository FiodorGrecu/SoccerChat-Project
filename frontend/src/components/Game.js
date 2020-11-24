import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import games from "./teams";
import {games as fixtures} from "./teams";
import { Link } from '@material-ui/core';
// import Background_pic from '/Users/Work/Desktop/MyProject/frontend/src/components/background.png';
import Moment from 'react-moment';
import Date from 'react-moment';
import Timestamp from 'react-moment';
// import background from '/public.background.png';
// import url from 'resources/url';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: 'aliceblue',

  },
  paper: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(2),
    textAlign: 'center',
    color: '#525252',
    // backgroundColor: "#F0E4C8"
  },
  homePlayerName: {
    paddingLeft: theme.spacing(10),
    width: theme.spacing(30),
    height: theme.spacing(10),
    paddingRight: 2,
    fontSize: 1,
    color: '#F0F8FF',
  },
  awayPlayerName: {
    paddingLeft: theme.spacing(10),
    width: theme.spacing(30),
    height: theme.spacing(10),
    paddingRight: theme.spacing(2),
    fontSize: 1,
    color: '#F0F8FF',
  },


  awaystartingXI: {
    width: theme.spacing(10),

  },
  homestartingXI: {
    width: theme.spacing(30),

  },
  score: {
    color: 'purple'
  }

}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  // api/one_game/<fixture_id>

  const [fixture, setFixture] = useState({});
  // const {gameNum} = useParams();
  // let test = useParams();
  const gameNum = 436;
  // console.log(test);
  const unixTimestamp = 1604752200;

  // const date = new Date(1604752200).toLocaleDateString("en-US");

  // const date = new Date(unixTimestamp*1000);
  // const hours = date.getHours();
  // const minutes = "0" + date.getMinutes();
  // const time = hours + ":" + minutes.substr(-2);

  useEffect(() => {
    async function gameDetails() {
      const response = await fetch(`http://localhost:5000/api/one_game/${gameNum}`);
      const data = await response.json();
      console.log(data);
      console.log(data.fixtures.response[0])
      setFixture(data.fixtures.response[0] || {})
    
    }
    if (gameNum) {
      gameDetails();
      
    }
    // gameDetails();

  }, [gameNum] )

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
    // <Grid item xs={5}>
        <Paper className={classes.homePlayerName}>{player.player.name} {player.player.number}</Paper>
    // </Grid>
    
  ));
  
  const awayPlayers = fixture.lineups && fixture.lineups[1].startXI.map(player => (
    // <Grid item xs={5}>
        <Paper className={classes.awayPlayersName}>{player.player.name} {player.player.number}</Paper>
    // </Grid>
  ));

  const homeSubs = fixture.lineups && fixture.lineups[0].substitutes.map(substitutes => (
    // <Grid item xs={5}>
        <Paper className={classes.paper}>{substitutes.player.name} {substitutes.player.number}</Paper>
    // </Grid>
  ));

  const awaySubs = fixture.lineups && fixture.lineups[1].substitutes.map(substitutes => (
    // <Grid item xs={5}>
      <Paper className={classes.paper}>{substitutes.player.name} {substitutes.player.number}</Paper>
    // </Grid>
  ));

  return (
    <div className={classes.root}>
    {/* <img src={Background_pic} className="Background" alt="Stadium picture" /> */}
    
        <React.Fragment>

          <Grid container spacing={1}>
                {/* <img src={background} alt="Background" />; */}
                <div className={classes.leagueName}>{leagueName}</div>
                {/* <Moment unix>{unixTimestamp}</Moment> */}
                {/* <Moment unix>{time}</Moment> */}
                {/* <Moment unix>{date}</Moment> */}

                {/* <Moment unix>{date}</Moment> */}
                {/* <Timestamp date={Date} options={{ includeDay: true, twentyFourHour: true }} />  */}
                {/* <div className={classes.date}>{gameDate}</div> */}
                <div className={classes.leagueLogo}><img src={leagueLogo} style={{width:50, height:50, paddingLeft:2, paddingRight:2}}/></div>

                {/* <Link style={{color:"white", padding:200}}>Home_Stats</Link> */}
                
            
            {/* <Grid item xs={5}>     */}
              <Grid item xs={15}>
                <Paper className={classes.homeStartingXI}>{hometeamName}<img src={hometeamLogo} style={{width:35, height:35, paddingLeft:2, paddingRight:2}}/><br/>Starting XI{homePlayers}</Paper>
              </Grid>
            {/* </Grid> */}
            
            {/* <Grid item xs={2}>
                <Paper className={classes.score}>Score</Paper>
            </Grid> */}

            {/* <Grid item xs={5}>                 */}
              <Grid item xs={15}>
                <Paper className={classes.awayStartingXI}><img src={awayteamLogo} style={{width:35, height:35, paddingLeft:2, paddingRight:2}}/>{awayteamName}<br/>StartingXI{awayPlayers}</Paper>   
              </Grid>
            {/* </Grid> */}
            
            <Grid item xs={15}>
              <Paper className={classes.homeCoach}>Coach<br/>{hometeamCoach}</Paper>
                  
            </Grid>
            
             <Grid item xs={15}>
              <Paper className={classes.subsHome}>Substitutions{homeSubs}</Paper>
            </Grid>
                {/* <Grid >
                  
                </Grid> */}
            <Grid item xs={15}>
              <Paper className={classes.awayCoach}>Coach<br/>{awayteamCoach}</Paper>      
            </Grid>
           <Grid item xs={15}>
              <Paper className={classes.subsAway}>Substitutions{awaySubs}</Paper>
            </Grid>           
          </Grid>
        </React.Fragment>
    
    </div>
  );
}
