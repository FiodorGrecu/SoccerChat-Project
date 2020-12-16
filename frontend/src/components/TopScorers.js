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
  const [scorersGoals, setScoreresGoals] = useState([])
  const [scorersAssists, setScoreresAssists] = useState([])
  const [scorersPensalties, setScoreresPenalties] = useState([])
  const [scorersAppearences, setScoreresAppearences] = useState([])


  useEffect(() => {
    async function gameDetails() {
      const response = await fetch(`http://localhost:5000/api/topscorers/2020/${39}`);
      const data = await response.json();
      console.log(data);
      if (data.scorers) {
        console.log(data.scorers.response || null)
        setScorers(data.scorers.response || [])
        setScoreresTeam(data.scorers.response || [])
        setScoreresGoals(data.scorers.response || [])
        setScoreresAssists(data.scorers.response || [])
        setScoreresPenalties(data.scorers.response || [])
        setScoreresAppearences(data.scorers.response || [])
      };
    }
  
    gameDetails();

  }, [] )

  const names = topScorers.map(player => (
    <p>{player.player.name}<hr style={{}}/></p>  
  ))
  const teams = scorersTeam.map(player => (
    <p>{player.statistics[0].team.name}<hr style={{}}/></p>
  ))
  const goals = scorersGoals.map(player => (
    <p>{player.statistics[0].goals.total}<hr style={{}}/></p>
  ))
  const assists = scorersAssists.map(player => (
    <p>{player.statistics[0].goals.assists}<hr style={{}}/></p>
  ))
  const penalties = scorersAssists.map(player => (
    <p>{player.statistics[0].penalty.scored}<hr style={{}}/></p>
  ))
  const appearences = scorersAssists.map(player => (
    <p>{player.statistics[0].games.appearences}<hr style={{}}/></p>
  ))




  return (
    
    
    <div  style={{display: "flex",  }}>
        
        
        <div style={{width:'100%', display:'flex', backgroundColor:'aqua', margin:'5%'}}>
            <div>
              Player
              <div style={{paddingLeft:'50px'}}>{names}</div>
            </div>
            
            <div style={{paddingLeft:'50px'}}>{teams}</div>
            <div style={{paddingLeft:'50px'}}>{goals}</div>
            <div style={{paddingLeft:'50px'}}>{assists}</div>
            <div style={{paddingLeft:'50px'}}>{penalties}</div>
            <div style={{paddingLeft:'50px'}}>{appearences}</div>


        </div>
        
    </div>
  );
}
