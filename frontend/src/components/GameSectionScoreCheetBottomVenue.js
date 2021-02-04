import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  

}));

export default function GameSectionScoreCheetBottomVenue( {fixture} ) {
  const classes = useStyles();

  // const [fixture, setFixture] = useState({});
  const { gameNum } = useParams();

  
  const leagueLogo = fixture.league && fixture.league.logo;
  const venue = fixture.lineups && fixture.fixture.venue.name;
console.log(leagueLogo)

  return (
    <div style={{width:'100%', }} >  
        <div slyle={{display:'flex', marginBottom:'100px'}}>
            <div style={{display:'flex', width:'100%', height:'50px' ,backgroundColor:'white',}}>
              <div style={{ width:'50%', textAlign:'left', paddingTop:'10px', paddingLeft:'2%'}}>
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

