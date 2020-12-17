import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  root: {
    // flexWrap: "wrap",
    justifyContent: "center ",
    // this weird symbols are the paper for some reason
    "& > *": {
      // margin: theme.spacing(3),
      // width: theme.spacing(39),
      // height: theme.spacing(25),
      // textAlign: "center",     
      
      // padding: 70,
      // fontWeight: (700),

    },
    // paper1: {
    //   margin: 30,
    //   color: 'red'
    // }
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  const [topScorers, setScorers] = useState([]);

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

  // const names = topScorers.map(player => (
  //   <p>{player.player.name}
      
  //   </p>  
  // ))
  // const teams = scorersTeam.map(player => (
  //   <p>{player.statistics[0].team.name}</p>
  // ))
  // const goals = scorersGoals.map(player => (
  //   <p>{player.statistics[0].goals.total}</p>
  // ))
  // const assists = scorersAssists.map(player => (
  //   <p>{player.statistics[0].goals.assists}</p>
  // ))
  // const penalties = scorersAssists.map(player => (
  //   <p>{player.statistics[0].penalty.scored}</p>
  // ))
  // const appearences = scorersAssists.map(player => (
  //   <p>{player.statistics[0].games.appearences}</p>
  // ))
 
  const players = topScorers.map(player => (
  <div >
    <div style={{width:'100%', display:'flex',}}>
          <span style={{paddingLeft:'50px',width:'16%'}}>{player.player.name}</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].team.name}</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].goals.total}</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].goals.assists || 0 }</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].penalty.scored}</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>{player.statistics[0].games.appearences}</span>
          
        </div>
        <hr style={{width:'100%'}}/>
  </div>
  ))



  return (
  
    
    <div  style={{}}>
        <div style={{display: "flex", }}>
          <div style={{ display:'flex' ,width:'100%',height:'50px',  }}>
            <div style={{width:'50%',backgroundColor:'yellow',  alignItems:'flex-start'}}>Premier League</div>
            <div style={{width:'50%',backgroundColor:'pink' ,alignItems:'flex-end'}}> PL Logo</div>
          </div>
        </div>
        <div style={{display: "flex",  }}>
          <div style={{paddingLeft:'50px', display:'flex' ,width:'100%',background:'gold', justifyContent:'flex-end', paddingTop:'15px'}}>
            <p style={{background:'green',paddingRight:'10px' }}>Summary</p>
            <p style={{background:'orange', paddingRight:'10px'}}>Standings</p>
            <p style={{background:'pink', paddingRight:'10px'}}>Live</p>
            <p style={{background:'red', paddingRight:'10px'}}>Fixtures</p>
            <p style={{background:'brown', paddingRight:'10px'}}>Results</p>
          </div> 
        </div>
        <div style={{display: "flex", }}>
          <div style={{paddingLeft:'50px', display:'flex' ,width:'100%',background:'gold', marginTop:'50px'}}>
            <p style={{background:'green', width:'16%'}}>Player</p>
            <p style={{background:'orange', width:'16%'}}>Team</p>
            <p style={{background:'pink', width:'16%'}}>Goals</p>
            <p style={{background:'red', width:'16%'}}>Assists</p>
            <p style={{background:'brown', width:'16%'}}>Penalties</p>
            <p style={{background:'green', width:'16%'}}>Appearences</p>
          </div> 
        </div>
          <div style={{  margin:'5%', color:'#516290',}}>
            {players}
          </div>

        <div style={{width:'100%', display:'flex', backgroundColor:'aqua'}}>

            {/* <div style={{paddingLeft:'50px',width:'16%'}}>{names}</div>
            <div style={{paddingLeft:'50px',width:'16%'}}>{teams}</div>
            <div style={{paddingLeft:'50px',width:'16%'}}>{goals}</div>
            <div style={{paddingLeft:'50px',width:'16%'}}>{assists}</div>
            <div style={{paddingLeft:'50px',width:'16%'}}>{penalties}</div>
            <div style={{paddingLeft:'50px',}}>{appearences}</div> */}

        </div>
        
    </div>
  );
}
