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
  const [scorersTeam, setScoreresTeam] = useState([])

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

  const names = topScorers.map(player => (
    <p>{player.player.name}<hr style={{}}/></p>
    
  ))

  const teams = scorersTeam.map(player => (
    <p>{player.statistics.team.name}</p>
  ))


  return (
    
    
    <div  style={{display: "flex",  }}>
        
        
        <div style={{width:'100%', display:'flex', }}>
            <div style={{backgroundColor:'aqua', width:'100%', textAlign:'left', }}>{names}</div>
        </div>
        <div>
            <div>{teams}</div>
        </div>
    </div>
  );
}
