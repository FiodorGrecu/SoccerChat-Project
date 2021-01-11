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

  // Charts data f
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
                    {/* <div style={{width:'90%', margin:'auto',display:'flex' }}>
                          <span style={{backgroundColor:'#d7dff7', width:`${homePassesAcurate /
                                (homePassesAcurate + awayPassesAcurate)* 100}%`, marginRight:'1px'}}>
                          </span>
                          <span style={{backgroundColor:'#516290', width:`${awayPassesAcurate /
                                (homePassesAcurate + awayPassesAcurate)* 100}%`,height:'20px'}}>
                          </span>
                      </div> */}
                      
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

    {/* The two stats charts parent div (line 181 to 315) */}
    <div style={{ display:'flex', marginTop:'30px'}}>
      {/* Attacking stats */}
      <div  style={{ width:'50%',  justifyContent:'center', alignItems:'center',
              backgroundColor:'white', marginLeft:'15px', marginRight:'15px',
              marginBottom:'20px'}}>
          <div style={{ width:'100%', textAlign:'center', marginBottom:'40px'}}>
            <div style={{width:'100%', height:'35px', margin:'auto',
                    textAlign:'left',fontFamily: 'Roboto,sans-serif',
                    fontSize: '1rem', color: '#8e9cc5',fontWeight: '550',
                    paddingTop:'20px'}}>
              <span style={{paddingLeft:'20px',}}>
                Attacking Stats
              </span>
            </div>
            <hr style={{width:'100%'}}></hr>

            {/* First row and it's bar */}
            <div style={{ width:'90%', margin:'auto', }}>
              <span style={{width:'33%', float:'left', textAlign:'left',
                      fontFamily:'Roboto,sans-serif',fontSize: '0.9rem',
                      color: 'gray',fontWeight: 'bold'}}>
                {homeShotsOnTarget}
              </span>
              <span style={{width:'33%', float:'left',fontFamily:'Roboto,sans-serif',
                      fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                Shots On Target        
              </span>
              <span style={{ width:'33%',float:'right', textAlign:'right',
                      fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                      color: 'gray',fontWeight: 'bold'}}>
                {awayShotsOnTarget}
              </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeShotsOnTarget /
                  (homeShotsOnTarget + awayShotsOnTarget)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayShotsOnTarget / 
                  (homeShotsOnTarget + awayShotsOnTarget)* 100}%`,height:'20px',}}>
                </span>
            </div>

            {/* Second row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homeShotsOffTarget}
                </span>
                <span style={{width:'33%',float:'left',fontFamily:'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                    Shots Off Target
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayShotsOffTarget}
                  </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeShotsOffTarget /
                  (homeShotsOffTarget + awayShotsOffTarget)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayShotsOffTarget /
                  (homeShotsOffTarget + awayShotsOffTarget)* 100}%`,height:'20px'}}>
                </span>
            </div>

            {/* Third row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'20%', float:'left', textAlign:'left',
                        fontFamily:'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homeTotalShots}
                </span>
                <span style={{width:'60%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                          Total Shots (including blocked shots)
                </span>
                <span style={{ width:'20%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayTotalShots}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeTotalShots /
                  (homeTotalShots + awayTotalShots)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayTotalShots /
                  (homeTotalShots + awayTotalShots)* 100}%`,height:'20px'}}>
                </span>
            </div>

            {/* Fourth row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homeShotsInsideBox}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                    Shots Inside The Box
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayShotsInsideBox}    
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeShotsInsideBox /
                  (homeShotsInsideBox + awayShotsInsideBox)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayShotsInsideBox /
                  (homeShotsInsideBox + awayShotsInsideBox)* 100}%`, height:'20px'}}>
                </span>
            </div>

            {/* Fifth row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homeShotsOutsideBox}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                          Shots Outside The Box
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayShotsOutsideBox}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeShotsOutsideBox /
                  (homeShotsOutsideBox + awayShotsOutsideBox)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayShotsOutsideBox /
                  (homeShotsOutsideBox + awayShotsOutsideBox)* 100}%`,height:'20px'}}>
                </span>
            </div>
          </div>    
      </div> {/*  Parent closing div of Attacking Stats */}

      {/* Defending Stats */}
      <div  style={{ width:'50%',  justifyContent:'center', alignItems:'center',backgroundColor:'white', marginLeft:'15px', marginRight:'15px',marginBottom:'20px'}}>
          <div style={{ width:'100%', textAlign:'center', marginBottom:'40px' }}>
            <div style={{width:'100%', height:'35px', margin:'auto',
                    textAlign:'left',fontFamily: 'Roboto,sans-serif',
                    fontSize: '1rem', color: '#8e9cc5',fontWeight: '550',paddingTop:'20px'}}>
              <span style={{paddingLeft:'20px', }}>Defending Stats</span>
            </div>
            <hr style={{width:'100%'}}></hr>

            {/* First row and it's bar */}
            <div style={{ width:'90%', margin:'auto', }}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeBlockedShots}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                  Blocked Shots
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayBlockedShots}    
                  </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeBlockedShots /
                  (homeBlockedShots + awayBlockedShots)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayBlockedShots /
                  (homeBlockedShots + awayBlockedShots)* 100}%`,height:'20px'}}>
                </span>
            </div>

            {/* Second row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeGoalkeeperSaves}    
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Goalkeeper Saves
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayGoalkeeperSaves}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeGoalkeeperSaves /
                  (homeGoalkeeperSaves + awayGoalkeeperSaves)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayGoalkeeperSaves /
                  (homeGoalkeeperSaves + awayGoalkeeperSaves)* 100}%`,height:'20px'}}></span>
            </div>

            {/* Third row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'20%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeFouls}
                </span>
                <span style={{width:'60%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Fouls
                  </span>
                <span style={{ width:'20%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayFouls}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeFouls /
                  (homeFouls + awayFouls)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayFouls /
                  (homeFouls + awayFouls)* 100}%`,height:'20px'}}>
                </span>
            </div>

            {/* Fourth row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeYellowCards}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Yellow Cards
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayYellowCards}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeYellowCards /
                  (homeYellowCards + awayYellowCards)* 100}%`, marginRight:'1px'}}></span>
                <span style={{backgroundColor:'#516290', width:`${awayYellowCards /
                  (homeYellowCards + awayYellowCards)* 100}%`, height:'20px'}}></span>
            </div>

            {/* Fifth row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeRedCards || '0'}
                      {/* {homeRedCards } */}
                        </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Red Cards
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayRedCards || '0'}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff', width:`${homeRedCards /
                  (homeYellowCards + awayYellowCards)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#51629', width:`${awayRedCards /
                  (homeYellowCards + awayYellowCards)* 100}%`,height:'20px'}}>
                </span> {/* What do I do here??? (hight fixes the issue)*/}
            </div>
          </div>    
      </div> {/*  Parent closing  div of Defending Stats */}
    </div>  {/*  Parent closing div of Attacking and Defending Stats  */} 

    <div style={{ display:'flex', marginTop:'30px'}}> {/*  Parent div of Team Play Stats and General  */}
      {/* Team Play Stats*/}
      <div  style={{ width:'50%',  justifyContent:'center', alignItems:'center',backgroundColor:'white', marginLeft:'15px', marginRight:'15px',marginBottom:'20px'}}>
          <div style={{ width:'100%', textAlign:'center', marginBottom:'40px' }}>
            <div style={{width:'100%', height:'35px', margin:'auto',
                    textAlign:'left',fontFamily: 'Roboto,sans-serif',
                    fontSize: '1rem', color: '#8e9cc5',fontWeight: '550',paddingTop:'20px'}}>
              <span style={{paddingLeft:'20px', }}>Team Play Stats</span>
            </div>
              <hr style={{width:'100%'}}></hr>
            {/* First row and it's bar */}
            <div style={{ width:'90%', margin:'auto', }}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeTotalPasses}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Total Passes
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayTotalPasses}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeTotalPasses /
                      (homeTotalPasses + awayTotalPasses)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayTotalPasses /
                      (homeTotalPasses + awayTotalPasses)* 100}%`,height:'20px'}}></span>
            </div>

            {/* Second row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homePassesAcurate}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                    Passes Acurate
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayPassesAcurate}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homePassesAcurate /
                      (homePassesAcurate + awayPassesAcurate)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayPassesAcurate /
                      (homePassesAcurate + awayPassesAcurate)* 100}%`,height:'20px'}}>
                </span>
            </div>

            {/* Third row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'20%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homePassesAcuracy}
                </span>
                <span style={{width:'60%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Passes Acuracy %
                </span>
                <span style={{ width:'20%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayPassesAcuracy}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homePassesAcuracy}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayPassesAcuracy}%`,height:'20px'}}></span>
            </div>            
          </div>    
      </div> {/*  Parent closing div of Team Play Stats */}

      {/* General Stats */}
      <div  style={{ width:'50%',  justifyContent:'center', alignItems:'center',backgroundColor:'white', marginLeft:'15px', marginRight:'15px',marginBottom:'20px'}}>
          <div style={{ width:'100%', textAlign:'center', marginBottom:'40px' }}>
            <div style={{width:'100%', height:'35px', margin:'auto',
                    textAlign:'left',fontFamily: 'Roboto,sans-serif',
                    fontSize: '1rem', color: '#8e9cc5',fontWeight: '550',paddingTop:'20px'}}>
              <span style={{paddingLeft:'20px', }}>General Stats</span>
            </div>
            <hr style={{width:'100%'}}></hr>

            {/* First row and it's bar */}
            <div style={{ width:'90%', margin:'auto', }}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                   {homeBallPossession}
                    {/* {awayBallPossession} */}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                    Ball Possession %
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayBallPossession}
                    {/* {homeBallPossession} */}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeBallPossession}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290' ,width:`${awayBallPossession}%`, height:'20px',}}>
                </span>
            </div>

            {/* Second row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',color: 'gray',fontWeight: 'bold'}}>4</span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>Corner Kicks</span>
                <span style={{ width:'33%',float:'right', textAlign:'right',fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',color: 'gray',fontWeight: 'bold'}}>12</span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:'20%', marginRight:'1px'}}></span>
                <span style={{backgroundColor:'#516290', width:'80%',color:'#516290'}}>?</span>
            </div>

            {/* Third row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'20%', float:'left', textAlign:'left',fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',color: 'gray',fontWeight: 'bold'}}>8</span>
                <span style={{width:'60%', float:'left',fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>Offsides</span>
                <span style={{ width:'20%',float:'right', textAlign:'right',fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',color: 'gray',fontWeight: 'bold'}}>3</span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:'80%', marginRight:'1px'}}></span>
                <span style={{backgroundColor:'#516290', width:'20%',color:'#516290'}}>?</span>
            </div>
          </div>    
      </div> {/*  Parent closing div of General Stats */}
    </div>  {/*  Parent closing div of Team Play Stats and General Stats  */} 

  </div>
  );
}





// <Game /> // holds all the data, passes to children

//     ==> <GameHeader />   ||    <StatisticsHeader />

//     ==> <Lineups/> || <Chat /> || <Events /> || <StatisticsBody/>

