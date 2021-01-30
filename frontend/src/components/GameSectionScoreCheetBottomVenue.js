import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  scoreSheet:{
    // width: '100%',
    // height: '15%',
    // backgroundColor: 'black',
    // margin: '1%',
    // position: 'relative',
    
  },
  

}));

export default function GameSectionScoreCheetBottomVenue(props) {
  const classes = useStyles();


  const [fixture, setFixture] = useState({});
  const { gameNum } = useParams();

  useEffect(() => {
    async function gameDetails() {
      const response = await fetch(`http://localhost:5000/api/one_game/${gameNum}`);
      const data = await response.json();
      console.log(data);
      if (data.fixtures) {
        console.log(data.fixtures.response || null)
        setFixture(data.fixtures.response[0] || {})
      };
    }
  
    gameDetails();

  }, [] )
  
  const leagueLogo = fixture.league && fixture.league.logo;
  const venue = fixture.lineups && fixture.fixture.venue.name;

  return (
    <div style={{width:'100%', }} >  
        <div className={classes.scoreSheet} slyle={{display:'flex', marginBottom:'100px'}}>
            <div style={{display:'flex', width:'100%', height:'50px' ,backgroundColor:'white',}}>
              <div className={classes.leagueLogo} style={{ width:'50%', textAlign:'left', paddingTop:'10px', paddingLeft:'2%'}}  >
                <img src={leagueLogo} style={{width:31, height:31 }} />
              </div>
              <div style={{ width:'50%', textAlign:'right', 
                            paddingTop:'20px', paddingRight:'2%', 
                            fontFamily: 'Roboto,sans-serif',
                            fontSize: '1rem', color: '#8e9cc5',
                            fontWeight: '550'}}>
                          <p >{venue}</p>
              </div>
            </div>  
      </div> 
  </div>
  );
}

