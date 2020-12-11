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
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

  scoreSheet:{
    width: '98%',
    height: '25%',
    backgroundColor: 'black',
    margin: '1%',
    position: 'relative',
  },
  
  venueArea: {
    color: '#8e9cc5',
    fontWeight: 'bold',
    fontSize: '13.65px',
    fontFamily:'Roboto,sans-serif',
    backgroundColor:'white',
    position: 'absolute',
    alignItems:'center',
    paddingTop: '10px',
    bottom:'0px',
    width:'100%',
    height:'20%',
  },

  homeStartingXI: {

    justifyContent:'flex-end',
    width: '100%',
    // padding: '22px',
    
  },

  awayStartingXI: {

    justifyContent:'flex-start',
    width: '100%',
   
  },


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

  const venue = fixture.lineups && fixture.fixture.venue.name;

  const homeTeamScore = fixture.goals && fixture.goals.home;
  const awayTeamScore = fixture.goals && fixture.goals.away;

  const homePlayers = fixture.lineups && fixture.lineups[0].startXI.map(player =>(

    // **********  All of this divs iside the grid were initialy Paper tags
        <div className={classes.homePlayersName}> <hr width='98%'/> <Link> {player.player.name} {player.player.number}</Link></div>
  ));
  
  const awayPlayers = fixture.lineups && fixture.lineups[1].startXI.map(player => (
        <div className={classes.awayPlayersName}> <hr width='98%' /> <Link>{player.player.name} {player.player.number}</Link></div>
  ));

  const homeSubs = fixture.lineups && fixture.lineups[0].substitutes.map(substitutes => (
        <div >{substitutes.player.name} {substitutes.player.number}</div>
  ));

  const awaySubs = fixture.lineups && fixture.lineups[1].substitutes.map(substitutes => (
      <div >{substitutes.player.name} {substitutes.player.number}</div>
  ));

  return (
    //  this is inside the div but for now to try something else
    // className={classes.leftSide}
    <div style={{display:"flex" }} >
    {/* <img src={Background_pic} className="Background" alt="Stadium picture" /> */}
  
            <div style={{width:'70%'}} >  
              <div className={classes.scoreSheet} slyle={{display:'flex'}}>
              <div style={{display:'flex', width:'100%'}}>
                <div className={classes.date} style={{width: '100%', position: 'absolute', textAlign:'center', paddingTop:'2%', color:'white',fontWeight: 'bold'}}>(Date)</div>
              </div>
              <div style={{display:'flex', width:'100%'}}>
                <div style={{ width:'50%', textAlign:'center', paddingTop:'3%'}}>
                <img src={hometeamLogo} style={{width:'74px', height:'74px'}}/>
                <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{hometeamName}</p>
                <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem' }}>{homeTeamScore}</p>

                </div>
                <div style={{ width:'50%', textAlign:'center', paddingTop:'3%'}}>
                <img src={awayteamLogo} style={{width:'74px', height:'74px'}}/>
                <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{awayteamName}</p>
                <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem' }}>{awayTeamScore}</p>

                </div>
              </div>
                {/* <div slyle={{display:'flex'}}> */}
                  {/* <div style={{color:'white', fontWeight: 'bold', textTransform: 'uppercase', boxSizing: "border-box" }}>
                      <div style={{width: '50%', paddingLeft: '20%', paddingTop:'4%',backgroundColor:'gree'}}><img src={hometeamLogo} style={{width:'74px', height:'74px'}}/>                     
                      <div style={{width: '50%', paddingTop:'2%'}}> {hometeamName}</div>
                      <div style={{color:'white', paddingLeft:'6%',paddingTop:'7%' ,position: 'absolute',fontFamily:'Oswald,sansSerif',fontSize:' 2rem' }}>{homeTeamScore}</div>
                      </div>
                  </div> */}

                  {/* <div style={{color:'white', fontWeight: 'bold', textTransform: 'uppercase', boxSizing: "border-box" }}>
                      <div style={{width: '50%', paddingLeft: '30%', paddingTop:'4%',backgroundColor:'grees'}}><img src={awayteamLogo} style={{width:'74px', height:'74px'}}/>                     
                      <div style={{width: '50%', paddingTop:'2%'}}> {awayteamName}</div>
                      <div style={{color:'white', paddingLeft:'6%',paddingTop:'0%' ,position: 'absolute',fontFamily:'Oswald,sansSerif',fontSize:' 2rem' }}>{awayTeamScore}</div>
                      </div>
                  </div> */}

                  {/* <div style={{color:'white', fontWeight: 'bold', textTransform: 'uppercase', textAlign:'center', boxSizing: "border-box", position: 'relative', backgroundColor:'green'}} >
                      <div style={{position: 'absolute', paddingLeft: '70%', paddingTop:'4%',backgroundColor:'re'}}><img src={awayteamLogo} style={{width:'78px', height:'78px'}}/>
                      <div style={{width: '50%',position: 'absolute', paddingTop:'5px',paddingLeft:'3%' }}>{awayteamName}</div>
                      <div style={{width: '50%',position: 'absolute', paddingTop:'5px' }}>{awayteamName}</div>
                      <div style={{color:'white', paddingLeft:'5%',paddingTop:'5%' ,position: 'absolute',fontFamily:'Oswald,sansSerif',fontSize:' 2rem'}}>{awayTeamScore}</div>
                      </div>
                  </div> */}

                  <div slyle={{position:'relative'}}>
                    <div className={classes.venueArea}  ><span className={classes.leagueLogo} style={{paddingRight:'66%'}} >
                      <img src={leagueLogo} style={{width:31, height:31}}/></span>{venue}
                    </div>
                  </div>  
                {/* </div> */}

              </div> 
              
                {/* <Link style={{color:"white", padding:200}}>Home_Stats</Link> */}
              <div style={{display:'flex'}}>
                {/* <div className={classes.homeStartingXI}>{hometeamName}<img src={hometeamLogo} style={{width:'50%', height:35, paddingLeft:2, paddingRight:2}}/><br/>Starting XI<br/>({homeTeamFormation}){homePlayers}</div> */}
                <div className={classes.homeStartingXI} style={{width:'50%'}}><br/>
                      <div style={{color: '#516290',fontSize:'1rem', fontWeight:'500',}}>Starting Lineup</div><br/>
                      <div style={{}}>({homeTeamFormation})</div>
                      <div style={{}}>{homePlayers}</div>
                 
                  <div style={{display:'flex'}}>
                    <div className={classes.homeCoach} style={{width:'100%'}}>Coach<Divider/><br/>{hometeamCoach}</div>

                  </div>
                  <Paper  style={{width:'100%'}} className={classes.homeStartingXI}>Substitutions{homeSubs}</Paper>
                </div>           

                <div className={classes.awayStartingXI} style={{width:'50%'}}><br/>Starting Lineup<br/>({awayTeamFormation}){awayPlayers}
                  <div style={{display:'flex'}}>
                    <div className={classes.awayCoach} style={{width:'100%'}}>Coach<Divider/><br/>{awayteamCoach}</div>
                  </div>
                  <Paper style={{width:'100%'}} className={classes.awayStartingXI}>Substitutions{awaySubs}</Paper>
                </div>   
                {/* <div className={classes.awayStartingXI}><img src={awayteamLogo} style={{width:'50%', height:35, paddingLeft:2, paddingRight:2}}/>{awayteamName}<br/>StartingXI<br/>({awayTeamFormation}){awayPlayers}</div>    */}
              </div>
              
          </div>
        {/* </React.Fragment> */}

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
