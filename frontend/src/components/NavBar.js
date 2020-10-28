import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

// import InputBase from '@material-ui/core/InputBase';s
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
// import { Gradient } from 'react-gradient';
import Divider from '@material-ui/core/Divider';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
    color: 'black'
  },
  toolbar: {
    minHeight: 130,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(1),
    backgroundColor: 'red', 

  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    color: 'white',
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
          <IconButton
            edge="start"
            className={classes.menuButton}
            // color="secondary"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <IconButton  style={{ padding: 5,  color:"gray"}}>
            <SportsSoccerIcon />            
          </IconButton>

            <Typography className={classes.title} variant="h3" noWrap>
                Soccer Chat
            </Typography>
            {/* <Typography className={classes.links} variant="h6" noWrap edge="left">
                    <Link style={{ padding: 20,  color:"white"}} component={RouterLink} to="/HomePage">Home</Link>
                    <Link style={{ padding: 20,  color:"white"}} component={RouterLink} to="/Fixtures_Games">Fixtures</Link>
                    <Link style={{ padding: 20,  color:"white"}} component={RouterLink} to="/Game">Game</Link>
                    <Link style={{ padding: 20,  color:"white"}} component={RouterLink} to="/chat">Ghat</Link>

            </Typography> */}
            <Typography className={classes.signin} variant="h8" noWrap edge="end">
                    <Link style={{ padding: 20,  color:"gray"}} component={RouterLink} to="/login">Log In</Link>
                    <Link style={{ padding: 20,  color:"grey"}} component={RouterLink} to="/signup">Sign Up</Link>
                  
            </Typography>
            <Divider className={classes.divider} orientation="vertical" />

          {/* <IconButton aria-label="search" color="inherit">
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                color:"white"
                
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </IconButton> */}
          {/* <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
    // <div>
                
    // </div>
  );
}
