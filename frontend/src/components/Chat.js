import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { MdSend } from "react-icons/md";
// import Divider from 'material-ui/core/Divider';
// import Typography from 'material-ui/core/Typography';
import LogIn from './LogIn';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'aliceblue',
    width: '100%',
  },

  button: {
    margin: theme.spacing(2),
    marginLeft: 1050,
    
    
  },
  textbox: {
    marginTop: 10,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    paddingTop: 10,
    marginLeft: 150,
    
    width: 1000,
    height: 50,
    // background: "transparent 90%"
  }

}));

export default function Chat() {
  const classes = useStyles();

  const gameId = 435;
  

  function logOut() {
    sessionStorage.clear();
  }

  const session_id = sessionStorage.getItem("session_id");
//   const [textInput, setTextInput] = useState("");
//   const [inputs, setInputs] = useState([]); 
  if (session_id) {     
    return (
      <div>
        <button className={classes.signOutButton} onClick={logOut} >Log Out</button><br/>
        <input  className={classes.textbox}>         
        </input>
        <br></br>
      {/* <input onChange={event => setTextInput(event.target.value)}/> */}

      {/* <p>{textInput}</p> */}
      <div className={classes.button}>
        <Button
            edge="end"
            variant="contained"
            color="primary"           
            endIcon={<MdSend>send</MdSend>}
            >   
        </Button>
        
      </div>   
    </div>
    );
  } else {
    return <LogIn/>
  }

}
