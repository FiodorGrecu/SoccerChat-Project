import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

  scoreSheet:{
    width: '98%',
    height: '15%',
    backgroundColor: 'black',
    margin: '1%',
    position: 'relative',
  },
  

}));

export default function StatsBody({ fixture }) {
  const classes = useStyles();


  // Charts data f
  const homeShotsOnTarget = fixture.statistics && fixture.statistics[0].statistics[0].value || 0;
  const awayShotsOnTarget = fixture.statistics && fixture.statistics[1].statistics[0].value || 0;
  
  const homeShotsOffTarget = fixture.statistics && fixture.statistics[0].statistics[1].value || 0;
  const awayShotsOffTarget = fixture.statistics && fixture.statistics[1].statistics[1].value || 0;
  
  const homeTotalShots = fixture.statistics && fixture.statistics[0].statistics[2].value || 0;
  const awayTotalShots = fixture.statistics && fixture.statistics[1].statistics[2].value || 0;
  
  const homeShotsInsideBox = fixture.statistics && fixture.statistics[0].statistics[4].value || 0;
  const awayShotsInsideBox = fixture.statistics && fixture.statistics[1].statistics[4].value || 0;
  
  const homeShotsOutsideBox = fixture.statistics && fixture.statistics[0].statistics[5].value || 0;
  const awayShotsOutsideBox = fixture.statistics && fixture.statistics[1].statistics[5].value|| 0;
 
  const homeBlockedShots = fixture.statistics && fixture.statistics[0].statistics[3].value || 0;
  const awayBlockedShots = fixture.statistics && fixture.statistics[1].statistics[3].value || 0;
  
  const homeGoalkeeperSaves = fixture.statistics && fixture.statistics[0].statistics[12].value || 0;
  const awayGoalkeeperSaves = fixture.statistics && fixture.statistics[1].statistics[12].value || 0;
  
  const homeFouls = fixture.statistics && fixture.statistics[0].statistics[6].value || 0;
  const awayFouls = fixture.statistics && fixture.statistics[1].statistics[6].value || 0;
  
  const homeYellowCards = fixture.statistics && fixture.statistics[0].statistics[10].value || 0;
  const awayYellowCards = fixture.statistics && fixture.statistics[1].statistics[10].value || 0;
  
  const homeRedCards = fixture.statistics && fixture.statistics[0].statistics[11].value || 0;
  const awayRedCards = fixture.statistics && fixture.statistics[1].statistics[11].value || 0;
  console.log(homeRedCards, awayRedCards)
  
  const homeTotalPasses = fixture.statistics && fixture.statistics[0].statistics[13].value || 0;
  const awayTotalPasses = fixture.statistics && fixture.statistics[1].statistics[13].value || 0;
  
  const homePassesAcurate = fixture.statistics && fixture.statistics[0].statistics[14].value || 0;
  const awayPassesAcurate = fixture.statistics && fixture.statistics[1].statistics[14].value || 0;
  
  const homePassesAcuracy = fixture.statistics && fixture.statistics[0].statistics[15].value.slice(0,-1);
  const awayPassesAcuracy = fixture.statistics && fixture.statistics[1].statistics[15].value.slice(0,-1);
  
  
  const homeBallPossession = fixture.statistics && fixture.statistics[0].statistics[9].value.slice(0,-1);
  const awayBallPossession = fixture.statistics && fixture.statistics[1].statistics[9].value.slice(0,-1);

  const homeCornerKicks = fixture.statistics && fixture.statistics[0].statistics[7].value || 0;
  const awayCornerKicks = fixture.statistics && fixture.statistics[1].statistics[7].value || 0;
  
  const homeOffsides = fixture.statistics && fixture.statistics[0].statistics[8].value || 0;
  const awayOffsides = fixture.statistics && fixture.statistics[1].statistics[8].value || 0;

  return (
  <div style={{width:'100%', }}>
    {/* Below here is the Stats Body component */}
    <div style={{ display:'flex', marginTop:'25px'}}>
      {/* Attacking stats */}
      <div  style={{ width:'50%',  justifyContent:'center', alignItems:'center',
              backgroundColor:'white', marginLeft:'15px', marginRight:'15px',
              marginBottom:'20px'}}>
          <div style={{ width:'100%', textAlign:'center', marginBottom:'40px'}}>
            <div style={{width:'100%', height:'35px', margin:'auto',
                    textAlign:'left',fontFamily: 'Roboto,sans-serif',
                    fontSize: '1rem', color: '#8e9cc5',fontWeight: '550',
                    paddingTop:'20px'}}>
              <span style={{paddingLeft:'20px',}}>
                Attacking Stats
              </span>
            </div>
            <hr style={{width:'100%'}}></hr>

            {/* First row and it's bar */}
            <div style={{ width:'90%', margin:'auto', }}>
              <span style={{width:'33%', float:'left', textAlign:'left',
                      fontFamily:'Roboto,sans-serif',fontSize: '0.9rem',
                      color: 'gray',fontWeight: 'bold'}}>
                {homeShotsOnTarget}
              </span>
              <span style={{width:'33%', float:'left',fontFamily:'Roboto,sans-serif',
                      fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                Shots On Target        
              </span>
              <span style={{ width:'33%',float:'right', textAlign:'right',
                      fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                      color: 'gray',fontWeight: 'bold'}}>
                {awayShotsOnTarget}
              </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeShotsOnTarget /
                  (homeShotsOnTarget + awayShotsOnTarget)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayShotsOnTarget / 
                  (homeShotsOnTarget + awayShotsOnTarget)* 100}%`,height:'20px',}}>
                </span>
            </div>

            {/* Second row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homeShotsOffTarget}
                </span>
                <span style={{width:'33%',float:'left',fontFamily:'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                    Shots Off Target
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayShotsOffTarget}
                  </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeShotsOffTarget /
                  (homeShotsOffTarget + awayShotsOffTarget)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayShotsOffTarget /
                  (homeShotsOffTarget + awayShotsOffTarget)* 100}%`,height:'20px'}}>
                </span>
            </div>

            {/* Third row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'20%', float:'left', textAlign:'left',
                        fontFamily:'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homeTotalShots}
                </span>
                <span style={{width:'60%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                          Total Shots (including blocked shots)
                </span>
                <span style={{ width:'20%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayTotalShots}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeTotalShots /
                  (homeTotalShots + awayTotalShots)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayTotalShots /
                  (homeTotalShots + awayTotalShots)* 100}%`,height:'20px'}}>
                </span>
            </div>

            {/* Fourth row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homeShotsInsideBox}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                    Shots Inside The Box
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayShotsInsideBox}    
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeShotsInsideBox /
                  (homeShotsInsideBox + awayShotsInsideBox)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayShotsInsideBox /
                  (homeShotsInsideBox + awayShotsInsideBox)* 100}%`, height:'20px'}}>
                </span>
            </div>

            {/* Fifth row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homeShotsOutsideBox}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                          Shots Outside The Box
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayShotsOutsideBox}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeShotsOutsideBox /
                  (homeShotsOutsideBox + awayShotsOutsideBox)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayShotsOutsideBox /
                  (homeShotsOutsideBox + awayShotsOutsideBox)* 100}%`,height:'20px'}}>
                </span>
            </div>
          </div>    
      </div> {/*  Parent closing div of Attacking Stats */}

      {/* Defending Stats */}
      <div  style={{ width:'50%',  justifyContent:'center', alignItems:'center',backgroundColor:'white', marginLeft:'15px', marginRight:'15px',marginBottom:'20px'}}>
          <div style={{ width:'100%', textAlign:'center', marginBottom:'40px' }}>
            <div style={{width:'100%', height:'35px', margin:'auto',
                    textAlign:'left',fontFamily: 'Roboto,sans-serif',
                    fontSize: '1rem', color: '#8e9cc5',fontWeight: '550',paddingTop:'20px'}}>
              <span style={{paddingLeft:'20px', }}>Defending Stats</span>
            </div>
            <hr style={{width:'100%'}}></hr>

            {/* First row and it's bar */}
            <div style={{ width:'90%', margin:'auto', }}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeBlockedShots}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                  Blocked Shots
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayBlockedShots}    
                  </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeBlockedShots /
                  (homeBlockedShots + awayBlockedShots)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayBlockedShots /
                  (homeBlockedShots + awayBlockedShots)* 100}%`,height:'20px'}}>
                </span>
            </div>

            {/* Second row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeGoalkeeperSaves}    
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Goalkeeper Saves
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayGoalkeeperSaves}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeGoalkeeperSaves /
                  (homeGoalkeeperSaves + awayGoalkeeperSaves)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayGoalkeeperSaves /
                  (homeGoalkeeperSaves + awayGoalkeeperSaves)* 100}%`,height:'20px'}}></span>
            </div>

            {/* Third row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'20%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeFouls}
                </span>
                <span style={{width:'60%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Fouls
                  </span>
                <span style={{ width:'20%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayFouls}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeFouls /
                  (homeFouls + awayFouls)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayFouls /
                  (homeFouls + awayFouls)* 100}%`,height:'20px'}}>
                </span>
            </div>

            {/* Fourth row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeYellowCards}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Yellow Cards
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayYellowCards}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeYellowCards /
                  (homeYellowCards + awayYellowCards)* 100}%`, marginRight:'1px'}}></span>
                <span style={{backgroundColor:'#516290', width:`${awayYellowCards /
                  (homeYellowCards + awayYellowCards)* 100}%`, height:'20px'}}></span>
            </div>

            {/* Fifth row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeRedCards }
                      {/* {homeRedCards } */}
                        </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Red Cards
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayRedCards }
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeRedCards /
                  (homeRedCards + awayRedCards)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayRedCards /
                  (homeRedCards + awayRedCards)* 100}%`,height:'20px'}}>
                </span> {/* What do I do here??? (hight fixes the issue)*/}
            </div>
          </div>    
      </div> {/*  Parent closing  div of Defending Stats */}
    </div>  {/*  Parent closing div of Attacking and Defending Stats  */} 

    <div style={{ display:'flex', marginTop:'30px'}}> {/*  Parent div of Team Play Stats and General  */}
      {/* Team Play Stats*/}
      <div  style={{ width:'50%',  justifyContent:'center', alignItems:'center',backgroundColor:'white', marginLeft:'15px', marginRight:'15px',marginBottom:'20px'}}>
          <div style={{ width:'100%', textAlign:'center', marginBottom:'40px' }}>
            <div style={{width:'100%', height:'35px', margin:'auto',
                    textAlign:'left',fontFamily: 'Roboto,sans-serif',
                    fontSize: '1rem', color: '#8e9cc5',fontWeight: '550',paddingTop:'20px'}}>
              <span style={{paddingLeft:'20px', }}>Team Play Stats</span>
            </div>
              <hr style={{width:'100%'}}></hr>
            {/* First row and it's bar */}
            <div style={{ width:'90%', margin:'auto', }}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {homeTotalPasses}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Total Passes
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayTotalPasses}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeTotalPasses /
                      (homeTotalPasses + awayTotalPasses)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayTotalPasses /
                      (homeTotalPasses + awayTotalPasses)* 100}%`,height:'20px'}}></span>
            </div>

            {/* Second row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homePassesAcurate}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                    Passes Acurate
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayPassesAcurate}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homePassesAcurate /
                      (homePassesAcurate + awayPassesAcurate)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayPassesAcurate /
                      (homePassesAcurate + awayPassesAcurate)* 100}%`,height:'20px'}}>
                </span>
            </div>

            {/* Third row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'20%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {homePassesAcuracy}
                </span>
                <span style={{width:'60%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Passes Acuracy %
                </span>
                <span style={{ width:'20%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayPassesAcuracy}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homePassesAcuracy}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayPassesAcuracy}%`,height:'20px'}}></span>
            </div>            
          </div>    
      </div> {/*  Parent closing div of Team Play Stats */}

      {/* General Stats */}
      <div  style={{ width:'50%',  justifyContent:'center', alignItems:'center',backgroundColor:'white', marginLeft:'15px', marginRight:'15px',marginBottom:'20px'}}>
          <div style={{ width:'100%', textAlign:'center', marginBottom:'40px' }}>
            <div style={{width:'100%', height:'35px', margin:'auto',
                    textAlign:'left',fontFamily: 'Roboto,sans-serif',
                    fontSize: '1rem', color: '#8e9cc5',fontWeight: '550',paddingTop:'20px'}}>
              <span style={{paddingLeft:'20px', }}>General Stats</span>
            </div>
            <hr style={{width:'100%'}}></hr>

            {/* First row and it's bar */}
            <div style={{ width:'90%', margin:'auto', }}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                   {homeBallPossession}
                    {/* {awayBallPossession} */}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                    Ball Possession %
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayBallPossession}
                    {/* {homeBallPossession} */}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeBallPossession}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290' ,width:`${awayBallPossession}%`, height:'20px',}}>
                </span>
            </div>

            {/* Second row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px'}}>
                <span style={{width:'33%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                     {homeCornerKicks}
                </span>
                <span style={{width:'33%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Corner Kicks
                </span>
                <span style={{ width:'33%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                      {awayCornerKicks}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeCornerKicks /
                      (homeCornerKicks + awayCornerKicks)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayCornerKicks /
                      (homeCornerKicks + awayCornerKicks)* 100}%`,height:'20px'}}>
                </span>
            </div>

            {/* Third row and it's bar */}
            <div style={{ width:'90%', margin:'auto', paddingTop:'20px' }}>
                <span style={{width:'20%', float:'left', textAlign:'left',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                     {homeOffsides || '0'}
                </span>
                <span style={{width:'60%', float:'left',fontFamily: 'Roboto,sans-serif',
                        fontSize: '0.9rem',color: 'gray',fontWeight: '500'}}>
                      Offsides
                </span>
                <span style={{ width:'20%',float:'right', textAlign:'right',
                        fontFamily: 'Roboto,sans-serif',fontSize: '0.9rem',
                        color: 'gray',fontWeight: 'bold'}}>
                    {awayOffsides || '0'}
                </span>
            </div>
            <div style={{width:'90%', margin:'auto',display:'flex' }}>
                <span style={{backgroundColor:'#d7dff7', width:`${homeOffsides /
                      (homeOffsides + awayOffsides)* 100}%`, marginRight:'1px'}}>
                </span>
                <span style={{backgroundColor:'#516290', width:`${awayOffsides /
                      (homeOffsides + awayOffsides)* 100}%`,height:'20px'}}>
                </span>
            </div>
          </div>    
      </div> {/*  Parent closing div of General Stats */}
    </div>  {/*  Parent closing div of Team Play Stats and General Stats  */} 

  </div>
  );
}
