import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Box, Divider } from "@material-ui/core";
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import './StatsTopBarUpcoming.css';



const useStyles = makeStyles((theme) => ({

  root: {
    // flexWrap: "wrap",
    justifyContent: "center ",
    // this weird symbols are the paper for some reason
    "& > *": {

    },
   
  }
}));

export default function StatsBar( {fixture} ) {
    const classes = useStyles();
  
  
    // const [fixture, setFixture] = useState({});
    const { gameNum } = useParams();
  
  const gameDate = fixture.fixture && fixture.fixture.date;

  const hometeamName = fixture.lineups && fixture.teams.home.name;
  const awayteamName = fixture.lineups && fixture.teams.away.name;

  const hometeamLogo = fixture.teams && fixture.teams.home.logo;
  const awayteamLogo = fixture.teams && fixture.teams.away.logo;
 
  return (
  
    <div  style={{backgroundColor:'aliceblue',}}>
      
        <div style={{display: "flex", }}>
           <div style={{ display:'flex' ,width:'100%',height:'60px',  }}>
        {/* Date div */}
            <div style={{width:'50%',  alignItems:'flex-start',
                  fontSize: '1rem', paddingLeft:'20px', paddingTop:'20px',
                  fontFamily:'Roboto,sans-serif',color: '#8e9cc5',
                  fontWeight: 'bold', backgroundColor:'white'}}>
              <span style={{color:'grey', paddingRight:'5px',color: '#8e9cc5'}}>
              <StarOutlineRoundedIcon />
              </span>
              <span>{new Date(gameDate).toLocaleDateString('en-US',
                     {day:'2-digit', month:'2-digit', year:'numeric'})}
              </span>
            </div> {/* End date div*/ }

            <div style={{ display:'flex' ,width:'20%', backgroundColor:'white', 
                    justifyContent:'center', paddingTop:'20px',
                    fontFamily:'Roboto,sans-serif',fontWeight:'bold'}}>
                <RouterLink style={{textDecoration:'none',}} className={"TeamName"}>
                    <span className={"TeamName"} style={{paddingRight:'5px',}}>
                      {hometeamName}
                    </span>
                  </RouterLink> 
                <span>
                    <img src={hometeamLogo} style={{width:'28px', height:'28px', }}/>
                </span>
            </div>
            <div style={{display:'flex', backgroundColor:'white', paddingTop:'8px'}}>
                <div style={{width:'45px', height:'25px', display:'flex', 
                    backgroundColor:'#d7dff7',borderRadius:'4px', 
                    margin:'9px',}}>
                    <div style={{paddingTop:'3px', paddingLeft:'6px', }}>
                    {new Date(gameDate).toLocaleTimeString('en-GB', 
                            {hour:'2-digit', minute:'2-digit'})}
                    </div>
                </div>
          </div>
            
            <div style={{ display:'flex' ,width:'20%', backgroundColor:'white',paddingTop:'20px',
                    fontFamily:'Roboto,sans-serif',fontWeight:'bold', justifyContent:'center',}}>
                <span>
                    <img src={awayteamLogo} style={{width:'28px', height:'28px'}}/>
                </span>
                <RouterLink style={{textDecoration:'none',}} className={"TeamName"}>
                    <span className={"TeamName"} style={{paddingLeft:'5px',}}>
                      {awayteamName}
                    </span>
                  </RouterLink> 
            </div>

            {/* Half time score div div */}
            <div style={{width:'50%',alignItems:'flex-end',backgroundColor:'white', }}>
              
            </div> {/* End Half time score div */}
          </div>
        </div>
        <div style={{display: "flex",  }}>
          
        <div className={"BarLinks"}  style={{paddingLeft:'50px', display:'flex' ,width:'100%',
               justifyContent:'flex-end', paddingTop:'15px', marginTop:'1px',
               fontSize: '1rem', paddingLeft:'20px', paddingTop:'13px',
               fontFamily:'Roboto,sans-serif',color: 'grey',fontWeight: 'bold', 
               backgroundColor:'white'}}>
                 
            <RouterLink className={"BarLinks"}  to={'/fixtures'} >
              <p className={"BarLinks"} style={{paddingLeft:'10px', }}>Back</p>
            </RouterLink>
            <span style={{margin:'auto', }}></span>
            <RouterLink className={"BarLinks"}  to={`/game/${gameNum}/events`}>
              <p className={"BarLinks"} style={{paddingRight:'10px'}}>Summary</p>
            </RouterLink>
            <RouterLink to={`/game/${gameNum}/statistics`}>
              <p className={"BarLinks"} style={{paddingRight:'20px' }}>Statistics</p>
            </RouterLink>
            <RouterLink className={"BarLinks"} to={`/game/${gameNum}`}>
              <p className={"BarLinks"} className={"BarLinks"} style={{paddingRight:'20px', }}>Lineups</p>
            </RouterLink>
            <RouterLink className={"BarLinks"} to={`/game/${gameNum}/h2h`}>
              <p className={"BarLinks"} style={{paddingRight:'20px'}}>H2H</p>
            </RouterLink>
            <RouterLink className={"BarLinks"} to={`/game/${gameNum}/chat`}>
              <p className={"BarLinks"} style={{paddingRight:'20px'}}>Chat</p>
            </RouterLink>
          </div>
        </div>
    </div>
  );
}
