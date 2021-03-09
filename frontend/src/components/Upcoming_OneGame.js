import React, { useState, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ChatSection from './ChatSection';
import GameSectionScoreCheetBottomVenue from './GameSectionScoreCheetBottomVenue';
import StatsBarUpcoming from './StatsTopBarUpcoming';
import GameHeader from './GameHeader';
import UpcomingGameHeader from './UpcomingGameHeader';
import H2H from './H2H';




const useStyles = makeStyles((theme) => ({

  scoreSheet:{
    width: '98%',
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
  }

}));

export default function CenteredGrid( {fixture} ) {
  const classes = useStyles();

  const { gameNum } = useParams();

  const leagueLogo = fixture.league && fixture.league.logo;

  const venue = fixture.lineups && fixture.fixture.venue.name;

  const gameStatus = fixture.fixture && fixture.fixture.status.short;

  // ));
console.log(fixture)
  return (
  <div style={{width:'100%', }}>
        {/* <StatsBar/> */}
        <StatsBarUpcoming fixture={fixture}/>
        {/* <LeagueNameBar/> */}
    <div style={{display:"flex",backgroundColor:'#EAF0F7', paddingTop:'50px'}}>
            <div style={{width:'100%', }} > 
                <div className={classes.scoreSheet} slyle={{display:'flex'}}>
                  <Switch>
                    <Route path="/game/:gameId/">
                      {gameStatus === "NS" 
                          ? 
                        <UpcomingGameHeader fixture={fixture}/> 
                          :                           
                        <GameHeader fixture={fixture}/>}                     
                        <GameSectionScoreCheetBottomVenue fixture={fixture}/>
                    </Route>
                  </Switch>
            </div>
          
            <Route exact path="/game/:gameId">
                <p style={{textAlign:'center', 
                           color:'#6e7aa2', 
                           paddingTop:'50px',}}> 
                There are no lineups at this time 
                </p>
            </Route>
            <Route path="/game/:gameId/events">
                <p style={{textAlign:'center', 
                           color:'#6e7aa2', 
                           paddingTop:'50px',}}>
                No events yet
                </p>
            </Route >
            <Route path="/game/:gameId/chat">
              <ChatSection gameId={gameNum} />
            </Route>
            <Route path="/game/:gameId/h2h">
              <H2H fixture={fixture} />
            </Route>
            <Route path="/game/:gameId/statistics">
            <p style={{textAlign:'center', 
                       color:'#6e7aa2', 
                       paddingTop:'50px',}}> 
              No statistics found 
            </p>
            </Route>
          </div>
    </div>
  </div>
  );
}
