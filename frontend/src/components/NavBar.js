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
import { blueGrey } from '@material-ui/core/colors';
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
    minHeight: 130,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(2),
    backgroundColor: 'rgb(73, 172, 205)', 

  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },

  links: {
    textAlign: 'left',
    paddingRight: theme.spacing(7),
    marginTop: theme.spacing(2),
    color: 'white',    
  },


  signin: {
    color: 'rgb(225, 117, 205)',
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(2),

    
  },
  divider: {
    color: 'black',
  }
  
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
         
            <Typography className={classes.title} variant="h3" noWrap>
                Soccer Chat
            </Typography>
            <Typography className={classes.links} variant="h7" noWrap edge="left">
                    <a href = 'website.com/your/linked/page'className={classes.links}>Home</a>
                    <a href = 'website.com/your/linked/page'className={classes.links}>Fixtures</a>
                    <a href = 'website.com/your/linked/page'className={classes.links}>Games</a>
                    <a href = 'website.com/your/linked/page'className={classes.links}>Chat</a>                        
            </Typography>
            <Typography className={classes.signin} variant="h8" noWrap edge="end">
                    <a href = 'website.com/your/linked/page'className={classes.signin}>Log In</a>      
                    <a href = 'website.com/your/linked/page'className={classes.signin}>Sign Up</a> 
            </Typography>
            <Divider className={classes.divider} orientation="vertical" />

            {/* <Typography className={classes.title} variant="h6" noWrap>
                Soccer Chat
            </Typography>
          */}
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </IconButton>
          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}



// import React from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';


// export default function NavigationBar() {
//     return (
// <div>
//     <NavBar bg="light" expand="xl" >
//     <NavBar.Brand href="#home">React-Bootstrap</NavBar.Brand>
//     <NavBar.Toggle aria-controls="basic-navbar-nav" />
//     <NavBar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#link">Link</Nav.Link>
//         <NavDropdown title="Dropdown" id="basic-nav-dropdown">

//             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//         </Nav>
//         <Form inline>
//         <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//         <Button variant="outline-success">Search</Button>
//         </Form>
//     </NavBar.Collapse>
//     </NavBar>
// </div>
//     );
// }