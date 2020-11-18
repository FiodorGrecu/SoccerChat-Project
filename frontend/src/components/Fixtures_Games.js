import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { games as fixtures } from "./teams";
import { Box, Grid } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
// import { useState } from 'react';
// import { typography } from '@material-ui/system';




const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',        
    '& > *': {
      margin: theme.spacing(40),
      width: theme.spacing(10),
      height: theme.spacing(1),
      textAlign: 'center',
      // backgroundColor: 'rgb(238, 238, 240)',

    },
    
  },
  paper: {
        width: theme.spacing(88),
        height: theme.spacing(15),
        padding: 30,
        paddingRight: 1,
        marginRight: (10),
        color: '#323232',
        marginTop: 5,
        textAlign: 'center',
        fontWeight: (500),
        fontSize: theme.spacing(2),
        backgroundColor: "#F0E4C8"
    },
    box: {
        padding: 1,
        paddingLeft:10,
        marginTop: 10,    
    },
    
  
   
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
      <React.Fragment className={classes.reactFragment}>
          {/* <p>Calendar</p> */}
          <Box className={classes.box} >
          <Grid container spacing={10}>
            <Grid sitem xs={3}>
                <Link>
                  <Paper elevation={1} className={classes.paper}> 
                        { fixture.homeTeam.team_name }
                        <span>{ fixture.homeTeam.logo }</span>
                        <span>{ fixture.goalsAwayTeam }</span>
                        <span>{ fixture.event_date }</span>
                        <span>{ fixture.goalsHomeTeam }</span>
                        <span>{ fixture.awayTeam.logo }</span>
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
