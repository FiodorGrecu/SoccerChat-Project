import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Chart from "react-apexcharts";
import Divider from '@material-ui/core/Divider';
import ChatSection from './ChatSection';
import { icons } from 'react-icons/lib';


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
        
  // ));
console.log(fixture)
  return (
  <div style={{width:'100%', }}>
    <div style={{display:"flex",backgroundColor:'#EAF0F7' }} >
              {/* { showStats ? <StatisticsHeader fixture={fixture}/> : <GameHeader fixture={fixture}/> }  */}
                
        <div className={classes.scoreSheet} slyle={{display:'flex', marginBottom:'100px'}}>
          <div style={{display:'flex', width:'100%',}}>
            <div className={classes.date} style={{width: '100%', 
                  textAlign:'center', paddingTop:'2%', color:'white',
                  fontWeight: 'bold'}}>
                    {/* <span style={{ color:'grey', paddingRight:'10px' }}><FaCalendarAlt /></span> */}
                    <span style={{paddingRight:'20px', }}>{getDay(date)}</span>
                    {/* <span style={{ color:'grey', paddingRight:'10px', fontWeight:'bold' }}><FaRegClock/></span> */}
                    <span style={{ }}>{getTime(date)}</span>
            </div>
          </div>
          <div style={{display:'flex', width:'100%',}}>
            <div style={{ width:'40%', textAlign:'center', paddingTop:'3%', }}>
              <img src={hometeamLogo} style={{width:'74px', height:'74px'}}/>
              <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{hometeamName}</p>
              <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem' }}>{homeTeamScore}</p>
            </div>
            {/* Score at half time */}
                        <div style={{display:'flex', width:'20%',  justifyContent:'center', alignItems:'center',backgroundColor:'blue'}}>
                          <div style={{ width:'70%', height:'25%', textAlign:'center', paddingTop:'3%', backgroundColor:'pink',}}>
                            {/* <div style={{backgroundColor:'yellow', color: "white"}}>{halfTimeStatus}</div>  */}
                            <div style={{backgroundColor:'yellow', color: "grey", paddingBottom:'10px',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 1rem'}}>Score at HT</div>
                              <div style={{ display:'flex'}}> 
                                <div style={{width:'50%', paddingLeft:'30px',
                                      color:'white',fontWeight: 'bold',fontFamily:'Oswald',fontSize:' 1rem',
                                      backgroundColor:'red', }}>
                                        {halfTimeScoreH}
                                </div>
                                <div style={{width:'50%', paddingRight:'30px',
                                      color:'white',fontWeight: 'bold',fontFamily:'Oswald',fontSize:' 1rem',
                                      backgroundColor:'green', }}>
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
          </div>
          
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

                
                
                <Link component={RouterLink} to="/statistics" style={{ color:'white', color:'white',
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
    </div>
    
    <div style={{ display:'flex'}}>
      {/* Attacking stats */}
      <div className={classes.AttackingStats} style={{ width:'50%',  justifyContent:'center', alignItems:'center',backgroundColor:'#5F9EA0'}}>
          <div style={{ width:'100%', textAlign:'center', }}>
            <div style={{backgroundColor:'yellow', width:'90%', margin:'auto', textAlign:'left'}}>
              <span >Attacking Stats</span>
            </div>
            {/* First row and it's bar */}
            <div style={{backgroundColor:'green', width:'90%', margin:'auto', }}>
                <span style={{backgroundColor:'azure', width:'33%', float:'left'}}>first bar</span>
                <span style={{backgroundColor:'red', width:'33%',}}>Shots On Target</span>
                <span style={{backgroundColor:'#E9967A', width:'33%',float:'right'}}>third bar</span>
            </div>
            <div style={{backgroundColor:'gray', width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#BA55D3', width:'50%', }}>first bar</span>
                <span style={{backgroundColor:'#7CFC00', width:'50%',}}>third bar</span>
            </div>
            {/* Second row and it's bar */}
            <div style={{backgroundColor:'green', width:'90%', margin:'auto', }}>
                <span style={{backgroundColor:'azure', width:'33%', float:'left'}}>first bar</span>
                <span style={{backgroundColor:'red', width:'33%',}}>Shots Off Target</span>
                <span style={{backgroundColor:'#63B8FF', width:'33%',float:'right'}}>third bar</span>
            </div>
            <div style={{backgroundColor:'gray', width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#BA55D3', width:'50%', }}>first bar</span>
                <span style={{backgroundColor:'#7CFC00', width:'50%',}}>third bar</span>
            </div>
            {/* Third row and it's bar */}
            <div style={{backgroundColor:'green', width:'90%', margin:'auto', }}>
                <span style={{backgroundColor:'azure', width:'33%', float:'left'}}>first bar</span>
                <span style={{backgroundColor:'red', width:'33%',}}>Shots Off Target</span>
                <span style={{backgroundColor:'#63B8FF', width:'33%',float:'right'}}>third bar</span>
            </div>
            <div style={{backgroundColor:'gray', width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#BA55D3', width:'50%', }}>first bar</span>
                <span style={{backgroundColor:'#7CFC00', width:'50%',}}>third bar</span>
            </div>
            {/* Fourth row and it's bar */}
            <div style={{backgroundColor:'green', width:'90%', margin:'auto', }}>
                <span style={{backgroundColor:'azure', width:'33%', float:'left'}}>first bar</span>
                <span style={{backgroundColor:'red', width:'33%',}}>Shots Off Target</span>
                <span style={{backgroundColor:'#63B8FF', width:'33%',float:'right'}}>third bar</span>
            </div>
            <div style={{backgroundColor:'gray', width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#BA55D3', width:'50%', }}>first bar</span>
                <span style={{backgroundColor:'#7CFC00', width:'50%',}}>third bar</span>
            </div>
            {/* Fifth row and it's bar */}
            <div style={{backgroundColor:'green', width:'90%', margin:'auto', }}>
                <span style={{backgroundColor:'azure', width:'33%', float:'left'}}>first bar</span>
                <span style={{backgroundColor:'red', width:'33%',}}>Shots Off Target</span>
                <span style={{backgroundColor:'#63B8FF', width:'33%',float:'right'}}>third bar</span>
            </div>
            <div style={{backgroundColor:'gray', width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#BA55D3', width:'50%', }}>first bar</span>
                <span style={{backgroundColor:'#7CFC00', width:'50%',}}>third bar</span>
            </div>
          </div>    
      </div> {/*  Parent div of Attacking Stats */}

        {/* Defending stats  div */}
      <div style={{ width:'50%',  justifyContent:'center', alignItems:'center',backgroundColor:'#5F9EA0'}}>
          <div style={{ width:'100%', textAlign:'center', }}>
            <div style={{backgroundColor:'yellow', width:'90%', margin:'auto', textAlign:'left'}}>
              <span >Defending Stats</span>
            </div>
            {/* First row and it's bar */}
            <div style={{backgroundColor:'green', width:'90%', margin:'auto', }}>
                <span style={{backgroundColor:'azure', width:'33%', float:'left'}}>first bar</span>
                <span style={{backgroundColor:'red', width:'33%',}}>Shots On Target</span>
                <span style={{backgroundColor:'#E9967A', width:'33%',float:'right'}}>third bar</span>
            </div>
            <div style={{backgroundColor:'gray', width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#BA55D3', width:'50%', }}>first bar</span>
                <span style={{backgroundColor:'#7CFC00', width:'50%',}}>third bar</span>
            </div>
            {/* Second row and it's bar */}
            <div style={{backgroundColor:'green', width:'90%', margin:'auto', }}>
                <span style={{backgroundColor:'azure', width:'33%', float:'left'}}>first bar</span>
                <span style={{backgroundColor:'red', width:'33%',}}>Shots Off Target</span>
                <span style={{backgroundColor:'#63B8FF', width:'33%',float:'right'}}>third bar</span>
            </div>
            <div style={{backgroundColor:'gray', width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#BA55D3', width:'50%', }}>first bar</span>
                <span style={{backgroundColor:'#7CFC00', width:'50%',}}>third bar</span>
            </div>
            {/* Third row and it's bar */}
            <div style={{backgroundColor:'green', width:'90%', margin:'auto', }}>
                <span style={{backgroundColor:'azure', width:'33%', float:'left'}}>first bar</span>
                <span style={{backgroundColor:'red', width:'33%',}}>Shots Off Target</span>
                <span style={{backgroundColor:'#63B8FF', width:'33%',float:'right'}}>third bar</span>
            </div>
            <div style={{backgroundColor:'gray', width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#BA55D3', width:'50%', }}>first bar</span>
                <span style={{backgroundColor:'#7CFC00', width:'50%',}}>third bar</span>
            </div>
            {/* Fourth row and it's bar */}
            <div style={{backgroundColor:'green', width:'90%', margin:'auto', }}>
                <span style={{backgroundColor:'azure', width:'33%', float:'left'}}>first bar</span>
                <span style={{backgroundColor:'red', width:'33%',}}>Shots Off Target</span>
                <span style={{backgroundColor:'#63B8FF', width:'33%',float:'right'}}>third bar</span>
            </div>
            <div style={{backgroundColor:'gray', width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#BA55D3', width:'50%', }}>first bar</span>
                <span style={{backgroundColor:'#7CFC00', width:'50%',}}>third bar</span>
            </div>
            {/* Fifth row and it's bar */}
            <div style={{backgroundColor:'green', width:'90%', margin:'auto', }}>
                <span style={{backgroundColor:'azure', width:'33%', float:'left'}}>first bar</span>
                <span style={{backgroundColor:'red', width:'33%',}}>Shots Off Target</span>
                <span style={{backgroundColor:'#63B8FF', width:'33%',float:'right'}}>third bar</span>
            </div>
            <div style={{backgroundColor:'gray', width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#BA55D3', width:'50%', }}>first bar</span>
                <span style={{backgroundColor:'#7CFC00', width:'50%',}}>third bar</span>
            </div>
          </div>    
      </div> {/*  Parent closing div of Defending Stats */}
    </div>
  </div>
  );
}





// <Game /> // holds all the data, passes to children

//     ==> <GameHeader />   ||    <StatisticsHeader />

//     ==> <Lineups/> || <Chat /> || <Events /> || <StatisticsBody/>
