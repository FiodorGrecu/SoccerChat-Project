import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { games as fixtures } from "./teams";
import { Box, Grid } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
// import { typography } from '@material-ui/system';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // backgroundColor: 'rgb(238, 238, 240)',          /
    
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(10),
      height: theme.spacing(16),
      textAlign: 'center',
      // backgroundColor: 'rgb(238, 238, 240)',

    },
    
  },
  paper: {
        width: theme.spacing(130),
        height: theme.spacing(5),
        padding: 60,
        paddingRight: 85,
        marginRight: (20),
      
        marginTop: theme.spacing(0.5),
        textAlign: 'center',
        fontWeight: (500),
        fontSize: theme.spacing(2),
        backgroundColor: "#F0E4C8"
    },
    box: {
        padding: 10,
        paddingLeft: 200,
        marginTop: 10,    
    },
    logo: {
        padding: 10,

    },
   
}));

export default function SimplePaper() {
  const classes = useStyles();

  const output = fixtures.map(fixture =>(
      <React.Fragment className={classes.reactFragment}>
          <Box className={classes.box} >
          <p>Calendar</p>
          <Grid container spacing={5}>
            <Grid sitem xs={12}>
                <Link>
                  <Paper elevation={3} className={classes.paper}> {  fixture.home.name  }
                                          <span className={classes.logo}>{"(Logo)"}</span>
                                          <span style={{marginLeft:40, marginRight:40}}>{"  Time   "}</span>
                                          <span className={classes.logo}>{"(Logo)"}</span>
                                        {  fixture.away.name  }
                  </Paper>                 
                </Link>
            </Grid>
            <Grid>
                <Link>
                  <Paper elevation={3} className={classes.paper}> 
                          {  fixture.home.name  } 
                          <span className={classes.logo}>{"(Logo)"}</span>
                          <span style={{marginLeft:40, marginRight:40}}>{"  Time   "}</span> 
                          <span className={classes.logo}>{"(Logo)"}</span>
                          {  fixture.away.name  }         
                  </Paper>                 
                </Link>
            </Grid>
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
