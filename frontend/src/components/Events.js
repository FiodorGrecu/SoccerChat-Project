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
import { FaStopwatch } from "react-icons/fa";
import { IoTabletPortraitOutline } from "react-icons/fa";
// import { IoTabletPortraitOutline } from "react-icons/io5";
// import { IoTabletPortraitOutline } from "react-icons/io5";

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


console.log(fixture)
    function renderEvent(event) {
        if (event.type === 'Goal') {
            return (
                <div>
                  <div >
                    {event.time.elapsed}'                    
                    {/* <span >{event.player.name}</span>b */}
                  </div>
                  <div></div>
                   <span style={{paddingRight:'10px'}}>({event.assist.name})</span>
                   <span style={{paddingRight:'10px'}}>
                     {event.player.name}
                   </span>
                   Goooal !!!
                  <SportsSoccerIcon style={{color:'black',paddingLeft:'5px' }}/>
                  <span style={{paddingLeft:'10px'}}>{event.team.name}</span>
                  <hr style={{width:'96%'}}/>
                </div>


            
            )
        } else if (event.type === 'subst') {
            return (
                <div>
                  <div style={{}}>{event.time.elapsed}'</div>
                  <span>
                    <span>
                    <span style={{color:'#e72652', textAlign:'right'}}><ArrowDropDownIcon/></span>
                    {event.assist.name}
                  </span>
                    <span style={{color:'#23d24a'}}><ArrowDropUpIcon/></span>
                    {event.player.name}
                    {/* <span>Arsenal</span> */}
                  <span style={{paddingLeft:'10px'}}>{event.team.name}</span>

                   </span>
                    {/* <span style={{paddingLeft:'50px'}}>{event.team.name}</span>                   */}
                  <hr style={{width:'96%'}}/>
                    {/* <p>Substitution</p> */}
                </div>
            )
        } else if(event.type === 'Card') {
            if (event.detail === 'Yellow Card') {
              return (
                <div>
                  {/* <IoTabletPortraitOutline/> */}
                    <div>{event.time.elapsed}'</div>
                    <span>{event.player.name}</span>
                    <span>
                      {/* <IoTabletPortraitOutline/> */}
                      <span style={{width:'10px', height:'33px', backgroundColor:'#ffb822', marginLeft:'10px'}}>
                      <span style={{width:'20px', 
                         height:'20px', borderRadius:'2px',marginLeft:'10px',}}>             
                      </span>
                      </span>
                    </span>
                    <span style={{paddingLeft:'10px'}}>{event.team.name}</span>

                         <hr style={{width:'96%'}}/>
                    
                </div> 
              )
            } else if (event.detail === 'Red Card') {
              return (
                <div>
                  {/* <IoTabletPortraitOutline/> */}
                    <div>{event.time.elapsed}'</div>
                    <span>{event.player.name}</span>
                    <span>
                      {/* <IoTabletPortraitOutline/> */}
                      <span style={{width:'10px', height:'33px', backgroundColor:'red', marginLeft:'10px'}}>
                      <span style={{width:'20px', 
                         height:'20px', borderRadius:'2px',marginLeft:'10px',}}>             
                      </span>
                      </span>
                    </span>
                    <span style={{paddingLeft:'10px'}}>{event.team.name}</span>
                         <hr style={{width:'96%'}}/>
                    
                </div> 
              )
            }
        } 
    }

  const events = fixture.events && fixture.events.map(renderEvent)  
  
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
            <div style={{}}>
                <div style={{display:'flex', marginTop:'100px',marginLeft:'10%',marginRight:'10%'}}>
                  <div style={{width:'100%',height:'50px',backgroundColor:'white', 
                        textAlign:'center', 
                        fontFamily: 'Roboto,sans-serif',fontSize: '1rem', 
                        color: '#8e9cc5',fontWeight: '550', paddingTop:'5px' }}>
                          Events  
                          <div><FaStopwatch/></div>             
                  </div> 
                </div> 
                <div style={{display:'flex',marginLeft:'10%',marginRight:'10%', marginTop:'1px'}}>
                  <div style={{width:'100%', paddingTop:'20px',backgroundColor:'white', 
                          textAlign:'center',fontFamily: 'Roboto,sans-serif',
                          fontSize: '1rem', color: '#8e9cc5',
                          fontWeight: '550' }}>
                            {events}
                          
                    </div>
                  </div>
            </div>       
          </div>
          
        {/* <div style={{width:'30%', height:'1100px' }} >
                <ChatSection gameId={gameNum}/>
        </div> */}
    </div>
    
  );
}

