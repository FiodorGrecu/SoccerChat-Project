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
      // const response = await fetch(`http://127.0.0.1:5000/api/upcoming_fixt/${39}/${2020}/${2021/01/19}/${2021/06/30}`);
      const response = await fetch(`http://127.0.0.1:5000/api/upcoming_fixt/39/2020/${year}-${fixDigit(month)}-${fixDigit(day)}/2041-06-30`);
      const data =  await response.json();
      console.log(data)
      setFixtures(data.fixtures)
    }
    getFixtures();
  }, [] )


  const outputAllFixtures = fixtures.map(round =>(
    
    <div>
        <div style={{textAlign:'center', paddingLeft:'120px', fontSize:'1.1rem',
                color:'grey', fontFamily:'Roboto,sans-serif', fontWeight:'bold' }}>
          {round.round.replace("Regular Season", "Round")} 
        </div>
        {round.games.map(fixture => (
          <div className={classes.reactFragment} style={{width:'100%', }}>
          <Link style={{textDecoration:'none'}} to={`/game/${fixture.fixture.id}`}>
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
