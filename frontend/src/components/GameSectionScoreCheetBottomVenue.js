import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({

  scoreSheet:{
    width: '100%',
    // height: '15%',
    backgroundColor: 'black',
    // margin: '1%',
    position: 'relative',
  },
  

}));

export default function GameSectionScoreCheetBottomVenue(props) {
  const classes = useStyles();


  const [fixture, setFixture] = useState({});
  const { gameNum } = useParams();

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
  
  const homeYellowCards = fixture.statistics && fixture.statistics[0].statistics[10].value || '0'; 
  const awayYellowCards = fixture.statistics && fixture.statistics[1].statistics[10].value || '0';
  
  const homeRedCards = fixture.statistics && fixture.statistics[0].statistics[11].value || '0';
  const awayRedCards = fixture.statistics && fixture.statistics[1].statistics[11].value || '0';
  
  const homeTotalPasses = fixture.statistics && fixture.statistics[0].statistics[13].value;
  const awayTotalPasses = fixture.statistics && fixture.statistics[1].statistics[13].value;
  
  const homePassesAcurate = fixture.statistics && fixture.statistics[0].statistics[14].value;
  const awayPassesAcurate = fixture.statistics && fixture.statistics[1].statistics[14].value;
  
  const homePassesAcuracy = fixture.statistics && fixture.statistics[0].statistics[15].value.slice(0,-1);
  const awayPassesAcuracy = fixture.statistics && fixture.statistics[1].statistics[15].value.slice(0,-1);
  
  const homeBallPossession = fixture.statistics && fixture.statistics[0].statistics[9].value.slice(0,-1);
  const awayBallPossession = fixture.statistics && fixture.statistics[1].statistics[9].value.slice(0,-1);
  // console.log(homeBallPossession)

  const homeCornerKicks = fixture.statistics && fixture.statistics[0].statistics[7].value;
  const awayCornerKicks = fixture.statistics && fixture.statistics[1].statistics[7].value;
  
  const homeOffsides = fixture.statistics && fixture.statistics[0].statistics[8].value;
  const awayOffsides = fixture.statistics && fixture.statistics[1].statistics[8].value;

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

  return (
    <div style={{width:'100%', }} >  
        <div className={classes.scoreSheet} slyle={{display:'flex', marginBottom:'100px'}}>
          {/* <div style={{display:'flex', width:'100%',}}>
            <div className={classes.date} style={{width: '100%', 
                  textAlign:'center', paddingTop:'2%', color:'white',
                  fontWeight: 'bold'}}>
                    <span style={{ color:'grey', paddingRight:'10px' }}><FaCalendarAlt /></span>
                    <span style={{paddingRight:'20px', }}>{getDay(date)}</span>
                   
                    <span style={{ color:'grey', paddingRight:'10px', fontWeight:'bold' }}><FaRegClock/></span>
                    <span style={{ }}>{getTime(date)}</span>
            </div>
          </div> */}
          {/* <div style={{display:'flex', width:'100%',}}>
            <div style={{ width:'40%', textAlign:'center', paddingTop:'3%', }}>
              <img src={hometeamLogo} style={{width:'74px', height:'74px'}}/>
              <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{hometeamName}</p>
              <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem' }}>{homeTeamScore}</p>
            </div>
            Score at half time
            <div style={{display:'flex', width:'20%',  justifyContent:'center', alignItems:'center',backgroundColor:'blu'}}>
              <div style={{ width:'70%', height:'25%', textAlign:'center', paddingTop:'3%', backgroundColor:'pin',}}>
                <div style={{backgroundColor:'yello', color: "white"}}>{halfTimeStatus}</div>
                <div style={{ color: "grey", paddingBottom:'10px',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 1rem'}}>Score at HT</div>
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
            </div>
            <div style={{ width:'40%', textAlign:'center', paddingTop:'3%'}}>
              <img src={awayteamLogo} style={{width:'74px', height:'74px'}}/>
              <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{awayteamName}</p>
              <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem'}}>{awayTeamScore}</p>
            </div>
          </div> */}
          
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
        
            {/* <div style={{backgroundColor:'black', display:'flex', width:'100%',height:'50px' ,  bottom:'0', }}>
              
            </div> */}
      </div> 
  </div>
  );
}

