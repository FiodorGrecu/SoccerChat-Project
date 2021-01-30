import React, { useState, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {games as fixtures} from "./teams";
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ChatSection from './ChatSection';
import { icons } from 'react-icons/lib';
import { grey } from '@material-ui/core/colors';
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import LineUps from './LineUps';
import GameSectionScoreCheet from './GameSectionScoreCheet';
import GameSectionScoreCheetBottomStats from './GameSectionScoreCheetBottomStats';
import GameSectionScoreCheetBottomVenue from './GameSectionScoreCheetBottomVenue';
import Events from './Events';
import StatsBar from './StatsTopBar';
import StatsBarUpcoming from './StatsTopBarUpcoming';
import StatsBody from './StatsBody';
import StatsHeader from './StatsHeader';
import GameHeader from './GameHeader';
import UpcomingGameHeader from './UpcomingGameHeader';
import LeagueNameBar from './LeagueNameBar';




const useStyles = makeStyles((theme) => ({

  scoreSheet:{
    width: '98%',
    // height: '350px',
    backgroundColor: 'black',
    marginLeft: '1%',
    marginRight: '1%',
    position: 'relative',
    borderTopLeftRadius:'5px',
    borderTopRightRadius:'5px',

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
    // textTransform: "uppercase",
    textAnchor: 'middle',
    fontWeight:'normal',
    mozTransform: 'translateY(0.em)',
    msTransform: 'translateY(0.77em)',
    msTransform: 'translateX(0.77em)',
    webkitTransform: 'translateY(0.95em)',
    transform: 'translateY(-0.55em)',
  }

}));

export default function CenteredGrid(props) {
  const classes = useStyles();


  const [fixture, setFixture] = useState({});
  const { gameNum } = useParams();
  // const gameNum = '592177';

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

  const halfTimeStatus = fixture.fixture && fixture.fixture.status.short;

  // ));
console.log(fixture)
  return (
  <div style={{width:'100%', }}>
        {/* <StatsBar/> */}
        <StatsBarUpcoming/>
        {/* <LeagueNameBar/> */}
    <div style={{display:"flex",backgroundColor:'#EAF0F7', paddingTop:'50px',  }} >
            <div style={{width:'100%', }} > 
              {/* { showStats ? <StatisticsHeader fixture={fixture}/> : <GameHeader fixture={fixture}/> }  */}
                <div className={classes.scoreSheet} slyle={{display:'flex',}}>
                  <Switch>
                

                    <Route path="/game/:gameId/">
                      {/* <UpcomingGameHeader fixture={fixture}/> */}
                      {halfTimeStatus === "NS" ? <UpcomingGameHeader fixture={fixture}/> : 
                                                  <GameHeader fixture={fixture}/>}
                      
                      <GameSectionScoreCheetBottomVenue/>
                    </Route>
                  </Switch>
            </div>
          
            <Route exact path="/game/:gameId">
                <p style={{textAlign:'center', color:'#6e7aa2', paddingTop:'50px',}}> There are no lineups at this time </p>
              {/* <LineUps fixture={fixture} /> */}
            </Route>
            <Route path="/game/:gameId/events">
                <p style={{textAlign:'center', color:'#6e7aa2', paddingTop:'50px',}}>No events yet</p>

              {/* <Events fixture={fixture}/> */}
            </Route >
            <Route path="/game/:gameId/chat">
              <ChatSection gameId={gameNum} />
            </Route>
            <Route path="/game/:gameId/statistics">
            <p style={{textAlign:'center', color:'#6e7aa2', paddingTop:'50px',}}> No statistics found </p>

              {/* <StatsBody fixture={fixture} /> */}
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

