import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

  const games = {
      
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid> */}
        <Grid item xs={5}>
          <Paper className={classes.paper}>Team1</Paper>
        </Grid>
        <Grid>
            <Paper className={classes.paper}>vs</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>Team2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Starting XI</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Substitutions</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Starting XI</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Substitutions</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
