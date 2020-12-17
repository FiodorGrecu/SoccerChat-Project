import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { Link } from '@material-ui/core';
const useStyles = makeStyles({
  
});


export default function PLTable() {
  const classes = useStyles();

  const [teams, setTeams] = useState([]);

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
  <span style={{paddingLeft:'50px',width:'16%'}}>{team.team.name}</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>1</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>2</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>3</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>4</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>5</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>6</span>
          <span style={{paddingLeft:'50px',width:'16%'}}>7</span>
          {/* <StarOutlineRoundedIcon /> */}
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
          League Name
          <span style={{color:'grey', paddingLeft:'5px',color: '#8e9cc5'}}>
          <StarOutlineRoundedIcon />
          </span>
      </div>
        <div style={{width:'50%',alignItems:'flex-end',backgroundColor:'white'}}>
           <div style={{textAlign:'right', paddingRight:'20px', paddingTop:'20px' }}> 
           {/* <img src={leagueLogo} style={{width:'34px', height:'34px'}}/> */}


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
  fontWeight: 'bold', }}>{teamsTable}</div>
      </div>
    
</div>
  );
}
