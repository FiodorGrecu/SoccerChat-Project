import React, { useState, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Game.css';
import {games as fixtures} from "./teams";
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ChatSection from './ChatSection';
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import LineUps from './LineUps';
import GameSectionScoreCheet from './GameSectionScoreCheet';
import GameSectionScoreCheetBottomStats from './GameSectionScoreCheetBottomStats';
import GameSectionScoreCheetBottomVenue from './GameSectionScoreCheetBottomVenue';
import Events from './Events';
import H2H from './H2H';
import StatsBar from './StatsTopBar';
import StatsBody from './StatsBody';
import GameHeader from './GameHeader';
import UpcomingGameHeader from './UpcomingGameHeader';
import LeagueNameBar from './LeagueNameBar';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';




const useStyles = makeStyles((theme) => ({

  scoreSheet:{
    width: '98%',
    // height: '350px',
    backgroundColor: 'black',
    marginLeft: '1%',
    marginRight: '1%',
    position: 'relative',
  },
  
  chartText: {
    fontFamily: ' sans-serif', 
    fontSize:'6px',
    // paddingLeft:'500px',
    fill:" green",
    mozTransform: 'translateY(0.5em)',
    msTransform: 'translateY(0.25em)',
    transform: 'translateY(0.25em)',
    webkitTransform: 'translateY(0.25em)'
  },
  
  chartNumber: {
    fontFamily: ' sans-serif', 
    fontSize: '10px',
    lineHeight: '10px',
    textAnchor: 'middle',
    mozTransform: 'translateY(-0.25em)',
    msTransform: 'translateY(0.25em)',
    webkitTransform: 'translateY(0.25em)',
    transform: 'translateY(-0.25em)',
  },
  chartLabel: {
    fontSize: '7px',
    textAnchor: 'middle',
    fontWeight:'normal',
    mozTransform: 'translateY(0.em)',
    msTransform: 'translateY(0.77em)',
    msTransform: 'translateX(0.77em)',
    webkitTransform: 'translateY(0.95em)',
    transform: 'translateY(-0.55em)',
  },
  Icon: {

  }

}));

export default function CenteredGrid({ fixture } ) {
  const classes = useStyles();

  const { gameNum } = useParams();

  const homeShotsOnTarget = fixture.statistics && fixture.statistics[0].statistics[0].value;
  const awayShotsOnTarget = fixture.statistics && fixture.statistics[1].statistics[0].value;
  
  const homeShotsOffTarget = fixture.statistics && fixture.statistics[0].statistics[1].value;
  const awayShotsOffTarget = fixture.statistics && fixture.statistics[1].statistics[1].value;
  
  const homePassesAcuracy = fixture.statistics && fixture.statistics[0].statistics[15].value.slice(0,-1);
  const awayPassesAcuracy = fixture.statistics && fixture.statistics[1].statistics[15].value.slice(0,-1);
  
  const homeBallPossession = fixture.statistics && fixture.statistics[0].statistics[9].value.slice(0,-1);
  const awayBallPossession = fixture.statistics && fixture.statistics[1].statistics[9].value.slice(0,-1);

  const homeCornerKicks = fixture.statistics && fixture.statistics[0].statistics[7].value;
  const awayCornerKicks = fixture.statistics && fixture.statistics[1].statistics[7].value;
  
  const homeShootingAccuracy = homeShotsOnTarget / (homeShotsOnTarget + homeShotsOffTarget) * 100;
  const awayShootingAccuracy = awayShotsOnTarget / (awayShotsOnTarget + awayShotsOffTarget) * 100;

console.log(fixture)
  return (
  <div style={{width:'100%', }}>
        <StatsBar fixture={fixture}/>
        {/* <LeagueNameBar/> */}
    <div style={{display:"flex",backgroundColor:'#EAF0F7', paddingTop:'50px' }} >
            <div style={{width:'100%', }} > 
                <div className={classes.scoreSheet} slyle={{display:'flex',}}>
                  <Switch>
                    <Route path="/game/:gameId/statistics">
                      <div style={{display:'flex', width:'100%',justifyContent:'space-evenly', alignItems:'center', }}>
                        <div style={{width:'33.333%', textAlign:'center'}}>
                            {/* <RouterLink style={{textDecoration:'none'}} className={"ShootingTeamName"}> */}
                              <p className={"ShootingTeamName"} style={{color:'white', 
                                  fontFamily:'sans-serif',paddingTop:'10px',
                                  fontSize: '0.9rem',fontWeight: '900', 
                                  textTransform:'uppercase',fontSize: '1.2rem', 
                                  letterSpacing:'1px'}}>
                                Shooting Accuracy
                              </p>
                            {/* </RouterLink> */}
                            <svg width='280px' height='280px' viewBox="0 0 42 42" class="donut">
                              <circle class="donut-hole" cx="21" cy="21" 
                                  r="15.91549430918954" fill="#black">
                              </circle>
                              <circle class="donut-ring" cx="21" cy="21" 
                                  r="15.91549430918954" fill="transparent" 
                                  stroke="#516290" stroke-width="3">
                              </circle>
                              <circle class="donut-segment" cx="21" cy="21" 
                                  r="15.91549430918954" fill="transparent" 
                                  stroke="#BE14AA" stroke-width="3" 
                                  stroke-dasharray={`${homeShootingAccuracy} 
                                  ${100 - homeShootingAccuracy}`} 
                                  stroke-dashoffset="75">
                              </circle>
                              <g className={classes.chartText}>
                                <text  x="45%" y="60%" className={classes.chartNumber} stroke="#BE14AA">
                                  {Math.floor(homeShootingAccuracy)}
                                </text>
                                <text x="70%" y="62%" className={classes.chartLabel} stroke="#BE14AA">                        
                                  %
                                </text>
                              </g>
                            </svg>
                        </div>
                        <div style={{width:'33.333%' }}>
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
                              <span style={{backgroundColor:'#BE14AA', width:`${awayBallPossession}%`,height:'10px',}}>
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
                              <span style={{backgroundColor:'#BE14AA', width:`${awayPassesAcuracy}%`,height:'10px'}}>
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
                              <span style={{backgroundColor:'#BE14AA', width:`${awayCornerKicks /
                                (homeCornerKicks + awayCornerKicks)* 100}%`,height:'10px'}}>
                              </span>
                          </div>
                                           
                         </div>
                        </div>
                        <div style={{width:'33.333%', textAlign:'center', }}>
                        <p style={{color:'white', 
                                fontFamily:'sans-serif',paddingTop:'10px',
                                fontSize: '0.9rem',fontWeight: 'bolder', 
                                textTransform:'uppercase',fontSize: '1.2rem', 
                                letterSpacing:'1px'}}>Shooting Accuracy</p>
                            <svg width='280px' height='280px' viewBox="0 0 42 42" class="donut">
                              <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#black"></circle>
                              <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#BE14AA" stroke-width="3"></circle>
                              <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" 
                                  fill="transparent" stroke="#516290" 
                                  stroke-width="3" stroke-dasharray={`${homeShootingAccuracy} ${100 - homeShootingAccuracy}`} stroke-dashoffset="75"></circle>
                              <g className={classes.chartText}>
                                
                                <text  x="45%" y="60%" className={classes.chartNumber} stroke="#BE14AA">
                                  {Math.floor(awayShootingAccuracy)}
                                </text>
                                <text x="70%" y="62%" className={classes.chartLabel} stroke="#BE14AA">                        
                                  %
                                </text>
                              </g>
                            </svg>
                        </div>
                      </div>
                      <GameSectionScoreCheetBottomStats fixture={fixture}/>
                    </Route>

                    <Route path="/game/:gameId/">
                      <GameHeader fixture={fixture}/>
                      <GameSectionScoreCheetBottomVenue fixture={fixture}/>
                    </Route>
                  </Switch>
            </div>
    
            { fixture.fixture ?  
            <div>
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
            <Route path="/game/:gameId/h2h">
              <H2H fixture={fixture} />
            </Route> 
            </div>
            : 
            <div style={{ display:'flex',}}>  
              <div style={{margin:'auto'}}>
                <SportsSoccerIcon className={"Icon"} 
                    style={{fontSize:'50px', margin:'auto', height:'40px',
                    marginTop:'60px', color:"#516290"}}/>
              </div>
            </div>
            }
          </div>
    </div>
  </div>
  );
}

