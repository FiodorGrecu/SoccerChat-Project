import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Divider } from "@material-ui/core";
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import LeagueBar from './LeagueNameBar';
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

export default function SimplePaper({ season }) {
  const classes = useStyles();

  const [topScorers, setScorers] = useState([]);
  // const [year, setYear] = useState( season );
  // const [leagueName, setLeagueName] = useState([]);
  
 
  useEffect(() => {
    async function gameDetails() {
      const response = await fetch(`http://localhost:5000/api/topscorers/${season}/${39}`);
      const data = await response.json();
      console.log(data);
      if (data.scorers) {
        console.log(data.scorers.response || null)
        setScorers(data.scorers.response || [])
        
      };
    }
  
    gameDetails();

  }, [season] )

 
  const players = topScorers.map(player => (
  <div >
    <div style={{width:'100%', display:'flex',}}>
          <span style={{paddingLeft:'0px',width:'35px', }}>
            <img style={{width:30, height:30}} src={player.player.photo}/></span>
          <span className={"TeamName"} style={{paddingLeft:'10px',width:'16%'}}>
            <RouterLink style={{textDecoration:'none'}} className={"TeamName"}>
              {player.player.lastname}
            </RouterLink>
          </span>
          <span style={{paddingLeft:'30px',width:'16%'}}>{player.statistics[0].team.name}</span>
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
  console.log(leagueName)


  return (
  
    
    <div  style={{backgroundColor:'aliceblue',}}>
        <div style={{display: "flex", }}>
          <div style={{paddingLeft:'50px', display:'flex' ,width:'100%',
                background:'white', marginTop:'13px', textAlign:'left',
                marginLeft:'5%', marginRight:'5%', marginBottom:'1px', 
                paddingTop:'10px', fontSize: '1rem', paddingLeft:'20px', paddingTop:'13px',
                fontFamily:'Roboto,sans-serif',color: 'grey',fontWeight: 'bold', }}>       
            <p style={{ width:'16%',paddingLeft:'35px',}}>Player</p>
            <p style={{ width:'16%',paddingLeft:'55px'}}>Team</p>
            <p style={{ width:'16%',paddingLeft:'55px'}}>Goals</p>
            <p style={{ width:'16%', paddingLeft:'45px'}}>Assists</p>
            <p style={{ width:'16%', paddingLeft:'30px'}}>Penalties</p>
            <p style={{ width:'16%', paddingLeft:'30px'}}>Appearences</p>
          </div> 
        </div>
          <div style={{  marginLeft:'5%', marginRight:'5%', color:'#516290', backgroundColor:'white' }}>
            <div style={{fontSize: '0.9rem', paddingLeft:'20px',paddingRight:'20px', paddingTop:'13px',
                  fontFamily:'Roboto,sans-serif',color: '#8e9cc5',
                  fontWeight: 'bold', }}>{players}
            </div>
          </div>
        
    </div>
  );
}
