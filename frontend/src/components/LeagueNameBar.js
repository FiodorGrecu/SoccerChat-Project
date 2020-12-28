import React, { useState, useEffect } from "react";
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

export default function LeagueBar() {
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
              {leagueName}
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
            <Link component={RouterLink} to="/table"><p style={{paddingRight:'20px' }}>Standings</p></Link>
            <Link><p style={{paddingRight:'20px', textTransform:'uppercase'}}>Live</p></Link>
            <Link><p style={{paddingRight:'20px' }}>Fixtures</p></Link>
            <Link><p style={{paddingRight:'20px' }}>Results</p></Link>
          </div> 
        </div>

        {/* <div style={{display: "flex" ,}}>
      <div style={{ textAlign:'left', width:'219px', height:'63px', 
            backgroundColor:'white',paddingTop:'10px',paddingLeft:'10px',
            margin: '40px', marginLeft:'70px', borderRadius:'2%',
            textTransform:'uppercase', fontWeight:'bold' ,color: '#8e9cc5'}}>
          <div style={{width:'95%', }}>
            <span style={{ width:"95%", }}>Standing Type</span>
          </div>
          <div style={{display: "flex", paddingTop:'2px'}}>
            <select style={{ width:"95%", fontWeight:'bold',
                    color:'#0094e5', border:'none'}}>
              <option style={{fontWeight:'bold'}} value='topScorers'>General Standings</option> 
              <option value='Standings'>Live Standings</option> 
              <option value='liveStandings'>Top Scorers</option> 
            </select>
          </div>
      </div>
      <div style={{textAlign:'left', width:'219px', height:'63px', 
            backgroundColor:'white',paddingTop:'10px',paddingLeft:'10px',
            margin: '40px', marginLeft:'20px', borderRadius:'2%',
            textTransform:'uppercase', fontWeight:'bold' ,color: '#8e9cc5'}}>
        <div style={{width:'95%', }}>
          <span style={{ width:"95%", }}>Season</span>
        </div>
        <div >     
          <select style={{ width:"95%", fontWeight:'bold',
                    color:'#0094e5', border:'none'}}>
            <option value='topScorers_2020'>2020/2021</option> 
            <option value='topScorers_2019'>2019/2020</option> 
            <option value='topScorers_2018'>2018/2019</option> 
            <option value='topScorers_2017'>2017/2018</option> 
            <option value='topScorers_2016'>2016/2017</option> 
            <option value='topScorers_2015'>2015/2016</option> 
            <option value='topScorers_2014'>2014/2015</option> 
            <option value='topScorers_2013'>2013/2014</option> 
            <option value='topScorers_2012'>2012/2013</option> 
            <option value='topScorers_2011'>2011/2012</option> 
            <option value='topScorers_2010'>2010/2011</option> 
          </select>
        </div>  
      </div>
    </div> */}

        
    </div>
  );
}
