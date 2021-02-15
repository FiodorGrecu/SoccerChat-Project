import React, { useState, useEffect } from 'react';
import './Fixture_Games.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import LeagueBar from './LeagueNameBar';


const useStyles = makeStyles((theme) => ({

  
  
   
}));



export default function SimplePaper() {
  const classes = useStyles();

  // api/last/<num_games>

  const [nextfixtures, setNextFixtures] = useState([]);
  const [lastfixtures, setLastFixtures] = useState([]);
  const numberGames = 5;
  const numberGames1 = 5;
  


  useEffect(() => {

    async function getFixtures() {
      const response = await fetch(`http://localhost:5000/api/next/${numberGames}`);
      const response1 = await fetch(`http://localhost:5000/api/last/${numberGames1}`);
      const data =  await response.json();
      const data1 =  await response1.json();
      console.log(data)
      console.log(data1)
      setNextFixtures(data.fixtures.response)
      setLastFixtures(data1.fixtures.response)
    }
    getFixtures();
  }, [] )
  
  const outputNext5 = nextfixtures.map(fixture =>(
    
    <div className={classes.reactFragment} style={{width:'100%', }}>
      <Link to={`/game/${fixture.fixture.id}`}>
        <Paper style={{width: '100%', height:'50px', display:'flex',}} >
          <span style={{color:'grey', paddingTop:'10px', paddingLeft:'10px'}}>
            <StarOutlineRoundedIcon />
          </span>
          <p style={{textAlign:'left', paddingTop:'12px', paddingLeft:'10px',
              fontSize:'1rem', color:'#ADADAD',fontFamily:'Roboto,sans-serif',
              fontWeight:'bold',}}>
              <span style={{width:'100%' , }}>
                <span style={{padding:'2px'}}>
                  {new Date(fixture.fixture.date).toLocaleDateString('en-US', 
                      {day:'2-digit', month:'2-digit', year:'numeric'})}
                </span>
              </span>
            </p>
          <div style={{width: '50%',  textAlign:'right', paddingTop:'10px', 
               paddingRight:'5%'}}>
            <p style={{display:'inline-block', paddingRight:'10px', 
                fontSize:'1rem', color:'grey',fontFamily:'Roboto,sans-serif'}}>
                  { fixture.teams.home.name }</p>
            <img src={ fixture.teams.home.logo } style={{width:26, height:26, 
                display:'inline-block',}}/>
          </div>
          <div style={{width:'70px', display:'flex', 
                backgroundColor:'#d7dff7',borderRadius:'5px', 
                margin:'10px',}}>
            <div style={{paddingTop:'5px', paddingLeft:'10px', }}>
              {new Date(fixture.fixture.date).toLocaleTimeString('en-GB', 
                      {hour:'2-digit', minute:'2-digit'})}
            </div>
          </div>
          <div style={{width: '50%', textAlign:'left', paddingTop:'10px', paddingLeft:'5%'}}>
            <img src={ fixture.teams.away.logo } style={{width:26, height:26, 
                  display:'inline-block', }}/>
            <p style={{display:'inline-block', paddingLeft:'10px', fontSize:'1rem',
                  color:'grey', fontFamily:'Roboto,sans-serif', paddingLeft:'10px' }}>
                  { fixture.teams.away.name }
            </p>
          </div> 
        </Paper>
      </Link>
      </div>
  ));
  const outputLast5 = lastfixtures.map(fixture =>(
    
    <div className={classes.reactFragment} style={{width:'100%', }}>
      <Link to={`/game/${fixture.fixture.id}`}>
        <Paper style={{width: '100%', height:'50px', display:'flex',}} >
          <span style={{color:'grey', paddingTop:'10px', paddingLeft:'10px'}}>
            <StarOutlineRoundedIcon />
          </span>
          <p style={{textAlign:'left', paddingTop:'12px', paddingLeft:'10px',
              fontSize:'1rem', color:'#ADADAD',fontFamily:'Roboto,sans-serif',
              fontWeight:'bold',}}>
              <span style={{width:'100%' , }}>
              <span style={{padding:'2px'}}>
                {new Date(fixture.fixture.date).toLocaleDateString('en-US', 
                      {day:'2-digit', month:'2-digit', year:'numeric'})}
                </span>
                </span>
                </p>
          <div style={{width: '50%',  textAlign:'right', paddingTop:'10px', 
               paddingRight:'5%'}}>
            <p style={{display:'inline-block', paddingRight:'10px', 
                fontSize:'1rem', color:'grey',fontFamily:'Roboto,sans-serif'}}>
                  { fixture.teams.home.name }</p>
            <img src={ fixture.teams.home.logo } style={{width:26, height:26, 
                display:'inline-block',}}/>
          </div>
          <div style={{width:'10%', display:'flex', }}>
            <div style={{width:'50%', display:'flex',  textAlign:'right', 
                  paddingTop:'10px',  }}>
              <p style={{textAlign:'right', fontSize:'16px', 
                  fontFamily:'Roboto,sans-serif', fontWeight:'600',paddingLeft:'70%', }}>
                {/* Home Team's Goal */}
                  { fixture.goals.home } 
              </p>
            </div>

            <div style={{width:'12%',display:'flex', textAlign:'center', position:'relative'}}>
                {fixture.fixture.status.short === 'PST' ? 
                <span style={{fontFamily:'Helvetica',
                fontWeight:'600',paddingTop:'8px', position:'absolute', 
                left:'50%', top:'30%', transform: 'translate(-60%, -40%)', 
                fontStyle:'italic', color:'grey' }}> 
                    Postponed 
                </span> 
                      : 
                <p style={{textAlign:'right', fontSize:'20px', 
                      fontFamily:'Helvetica', fontWeight:'600',
                      paddingTop:'8px', paddingRight:'40px', }}> - </p>}
            </div>

            <div style={{width:'50%',display:'flex',}}>
              <p style={{display:'inline-block', fontSize:'16px', 
                  fontFamily:'Roboto,sans-serif', fontWeight:'600',
                  textAlign:'left', paddingTop:'10px',paddingRight:'7%' }}>
                {/* Away Team's Goal */}
                  { fixture.goals.away }
              </p>
            </div>
          </div>
          <div style={{width: '50%', textAlign:'left', paddingTop:'10px', paddingLeft:'5%'}}>
            <img src={ fixture.teams.away.logo } style={{width:26, height:26, 
                  display:'inline-block', }}/>
            <p style={{display:'inline-block', paddingLeft:'10px', fontSize:'1rem',
                  color:'grey', fontFamily:'Roboto,sans-serif', paddingLeft:'10px' }}>
                  { fixture.teams.away.name }
            </p>
          </div> 
        </Paper>
      </Link>
      </div>
  ));

  return (
    <div style={{ backgroundColor: 'aliceblue'}}>
    <LeagueBar/>
        <div style={{padding:'5%'}}>
          <Paper style={{height:'50px', paddingLeft:'20px', paddingTop:'15px',
                  fontSize:'1rem', color:'grey',fontFamily:'Roboto,sans-serif',
                  fontWeight:'bold' }}>
                    Main Matches
          </Paper>
          {outputNext5}
          {/* component={RouterLink} */}
          <Link style={{textDecoration:'none'}}   to="/upcoming_fixtures" >
            <Paper style={{textAlign:'right', height:'50px', 
                    paddingRight:'20px', paddingTop:'15px',fontSize:'1rem', 
                    color:'grey',fontFamily:'Roboto,sans-serif', 
                    fontWeight:'bold' }}>
               <span>Show All</span> <span className={"Arrow"}> > </span> 
            </Paper>
          </Link>
        </div>

        <div style={{padding:'5%'}}>
          <Paper style={{height:'50px', paddingLeft:'20px', paddingTop:'15px',
                  fontSize:'1rem', color:'grey',fontFamily:'Roboto,sans-serif',
                  fontWeight:'bold' }}>
                    Main Results
          </Paper>
          {outputLast5}
          {/* component={RouterLink} */}
          <Link style={{textDecoration:'none'}} to="/past_fixtures" >
            <Paper style={{textAlign:'right', height:'50px', 
                    paddingRight:'20px', paddingTop:'15px',fontSize:'1rem', 
                    color:'grey',fontFamily:'Roboto,sans-serif', 
                    fontWeight:'bold' }}>
               <span >Show All</span> <span className={"Arrow"}> > </span> 
            </Paper>
          </Link>
        </div>
    </div>
  );
}
