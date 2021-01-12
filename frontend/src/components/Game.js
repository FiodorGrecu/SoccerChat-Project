import React, { useState, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import games from "./teams";
import {games as fixtures} from "./teams";
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
// import Background_pic from '/Users/Work/Desktop/MyProject/frontend/src/components/background.png';
import Moment from 'react-moment';
// import background from '/public.background.png';
import Divider from '@material-ui/core/Divider';
import ChatSection from './ChatSection';
import { icons } from 'react-icons/lib';
import { grey } from '@material-ui/core/colors';
// import { BiCalendar } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import LeagueBar from './LeagueNameBar';
import LineUps from './LineUps';
import GameSectionScoreCheet from './GameSectionScoreCheet';
import Events from './Events';
import StatsBar from './StatsTopBar';
import StatsBody from './StatsBody';
import StatsHeader from './StatsHeader';
import GameHeader from './GameHeader';


const useStyles = makeStyles((theme) => ({

  scoreSheet:{
    width: '98%',
    height: '15%',
    backgroundColor: 'black',
    margin: '1%',
    position: 'relative',
  },
  
  chartText: {
    /*font: 16px/1.4em "Montserrat", Arial, sans-serif;*/
    // fill:" green",
    mozTransform: 'translateY(0.5em)',
    msTransform: 'translateY(0.25em)',
    transform: 'translateY(0.25em)',
    webkitTransform: 'translateY(0.25em)'
  },
  
  chartNumber: {
    fontSize: '10px',
    lineHeight: '1',
    textAnchor: 'middle',
    mozTransform: 'translateY(-0.25em)',
    msTransform: 'translateY(0.25em)',
    webkitTransform: 'translateY(0.25em)',
    transform: 'translateY(-0.25em)',
  }

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

  const leagueLogo = fixture.league && fixture.league.logo;

  const venue = fixture.lineups && fixture.fixture.venue.name;

  const homeShotsOnTarget = fixture.statistics && fixture.statistics[0].statistics[0].value;
  const awayShotsOnTarget = fixture.statistics && fixture.statistics[1].statistics[0].value;
  
  const homeShotsOffTarget = fixture.statistics && fixture.statistics[0].statistics[1].value;
  const awayShotsOffTarget = fixture.statistics && fixture.statistics[1].statistics[1].value;
  
  const homeTotalShots = fixture.statistics && fixture.statistics[0].statistics[2].value;
  const awayTotalShots = fixture.statistics && fixture.statistics[1].statistics[2].value;
  
  const homeShotsInsideBox = fixture.statistics && fixture.statistics[0].statistics[4].value;
  const awayShotsInsideBox = fixture.statistics && fixture.statistics[1].statistics[4].value;
  
  const homeShotsOutsideBox = fixture.statistics && fixture.statistics[0].statistics[5].value;
  const awayShotsOutsideBox = fixture.statistics && fixture.statistics[1].statistics[5].value;
 
  const homeBlockedShots = fixture.statistics && fixture.statistics[0].statistics[3].value;
  const awayBlockedShots = fixture.statistics && fixture.statistics[1].statistics[3].value;
  
  const homeGoalkeeperSaves = fixture.statistics && fixture.statistics[0].statistics[12].value;
  const awayGoalkeeperSaves = fixture.statistics && fixture.statistics[1].statistics[12].value;
  
  const homeFouls = fixture.statistics && fixture.statistics[0].statistics[6].value;
  const awayFouls = fixture.statistics && fixture.statistics[1].statistics[6].value;
  
  const homeYellowCards = fixture.statistics && fixture.statistics[0].statistics[10].value;
  const awayYellowCards = fixture.statistics && fixture.statistics[1].statistics[10].value;
  
  const homeRedCards = fixture.statistics && fixture.statistics[0].statistics[11].value;
  const awayRedCards = fixture.statistics && fixture.statistics[1].statistics[11].value;
  
  const homeTotalPasses = fixture.statistics && fixture.statistics[0].statistics[13].value;
  const awayTotalPasses = fixture.statistics && fixture.statistics[1].statistics[13].value;
  
  const homePassesAcurate = fixture.statistics && fixture.statistics[0].statistics[14].value;
  const awayPassesAcurate = fixture.statistics && fixture.statistics[1].statistics[14].value;
  
  const homePassesAcuracy = fixture.statistics && fixture.statistics[0].statistics[15].value.slice(0,-1);
  const awayPassesAcuracy = fixture.statistics && fixture.statistics[1].statistics[15].value.slice(0,-1);
  
  // const homePassesAcuracyWidth = fixture.statistics && fixture.statistics[0].statistics[15].value;
  // const awayPassesAcuracyWidth = fixture.statistics && fixture.statistics[1].statistics[15].value;
  
  const homeBallPossession = fixture.statistics && fixture.statistics[0].statistics[9].value.slice(0,-1);
  const awayBallPossession = fixture.statistics && fixture.statistics[1].statistics[9].value.slice(0,-1);
  // console.log(homeBallPossession)

  const homeCornerKicks = fixture.statistics && fixture.statistics[0].statistics[7].value;
  const awayCornerKicks = fixture.statistics && fixture.statistics[1].statistics[7].value;
  
  const homeOffsides = fixture.statistics && fixture.statistics[0].statistics[8].value;
  const awayOffsides = fixture.statistics && fixture.statistics[1].statistics[8].value;

  const homeShootingAccuracy = homeShotsOnTarget / (homeShotsOnTarget + homeShotsOffTarget) * 100;
  const awayShootingAccuracy = awayShotsOnTarget / (awayShotsOnTarget + awayShotsOffTarget) * 100;

  // const homeShootingAccuracy = Math.floor(homeShootingAccuracy);
  console.log(Math.floor(homeShootingAccuracy))
  console.log(awayShootingAccuracy)

  function getTime(date) {
    if (date) {
      const time = new Date(date);
      // If I want PM or AM change the 'en-GB' to 'en-US'
    return time.toLocaleTimeString('en-GB', {hour:'2-digit', minute:'2-digit',  }); 
    } else {
      return undefined;
    }

  }
  function getDay(date) {
       return new Date(date).toLocaleDateString()
    }

  // ));
console.log(fixture)
  return (
  <div style={{width:'100%', }}>
        <StatsBar/>
    <div style={{display:"flex",backgroundColor:'#EAF0F7' }} >
            <div style={{width:'70%', }} > 
              {/* { showStats ? <StatisticsHeader fixture={fixture}/> : <GameHeader fixture={fixture}/> }  */}
                <div className={classes.scoreSheet} slyle={{display:'flex', marginBottom:'100px'}}>
                  <Switch>
                    <Route path="/game/:gameId/statistics">
                      {/* <StatsHeader fixture={fixture} gameNum={gameNum}/> */}
                      
                      <div style={{display:'flex', width:'100%',justifyContent:'space-evenly',height:'100%', alignItems:'center', }}>
                        <div style={{width:'30%',  }}>
                            <h3>{}</h3>
                        <svg width="65%" height="65%" viewBox="0 0 42 42" class="donut">
                          <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#black"></circle>
                          <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#516290" stroke-width="3"></circle>
                          <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" stroke-width="3" stroke-dasharray={`${homeShootingAccuracy} ${100 - homeShootingAccuracy}`} stroke-dashoffset="75"></circle>
                          <g className={classes.chartText}>
                            <text  x="30%" y="60%" className={classes.chartNumber} stroke="#ce4b99">
                              {Math.floor(homeShootingAccuracy)}
                            </text>
                            {/* <text x="70%" y="60%" style={classes.chartLabel} stroke="#ce4b99"> */}
                            <text x="70%" y="60%" stroke="#ce4b99">
                              %
                            </text>
                          </g>
                        </svg>
                          {/* <div style={{backgroundColor:'#AEECFF',color:'white', height:'100px', }}>Left Donut</div> */}
                        </div>
                        <div style={{width:'40%' }}>
                        <div style={{ width:'100%', textAlign:'center', marginBottom:'10px'}}>

                          {/* First row and it's bar */}
                          <div style={{ width:'90%', margin:'auto', }}>
                            <span style={{width:'20%', float:'left', textAlign:'left',
                                    fontFamily:'Roboto,sans-serif',fontSize: '0.9rem',
                                    color: 'white',fontWeight: 'bold'}}>
                              {homeBallPossession}
                            </span>
                            <span style={{width:'60%', float:'left',fontFamily:'Roboto,sans-serif',
                                    fontSize: '0.9rem',color: 'white',fontWeight: '500',
                                    fontWeight: 'bold'}}>
                              Ball Possession %  
                            </span>
                            <span style={{ width:'20%',float:'right', textAlign:'right',
                                    fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                                    color: 'white',fontWeight: 'bold'}}>
                              {awayBallPossession}
                            </span>
                          </div>
                          <div style={{width:'90%', margin:'auto',display:'flex' }}>
                              <span style={{backgroundColor:'#516290', width:`${homeBallPossession}%`, marginRight:'1px'}}>
                              </span>
                              <span style={{backgroundColor:'#CE4B99', width:`${awayBallPossession}%`,height:'10px',}}>
                              </span>
                          </div>

                          {/* Second row and it's bar */}
                          <div style={{ width:'90%', margin:'auto', paddingTop:'10px'}}>
                              <span style={{width:'20%', float:'left', textAlign:'left',
                                      fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                                      color: 'white',fontWeight: 'bold'}}>
                                  {homePassesAcuracy}
                              </span>
                              <span style={{width:'60%',float:'left',fontFamily:'Roboto,sans-serif',
                                      fontSize: '0.9rem',color: 'white',fontWeight: '500',
                                      fontWeight:'bold'}}>
                                  Passes Accuracy %
                              </span>
                              <span style={{ width:'20%',float:'right', textAlign:'right',
                                      fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                                      color: 'white',fontWeight: 'bold'}}>
                                  {awayPassesAcuracy}
                                </span>
                          </div>
                          <div style={{width:'90%', margin:'auto',display:'flex' }}>
                              <span style={{backgroundColor:'#516290', width:`${homePassesAcuracy}%`, marginRight:'1px'}}>
                              </span>
                              <span style={{backgroundColor:'#CE4B99', width:`${awayPassesAcuracy}%`,height:'10px'}}>
                              </span>
                          </div>

                          {/* Third row and it's bar */}
                          <div style={{ width:'90%', margin:'auto', paddingTop:'10px' }}>
                              <span style={{width:'20%', float:'left', textAlign:'left',
                                      fontFamily:'Roboto,sans-serif',fontSize: '0.9rem',
                                      color: 'white',fontWeight: 'bold'}}>
                                  {homeCornerKicks}
                              </span>
                              <span style={{width:'60%', float:'left',fontFamily: 'Roboto,sans-serif',
                                      fontSize: '0.9rem',color: 'white',fontWeight: '500',
                                      fontWeight:'bold'}}>
                                    Corner Kicks
                              </span>
                              <span style={{ width:'20%',float:'right', textAlign:'right',
                                      fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                                      color: 'white',fontWeight: 'bold'}}>
                                  {awayCornerKicks}
                              </span>
                          </div>
                          <div style={{width:'90%', margin:'auto',display:'flex' }}>
                              <span style={{backgroundColor:'#516290', width:`${homeCornerKicks /
                                (homeCornerKicks + awayCornerKicks)* 100}%`, marginRight:'1px'}}>
                              </span>
                              <span style={{backgroundColor:'#CE4B99', width:`${awayCornerKicks /
                                (homeCornerKicks + awayCornerKicks)* 100}%`,height:'10px'}}>
                              </span>
                          </div>
                                           
                         </div>
                          {/* <div style={{backgroundColor:'#C0FF3E' ,color:'white',height:'100px',}}>Middle Section</div> */}
                        </div>
                        <div style={{width:'30%', textAlign:'center', }}>
                        <svg width="65%" height="65%" viewBox="0 0 42 42" class="donut">
                          <circle class="donut-hole" cx="21" cy="21" 
                                    r="15.91549430918954" fill="#black">
                          </circle>
                          <circle class="donut-ring" cx="21" cy="21" 
                                    r="15.91549430918954" fill="transparent" 
                                    stroke="#516290" stroke-width="3">            
                          </circle>
                          <circle class="donut-segment" cx="21" cy="21" 
                                    r="15.91549430918954" fill="transparent" 
                                    stroke="#ce4b99" stroke-width="3" 
                                    stroke-dasharray="50 50" stroke-dashoffset="25">
                          </circle>
                        </svg>
                            {/* <div style={{backgroundColor:'pink',color:'white',height:'200px', borderRadius:'100%'}}>Right Donut</div> */}
                        </div>
                      </div>
                    </Route>
                    <Route path="/game/:gameId/">
                      <GameHeader fixture={fixture}/>
                    </Route>
                  </Switch>
                    <div style={{display:'flex', width:'100%', height:'50px' ,backgroundColor:'white',  bottom:'0',}}>
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
                
                    <div style={{backgroundColor:'black', display:'flex', width:'100%',height:'50px' ,  bottom:'0', }}>
                      <div style={{ display:'flex', width:'100%', justifyContent:'space-evenly',}}>
                        <Link component={RouterLink} to="/game/436" style={{ color:'white', color:'white',
                                    fontWeight: 'bold',fontSize:'1rem', 
                                    paddingTop:'10px'}}>
                              Lineups      
                        </Link >
                        <Link component={RouterLink} to={`/game/${gameNum}/events`} style={{ color:'white', color:'white',
                                    fontWeight: 'bold',fontSize:'1rem', 
                                    paddingTop:'10px'}}>
                              Summary      
                        </Link>

                        
                        
                        <Link component={RouterLink} to={`/game/${gameNum}/statistics`} style={{ color:'white', color:'white',
                                    fontWeight: 'bold',fontSize:'1rem', 
                                    paddingTop:'10px'}}>
                              Statistics      
                        </Link>
                        <Link component={RouterLink} to={`/game/${gameNum}/chat`} style={{ color:'white', color:'white',
                                    fontWeight: 'bold',fontSize:'1rem', 
                                    paddingTop:'10px'}}>
                              Chat     
                        </Link>
                      </div>
                    </div>
              </div>
            <Route exact path="/game/:gameId">
              <LineUps fixture={fixture} />
            </Route>
            <Route path="/game/:gameId/events">
              <Events fixture={fixture}/>
            </Route >
            <Route path="/game/:gameId/chat">
              <ChatSection gameId={gameNum} />
            </Route>
            <Route path="/game/:gameId/statistics">
              <StatsBody fixture={fixture} />
            </Route>
          </div>
        {/* <div style={{width:'30%', height:'1100px' }} >  */}
          {/* <Statistics /> */}
        {/* </div> */}
    </div>
  </div>
  );
}

// <Game /> // holds all the data, passes to children

//     ==> <GameHeader />   ||    <StatisticsHeader />

//     ==> <Lineups/> || <Chat /> || <Events /> || <StatisticsBody/>

