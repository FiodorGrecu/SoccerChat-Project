import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Divider } from "@material-ui/core";
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { Link } from '@material-ui/core';
// import './styles.css';


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
  // const [leagueName, setLeagueName] = useState([]);
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

  // async function
 
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
  console.log(leagueName)

  // const leagueLogo = topScorers.player && topScorers

  // const _handleKeyDown = (e) => {
  //   if (e.color='red!important') {
      
  //   };
  // }
  return (
  
    
    <div  style={{backgroundColor:'aliceblue',}}>
        <div style={{display: "flex", }}>
          <div style={{ display:'flex' ,width:'100%',height:'60px',  }}>
            <div style={{width:'50%',  alignItems:'flex-start',
                  fontSize: '1rem', paddingLeft:'20px', paddingTop:'20px',
                  fontFamily:'Roboto,sans-serif',color: '#8e9cc5',
                  fontWeight: 'bold', backgroundColor:'white'}}>
              {leagueName}League Name
              <span style={{color:'grey', paddingLeft:'5px',color: '#8e9cc5'}}>
              <StarOutlineRoundedIcon />
              </span>
          </div>
            <div style={{width:'50%',alignItems:'flex-end',backgroundColor:'white'}}>
               <div style={{textAlign:'right', paddingRight:'20px', paddingTop:'20px' }}> 
               <img src={leagueLogo} style={{width:'34px', height:'34px'}}/>


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
            <Link  ><p style={{paddingRight:'20px'}}>Summary</p></Link>
            <Link><p style={{paddingRight:'20px' }}>Standings</p></Link>
            <Link><p style={{paddingRight:'20px', textTransform:'uppercase'}}>Live</p></Link>
            <Link><p style={{paddingRight:'20px' }}>Fixtures</p></Link>
            <Link><p style={{paddingRight:'20px' }}>Results</p></Link>
          </div> 
        </div>

        <div style={{display: "flex", }}>
          <div style={{display: "flex", width:'15%', height:'100px', 
                backgroundColor:'grey',paddingTop:'10px',paddingLeft:'10px'}}>
                  Standing Type 
              <div>Top Scorers </div>
          </div>
          <div style={{display: "flex", }}>Season</div>
        </div>

        <div style={{display: "flex", }}>
          <div style={{paddingLeft:'50px', display:'flex' ,width:'100%',
                background:'white', marginTop:'50px', textAlign:'left',
                marginLeft:'5%', marginRight:'5%', marginBottom:'1px', 
                paddingTop:'10px', fontSize: '1rem', paddingLeft:'20px', paddingTop:'13px',
                fontFamily:'Roboto,sans-serif',color: 'grey',fontWeight: 'bold', }}>       
            <p style={{ width:'16%',paddingLeft:'30px' }}>Player</p>
            <p style={{ width:'16%',paddingLeft:'30px'}}>Team</p>
            <p style={{ width:'16%',paddingLeft:'30px'}}>Goals</p>
            <p style={{ width:'16%', }}>Assists</p>
            <p style={{ width:'16%', }}>Penalties</p>
            <p style={{ width:'16%', }}>Appearences</p>
          </div> 
        </div>
          <div style={{  marginLeft:'5%', marginRight:'5%', color:'#516290', backgroundColor:'white' }}>
            <div style={{fontSize: '0.9rem', paddingLeft:'20px',paddingRight:'20px', paddingTop:'13px',
                  fontFamily:'Roboto,sans-serif',color: '#8e9cc5',
                  fontWeight: 'bold', }}>{players}</div>
          </div>
        
    </div>
  );
}
