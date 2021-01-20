import React, { useState, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {games as fixtures} from "./teams";
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import ChatSection from './ChatSection';
import { icons } from 'react-icons/lib';
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import LeagueBar from './LeagueNameBar';
import LineUps from './LineUps';
import GameSectionScoreCheet from './GameSectionScoreCheet';
import Events from './Events';
import StatsBar from './StatsTopBar';
import StatsBody from './StatsBody';
import StatsHeader from './StatsHeader';
import GameHeader from './GameHeader';



export default function CenteredGrid(props) {
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
  
  const homeBallPossession = fixture.statistics && fixture.statistics[0].statistics[9].value.slice(0,-1);
  const awayBallPossession = fixture.statistics && fixture.statistics[1].statistics[9].value.slice(0,-1);
  // console.log(homeBallPossession)

  const homeCornerKicks = fixture.statistics && fixture.statistics[0].statistics[7].value;
  const awayCornerKicks = fixture.statistics && fixture.statistics[1].statistics[7].value;
  
  const homeOffsides = fixture.statistics && fixture.statistics[0].statistics[8].value;
  const awayOffsides = fixture.statistics && fixture.statistics[1].statistics[8].value;

  const homeShootingAccuracy = homeShotsOnTarget / (homeShotsOnTarget + homeShotsOffTarget) * 100;
  const awayShootingAccuracy = awayShotsOnTarget / (awayShotsOnTarget + awayShotsOffTarget) * 100;

  console.log(Math.floor(homeShootingAccuracy))
  console.log(awayShootingAccuracy)

return (
    // The bar with info about Venue & LogoPL
    <div>
        <div style={{display:'flex', width:'98%', height:'50px' ,backgroundColor:'white', marginLeft:'1%', marginRight:'1%'}}>
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
{/* The links for later use (stats summary an so on bellow) */}
        <div style={{backgroundColor:'black', display:'flex', width:'98%',height:'50px' ,  marginLeft:'1%', marginRight:'1%',}}>
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

        
        
        <Link component={RouterLink} to={`/game/${gameNum}/statistics`} style={{ color:'white', color:'white',
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
)
};