import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Divider } from "@material-ui/core";
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({

  root: {
    // flexWrap: "wrap",
    justifyContent: "center ",
    // this weird symbols are the paper for some reason
    "& > *": {

    },
   
  }
}));

export default function StatsBar(props) {
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
 
//   const players = topScorers.map(player => (
//   <div >
//     <div style={{width:'100%', display:'flex',}}>
//           <span style={{paddingLeft:'50px',width:'16%'}}><Link>{player.player.name}</Link></span>
//           <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].team.name}</span>
//           <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].goals.total}</span>
//           <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].goals.assists || 0 }</span>
//           <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].penalty.scored}</span>
//           <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].games.appearences}</span>
//           <StarOutlineRoundedIcon />
//         </div>
//         <hr style={{width:'100%'}}/>
//   </div>
//   ))
  
//   const leagueName = topScorers[0] && topScorers[0].statistics[0].league.name; 
//   const leagueLogo = topScorers[0] && topScorers[0].statistics[0].league.logo; 
//   console.log(leagueName)

  // }
  return (
  
    <div  style={{backgroundColor:'aliceblue',}}>
      
        <div style={{display: "flex", }}>
           <div style={{ display:'flex' ,width:'100%',height:'60px',  }}>
        {/* Date div */}
            <div style={{width:'50%',  alignItems:'flex-start',
                  fontSize: '1rem', paddingLeft:'20px', paddingTop:'20px',
                  fontFamily:'Roboto,sans-serif',color: '#8e9cc5',
                  fontWeight: 'bold', backgroundColor:'white'}}>
              <span style={{color:'grey', paddingRight:'5px',color: '#8e9cc5'}}>
              <StarOutlineRoundedIcon />
              </span>
              <span>{new Date(gameDate).toLocaleDateString('en-US',
                     {day:'2-digit', month:'2-digit', year:'numeric'})}
              </span>
            </div> {/* End date div*/ }

            <div style={{ display:'flex' ,width:'20%', backgroundColor:'white', 
                    justifyContent:'flex-end', paddingTop:'20px',
                    fontFamily:'Roboto,sans-serif',fontWeight:'bold'}}>
                <span style={{paddingRight:'5px',}}>{hometeamName}</span>
                <span>
                    <img src={hometeamLogo} style={{width:'28px', height:'28px',}}/>
                </span>
            </div>
            <div style={{ display:'flex' ,width:'20%', backgroundColor:'white', justifyContent:'center',paddingTop:'20px',
                    fontFamily:'Roboto,sans-serif',fontWeight:'bold'}}>
                <span style={{paddingRight:'5px'}}>{homeTeamScore}</span>
                <span> - </span>
                <span style={{paddingLeft:'5px'}}>{awayTeamScore}</span>
            </div>
            <div style={{ display:'flex' ,width:'20%', backgroundColor:'white',paddingTop:'20px',
                    fontFamily:'Roboto,sans-serif',fontWeight:'bold'}}>
                <span>
                    <img src={awayteamLogo} style={{width:'28px', height:'28px'}}/>
                </span>
                <span style={{paddingLeft:'5px'}}>{awayteamName}</span>
            </div>

            {/* Half time score div div */}
            <div style={{width:'50%',alignItems:'flex-end',backgroundColor:'white', }}>
               <div style={{textAlign:'right', paddingRight:'20px', 
                      paddingTop:'20px',color: '#8e9cc5', fontWeight:'bold' }}>
                (<span>{halfTimeScoreH}</span>
                <span> - </span>
                <span>{halfTimeScoreA}</span>)
               </div>
            </div> {/* End Half time score div */}
          </div>
        </div>
        <div style={{display: "flex",  }}>
          <div style={{paddingLeft:'50px', display:'flex' ,width:'100%',
               justifyContent:'flex-end', paddingTop:'15px', marginTop:'1px',
               fontSize: '1rem', paddingLeft:'20px', paddingTop:'13px',
               fontFamily:'Roboto,sans-serif',color: 'grey',fontWeight: 'bold', 
               backgroundColor:'white'}}>
            <Link component={RouterLink} to={`/game/${gameNum}/events`} ><p style={{paddingRight:'20px'}}>Summary</p></Link>
            <Link component={RouterLink} to={`/game/${gameNum}/statistics`} ><p style={{paddingRight:'20px' }}>Statistics</p></Link>
            <Link component={RouterLink} to="/game/436"><p style={{paddingRight:'20px', }}>Lineups</p></Link>
            <Link component={RouterLink} to="/h2h/40/50"><p style={{paddingRight:'20px' }}>H2H</p></Link>
            <Link component={RouterLink} to={`/game/${gameNum}/chat`}><p style={{paddingRight:'20px' }}>Chat</p></Link>
          </div> 
        </div>
    </div>
  );
}
