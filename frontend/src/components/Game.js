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
  
  // venueArea: {
  //   color: '#8e9cc5',
  //   fontWeight: 'bold',
  //   fontSize: '13.65px',
  //   fontFamily:'Roboto,sans-serif',
  //   backgroundColor:'white',
  //   position: 'absolute',
  //   alignItems:'center',
  //   paddingTop: '10px',
  //   bottom:'0px',
  //   width:'100%',
  //   height:'20%',
  // },

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
        <div className={classes.homePlayersName}> <hr width='100%'/> <p style={{paddingLeft:'10%'}}> {player.player.name} {player.player.number}</p></div>
  ));
  
  const awayPlayers = fixture.lineups && fixture.lineups[1].startXI.map(player => (
        <div className={classes.awayPlayersName}> <hr width='100%' /> <p style={{paddingLeft:'10%'}}>{player.player.name} {player.player.number}</p></div>
  ));

  const homeSubs = fixture.lineups && fixture.lineups[0].substitutes.map(substitutes => (
      <div className={classes.homeSubsName}><hr width='100%'/> <p style={{paddingLeft:'10%'}}>{substitutes.player.name} {substitutes.player.number}</p></div>
  ));

  const awaySubs = fixture.lineups && fixture.lineups[1].substitutes.map(substitutes => (
      <div className={classes.awaySubsName}><hr width='100%'/> <p style={{paddingLeft:'10%'}}>{substitutes.player.name} {substitutes.player.number}</p></div>
  ));

  return (
    <div style={{display:"flex",backgroundColor:'#EAF0F7' }} >
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
                    <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem'}}>{awayTeamScore}</p>
                  </div>
                </div>

                  <div style={{display:'flex', width:'100%', height:'15%' ,backgroundColor:'white'}}>
                    <div className={classes.leagueLogo} style={{ width:'50%', textAlign:'left', paddingTop:'10px', paddingLeft:'2%'}}  >
                      <img src={leagueLogo} style={{width:31, height:31 }} />
                    </div>
                    <div style={{ width:'50%', textAlign:'right', 
                                  paddingTop:'20px', paddingRight:'2%', 
                                  fontFamily: 'Roboto,sans-serif',
                                  fontSize: '1rem', color: '#8e9cc5',
                                  fontWeight: '550'}}>
                                  <p >{venue}</p>
                    </div>
                  </div>  
                  <div style={{backgroundColor:'red', display:'flex', width:'100%' }}>
                    <div style={{ display:'flex', width:'100%'}}>
                      <a style={{ color:'white' }}>Summary</a>
                      <a style={{  color:'white' }}>Statistict</a>
                      <a style={{  color:'white' }}>Events</a>
                    </div>
                  </div>
              </div> 

              <div style={{display:'flex'}}>
                <div className={classes.homeStartingXI} style={{width:'50%'}}>
                      <div style={{color: '#516290',fontSize:'1.2rem', fontWeight:'600',paddingLeft:'5%', fontWeight:'bold'}}>
                        Starting Lineup
                        <span style={{paddingLeft:'5px'}}>({homeTeamFormation})</span>
                      </div>
                      <div style={{color: '#516290',fontSize:'1rem', fontWeight:'400',paddingLeft:'1%',fontWeight:'bold'}}>
                        {homePlayers}
                      </div>
                  <div style={{display:'flex'}}>
                    <div className={classes.homeCoach} style={{width:'100%',color: '#516290',fontSize:'1.2rem', fontWeight:'600',paddingLeft:'5%', fontWeight:'bold', paddingTop:'40px'}}>Coach<Divider/>
                      <p style={{paddingLeft: '5%',fontWeight:'500'}}>{hometeamCoach}</p>
                    </div>
                  </div>

                    <div className={classes.homeSubs} style={{width:'100%',color: '#516290',fontSize:'1.2rem', fontWeight:'600',paddingLeft:'5%', fontWeight:'bold', paddingTop:'40px'}} >Substitutions</div>
                      {homeSubs}
                </div> 

                <div className={classes.awayStartingXI} style={{width:'50%'}}>
                      <div style={{color: '#516290',fontSize:'1.2rem', fontWeight:'600',paddingLeft:'5%', fontWeight:'bold'}}>
                        Starting Lineup
                        <span style={{paddingLeft:'5px'}}>({awayTeamFormation})</span>
                      </div>
                      <div style={{color: '#516290',fontSize:'1rem', fontWeight:'400',paddingLeft:'1%',fontWeight:'bold'}}>
                        {awayPlayers}
                      </div>
                  <div style={{display:'flex'}}>
                    <div className={classes.awayCoach} style={{width:'100%',color: '#516290',fontSize:'1.2rem', fontWeight:'600',paddingLeft:'5%', fontWeight:'bold', paddingTop:'40px'}}>Coach<Divider/>
                      <p style={{paddingLeft: '5%',fontWeight:'500'}}>{awayteamCoach}</p>
                    </div>
                  </div>
                  <div className={classes.awaySubs} style={{width:'100%',color: '#516290',fontSize:'1.2rem', fontWeight:'600',paddingLeft:'5%', fontWeight:'bold', paddingTop:'40px'}} >Substitutions</div>
                    {awaySubs}
                </div> 

                {/* <div className={classes.awayStartingXI}><img src={awayteamLogo} style={{width:'50%', height:35, paddingLeft:2, paddingRight:2}}/>{awayteamName}<br/>StartingXI<br/>({awayTeamFormation}){awayPlayers}</div>    */}
              </div>   
          </div>
        <div style={{width:'30%', height:'1100px' }} >
                <ChatSection gameId={gameNum}/>
        </div>
    </div>
  );
}

