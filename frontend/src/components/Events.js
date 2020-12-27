import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
// import {View, Text, StyleSheet} from 'react-native';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';

// import Background_pic from '/Users/Work/Desktop/MyProject/frontend/src/components/background.png';
import Date from 'react-moment';
import ChatSection from './ChatSection';
import { icons } from 'react-icons/lib';
import { grey } from '@material-ui/core/colors';
import LeagueBar from './LeagueNameBar';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

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
//   const [events, setEvents] = useState({});
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

  const date = fixture.fixture && fixture.fixture.date;  

  const awaySubs = fixture.lineups && fixture.lineups[1].substitutes.map(substitutes => (
      // <div className={classes.awaySubsName}><hr width='100%'/> <p style={{paddingLeft:'10%'}}>{substitutes.player.name} {substitutes.player.number}</p></div>
      <div className={classes.homePlayersName}> <hr width='100%'/> 
          <div style={{width:'100%', display:'flex', paddingLeft:'5%'}}>
            <circle style={{backgroundColor: 'grey',
                    background: '-webkit-linear-gradient(top, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%)', /* Chrome10-25,Safari5.1-6 */
                    width: '30px',height: "30px",borderRadius: '50%',
                    display: 'inline-block',textAlign: 'center', 
                    margin: '2px', position:'relative',}}>

              <span style={{color:'white',position: 'absolute',top: '50%',transform: 'translate(-50%, -50%)',
                width: '90px'}}>{substitutes.player.number}
              </span>
            </circle>
            <span style={{textAlign:'center', paddingLeft:'20px',paddingTop:'10px', }}>{substitutes.player.name}</span><br/>
            <p style={{color:'grey', paddingLeft:'10px',paddingTop:'10px'}}>{substitutes.player.pos}</p>
          </div>
        </div>
        
  ));
console.log(fixture)
    function renderEvent(event) {
        if (event.type === 'Goal') {
            return (
                <div>
                  <div>{event.time.elapsed}</div>
                  <SportsSoccerIcon/>
                    {/* <span> Goal </span> */}
                   <span style={{paddingLeft:'200p'}}>
                     {event.player.name}
                   </span>
                   <span>{event.assist.name}</span>
                </div>

            
            )
        } else if (event.type === 'subst') {
            return (
                <div>
                  <div>{event.time.elapsed}</div>
                  <span>{event.player.name}</span>
                  <span>{event.assist.name}</span>
                    {/* <p>Substitution</p> */}
                </div>
            )
        } else if(event.type === 'Card') {
            return (
                <div>
                    <div>{event.time.elapsed}</div>
                    <span>{event.player.name}</span>
                    <span>
                      <span style={{width:'10px', height:'33px', backgroundColor:'yellow', marginLeft:'10px'}}>
                      <span style={{width:'20px', 
                         height:'20px', borderRadius:'2px',marginLeft:'10px',}}>             
                      </span>
                      </span>
                    </span>
                    
                </div>
            )
        }
            
        

    }

  const events = fixture.events && fixture.events.map(renderEvent)  
//   <div>
//       <div>{event.time.elapsed}</div>
//       <div>{event.player.name}</div>
//       {event.assist.name}
//       {event.detail}
//     </div>
  
  return (
    <div style={{display:"flex",backgroundColor:'#EAF0F7' }} >
        <div style={{width:'100%', }} > 
            <LeagueBar/>
            <div className={classes.scoreSheet} slyle={{display:'flex', marginBottom:'100px'}}>
                <div style={{display:'flex', width:'100%'}}>
                    <div className={classes.date} style={{width: '100%', textAlign:'center', paddingTop:'2%', color:'white',fontWeight: 'bold'}}>{date}</div>
                </div>

                <div style={{display:'flex', width:'100%',  backgroundColor:'black ',}}>
                    <div style={{ width:'50%', textAlign:'center', paddingTop:'3%'}}>
                        <img src={hometeamLogo} style={{width:'74px', height:'74px'}}/>
                        <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{hometeamName}</p>
                        <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem' }}>{homeTeamScore}</p>
                    </div>
                    <div style={{ width:'50%', textAlign:'center', paddingTop:'3%'}}>
                        <img src={awayteamLogo} style={{width:'74px', height:'74px'}}/>
                        <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{awayteamName}</p>
                        <p style={{color:'white',fontWeight: 'bold',
                                fontFamily:'Oswald,sansSerif',fontSize:' 2rem'}}>
                                    {awayTeamScore}
                        </p>
                    </div>
                </div>
                
                <div style={{display:'flex', width:'100%', height:'50px' ,backgroundColor:'white',  bottom:'0',}}>
                    <div className={classes.leagueLogo} style={{ width:'50%', 
                            textAlign:'left', paddingTop:'10px', paddingLeft:'2%'}}  >
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
            </div> 
            <div style={{paddingTop:'20px'}}>
                <div style={{width:'100%', paddingTop:'200px',}}>Events</div> 
                <div style={{width:'100%', paddingTop:'20px',backgroundColor:'F4F4F4', 
                        textAlign:'center',fontFamily: 'Roboto,sans-serif',
                        fontSize: '1rem', color: '#8e9cc5',
                        fontWeight: '550' }}>
                          {events}
                  </div>
            </div>       
          </div>
          
        {/* <div style={{width:'30%', height:'1100px' }} >
                <ChatSection gameId={gameNum}/>
        </div> */}
    </div>
    
  );
}

