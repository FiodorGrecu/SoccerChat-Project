import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';

const GameHeader = ({fixture}) => {
  const useStyles = makeStyles((theme) => ({

    scoreSheet:{
      width: '98%',
      height: '15%',
      backgroundColor: 'black',
      margin: '1%',
      position: 'relative',
    },
    
  
  }));
  
  const classes = useStyles();
  
  const gameDate = fixture.fixture && fixture.fixture.date;
  
  const leagueName = fixture.league && fixture.league.name;
  const leagueLogo = fixture.league && fixture.league.logo;
  
  const hometeamName = fixture.lineups && fixture.lineups[0].team.name;
  const awayteamName = fixture.lineups && fixture.lineups[1].team.name;

  const hometeamLogo = fixture.lineups && fixture.lineups[0].team.logo;
  const awayteamLogo = fixture.lineups && fixture.lineups[1].team.logo;

  const venue = fixture.lineups && fixture.fixture.venue.name;

  const homeTeamScore = fixture.goals && fixture.goals.home;
  const awayTeamScore = fixture.goals && fixture.goals.away;

  const halfTimeScoreH = fixture.score && fixture.score.halftime.home;
  const halfTimeScoreA = fixture.score && fixture.score.halftime.away;

  const halfTimeStatus = fixture.fixture && fixture.fixture.status.long;
  // console.log(halfTimeStatus)

  const date = fixture.fixture && fixture.fixture.date;

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

  return (
      <div>
        <div style={{display:'flex', width:'100%',}}>
          <div className={classes.date} style={{width: '100%', 
                textAlign:'center', paddingTop:'2%', color:'white',
                fontWeight: 'bold'}}>
                  <span style={{ color:'grey', paddingRight:'10px' }}><FaCalendarAlt /></span>
                  <span style={{paddingRight:'20px', }}>{getDay(date)}</span>
                  <span style={{ color:'grey', paddingRight:'10px', fontWeight:'bold' }}><FaRegClock/></span>
                  <span style={{ }}>{getTime(date)}</span>
          </div>
        </div>
        <div style={{display:'flex', width:'100%',}}>
          <div style={{ width:'50%', textAlign:'center', paddingTop:'3%', }}>
            <img src={hometeamLogo} style={{width:'74px', height:'74px'}}/>
            <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{hometeamName}</p>
            <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem' }}>{homeTeamScore}</p>
          </div>
          {/* Score at half time */}
                      {/* <div style={{display:'flex', width:'20%',  justifyContent:'center', alignItems:'center',backgroundColor:'blue'}}>
                        <div style={{ width:'70%', height:'25%', textAlign:'center', paddingTop:'3%', backgroundColor:'pink',}}>
                          <div style={{backgroundColor:'yellow', color: "white"}}>{halfTimeStatus}</div> 
                          <div style={{backgroundColor:'yellow', color: "grey", paddingBottom:'10px',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 1rem'}}>Score at HT</div>
                            <div style={{ display:'flex'}}> 
                              <div style={{width:'50%', paddingLeft:'30px',
                                    color:'white',fontWeight: 'bold',fontFamily:'Oswald',fontSize:' 1rem' }}>
                                      {halfTimeScoreH}
                              </div>
                              <div style={{width:'50%', paddingRight:'30px',
                                    color:'white',fontWeight: 'bold',fontFamily:'Oswald',fontSize:' 1rem' }}>
                                        {halfTimeScoreA}
                              </div>
                          </div>
                        </div>
                      </div> */}
          <div style={{ width:'50%', textAlign:'center', paddingTop:'3%'}}>
            <img src={awayteamLogo} style={{width:'74px', height:'74px'}}/>
            <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{awayteamName}</p>
            <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem'}}>{awayTeamScore}</p>
          </div>
        </div>
      </div>
  )
}

export default GameHeader;
