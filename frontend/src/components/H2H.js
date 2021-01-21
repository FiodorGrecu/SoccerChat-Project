import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import LeagueBar from './LeagueNameBar';
import StatsBar from './StatsTopBar';

const useStyles = makeStyles((theme) => ({

   
}));


export default function SimplePaper() {
  const classes = useStyles();

  // api/last/<num_games>

  const [fixtures, setFixtures] = useState([]);

  // const date = fixture.fixture && fixture.fixture.date;

  useEffect(() => {

    async function getFixtures() {
      const response = await fetch(`http://localhost:5000/api/h2h/${40}/${33}`);
      const data =  await response.json();
      console.log(data.fixtures.api.fixtures)
      setFixtures(data.fixtures.api.fixtures.reverse())
    }
    getFixtures();
  }, [] )


  const outputLast5 = fixtures.reverse().map(fixture =>(
    
    <div className={classes.reactFragment} style={{width:'100%', }}>
      <Link to={`/game/${fixture.fixture_id}`}>
        <Paper style={{width: '100%', height:'50px', display:'flex',}} >
          <span style={{color:'grey', paddingTop:'10px', paddingLeft:'10px'}}>
            <StarOutlineRoundedIcon />
          </span>
          <p style={{textAlign:'left', paddingTop:'12px', paddingLeft:'10px',
              fontSize:'1rem', color:'#ADADAD',fontFamily:'Roboto,sans-serif',
              fontWeight:'bold',}}>
              <span>{new Date(fixture.event_date).toLocaleDateString('en-US',
                     {day:'2-digit', month:'2-digit', year:'numeric'})}
              </span>
          </p>
          <div style={{width: '50%',  textAlign:'right', paddingTop:'10px', 
               paddingRight:'5%'}}>
            <p style={{display:'inline-block', paddingRight:'10px', 
                fontSize:'1rem', color:'grey',fontFamily:'Roboto,sans-serif'}}>
                  { fixture.homeTeam.team_name }</p>
            <img src={ fixture.homeTeam.logo } style={{width:26, height:26, 
                display:'inline-block',}}/>
          </div>
          <div style={{width:'10%', display:'flex', }}>
            <div style={{width:'50%', display:'flex',  textAlign:'right', 
                  paddingTop:'10px',  }}>
              <p style={{textAlign:'right', fontSize:'16px', 
                  fontFamily:'Roboto,sans-serif', fontWeight:'600',paddingLeft:'70%' }}>
                    {/* Home Team's Goal */}
                  { fixture.goalsHomeTeam } 
              </p>
            </div>
            <div style={{width:'12%',display:'flex'}}>
              <p style={{textAlign:'right', fontSize:'20px', fontFamily:'Helvetica', 
              fontWeight:'600', paddingTop:'8px', paddingRight:'40px' }}>{' - '}
              </p>
            </div>
            <div style={{width:'50%',display:'flex',}}>
              <p style={{display:'inline-block', fontSize:'16px', fontFamily:'Roboto,sans-serif', 
                  fontWeight:'600',textAlign:'left', paddingTop:'10px',paddingRight:'7%' }}>
                    {/* Away Team's Goal */}
                    { fixture.goalsAwayTeam }
              </p>
            </div>
          </div>
          <div style={{width: '50%', textAlign:'left', paddingTop:'10px', 
                    paddingLeft:'5%'}}>
            <img src={ fixture.awayTeam.logo } style={{width:26, height:26, 
                  display:'inline-block', }}/>
            <p style={{display:'inline-block', paddingLeft:'10px', fontSize:'1rem',
                  color:'grey', fontFamily:'Roboto,sans-serif', paddingLeft:'10px' }}>
                  { fixture.awayTeam.team_name }
            </p>
          </div> 
        </Paper>
      </Link>
      </div>
  ));
//   

  return (
    <div style={{ backgroundColor: 'aliceblue'}}>
    <StatsBar/>
        <div style={{padding:'2%', marginTop:'25px'}}>
          {outputLast5}
        </div>
    </div>
  );
}
