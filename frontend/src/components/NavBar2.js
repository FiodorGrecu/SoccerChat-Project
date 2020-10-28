import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
// import { Gradient } from 'react-gradient';
// import { spacing } from '@material-ui/system';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  toolbar: {
    minHeight: 40,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: 'black', 

  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },

  links: {
    textAlign: 'center',
    paddingRight: theme.spacing(10),
    marginTop: theme.spacing(2),
    color: 'white', 
       
  },
  
}));




export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Typography className={classes.links} variant="h6" noWrap edge="left">
                    <Link  style={{ padding: 25,  color:"white"}} component={RouterLink} to="/home">Home</Link>
                    <Link  style={{ padding: 70,  color:"white"}} component={RouterLink} to="/fixtures">Matches</Link>
                    <Link  style={{ padding: 70,  color:"white"}} component={RouterLink} to="/game">Game</Link>
                    <Link  style={{ padding: 70,  color:"white"}} component={RouterLink} to="/scores">Scores</Link>
                    <Link  style={{ padding: 70,  color:"white"}} component={RouterLink} to="/chat">Chat</Link>

            </Typography>
            {/* <Typography className={classes.signin} variant="h8" noWrap edge="end">
                    <Link style={{ padding: 20,  color:"gray"}} component={RouterLink} to="/Login">Log In</Link>
                    <Link style={{ padding: 20,  color:"grey"}} component={RouterLink} to="/Signup">Sign Up</Link>
                  
            </Typography> */}
            <Divider className={classes.divider} orientation="vertical" />

          {/* <IconButton aria-label="search" color="inherit">
            <SearchIcon />
            <InputBase 
              placeholder="Search…"
              classes={{}}
              inputProps={{ 'aria-label': 'search' }}
            />
          </IconButton> */}
          {/* <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
