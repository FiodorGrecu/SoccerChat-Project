import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { Link } from '@material-ui/core';


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
        
        <Link><p style={{paddingRight:'20px', }}>Summary</p></Link>

        <Link ><p style={{paddingRight:'20px', hover:{color:'red'} }}>Standings</p></Link>
        <Link><p style={{paddingRight:'20px', textTransform:'uppercase'}}>Live</p></Link>
        <Link><p style={{paddingRight:'20px' }}>Fixtures</p></Link>
        <Link><p style={{paddingRight:'20px' }}>Results</p></Link>
      </div> 
    </div>

    <div style={{display: "flex" ,}}>
      <div style={{ textAlign:'left', display: "flex", width:'209px', height:'63px', 
            backgroundColor:'grey',paddingTop:'10px',paddingLeft:'10px',
            margin: '40px', marginLeft:'70px', borderRadius:'2%',
            textTransform:'uppercase', }}>
          <span style={{ width:"100%",}}>Standing Type</span>
          <div style={{display: "flex"}}>
          <select style={{ width:"100%", height:"50%", }}>
            <option value='topScorers'>General Standings</option> 
            <option value='Standings'>Standings</option> 
            <option value='liveStandings'>Top Scorers</option> 
          </select>
          </div>
      </div>
      <div style={{display: "flex", width:'209px', height:'63px', 
            backgroundColor:'grey',paddingTop:'10px',paddingLeft:'10px', 
            margin: '40px'}}>
              Season
          <select >
            <option value='topScorers_2020'>2020-2021</option> 
            <option value='topScorers_2019'>2019-2020</option> 
            <option value='topScorers_2018'>2018-2019</option> 
            <option value='topScorers_2017'>2017-2018</option> 
            <option value='topScorers_2016'>2016-2017</option> 
            <option value='topScorers_2015'>2015-2016</option> 
            <option value='topScorers_2014'>2014-2015</option> 
            <option value='topScorers_2013'>2013-2014</option> 
            <option value='topScorers_2012'>2012-2013</option> 
            <option value='topScorers_2011'>2011-2012</option> 
            <option value='topScorers_2010'>2010-2011</option> 
            
          </select>
      </div>
    </div>

    <div style={{display: "flex", }}>
      <div style={{ display:'flex' ,width:'100%',
            background:'white', textAlign:'left',
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
