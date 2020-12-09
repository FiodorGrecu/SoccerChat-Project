import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// import {View, Text, StyleSheet} from 'react-native';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import games from "./teams";
import {games as fixtures} from "./teams";
import { Link } from '@material-ui/core';
// import Background_pic from '/Users/Work/Desktop/MyProject/frontend/src/components/background.png';
import Moment from 'react-moment';
import Date from 'react-moment';

// import background from '/public.background.png';
// import url from 'resources/url';
import Divider from '@material-ui/core/Divider';
import ChatSection from './ChatSection';
import { icons } from 'react-icons/lib';

const useStyles = makeStyles((theme) => ({
  
  leagueName: {
    color: '#be13aa',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    fontFamily:'Roboto,sans-serif',
    backgroundColor:'pink',
    borderRadius: '10px',
  },

  // homeStartingXI: {
  //   display: 'flex',
  //   justifyContent:'flex-end',
  //   width: '50%',
  // },

  // awayStartingXI: {
  //   display: 'flex',
  //   justifyContent:'flex-start'
  // }

  

}));

export default function CenteredGrid(props) {
  const classes = useStyles();


  const [fixture, setFixture] = useState({});
  const { gameNum } = useParams();

  const unixTimestamp = 1604752200;

  useEffect(() => {
    async function gameDetails() {
      const response = await fetch(`http://localhost:5000/api/one_game/${gameNum}`);
      const data = await response.json();
      console.log(data);
      if (data.fixtures) {
        console.log(data.fixtures.response || null)
        setFixture(data.fixtures.response[0] || {})
      };
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


  const homeTeamFormation = fixture.lineups && fixture.lineups[0].formation;
  const awayTeamFormation = fixture.lineups && fixture.lineups[1].formation;

  const homePlayers = fixture.lineups && fixture.lineups[0].startXI.map(player =>(
    // <Grid item xs={5} direction={"column"} >
    // **********  All of this divs iside the grid were initialy Paper tags
        <div className={classes.homePlayersName}> <hr width='98%'/> <Link> {player.player.name} {player.player.number}</Link></div>
  //  {/* </Grid> */}
    
  ));
  
  const awayPlayers = fixture.lineups && fixture.lineups[1].startXI.map(player => (
    // <Grid item xs={5}>
        <div className={classes.awayPlayersName}> <hr width='98%' /> <Link>{player.player.name} {player.player.number}</Link></div>
    // {/* </Grid> */}
  ));

  const homeSubs = fixture.lineups && fixture.lineups[0].substitutes.map(substitutes => (
    // <Grid item xs={5}>
        <div >{substitutes.player.name} {substitutes.player.number}</div>
    //* </Grid> */
  ));

  const awaySubs = fixture.lineups && fixture.lineups[1].substitutes.map(substitutes => (
    // <Grid item xs={5}>
      <div >{substitutes.player.name} {substitutes.player.number}</div>
     // </Grid>
  ));

  return (
    //  this is inside the div but for now to try something else
    // className={classes.leftSide}
    <div style={{display:"flex" }} >
   
 
    {/* <img src={Background_pic} className="Background" alt="Stadium picture" /> */}
    
    {/* <View style={{flex: 1, flexDirection: 'row'}}> */}
      {/* <View style={{flex:1, alignItems:'center'}} > */}
        {/* <React.Fragment> */}
{/* style={{flex:'50%'}} */}
            <div style={{width:'70%'}} >   
              <div slyle={{direction:'flex'}}>
                <div className={classes.leagueName} style={{display:"flex"}} >{leagueName}  </div>
                <div className={classes.leagueLogo}><img src={leagueLogo} style={{width:50, height:50, paddingLeft:2, paddingRight:2}}/></div>
              </div>
                {/* <Link style={{color:"white", padding:200}}>Home_Stats</Link> */}
              <div style={{display:'flex'}}>
                {/* <div className={classes.homeStartingXI}>{hometeamName}<img src={hometeamLogo} style={{width:'50%', height:35, paddingLeft:2, paddingRight:2}}/><br/>Starting XI<br/>({homeTeamFormation}){homePlayers}</div> */}
                <div className={classes.homeStartingXI} style={{width:'50%'}}>{hometeamName} <img src={hometeamLogo} style={{width:'30px', height:'30px'}} /><br/>Starting XI<br/>({homeTeamFormation}){homePlayers}</div>
                  <div className={classes.score}>Score</div>
                <div className={classes.awayStartingXI} style={{width:'50%'}}><img src={awayteamLogo}  style={{width:'30px', height:'30px'}} />{awayteamName}<br/>StartingXI<br/>({awayTeamFormation}){awayPlayers}</div>   
                {/* <div className={classes.awayStartingXI}><img src={awayteamLogo} style={{width:'50%', height:35, paddingLeft:2, paddingRight:2}}/>{awayteamName}<br/>StartingXI<br/>({awayTeamFormation}){awayPlayers}</div>    */}
              </div>
              {/* </Grid> */}
            {/* </Grid> */}
            
            {/* <Grid item xs={15}> */}
              <Paper className={classes.homeCoach}>Coach<Divider/><br/>{hometeamCoach}</Paper>
                  
            {/* </Grid> */}
            
             {/* <Grid item lg={2}> */}
              <Paper className={classes.awayStartingXI}>Substitutions{homeSubs}</Paper>
            {/* </Grid> */}
                {/* <Grid >
                  
                </Grid> */}
            {/* <Grid item lg={2}> */}
              <Paper className={classes.awayCoach}>Coach<Divider/><br/>{awayteamCoach}</Paper>      
            {/* </Grid> */}
            {/* <Grid item lg={3}> */}
              <Paper className={classes.awayStartingXI}>Substitutions{awaySubs}</Paper>
            {/* </Grid>            */}
          {/* </Grid> */}
          </div>
        {/* </React.Fragment> */}
      {/* </View> */}
          {/* // <View style={{flex:1, alignItems:'center'}} > */}

        {/*  so this has to go inside the div */}
        {/* className={classes.rightSide} */}
        {/* style={{flex:'50%'}} */}
        {/* <hr style={{width:'1', size:"500" }}/> */}
          <div style={{width:'30%', height:'1100px' }} >
                  <ChatSection gameId={gameNum}/>
          </div>

    </div>
  );
}

//   useEffect(() => {
//     console.log(params);
//   }, [params])
//   return (
//     <React.Fragment>
//       <p>{params.id}</p>
//       {/* { params.gameNum && <CenteredGrid gameNum={params.gameNum} /> } */}
//     </React.Fragment>
//   )
// }
