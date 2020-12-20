import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { Link } from '@material-ui/core';
// import Style from 'style-it';


const useStyles = makeStyles({
  
  
  
});


export default function PLTable() {
  const classes = useStyles();

  const [teams, setTeams] = useState([]);
  // const [color, setColor] = useState("")

  useEffect( () => {
    async function getPLTable() {
      const response = await fetch(`http://localhost:5000/api/table/${39}`)
      const data = await response.json();
      console.log(data);
      setTeams(data.response[0] || []);
    }  
    getPLTable();
  }, []);

  const teamsTable =  teams.league && teams.league.standings[0].map(team => (
    <div >
    <div style={{width:'100%', display:'flex',}}>
          <span style={{paddingLeft:'10px',width:'3%', backgroundColor:'aquamarine'}}>{team.rank}</span>
          <span style={{paddingLeft:'10px',width:'250px',backgroundColor:'green'}}><span style={{paddingRight:'5px'}}><img src={ team.team.logo } style={{width:28, height:28, 
                }}/></span >{team.team.name}</span>
          <span style={{paddingLeft:'20px',width:'98px',backgroundColor:'pink'}}>{team.all.played}</span>
              <span style={{paddingLeft:'20px',width:'98px',backgroundColor:'lightblue'}}>{team.all.win}</span>
              <span style={{paddingLeft:'20px',width:'130px',backgroundColor:'lightgreen'}}>{team.all.draw}</span>
              <span style={{paddingLeft:'20px',width:'130px',backgroundColor:'lightgrey'}}>{team.all.lose}</span>
              <span style={{paddingLeft:'20px',width:'130px',backgroundColor:'aqua'}}>{team.goalsDiff}</span>
              <span style={{paddingLeft:'20px',width:'130px',backgroundColor:'pink'}}>{team.points}</span>
              <span style={{paddingLeft:'20px',width:'130px',backgroundColor:'gold'}}>{team.form}</span>
          <StarOutlineRoundedIcon />
        </div>
        <hr style={{width:'100%'}}/>
  </div>
  ))

  return (
    <div  style={{backgroundColor:'aliceblue',}}>
    <div style={{display: "flex", }}>
      <div style={{ display:'flex' ,width:'100%',height:'60px',  }}>
        <div style={{width:'50%',  alignItems:'flex-start',
              fontSize: '1rem', paddingLeft:'20px', paddingTop:'20px',
              fontFamily:'Roboto,sans-serif',color: '#8e9cc5',
              fontWeight: 'bold', backgroundColor:'white'}}>
          {teams.league ? teams.league.name : 'League Name'}
          <span style={{color:'grey', paddingLeft:'5px',color: '#8e9cc5'}}>
          <StarOutlineRoundedIcon />
          </span>
      </div>
        <div style={{width:'50%',alignItems:'flex-end',backgroundColor:'white'}}>
           <div style={{textAlign:'right', paddingRight:'20px', paddingTop:'10px' }}> 
              <img src={ teams.league && teams.league.logo } style={{width:42, height:42, 
                display:'inline-block',}}/>
           </div>
            
        </div>
      </div>
    </div>
    <div  style={{display: "flex",  }}>
      <div className={classes.links} style={{paddingLeft:'50px', display:'flex' ,width:'100%',
           justifyContent:'flex-end', paddingTop:'15px', marginTop:'1px',
           fontSize: '1rem', paddingLeft:'20px', paddingTop:'13px',
           fontFamily:'Roboto,sans-serif',color: 'grey',fontWeight: 'bold', 
           backgroundColor:'white', }}
          //  onMouseEnter={() => setColor('red')}
          //  onMouseLeave={() => setColor('')}
           >
        
        <p style={{paddingRight:'20px', }}>Summary</p>

        <Link ><p style={{paddingRight:'20px', hover:{color:'red'} }}>Standings</p></Link>
        <Link><p style={{paddingRight:'20px', textTransform:'uppercase'}}>Live</p></Link>
        <Link><p style={{paddingRight:'20px' }}>Fixtures</p></Link>
        <Link><p style={{paddingRight:'20px' }}>Results</p></Link>
      </div> 
    </div>

    <div style={{display: "flex", }}>
      <div style={{display: "flex", width:'15%', height:'100px', 
            backgroundColor:'grey',paddingTop:'10px',paddingLeft:'10px'}}>
              Standing Type 
          <select >
            <option value='topScorers'>Top Scorers</option> 
            <option value='Standings'>Standings</option> 
            <option value='liveStandings'>Top Scorers</option> 
            <option>Top Scorers</option> 
          </select>
      </div>
      <div style={{display: "flex", }}>Season</div>
    </div>

    <div style={{display: "flex", }}>
      <div style={{ display:'flex' ,width:'100%',
            background:'white', marginTop:'50px', textAlign:'left',
            marginLeft:'5%', marginRight:'5%', marginBottom:'1px', 
            paddingTop:'10px', fontSize: '1rem', paddingLeft:'20px', paddingTop:'13px',
            fontFamily:'Roboto,sans-serif',color: 'grey',fontWeight: 'bold', }}>       
        <p style={{ paddingLeft:'10px',width:'3%',backgroundColor:'aquamarine' }}>#</p>
        <p style={{ paddingLeft:'10px',width:'300px',backgroundColor:'green' }}>Team</p>
        <p style={{ width:'13%',backgroundColor:'pink', paddingLeft:'20px' }}>Played</p>
        <p style={{ width:'98px',backgroundColor:'lightblue'}}>Won</p>
        <p style={{ width:'17%',backgroundColor:'lightgreen' }}>Drawn</p>
        <p style={{ width:'16%', }}>Lost</p>
        <p style={{ width:'16%', }}>Goals</p>
        <p style={{ width:'16%', }}>Points</p>
        <p style={{ width:'16%', }}>Last 5</p>
      </div> 
    </div>
      <div style={{  marginLeft:'5%', marginRight:'5%', color:'#516290', backgroundColor:'white' }}>
        <div style={{fontSize: '0.9rem', paddingLeft:'20px',paddingRight:'20px', paddingTop:'13px',
              fontFamily:'Roboto,sans-serif',color: '#8e9cc5',
  fontWeight: 'bold', }}>{teamsTable}</div>
      </div>
    
</div>
  );
}
