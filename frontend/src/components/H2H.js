import React, { useState, useEffect } from 'react';
import './Game.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import StatsBar from './StatsTopBar';
import StatsTopBarUpcoming from './StatsTopBarUpcoming';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

const useStyles = makeStyles((theme) => ({

   
}));

export default function SimplePaper( {fixture} ) {
  const classes = useStyles();

  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {

    async function getFixtures() {
      const response = await fetch(`http://localhost:5000/api/h2h/${fixture.teams.home.id}/${fixture.teams.away.id}`);
      const data =  await response.json();
      console.log(data.fixtures.api.fixtures)
      setFixtures(data.fixtures.api.fixtures.reverse())
    }
    // getFixtures();

  setTimeout(getFixtures, 1000);

  }, [] )
  
  const status = fixture.fixture.status.short;
  console.log(status)

  const allH2HGames = fixtures.reverse().map(fixture =>(
    
    <div className={classes.reactFragment} style={{width:'100%', }}>
      {/* <Link to={`/game/${fixture.fixture_id}`}> */}
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
          {/* Home Team Name  */}
          <div style={{width: '40%',  textAlign:'right', paddingTop:'10px', 
               paddingRight:'5%',}}>
            <p style={{display:'inline-block', paddingRight:'10px', 
                fontSize:'1rem', color:'grey',fontFamily:'Roboto,sans-serif'}}>
              { fixture.homeTeam.team_name }
            </p>
            <img src={ fixture.homeTeam.logo } style={{width:26, height:26, 
                display:'inline-block',}}/>
          </div>
         {/* Middle part (Score)*/}
          <div style={{width:'10%', display:'flex',}}>
            <div style={{width:'50%', display:'flex',  textAlign:'right', 
                  paddingTop:'10px',  }}>
              <p style={{textAlign:'right', fontSize:'16px', 
                  fontFamily:'Roboto,sans-serif', fontWeight:'600',paddingLeft:'70%' }}>
                  { fixture.goalsHomeTeam } 
              </p>
            </div>

            <div style={{width:'12%',display:'flex'}}>
              {/* { fixture.fixture.statusShort === "NS" ? 
                <span style={{fontFamily:'Helvetica',
                fontWeight:'600',paddingTop:'8px', position:'absolute', 
                left:'50%', top:'30%', transform: 'translate(-60%, -40%)', 
                fontStyle:'italic', color:'grey' }}> 
                    Upcoming 
                </span> 
                :
                <p style={{textAlign:'right', fontSize:'20px', fontFamily:'Helvetica', 
                    fontWeight:'600', paddingTop:'8px', paddingRight:'40px', }}>
                   - 
                </p>} */}
              <p style={{textAlign:'right', fontSize:'20px', fontFamily:'Helvetica', 
                  fontWeight:'600', paddingTop:'8px', paddingRight:'40px' }}>{' - '}
              </p>
            </div>

            <div style={{width:'50%',display:'flex',}}>
              <p style={{display:'inline-block', fontSize:'16px', fontFamily:'Roboto,sans-serif', 
                  fontWeight:'600',textAlign:'left', paddingTop:'10px',paddingRight:'7%' }}>
                { fixture.goalsAwayTeam }
              </p>
            </div>
          </div>
        {/* Right Side (AwayTeam)  */}
          <div style={{width: '50%', textAlign:'left', paddingTop:'10px', 
                    paddingLeft:'5%',}}>
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
    <div style={{ }}>
    
      <div style={{padding:'2%', marginTop:'25px'}}>
        { fixtures.length > 0 ? allH2HGames : 
        <SportsSoccerIcon className={"Icon"} 
         style={{fontSize:'90px', margin:'auto', display:'flex', height:'40px',
          color:"#516290", marginTop:"70px",  textShadow:"2px 4px 6px orange", }}/>}
      </div>
    {/* <StatsBar/> */}
    {/* <StatsTopBarUpcoming/> */}
    </div>
  );
}
