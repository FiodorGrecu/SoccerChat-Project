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

  useEffect(() => {

    async function getFixtures() {
      // const response = await fetch(`http://127.0.0.1:5000/api/upcoming_fixt/${39}/${2020}/${2021/01/19}/${2021/06/30}`);
      const response = await fetch(`http://127.0.0.1:5000/api/upcoming_fixt/39/2020/2021-01-21/2021-06-30`);
      const data =  await response.json();
      console.log(data)
      setFixtures(data.fixtures.response)
    }
    getFixtures();
  }, [] )


  const outputAllFixtures = fixtures.map(fixture =>(
    
    <div className={classes.reactFragment} style={{width:'100%', }}>
      <Link to={`/game/${fixture.fixture_id}`}>
        <Paper style={{width: '100%', height:'50px', display:'flex',}} >
          {/* <div>Main</div> */}
          <span style={{color:'grey', paddingTop:'10px', paddingLeft:'10px'}}>
            <StarOutlineRoundedIcon />
          </span>
          <p style={{textAlign:'left', paddingTop:'12px', paddingLeft:'10px',
              fontSize:'1rem', color:'#ADADAD',fontFamily:'Roboto,sans-serif',
              fontWeight:'bold',}}>
                <span>{new Date(fixture.fixture.date).toLocaleDateString('en-US', 
                    {day:'2-digit', month:'2-digit', year:'numeric'})}    
                </span>
              <span style={{width:'100%' , }}>
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
          <div style={{width:'5%', display:'flex', 
                backgroundColor:'#d7dff7',borderRadius:'10px', 
                margin:'10px',}}>
            <div style={{paddingTop:'5px', paddingLeft:'10px', }}>
              {new Date(fixture.fixture.date).toLocaleTimeString('en-GB', 
                      {hour:'2-digit', minute:'2-digit'})}
            </div>


{/* 
    This is the score below but because the fixture hasn't started yet I will 
              place the time of the game scheduled. */}

              {/* <div style={{width:'50%', display:'flex',  textAlign:'right', 
                    paddingTop:'10px',  }}>
                <p style={{textAlign:'right', fontSize:'16px', 
                    fontFamily:'Roboto,sans-serif', fontWeight:'600',paddingLeft:'70%' }}>
                      Home Team's Goal
                    { fixture.goals.home } 
                </p>
              </div>
              <div style={{width:'12%',display:'flex'}}>
                  <p style={{textAlign:'right', fontSize:'20px', fontFamily:'Helvetica', 
                      fontWeight:'600', paddingTop:'8px', paddingRight:'40px' }}>{' : '}
                  </p>
              </div>
              <div style={{width:'50%',display:'flex',}}>
                <p style={{display:'inline-block', fontSize:'16px', fontFamily:'Roboto,sans-serif', 
                    fontWeight:'600',textAlign:'left', paddingTop:'10px',paddingRight:'7%' }}>
                      Away Team's Goal
                      { fixture.goals.away }
                </p>
              </div> */}
          </div>
          <div style={{width: '50%', textAlign:'left', paddingTop:'10px', 
                    paddingLeft:'5%'}}>
            <img src={ fixture.teams.away.logo } style={{width:26, height:26, 
                  display:'inline-block', }}/>
            <p style={{display:'inline-block', paddingLeft:'10px', fontSize:'1rem',
                  color:'grey', fontFamily:'Roboto,sans-serif', paddingLeft:'10px' }}>
                  { fixture.teams.away.name }
            </p>
          </div> 
      {/* <hr/> */}
        </Paper>
      </Link>
      </div>
  ));
  return (
    <div style={{ backgroundColor: 'aliceblue'}}>
    <StatsBar/>
        <div style={{padding:'2%', marginTop:'25px'}}>
        <div  style={{backgroundColor:'white',height:'50px',paddingTop:'20px',
                    paddingLeft:'15px',fontSize:'1rem',
                    color:'#161d35', fontFamily:'Roboto,sans-serif', fontWeight:'bold',}}>
              Main
          </div>
          {outputAllFixtures}
        </div>
    </div>
  );
}
