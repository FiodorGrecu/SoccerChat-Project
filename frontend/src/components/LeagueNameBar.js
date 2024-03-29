import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import './StatsTopBar.css';



const useStyles = makeStyles((theme) => ({

  root: {
    // flexWrap: "wrap",
    justifyContent: "center ",
    // this weird symbols are the paper for some reason
    "& > *": {

    },
   
  }
}));

export default function LeagueBar( { fixture } ) {
  const classes = useStyles();

  const [topScorers, setScorers] = useState([]);
  const [color, setColor] = useState('');
  
 
  useEffect(() => {
    async function gameDetails() {
      const response = await fetch(`http://localhost:5000/api/topscorers/2020/${39}`);
      const data = await response.json();
      console.log(data);
      if (data.scorers) {
        console.log(data.scorers.response || null)
        setScorers(data.scorers.response || [])
        
      };
    }
  
    gameDetails();

  }, [] )

 
  const players = topScorers.map(player => (
  <div >
    <div style={{width:'100%', display:'flex',}}>
          <span style={{paddingLeft:'50px',width:'16%'}}><Link>{player.player.name}</Link></span>
          <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].team.name}</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].goals.total}</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].goals.assists || 0 }</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].penalty.scored}</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].games.appearences}</span>
          <StarOutlineRoundedIcon />
        </div>
        <hr style={{width:'100%'}}/>
  </div>
  ))
  
  const leagueName = topScorers[0] && topScorers[0].statistics[0].league.name; 
  const leagueLogo = topScorers[0] && topScorers[0].statistics[0].league.logo; 
  // console.log(leagueName) for localy testing purposes 

  // }
  return (
  
    <div  style={{backgroundColor:'aliceblue',}}>
      
        <div style={{display: "flex", }}>
          <div style={{ display:'flex' ,width:'100%',height:'60px',  }}>
            <div style={{width:'50%',  alignItems:'flex-start',
                  fontSize: '1rem', paddingLeft:'20px', paddingTop:'20px',
                  fontFamily:'Roboto,sans-serif',color: '#8e9cc5',
                  fontWeight: 'bold', backgroundColor:'white'}}>
              {leagueName}
              <span style={{color:'grey', paddingLeft:'5px',color: '#8e9cc5'}}>
              <StarOutlineRoundedIcon />
              </span>
          </div>
            <div style={{width:'50%',alignItems:'flex-end',backgroundColor:'white'}}>
               <div style={{textAlign:'right', paddingRight:'20px', paddingTop:'10px' }}> 
               <img src={leagueLogo} style={{width:'42px', height:'42px'}}/>
               </div>
            </div>
          </div>
        </div>
        <div style={{display: "flex",  }}>
          <div style={{paddingLeft:'50px', display:'flex' ,width:'100%',
               justifyContent:'flex-end', paddingTop:'15px', marginTop:'1px',
               fontSize: '1rem', paddingLeft:'20px', paddingTop:'13px',
               fontFamily:'Roboto,sans-serif',color: 'grey',fontWeight: 'bold', 
               backgroundColor:'white'}}
               >
            <RouterLink className={"BarLinks"} style={{textDecoration:'none'}} 
                to='/fixtures'>
                  <p className={"BarLinks"} style={{paddingRight:'20px',}}>
                    Summary
                  </p>
            </RouterLink>
            <RouterLink className={"BarLinks"} style={{textDecoration:'none'}} 
                to="/table_view">
                  <p className={"BarLinks"} style={{paddingRight:'20px' }}>
                    Standings
                  </p>
            </RouterLink>
            <RouterLink className={"BarLinks"} style={{textDecoration:'none'}}
                to="/live_games">
                <p className={"BarLinks"} 
                  style={{paddingRight:'20px', textTransform:'uppercase'}}>
                    Live
                </p>
            </RouterLink>
            <RouterLink className={"BarLinks"} style={{textDecoration:'none'}} 
                to="/upcoming_fixtures">
                  <p className={"BarLinks"} style={{paddingRight:'20px' }}>
                    Fixtures
                  </p>
            </RouterLink>
            <RouterLink className={"BarLinks"} style={{textDecoration:'none'}} 
                to="/past_fixtures">
                  <p className={"BarLinks"} style={{paddingRight:'20px' }}>
                    Results
                  </p>
              </RouterLink>
          </div> 
        </div>
    </div>
  );
}
