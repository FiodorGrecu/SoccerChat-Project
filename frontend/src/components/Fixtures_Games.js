import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { games as fixtures } from "./teams";
import { Box, Divider, Grid } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
// import { useState } from 'react';
// import { typography } from '@material-ui/system';




const useStyles = makeStyles((theme) => ({

  root: {
    // display: 'flex',
    // flexWrap: 'no-wrap',        
    '& > *': {
      // margin: ,
      // justifyContent: 'center',
      // paddingTop: theme.spacing(1),
      // width: theme.spacing(11),
      // height: theme.spacing(10),
      // textAlign: 'center',
      // backgroundColor: 'rgb(238, 238, 240)',

    },
    
  },
  paper: {
        width: theme.spacing(100),
        height: theme.spacing(5),
        padding: theme.spacing(1),
        paddingRight: theme.spacing(2),
        marginRight: theme.spacing(1),
        color: '#525252',
        marginTop: theme.spacing(1),
        textAlign: 'center',
        fontWeight: (500),
        fontSize: theme.spacing(2),
        fontFamily: "Helvetica",
        backgroundColor: "alicebue"
    },
    box: {
        paddingTop: theme.spacing(1.4),
        padding: theme.spacing(1.4),
        // padding: 10,
        // paddingLeft:220,
        paddingLeft:theme.spacing(30),
        marginTop: theme.spacing(-2.3),    
    },
    goalsHomeTeam: {
      // paddingLeft:110,
      paddingLeft: theme.spacing(20),
      // alignSelf: 'flex-end',
      paddingRight: theme.spacing(2),
      // paddingRight:10,
    },
    goalsAwayTeam:{
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(20),
    },
    // reactFragment: {
    //   paddingRight:110,
    // }
  
   
}));



export default function SimplePaper() {
  const classes = useStyles();

  // api/last/<num_games>

  const [fixtures, setFixtures] = useState([]);
  const numberGames = 5;

  useEffect(() => {

    async function getFixtures() {
      const response = await fetch(`http://localhost:5000/api/last/${numberGames}`);
      const data =  await response.json();
      console.log(data.fixtures.api.fixtures)
      setFixtures(data.fixtures.api.fixtures)
    }
    getFixtures();
  }, [] )

  
  const output = fixtures.map(fixture =>(
    
    <React.Fragment className={classes.reactFragment}><hr width='100%'/>
        <div style={{width: '100%', height:'50px',  backgroundColor:'gray', display:'flex',}} >
          <div style={{width: '50%',  backgroundColor:'green', textAlign:'center', paddingTop:'10px', paddingLeft:'30%'}}>
            <p style={{display:'inline-block', paddingRight:'10px', fontSize:'1rem', color:'grey'}}>{ fixture.homeTeam.team_name }</p>
            <img src={ fixture.homeTeam.logo } style={{width:26, height:26, display:'inline-block'}}/>
            <p style={{display:'inline-block', paddingLeft:'25%', fontSize:'16px', fontFamily:'Helvetica', fontWeight:'500'}}>{ fixture.goalsHomeTeam }</p>
          </div>
          <div style={{width:'10%',backgroundColor:'grey',display:'flex'}}>
            <div></div>
            <div></div>
          </div>
          <div style={{width: '50%',  backgroundColor:'yellow', textAlign:'center', paddingTop:'10px',paddingRight:'30px'}}>
            <p style={{display:'inline-block', fontSize:'16px', fontFamily:'Helvetica', fontWeight:'500', paddingRight:'160px'}}>{ fixture.goalsAwayTeam }</p>
            <img src={ fixture.awayTeam.logo } style={{width:26, height:26, display:'inline-block',}}/>
            <p style={{display:'inline-block', paddingLeft:'10px', fontSize:'1rem', color:'grey'}}>{ fixture.awayTeam.team_name }</p>
          </div>
          
        </div>
          <Box className={classes.box} >
          <Grid container spacing={1}>
                {/* <Divider/> */}
            <Grid sitem xs={3}>
              <Link to={`/game/${fixture.fixture_id}`}>
                <Paper elevation={10} className={classes.paper} style={{alignSelf: 'flex-end'}}> 
                      { fixture.homeTeam.team_name }
                      <img src={ fixture.homeTeam.logo } style={{width:26, height:26, paddingLeft:3, paddingRight:3}}/>
                      <strong className={classes.goalsHomeTeam}>{ fixture.goalsAwayTeam }</strong>
                      {/* { fixture.event_date } */}
                      {'  -  '}
                      <strong className={classes.goalsAwayTeam}>{ fixture.goalsHomeTeam }</strong>
                      <img src={ fixture.awayTeam.logo } style={{width:26, height:26, paddingLeft:3, paddingRight:3}}/>
                    { fixture.awayTeam.team_name }
                </Paper>                 
              </Link>
            </Grid>
            {/* <Grid>
                <Link>
                  <Paper elevation={3} className={classes.paper}> 
                          {  fixture.homeTeam.team_name  } 
                          <span className={fixture.logo}>{"(Logo)"}</span>
                          <span style={{marginLeft:10, marginRight:10}}>{"  Time   "}</span> 
                          <span className={fixture.logo}>{"(Logo)"}</span>
                          {  fixture.awayTeam.team_name  }         
                  </Paper>                 
                </Link>
            </Grid> */}
          </Grid>


          </Box>
      </React.Fragment>
  ));

  return (
    <div className={classes.root}>
        {output}
    </div>
  );
}
