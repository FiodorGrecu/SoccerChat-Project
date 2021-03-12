import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({

}));

export default function LineUps({ fixture }) {
  const classes = useStyles();
  
  const hometeamCoach = fixture.lineups && fixture.lineups[0].coach.name;
  const awayteamCoach = fixture.lineups && fixture.lineups[1].coach.name;
  const homeTeamFormation = fixture.lineups && fixture.lineups[0].formation;
  const awayTeamFormation = fixture.lineups && fixture.lineups[1].formation;

  const homePlayers = fixture.lineups && fixture.lineups[0].startXI.map(player =>(
        <div className={classes.homePlayersName}> <hr width='100%'/> 
          <div style={{width:'100%', display:'flex', paddingLeft:'5%'}}>
            <circle style={{backgroundColor: "#be13aa",
                    background: 
                    '-webkit-linear-gradient(top, rgba(255,48,25,1) 0%,rgba(207,4,4,1) 58%)',
                    width: '30px',height: "30px",borderRadius: '50%',
                    display: 'inline-block',textAlign: 'center', margin: '2px', 
                    position:'relative',}}>
              <span style={{color:'white',position:'absolute',top:'50%',
                      transform:'translate(-50%, -50%)',
                      width: '90px'}}>{player.player.number}
              </span>
            </circle>
            <span style={{textAlign:'center', paddingLeft:'20px',
                    paddingTop:'10px'}}>
              {player.player.name} 
            </span>
            <br/> 
            <p style={{color:'grey', paddingLeft:'10px',paddingTop:'10px'}}>
              {player.player.pos}
            </p>
          </div>
        </div>
  ));
  const awayPlayers = fixture.lineups && fixture.lineups[1].startXI.map(player => (
    <div className={classes.awayPlayersName}> <hr width='100%'/> 
        <div style={{width:'100%', display:'flex', paddingLeft:'5%'}}>
        <circle style={{backgroundColor: "grey",width: '30px',height: "30px",
                  background: 
                  '-webkit-linear-gradient(top, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%)', 
                  borderRadius: '50%',display: 'inline-block',
                  textAlign: 'center', margin: '2px', 
                  position:'relative',}}>
          <span style={{color:'white',position: 'absolute',top: '50%',
                  transform: 'translate(-50%, -50%)',width: '90px'}}>
              {player.player.number}
          </span>
        </circle>
        <span style={{textAlign:'center', paddingLeft:'20px',paddingTop:'10px'}}>
          {player.player.name}
        </span>
          <br/>
        <p style={{color:'grey', paddingLeft:'10px',paddingTop:'10px'}}>
          {player.player.pos}
        </p>
      </div> 
    </div>
  ));

  const homeSubs = fixture.lineups && fixture.lineups[0].substitutes.map(substitutes => (
      <div className={classes.homePlayersName}> <hr width='100%'/> 
        <div style={{width:'100%', display:'flex', paddingLeft:'5%'}}>
          <circle style={{backgroundColor: "#be13aa",
                  background:
                    '-webkit-linear-gradient(top, rgba(255,48,25,1) 0%,rgba(207,4,4,1) 58%)',
                  width: '30px',height: "30px",borderRadius: '50%',
                  display: 'inline-block',textAlign: 'center', 
                  margin: '2px', position:'relative',}}>
            <span style={{color:'white',position: 'absolute',top: '50%',transform: 'translate(-50%, -50%)',
                  width: '90px'}}>
                {substitutes.player.number}
            </span>
          </circle>
          <span style={{textAlign:'center', paddingLeft:'20px',paddingTop:'10px', }}>
              {substitutes.player.name}
            </span>
              <br/>
          <p style={{color:'grey', paddingLeft:'10px',paddingTop:'10px'}}>
              {substitutes.player.pos}
          </p>
        </div>
        </div>
  ));

  const awaySubs = fixture.lineups && fixture.lineups[1].substitutes.map(substitutes => (

      <div className={classes.homePlayersName}> <hr width='100%'/> 
          <div style={{width:'100%', display:'flex', paddingLeft:'5%'}}>
            <circle style={{backgroundColor: 'grey',
                    background: '-webkit-linear-gradient(top, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%)', 
                    width: '30px',height: "30px",borderRadius: '50%',
                    display: 'inline-block',textAlign: 'center', 
                    margin: '2px', position:'relative',}}>
              <span style={{color:'white',position: 'absolute', 
                      top: '50%',transform: 'translate(-50%, -50%)',
                      width: '90px'}}>
                  {substitutes.player.number}
              </span>
            </circle>
            <span style={{textAlign:'center', paddingLeft:'20px',paddingTop:'10px'}}>
              {substitutes.player.name}
            </span>
              <br/>
            <p style={{color:'grey', paddingLeft:'10px',paddingTop:'10px'}}>
              {substitutes.player.pos}
            </p>
          </div>
        </div>
        
  ));
console.log(fixture)
  return (
              <div style={{display:'flex', marginTop:'25px'}}>
                <div style={{width:'50%', paddingTop:'0px'}}>
                  <Paper style={{color: '#516290',fontSize:'1.2rem', 
                        fontWeight:'600',paddingLeft:'5%',fontWeight:'bold', 
                        height:'60px', marginLeft:'2%',marginRight:'2%',
                        paddingTop:'20px' }}>
                    Starting Lineup
                    <span style={{paddingLeft:'5px'}}>({homeTeamFormation})</span>
                  </Paper>
                  <Paper style={{ color: '#516290',fontSize:'1rem', fontWeight:'400',
                          paddingLeft:'1%',fontWeight:'bold', margin:'2%',}}>
                    {homePlayers}
                  </Paper>
                  <div style={{display:'flex'}}>
                  <Paper className={classes.homeCoach} style={{width:'100%',
                        color: '#516290',fontSize:'1.2rem', fontWeight:'600',
                        paddingLeft:'5%', fontWeight:'bold', paddingTop:'40px', 
                        margin:'2%'}}>
                      Coach
                      <Divider/>
                    <p style={{paddingLeft: '5%',fontWeight:'bold'}}>
                      {hometeamCoach}
                    </p>
                  </Paper>
                  </div>
                  <Paper className={classes.homeSubs} 
                    style={{ color: '#516290',fontSize:'1rem', 
                      fontWeight:'400',paddingLeft:'1%',
                      fontWeight:'bold', margin:'2%',}}>
                        Substitutions
                    <p >{homeSubs}</p>
                  </Paper>
                </div> 
                <div  style={{width:'50%',}}>
                      <Paper style={{color: '#516290',fontSize:'1.2rem', 
                            fontWeight:'600',paddingLeft:'5%', fontWeight:'bold',
                             height:'60px', marginLeft:'2%', marginRight:'2%',
                             paddingTop:'20px' }}>
                        Starting Lineup
                        <span style={{paddingLeft:'5px'}}>({awayTeamFormation})</span>
                      </Paper>
                      <Paper style={{color: '#516290',fontSize:'1rem', 
                              fontWeight:'400',paddingLeft:'1%',fontWeight:'bold', 
                              margin:'2%'}}>
                        {awayPlayers}
                      </Paper>
                  <div style={{display:'flex'}}>
                    <Paper className={classes.awayCoach} style={{width:'100%',
                            color: '#516290',fontSize:'1.2rem', fontWeight:'600',
                            paddingLeft:'5%', fontWeight:'bold', paddingTop:'40px',
                             margin:'2%'}}>
                        Coach
                      <Divider/>
                      <p style={{paddingLeft: '5%',fontWeight:'bold'}}>
                        {awayteamCoach}
                      </p>
                    </Paper>
                  </div>
                  <Paper className={classes.awaySubs} 
                      style={{color: '#516290',fontSize:'1rem', fontWeight:'400',
                          paddingLeft:'1%',fontWeight:'bold', margin:'2%',}}>
                    Substitutions
                    <p>{awaySubs}</p>
                  </Paper>
                </div> 
              </div>   
  );
}

