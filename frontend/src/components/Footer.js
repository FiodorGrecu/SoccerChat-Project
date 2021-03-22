import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        SoccerChat
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:"aliceblue"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    paddingLeft: theme.spacing(14, 2),
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          {/* Sticky footer */}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {/* {'Pin a footer to the bottom of the viewport.'} */}
          {/* {'The footer will move as the main element of the page grows.'} */}
        </Typography>
        {/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            <span>Contact me</span> 
            <span style={{color:'#648DAE', paddingLeft:'20px'}}>
              <Link color="inherit" href="https://twitter.com/GrecuFiodor">
                <TwitterIcon/>
              </Link>
            </span>  
            <span style={{color:'black', paddingLeft:'10px'}}>
              <Link color="inherit" href="https://github.com/FiodorGrecu">
                <GitHubIcon/>
              </Link>
            </span>  
            <span style={{color:'#0B66C2', paddingLeft:'10px'}}>
              <Link color="inherit" href="https://www.linkedin.com/in/fiodorgrecu/">
                <LinkedInIcon/>
              </Link>
            </span>  
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}