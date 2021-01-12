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
                        <svg width="75%" height="75%" viewBox="0 0 42 42" class="donut">
                          <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="black"></circle>
                          <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3"></circle>
                          <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" stroke-width="3"></circle>
                        </svg>
                          {/* <div style={{backgroundColor:'#AEECFF',color:'white', height:'100px', }}>Left Donut</div> */}
                        </div>
                        <div style={{width:'30%' }}>
                          <div >
                          <div style={{ margin:'auto', }}>
                            <span style={{width:'33%', float:'left', textAlign:'left',
                                    fontFamily:'Roboto,sans-serif',fontSize: '0.9rem',
                                    color: 'gray',fontWeight: 'bold'}}>
                              {/* {homeShotsOnTarget} */}hello
                            </span>
                            <span style={{width:'33%', float:'left',fontFamily:'Roboto,sans-serif',
                                    fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                              Shots On Target        
                            </span>
                            <span style={{ width:'33%',float:'right', textAlign:'right',
                                    fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                                    color: 'gray',fontWeight: 'bold'}}>
                              {/* {awayShotsOnTarget} */}hello2
                            </span>
                          </div>
                          </div>
                          <div style={{backgroundColor:'#C0FF3E' ,color:'white',height:'100px',}}>Middle Section</div>
                        </div>
                        <div style={{width:'30%', textAlign:'center', }}>
                        <svg width="75%" height="75%" viewBox="0 0 42 42" class="donut">
                          <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="black"></circle>
                          <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3"></circle>
                          <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" stroke-width="3"></circle>
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

