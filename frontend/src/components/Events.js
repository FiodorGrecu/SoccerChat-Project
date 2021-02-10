import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Date from 'react-moment';
import LeagueBar from './LeagueNameBar';
import GameSectionScoreCheet from './GameSectionScoreCheet';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { FaStopwatch } from "react-icons/fa";


const useStyles = makeStyles((theme) => ({

  scoreSheet:{
    width: '98%',
    height: '15%',
    backgroundColor: 'black',
    margin: '1%',
    position: 'relative',
  },
  

}));

export default function CenteredGrid( {fixture} ) {
  const classes = useStyles();

console.log(fixture)
    function RenderEvent(event) {
        if (event.type === 'Goal') {
            return (
                <div>
                  <div >
                    {/* {event.time.elapsed}'                     */}
                    {/* <span >{event.player.name}</span>b */}
                  <div>{event.time.extra ? `${event.time.elapsed} + ${event.time.extra}` : event.time.elapsed }' </div> 

                  </div>
                  <div></div>
                   <span style={{paddingRight:'10px'}}>{event.assist.name &&`(${event.assist.name})` }</span>
                   <span style={{paddingRight:'10px'}}>
                     {event.player.name}
                   </span>
                   Goooal !!!
                  <SportsSoccerIcon style={{color:'black',paddingLeft:'5px' }}/>
                  <span style={{paddingLeft:'10px', color:'#be13aa'}}>{event.team.name}</span>
                  <hr style={{width:'96%'}}/>
                </div>
          
            )
        } else if (event.type === 'subst') {
            return (
                <div>
                  {/* <div style={{}}>{event.time.elapsed}'</div> */}
                  {/* <div>{event.time.elapsed}' </div>  */}
                  <div>{event.time.extra ? `${event.time.elapsed} + ${event.time.extra}` : event.time.elapsed }' </div> 
                  <span>
                    <span>
                    <span style={{color:'#e72652', textAlign:'right'}}><ArrowDropDownIcon/></span>
                    {event.assist.name}
                  </span>
                    <span style={{color:'#23d24a'}}><ArrowDropUpIcon/></span>
                    {event.player.name}
                    {/* <span>Arsenal</span> */}
                  <span style={{paddingLeft:'10px',color:'#be13aa'}}>{event.team.name}</span>

                   </span>
                    {/* <span style={{paddingLeft:'50px'}}>{event.team.name}</span>                   */}
                  <hr style={{width:'96%'}}/>
                    {/* <p>Substitution</p> */}
                </div>
            )
        } else if(event.type === 'Card') {
            if (event.detail === 'Yellow Card') {
              return (
                <div>
                  {/* <IoTabletPortraitOutline/> */}
                    {/* <div>{event.time.elapsed}'</div> */}
                  <div>{event.time.extra ? `${event.time.elapsed} + ${event.time.extra}` : event.time.elapsed }' </div> 

                    <span>{event.player.name}</span>
                    <span>
                      <span style={{width:'10px', height:'33px', backgroundColor:'#ffb822', marginLeft:'10px'}}>
                        <span style={{width:'20px', 
                                height:'20px', borderRadius:'2px',marginLeft:'10px',}}>             
                        </span>
                      </span>
                    </span>
                    <span style={{paddingLeft:'10px', color:'#be13aa'}}>{event.team.name}</span>

                         <hr style={{width:'96%'}}/>                    
                </div> 
              )
            } else if (event.detail === 'Red Card') {
              return (
                <div>
                  {/* <IoTabletPortraitOutline/> */}
                    {/* <div>{event.time.elapsed}'</div> */}
                  <div>{event.time.extra ? `${event.time.elapsed} + ${event.time.extra}` : event.time.elapsed }' </div> 

                    <span>{event.player.name}</span>
                    <span>
                      {/* <IoTabletPortraitOutline/> */}
                      <span style={{width:'10px', height:'33px', backgroundColor:'red', marginLeft:'10px'}}>
                      <span style={{width:'20px', 
                         height:'20px', borderRadius:'2px',marginLeft:'10px',}}>             
                      </span>
                      </span>
                    </span>
                    <span style={{paddingLeft:'10px'}}>{event.team.name}</span>
                         <hr style={{width:'96%'}}/>
                    
                </div> 
              )
            }
        } 
    }

  const events = fixture.events && fixture.events.map(RenderEvent)  
  
  return (
    <div style={{display:"flex",backgroundColor:'#EAF0F7' }} >
    {/* <SportsSoccerIcon/> */}
        <div style={{width:'100%', marginBottom:'10px'}} > 
            <div >
              <div style={{display:'flex',marginLeft:'10%',marginRight:'10%'}}>
                <div style={{width:'100%',backgroundColor:'white', 
                      textAlign:'center', 
                      fontFamily: 'Roboto,sans-serif',fontSize: '1rem', 
                      color: '#8e9cc5',fontWeight: '550', marginTop:'25px', paddingTop:'20px' }}>
                        Events  
                        <div ><FaStopwatch/></div>             
                </div> 
              </div> 
              <div style={{display:'flex',marginLeft:'10%',marginRight:'10%', marginTop:'1px'}}>
                <div style={{width:'100%', paddingTop:'20px',backgroundColor:'white', 
                        textAlign:'center',fontFamily: 'Roboto,sans-serif',
                        fontSize: '1rem', color: '#8e9cc5',
                        fontWeight: '550' }}>
                    {events}                  
                </div>
              </div>
            </div>       
          </div>
          
    </div>
    
  );
}

