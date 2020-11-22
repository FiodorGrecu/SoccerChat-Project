import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { MdSend } from "react-icons/md";
// import Chat from '.components/Chat';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'aliceblue'
  },

  button: {
    margin: theme.spacing(1),
  },
  
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  const session_id = sessionStorage.getItem("session_id");

  return (
    <div>
      
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
