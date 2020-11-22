import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { MdSend } from "react-icons/md";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'aliceblue'
  },

  button: {
    margin: theme.spacing(2),
  },
  textbox: {
    marginTop: 10,

    paddingTop: 10,
    marginLeft: "auto",
    
    width: 1000,
    height: 300,
    // background: "transparent 90%"
  }

}));

export default function Chat() {
  const classes = useStyles();

  const session_id = sessionStorage.getItem("session_id");
//   const [textInput, setTextInput] = useState("");
//   const [inputs, setInputs] = useState([]); 
  return (
    <div>
        <input  className={classes.textbox}/>
        <br></br>
      {/* <input onChange={event => setTextInput(event.target.value)}/> */}

      {/* <p>{textInput}</p> */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<MdSend>send</MdSend>}
      >   
      </Button>
      
    </div>
  );
}
