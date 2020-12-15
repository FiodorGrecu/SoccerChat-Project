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

  const names = topScorers.map(player => (
  <p>{player.player.name}</p>
  ))


  return (
    
    
    <div className={classes.root} style={{display: "flex", width:'100%', height:'1000px', backgroundColor: "aliceblue",}}>
        
        <div style={{display:'flex', width:'100%', height:'10%' ,backgroundColor:'white',  bottom:'0'}}>
          <div className={classes.leagueLogo} style={{ width:'50%', textAlign:'left', paddingTop:'10px', paddingLeft:'2%'}}  >
            {/* <img src={leagueLogo} style={{width:31, height:31 }} /> */}
            <p>Premier League</p>
          </div>
          <div style={{ width:'50%', textAlign:'right', 
                        paddingTop:'20px', paddingRight:'2%', 
                        fontFamily: 'Roboto,sans-serif',
                        fontSize: '1rem', color: '#8e9cc5',
                        fontWeight: '550'}}>
                        {/* <p >{venue}</p> */}
                        <p>Logo Here</p>
            </div>
        </div>
        {/* <div style={{display: "flex", width: '80%', }}>
          General Standings (2020 - 2021)
        </div> */}
        <div>{names}</div>
     
    </div>
  );
}
