import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles({ 
  
});


export default function PLTable() {
  const classes = useStyles();

  const [teams, setTeams] = useState([]);
  const [season, setSeason] = useState("2020");
  // const [season, setSeason] = useState("2020");


  useEffect( () => {
    async function getPLTable() {
      const response = await fetch(`http://localhost:5000/api/table/${season}/${39}`)
      const data = await response.json();
      console.log(data);
      setTeams(data.response[0] || []);
    }  
    getPLTable();
  }, [season]);



 const numberRankColor = {'1':'#23D24A', '2':'#23D24A', '3':'#23D24A', '4':'#23D24A', 
               '5':'#8B91A0', '18':'#E72652', '19':'#E72652', '20':'#E72652'};


  function Form({formString}) {
    const letterColor = {'W':'#23D24A', 'D': '#8B91A0', 'L':'#E72652'};
    const formBackground = [...formString].map(letter => (
      <span style={{backgroundColor:letterColor[letter], margin:'2px',
                    borderRadius:'3px', fontSize:'14px', padding:'2px'}}>{letter}</span>
    ));

  
   
   
    // const numberBackground = [...rankString].map(number => (
      // <span style={{backgroundColor:letterColor[number], margin:'1px',
      //               borderRadius:'3px', width:'5px', height:'5px'}}>{number}</span>
    

    return (
    
      <div style={{display:'flex'}}>
        <span style={{paddingLeft:'20px', paddingTop:'5px', width:'170px',
                   color:'white', fontSize:'0.6rem',
                  justifyContent:'center',}}>
          {formBackground}
        </span>
      </div>
    )
  } 
  const teamsTable =  teams.league && teams.league.standings[0].map(team => (
    <div >
    <div style={{width:'100%', display:'flex',}}>
          <span style={{paddingLeft:'10px',width:'34px', backgroundColor: numberRankColor[team.rank] }}>{team.rank}</span>
          {/* <span style={{paddingLeft:'10px',width:'34px', }}><RankColor/></span> */}
          <span style={{paddingLeft:'10px',width:'290px',}}>
            <span style={{paddingRight:'5px'}}>
            <img src={ team.team.logo } 
                  style={{width:28, height:28, 
                }}/>
            </span >{team.team.name}
          </span>
          <span style={{paddingLeft:'40px',width:'98px',backgroundColor:'pin'}}>{team.all.played}</span>
          <span style={{paddingLeft:'40px',width:'98px',backgroundColor:'lightblu'}}>{team.all.win}</span>
          <span style={{paddingLeft:'40px',width:'98px',backgroundColor:'lightgree'}}>{team.all.draw}</span>
          <span style={{paddingLeft:'40px',width:'98px',backgroundColor:'lightgre'}}>{team.all.lose}</span>
          <span style={{paddingLeft:'40px',width:'98px',backgroundColor:'aqu'}}>{team.goalsDiff}</span>
          <span style={{paddingLeft:'40px',width:'98px',backgroundColor:'pin'}}>{team.points}</span>
          <Form formString={team.form} />

          <StarOutlineRoundedIcon  />
        </div>
      
        <hr style={{width:'100%'}}/>
  </div>
  ))
const descriptionChampions = teams.league && teams.league.description;

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
              <option component={RouterLink} to="/topscorers" value='liveStandings'>Top Scorers</option> 
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
          <select onChange={e => (setSeason(e.target.value)) } style={{ width:"95%", fontWeight:'bold',
                    color:'#0094e5', border:'none'}}>
            <option value='2020'>2020/2021</option> 
            <option value='2019'>2019/2020</option> 
            <option value='2018'>2018/2019</option> 
            <option value='2017'>2017/2018</option> 
            <option value='2016'>2016/2017</option> 
            <option value='2015'>2015/2016</option> 
            <option value='2014'>2014/2015</option> 
            <option value='2013'>2013/2014</option> 
            <option value='2012'>2012/2013</option> 
            <option value='2011'>2011/2012</option> 
            <option value='2010'>2010/2011</option> 
          </select>
        </div>  
      </div>
    </div>

    <div style={{display: "flex", }}>
      <div style={{ display:'flex' ,width:'100%',
            background:'white', textAlign:'left',
            marginLeft:'5%', marginRight:'5%', marginBottom:'1px', 
            paddingTop:'10px', fontSize: '1rem', paddingLeft:'20px', paddingTop:'13px',
            fontFamily:'Roboto,sans-serif',color: 'grey',fontWeight: 'bold', }}>       
        <p style={{ paddingLeft:'10px',width:'3%' }}>#</p>
        <p style={{ paddingLeft:'10px',width:'290px',backgroundColor:'gree' }}>Team</p>
        <p style={{ width:'98px',backgroundColor:'pin', paddingLeft:'25px' }}>Played</p>
        <p style={{ width:'98px',backgroundColor:'lightblu', paddingLeft:'20px'}}>Won</p>
        <p style={{ width:'98px',backgroundColor:'gree', paddingLeft:'20px' }}>Drawn</p>
        <p style={{ width:'98px',backgroundColor:'lightgree', paddingLeft:'10px' }}>Lost</p>
        <p style={{ width:'98px',backgroundColor:'gol'}}>Goals</p>
        <p style={{ width:'128px',backgroundColor:'#0094e' }}>Points</p>
        <p style={{ width:'153px' ,backgroundColor:'lightgree', paddingLeft:'20px'}}>Last 5</p>
      </div> 
    </div>
    <div style={{  marginLeft:'5%', marginRight:'5%', color:'#516290', backgroundColor:'white' }}>
      <div style={{fontSize: '0.9rem', paddingLeft:'20px',paddingRight:'20px', paddingTop:'13px',
            fontFamily:'Roboto,sans-serif',color: '#8e9cc5',
            fontWeight: 'bold', }}>
            {teamsTable}
      </div>
    </div>
      <div  style={{ backgroundColor:''}}>
        <div style={{display:'flex'}}>
          <div style={{backgroundColor:'#0094E5', width:'20px', 
              height:'20px', borderRadius:'2px',marginLeft:'67px',marginTop:'10px'}}>             
          </div>
          <span style={{paddingLeft:'30px',marginTop:'10px',
                      fontFamily:'Roboto,sans-serif',color: '#8e9cc5',fontWeight: 'bold'}}>
              {teams.league ? teams.league.standings[0][0].description : 'Team promotion'}</span>
        </div>
        <div style={{display:'flex'}}>
          <div style={{backgroundColor:'#1175A8', width:'20px', 
              height:'20px', borderRadius:'2px',marginLeft:'67px',marginTop:'10px'}}>             
          </div>
          <span style={{paddingLeft:'30px',marginTop:'10px',
                      fontFamily:'Roboto,sans-serif',color: '#8e9cc5',fontWeight: 'bold'}}>
              {teams.league ? teams.league.standings[0][4].description : 'Team promotion'}</span>
        </div>
        <div style={{display:'flex'}}>
          <div style={{backgroundColor:'#9E1F3E', width:'20px', 
              height:'20px', borderRadius:'2px',marginLeft:'67px',marginTop:'10px'}}>             
          </div>
          <span style={{paddingLeft:'30px',marginTop:'10px',
                      fontFamily:'Roboto,sans-serif',color: '#8e9cc5',fontWeight: 'bold'}}>
              {teams.league ? teams.league.standings[0][17].description : 'Team promotion'}</span>
        </div>
      </div>     
</div>
  );
}
