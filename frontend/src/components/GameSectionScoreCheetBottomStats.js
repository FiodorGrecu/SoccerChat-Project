import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({

}));

export default function GameSectionScoreCheetBottomStats( {fixture} ) {
  const classes = useStyles();

  const { gameNum } = useParams();
  
  const homeFouls = fixture.statistics && fixture.statistics[0].statistics[6].value;
  const awayFouls = fixture.statistics && fixture.statistics[1].statistics[6].value;
  
  const homeYellowCards = fixture.statistics && fixture.statistics[0].statistics[10].value || '0'; 
  const awayYellowCards = fixture.statistics && fixture.statistics[1].statistics[10].value || '0';
  
  const homeRedCards = fixture.statistics && fixture.statistics[0].statistics[11].value || '0';
  const awayRedCards = fixture.statistics && fixture.statistics[1].statistics[11].value || '0';
 
  return (
    <div style={{width:'100%',}}>  
        <div className={classes.scoreSheet} slyle={{display:'flex', marginBottom:'100px'}}>
      <div style={{display:'flex', width:'100%', height:'50px',
            backgroundColor:'white', marginLeft:'%', marginRight:'1%'}}>
        {/* HOME Yellow Card  and Red Cards*/}
        <div style={{ width:'450px', textAlign:'left', 
                paddingTop:'5px', paddingRight:'2%', 
                fontFamily: 'Roboto,sans-serif',
                fontSize: '1rem', backgroundColor:'pink',
                fontWeight: '550', paddingLeft:'20px'}}>
              <span>Cards</span>
              <span style={{fontFamily:'Roboto,sans-serif', fontSize:'20px', 
                      paddingLeft:'10px', paddingTop:'20px',}}>
                    {homeRedCards}
              </span>
              <span style={{width:'30px', height:'20px', 
                      backgroundColor:'red', marginLeft:'10px'}}>
                <span style={{width:'20px', height:'20px',
                        borderRadius:'2px',marginLeft:'10px',}}>             
                </span>
              </span>
              <span style={{fontFamily:'Roboto,sans-serif', fontSize:'20px', paddingLeft:'10px'}}>
                    {homeYellowCards}
              </span>
              <span style={{width:'10px', height:'30px', 
                      backgroundColor:'#ffb822', marginLeft:'5px'}}>
                <span style={{width:'20px', 
                        height:'20px', borderRadius:'2px',marginLeft:'10px',}}>             
                </span>
              </span>
          </div>
    {/* Area in the middle of the Stats bottom bar  */}
          <div style={{ width:'450px', textAlign:'left', paddingTop:'5px', 
                  paddingLeft:'2%',fontFamily: 'Roboto,sans-serif',
                  fontSize: '1rem',fontWeight: '550'}} >
            <span style={{fontFamily:'Roboto,sans-serif', fontSize:'20px',paddingRight:'150px'}}>
                  {homeFouls}
            </span>
            <span style={{paddingRight:'50px'}}>Fouls</span>
            <span style={{fontFamily:'Roboto,sans-serif', fontSize:'20px',paddingLeft:'100px'}}>
                  {awayFouls}
            </span>
          </div>
    {/* AWAY Yellow Card  and Red Cards*/}
          <div style={{ width:'450px', textAlign:'right', 
                        paddingTop:'5px', paddingRight:'2%', 
                        fontFamily: 'Roboto,sans-serif',
                        fontSize: '1rem', backgroundColor:'pink',
                        fontWeight: '550', justifyContent:"flex-end",}}>
                        {/* <p >{venue}</p> */}
              <span >Cards</span>
              <span style={{fontFamily:'Roboto,sans-serif', fontSize:'20px', 
                      paddingLeft:'10px', paddingTop:'20px',}}>
                    {awayRedCards}
              </span>
              <span style={{width:'30px', height:'20px', backgroundColor:'red', 
                      marginLeft:'10px'}}>
                <span style={{width:'20px', height:'20px', borderRadius:'2px',
                      marginLeft:'10px',}}>             
                </span>
              </span>
              <span style={{fontFamily:'Roboto,sans-serif', fontSize:'20px', paddingLeft:'10px'}}>
                    {awayYellowCards}
              </span>
              <span style={{width:'10px', height:'30px', backgroundColor:'#ffb822', 
                      marginLeft:'5px'}}>
                <span style={{width:'20px', 
                        height:'20px', borderRadius:'2px',marginLeft:'10px',}}>             
                </span>
              </span>
          </div>
        </div> 
      </div> 
  </div>
  );
}

