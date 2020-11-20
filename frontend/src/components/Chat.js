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
    margin: theme.spacing(1),
  },
  
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  session_id = sessionStorage.getItem("session_id");

  return (
    <div>
      
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
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
