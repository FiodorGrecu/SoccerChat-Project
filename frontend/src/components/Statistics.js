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

  const venue = fixture.lineups && fixture.fixture.venue.name;

  const date = fixture.fixture && fixture.fixture.date;

console.log(fixture)
  return (
    <div style={{display:"flex",backgroundColor:'#EAF0F7' }} >
            <div style={{width:'70%', }} >  
                <div className={classes.scoreSheet} slyle={{display:'flex'}}>
                  <div style={{display:'flex', width:'100%'}}>
                    <div className={classes.date} style={{width: '100%', textAlign:'center', paddingTop:'2%', color:'white',fontWeight: 'bold'}}>{date}</div>
                  </div>

                  <div style={{display:'flex', width:'100%',  backgroundColor:'black ',}}>
                    <div style={{ width:'50%', textAlign:'center', paddingTop:'3%'}}>
                        <Chart  type='donut' series={[45,55]} options={{chart: { type: 'donut'}}} responsive={{breakpoint: 80, options:{chart:{width:100}}}}/>
                      {/* <img src={hometeamLogo} style={{width:'74px', height:'74px'}}/>
                      <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{hometeamName}</p>
                      <p style={{color:'white',fontWeight: 'bold',fontFamily:'Oswald,sansSerif',fontSize:' 2rem' }}>{homeTeamScore}</p> */}
                    </div>
                    <div style={{ width:'50%', textAlign:'center', paddingTop:'3%'}} >
                        <Chart type='donut' series={[45,55]} options={{chart: { type: 'donut'}}}/>
                      {/* <img src={awayteamLogo} style={{width:'74px', height:'74px'}}/>
                      <p style={{color:'white',fontWeight: 'bold',fontSize: '.8125rem',letterSpacing: '1px',textTransform: 'uppercase', paddingTop:'10px'}}>{awayteamName}</p>
                      <p style={{color:'white',fontWeight: 'bold',
                                fontFamily:'Oswald,sansSerif',fontSize:' 2rem'}}>
                                    {awayTeamScore}
                        </p> */}
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
                        <Link  component={RouterLink} to="/summary" style={{ color:'white', color:'white',
                                    fontWeight: 'bold',fontSize:'1rem', 
                                    paddingTop:'10px'}}>
                              Summary      
                        </Link>

                        <Link component={RouterLink} to="/game/436" style={{ color:'white', color:'white',
                                    fontWeight: 'bold',fontSize:'1rem', 
                                    paddingTop:'10px'}}>
                              Lineups      
                        </Link >
                        
                        <Link component={RouterLink} to="/statistics" style={{ color:'white', color:'white',
                                    fontWeight: 'bold',fontSize:'1rem', 
                                    paddingTop:'10px'}}>
                              Statistics      
                        </Link>
                        <Link component={RouterLink} to="/chat" style={{ color:'white', color:'white',
                                    fontWeight: 'bold',fontSize:'1rem', 
                                    paddingTop:'10px'}}>
                              Chat     
                        </Link>
                      </div>
                    </div>
              </div> 

              <div style={{display:'flex' }}>
                <h1 style={{paddingTop:'40%'}} >Hi! I am your statistics Page</h1>

              </div>   
          </div>
        {/* <div style={{width:'30%', height:'1100px' }} >
                <ChatSection gameId={gameNum}/>
        </div> */}
    </div>
  );
}

