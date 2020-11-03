import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { games as fixtures } from "./teams";
import { Box, Grid } from '@material-ui/core';
import { spacing } from '@material-ui/system';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(170),
    //   width: theme.spacing(100),
      height: theme.spacing(16),
      textAlign: 'center',
    //   backgroundColor: '#F5F5F5',
    },
    
  },
  paper: {
        width: theme.spacing(90),
        height: theme.spacing(20),
        padding: 30,
        marginRight: (20),
        textAlign: 'center',
        backgroundColor: "#F0E4C8"
    },
    box: {
        padding: 150,
        paddingLeft: 290,
        
    }
   
}));

export default function SimplePaper() {
  const classes = useStyles();

  const output = fixtures.map(fixture =>(
      <React.Fragment className={classes.reactFragment}>
          <Box className={classes.box}>
          <Grid>
              <Link>
                <Paper elevation={3} className={classes.paper}> {  fixture.home.name  }
                                        <span style={{marginLeft:40, marginRight:40}}>{"  VS   "}</span> 
                                       {  fixture.away.name  }
                </Paper>                 
              </Link>
          </Grid>
          <Grid>
              <Link>
                <Paper elevation={3} className={classes.paper}> 
                        {  fixture.home.name  } 
                        <span style={{marginLeft:40, marginRight:40}}>{"  VS   "}</span> 
                        {  fixture.away.name  }         
                </Paper>                 
              </Link>
          </Grid>
          </Box>
      </React.Fragment>
  ));

  return (
    <div className={classes.root}>
        {output}
      {/* <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} /> */}
    </div>
  );
}






// import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import {games as fixtures} from "./teams";
// import { Link } from 'react-router-dom';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(4),
//     margin: theme.spacing(2),
//     width: theme.spacing(70),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     backgroundColor: '#F5F5F5',
//     fontWeight: "bold",
//   },
// }));

// export default function CenteredGrid() {
//   const classes = useStyles();

//   const output = fixtures.map(fixture => (
//    <React.Fragment>

//         <Grid item xs={6} >
//             <Link > 
//                 <Paper className={classes.paper} >{fixture.home.name }</Paper>
//             </Link>
//         </Grid>


//    </React.Fragment>
//   ));
  
    

//   return (
//     <Grid className={classes.root}>
//         <Grid container spacing={1}>

//         {output}
//         </Grid>
//     </Grid>
//   );
// }
