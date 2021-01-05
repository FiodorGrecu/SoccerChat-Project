import React, { useState, useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
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
   


  // const homePlayers = fixture.lineups && fixture.lineups[0].startXI.map(player =>(
  //       <div className={classes.homePlayersName}> <hr width='100%'/> 
  //         <div style={{width:'100%', display:'flex', paddingLeft:'5%'}}>
  //           <circle style={{backgroundColor: "#be13aa",
  //                     background: '-webkit-linear-gradient(top, rgba(255,48,25,1) 0%,rgba(207,4,4,1) 58%)',
  //                   width: '30px',height: "30px",borderRadius: '50%',
  //                   display: 'inline-block',textAlign: 'center', margin: '2px', 
  //                   position:'relative',}}>
  //             <span style={{color:'white',position: 'absolute',top: '50%',transform: 'translate(-50%, -50%)',
  //               width: '90px'}}>{player.player.number}
  //             </span>
  //           </circle>
  //           <span style={{textAlign:'center', paddingLeft:'20px',paddingTop:'10px', }}>{player.player.name}</span><br/>
  //           <p style={{color:'grey', paddingLeft:'10px',paddingTop:'10px'}}>{player.player.pos}</p>
  //         </div>
  //       </div>
  // ));
  
  // const awayPlayers = fixture.lineups && fixture.lineups[1].startXI.map(player => (
  //   <div className={classes.awayPlayersName}> <hr width='100%'/> 
  //       <div style={{width:'100%', display:'flex', paddingLeft:'5%'}}>
  //       <circle style={{backgroundColor: "grey",width: '30px',height: "30px",
  //                       background: '-webkit-linear-gradient(top, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%)', 
  //                       borderRadius: '50%',display: 'inline-block',
  //                       textAlign: 'center', margin: '2px', 
  //                       position:'relative',}}>
  //         <span style={{color:'white',position: 'absolute',top: '50%',transform: 'translate(-50%, -50%)',
  //           width: '90px'}}>{player.player.number}
  //         </span>
  //       </circle>
  //       <span style={{textAlign:'center', paddingLeft:'20px',paddingTop:'10px', }}>{player.player.name}</span><br/>
  //       <p style={{color:'grey', paddingLeft:'10px',paddingTop:'10px'}}>{player.player.pos}</p>
  //     </div> 
  //   </div>
  // ));

  // const homeSubs = fixture.lineups && fixture.lineups[0].substitutes.map(substitutes => (
  //     // <div className={classes.homeSubsName}><hr width='100%'/> <p style={{paddingLeft:'5%'}}>{substitutes.player.name} {substitutes.player.number}</p></div>
  //     <div className={classes.homePlayersName}> <hr width='100%'/> 
  //         <div style={{width:'100%', display:'flex', paddingLeft:'5%'}}>
  //           <circle style={{backgroundColor: "#be13aa",
  //                   background: '-webkit-linear-gradient(top, rgba(255,48,25,1) 0%,rgba(207,4,4,1) 58%)', /* Chrome10-25,Safari5.1-6 */
  //                   width: '30px',height: "30px",borderRadius: '50%',
  //                   display: 'inline-block',textAlign: 'center', 
  //                   margin: '2px', position:'relative',}}>
  //             <span style={{color:'white',position: 'absolute',top: '50%',transform: 'translate(-50%, -50%)',
  //               width: '90px'}}>{substitutes.player.number}
  //             </span>
  //           </circle>
  //           <span style={{textAlign:'center', paddingLeft:'20px',paddingTop:'10px', }}>{substitutes.player.name}</span><br/>
  //           <p style={{color:'grey', paddingLeft:'10px',paddingTop:'10px'}}>{substitutes.player.pos}</p>
  //         </div>
  //       </div>
  // ));

  // const awaySubs = fixture.lineups && fixture.lineups[1].substitutes.map(substitutes => (
  //     // <div className={classes.awaySubsName}><hr width='100%'/> <p style={{paddingLeft:'10%'}}>{substitutes.player.name} {substitutes.player.number}</p></div>
  //     <div className={classes.homePlayersName}> <hr width='100%'/> 
  //         <div style={{width:'100%', display:'flex', paddingLeft:'5%'}}>
  //           <circle style={{backgroundColor: 'grey',
  //                   background: '-webkit-linear-gradient(top, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%)', /* Chrome10-25,Safari5.1-6 */
  //                   width: '30px',height: "30px",borderRadius: '50%',
  //                   display: 'inline-block',textAlign: 'center', 
  //                   margin: '2px', position:'relative',}}>

  //             <span style={{color:'white',position: 'absolute',top: '50%',transform: 'translate(-50%, -50%)',
  //               width: '90px'}}>{substitutes.player.number}
  //             </span>
  //           </circle>
  //           <span style={{textAlign:'center', paddingLeft:'20px',paddingTop:'10px', }}>{substitutes.player.name}</span><br/>
  //           <p style={{color:'grey', paddingLeft:'10px',paddingTop:'10px'}}>{substitutes.player.pos}</p>
  //         </div>
  //       </div>
        
  // ));
console.log(fixture)
  return (
  <div style={{width:'100%', }}>
        <LeagueBar/>
    <div style={{display:"flex",backgroundColor:'#EAF0F7' }} >
            <div style={{width:'70%', }} > 
              {/* { showStats ? <StatisticsHeader fixture={fixture}/> : <GameHeader fixture={fixture}/> }  */}
                <div className={classes.scoreSheet} slyle={{display:'flex', marginBottom:'100px'}}>
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
                    <div style={{ width:'40%', textAlign:'center', paddingTop:'3%', }}>
                      <img src={hometeamLogo} style={{width:'74px', height:'74px'}}/>
                      <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{hometeamName}</p>
                      <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem' }}>{homeTeamScore}</p>
                    </div>
                    {/* Score at half time */}
                    <div style={{display:'flex', width:'20%',  justifyContent:'center', alignItems:'center',backgroundColor:'blu'}}>
                      <div style={{ width:'70%', height:'25%', textAlign:'center', paddingTop:'3%', backgroundColor:'pin',}}>
                        {/* <div style={{backgroundColor:'yello', color: "white"}}>{halfTimeStatus}</div> */}
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
            <Route exact path="/game/:gameId">
              <LineUps fixture={fixture} />
            </Route>
            <Route path="/game/:gameId/events">
              <Events fixture={fixture}/>
            </Route >
            <Route path="/game/:gameId/chat">
              <ChatSection gameId={gameNum} />
            </Route>
          </div>
        <div style={{width:'30%', height:'1100px' }} >
          {/* <ChatSection gameId={gameNum} /> */}
        </div>
    </div>
  </div>
  );
}





// <Game /> // holds all the data, passes to children

//     ==> <GameHeader />   ||    <StatisticsHeader />

//     ==> <Lineups/> || <Chat /> || <Events /> || <StatisticsBody/>

