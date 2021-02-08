import React, { useState, useEffect } from 'react';
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

  const [fixtures, setFixtures] = useState([]);

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

function fixDigit(val){
  return val.toString().length === 1 ? "0" + val : val;
}
console.log(`${year}-${fixDigit(month)}-${fixDigit(day)}`)

  useEffect(() => {

    async function getFixtures() {
  // In order to change the fetch to the desire time-frame change the dates
      // const response = await fetch(`http://127.0.0.1:5000/api/upcoming_fixt/${39}/${2020}/${2020-09-12}/${2021-01-21}`);
      const response = await fetch(`http://127.0.0.1:5000/api/past_fixt/39/2020/2020-09-12/${year}-${fixDigit(month)}-${fixDigit(day)}`);
      const data =  await response.json();
      console.log(data)
      setFixtures(data.fixtures.reverse())
    }
    getFixtures();
  }, [] )

  const outputAllFixtures = fixtures.map(round =>(
    <div>
        <div style={{textAlign:'center', paddingLeft:'120px', fontSize:'1.1rem',
                color:'grey', fontFamily:'Roboto,sans-serif', fontWeight:'bold' }}>
          {round.round.replace("Regular Season", "Round")}
        </div>
      {round.games.map(fixture =>(
        <div className={classes.reactFragment} style={{width:'100%', }}>
        
        <Link to={`/game/${fixture.fixture_id}`}>
        <Paper style={{width: '100%', height:'50px', display:'flex',}} >
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
          <div style={{width:'10%', display:'flex',}}>
          <div style={{width:'90%', display:'flex', }}>
              <div style={{width:'50%', display:'flex',  textAlign:'right', 
                    paddingTop:'10px',  }}>
                <p style={{textAlign:'right', fontSize:'16px', 
                    fontFamily:'Roboto,sans-serif', fontWeight:'600',paddingLeft:'70%' }}> 
                    { fixture.goals.home } 
                </p>
              </div>

              <div style={{width:'12%',display:'flex', textAlign:'center', 
                      position:'relative'}}>
                {fixture.fixture.status.short === 'PST' ? 
                <span style={{fontFamily:'Helvetica',
                fontWeight:'600',paddingTop:'8px', position:'absolute', 
                left:'50%', top:'30%', transform: 'translate(-60%, -40%)', 
                fontStyle:'italic', color:'grey' }}> 
                    Postponed 
                </span> 
                      : 
                <p style={{textAlign:'right', fontSize:'20px', fontFamily:'Helvetica', 
                    fontWeight:'600', paddingTop:'8px', paddingRight:'40px', }}>
                   - 
                </p>}
            </div>
              <div style={{width:'50%',display:'flex',}}>
                <p style={{display:'inline-block', fontSize:'16px', fontFamily:'Roboto,sans-serif', 
                    fontWeight:'600',textAlign:'left', paddingTop:'10px',paddingRight:'7%' }}>
                      { fixture.goals.away }
                </p>
              </div>
              </div>


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
      ))}
    </div>
  ));
  return (
    <div style={{ backgroundColor: 'aliceblue'}}>
  <LeagueBar />
        <div style={{padding:'2%', marginTop:'25px' }}>
          <div  style={{backgroundColor:'white',height:'50px',paddingTop:'20px',
                    paddingLeft:'15px',fontSize:'1rem',
                    color:'#161d35', fontFamily:'Roboto,sans-serif', 
                    fontWeight:'bold',}}>
              Main
          </div>
          {outputAllFixtures}
        </div>
    </div>
  );
}
