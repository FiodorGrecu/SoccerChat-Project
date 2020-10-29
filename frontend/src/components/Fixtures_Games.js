import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {games as fixtures} from "./teams";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#F5F5F5'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const output = fixtures.map(fixture => (
   <React.Fragment>

        <Grid item xs={6} >
            <Link > 
                <Paper className={classes.paper} >{fixture.home.name }</Paper>
            </Link>
        </Grid>
        <Grid item xs={6}>
            <Link >  
                <Paper className={classes.paper}>{fixture.away.name}</Paper>  
            </Link>
        </Grid>

   </React.Fragment>
  ));
  
    

  return (
    <Grid className={classes.root}>
        <Grid container spacing={3}>

        {output}
        </Grid>
      {/* <Grid container spacing={3}>
    
        <Grid item xs={6}>
          <Paper className={classes.paper}>Team1</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Team2</Paper>  
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Team1</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Team2</Paper>  
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Team1</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Team2</Paper>  
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Team1</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Team2</Paper>  
        </Grid>

      </Grid> */}
    </Grid>
  );
}
