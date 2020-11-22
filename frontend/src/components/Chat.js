import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { MdSend } from "react-icons/md";
// import Divider from 'material-ui/core/Divider';
// import Typography from 'material-ui/core/Typography';



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
        <input  className={classes.textbox}>
            {/* <React.Fragment>
                <Typography>
                    {'–– D0'}
                </Typography>
            </React.Fragment> */}
        </input>
        <br></br>
      {/* <input onChange={event => setTextInput(event.target.value)}/> */}

      {/* <p>{textInput}</p> */}
          {/* <Divider></Divider> */}
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
}
