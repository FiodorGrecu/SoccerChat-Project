import React from 'react';
import './NavBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import { Box } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
    color: 'white'
  },
  toolbar: {
    minHeight: 130,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(1),
    backgroundColor: '#D61400', 
    background: '-webkit-linear-gradient(top,  rgba(0,0,0,0.65) 9%,rgba(0,0,0,0.65) 14%,rgba(0,0,0,0.09) 88%,rgba(0,0,0,0) 100%)', /* Chrome10-25,Safari5.1-6 */
       
  },

  appdiscription: {
    alignItems: 'flex-start',
    color: 'rgb(208, 202, 255)',
    marginTop: -80,
    alignSelf: 'flex-start',
    marginRight: -300,
  },

  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    color: 'white',
    fontWeight:"bold"
  },

  links: {
    textAlign: 'left',
    paddingRight: theme.spacing(7),
    marginTop: theme.spacing(2),
    color: 'white',    
  },

  signin: {
    color: 'black',    
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(2)
    
  },

 
  
}));




export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <AppBar position="static">
        
        <Toolbar className={classes.toolbar}>
          <Box className={classes.appdiscription}>   
          <Typography>
              Scores Soccer Results Standings and Chat
          </Typography>   
          </Box>

          <IconButton  style={{ padding: 5,  color:"white" }}>
            <SportsSoccerIcon className={"BarIcon"} />            
          </IconButton>

            <Typography className={classes.title} variant="h3" noWrap>
              <RouterLink style={{textDecoration:"none"}} className={'TextLogo'} to={'/fixtures'}>
                <p className={'TextLogo'}>SoccerChat</p>
              </RouterLink>
            </Typography>

            <Typography className={classes.signin} variant="h8" noWrap edge="end">
                    {/* <Link style={{ padding: 20,  color:"gray"}} component={RouterLink} to="/login">Log In</Link> */}
                    {/* <Link style={{ padding: 20,  color:"grey"}} component={RouterLink} to="/signup">Sign Up</Link>  */}
                     {/* <IconButton style={{fontSize:"large", color:"gray"}}>  */}
            </Typography>
            {/* <Divider className={classes.divider} orientation="vertical" /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
