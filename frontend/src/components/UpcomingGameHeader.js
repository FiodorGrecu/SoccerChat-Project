import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { makeStyles } from '@material-ui/core/styles';

const GameHeader = ({fixture}) => {
  const useStyles = makeStyles((theme) => ({

    scoreSheet:{
      width: '98%',
      height: '333px',
      backgroundColor: 'black',
      margin: '1%',
      position: 'relative',
    },
    
  
  }));
  
  const classes = useStyles();
  
  const gameDate = fixture.fixture && fixture.fixture.date;
  
  const leagueName = fixture.league && fixture.league.name;
  const leagueLogo = fixture.league && fixture.league.logo;
  
  const hometeamName = fixture.lineups && fixture.teams.home.name;
  const awayteamName = fixture.lineups && fixture.teams.away.name;

  const hometeamLogo = fixture.lineups && fixture.teams.home.logo;
  const awayteamLogo = fixture.lineups && fixture.teams.away.logo;

  const venue = fixture.lineups && fixture.fixture.venue.name;

  const homeTeamScore = fixture.goals && fixture.goals.home;
  const awayTeamScore = fixture.goals && fixture.goals.away;

  const halfTimeScoreH = fixture.score && fixture.score.halftime.home;
  const halfTimeScoreA = fixture.score && fixture.score.halftime.away;

  const halfTimeStatus = fixture.fixture && fixture.fixture.status.short;
  console.log(halfTimeStatus)

  const date = fixture.fixture && fixture.fixture.date;
  console.log(date)

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
       return new Date(date).toLocaleDateString('en-US',
       {day:'2-digit', month:'2-digit', year:'numeric'})
    }

  const countDownDate = new Date(fixture.fixture.date).getTime();
  const myFunc = setInterval(function () {
      const now = new Date().getTime();
      const timeleft = countDownDate - now;

      const days = Math.floor(timeleft /(1000 * 60 * 60 * 24));
      const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeleft % (1000 * 60 * 60 )) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  }, 1000)

  console.log(myFunc)

  return (
      <div style={{height:'333px'}}>
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
            <img src={hometeamLogo} style={{width:'80px', height:'80px'}}/>
            <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',
                letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>
                  {hometeamName}
            </p>
            <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',
                fontSize:' 2rem' }}>
                  {homeTeamScore}
            </p>
          </div>
          {/* Score at half time */}
          <div style={{display:'flex', width:'20%',  justifyContent:'center', alignItems:'center'}}> 

            {/* <h3 style={{color:'white'}}>{days}</h3> */}
            <h3 style={{color:'white'}}>{myFunc}</h3>
            {/* <h3 style={{color:'white'}}>{countDownDate}</h3> */}
            {/* + <span style={{color:'white'}}>{days}</span> + {hours} */}

            
          </div> 
          <div style={{ width:'50%', textAlign:'center', paddingTop:'3%'}}>
            <img src={awayteamLogo} style={{width:'80px', height:'80px'}}/>
            <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{awayteamName}</p>
            <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem'}}>{awayTeamScore}</p>
          </div>
        </div>
      </div>
  )
}

export default GameHeader;
