// import { responsiveFontSizes } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Background_pic from '/Users/Work/Desktop/MyProject/frontend/public/background.png';

const useStyles = makeStyles((theme) => ({

    root: {
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    headerText: {
        layout: 'flex',
        color: 'white',
        fontFamily: 'Roboto',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 530,
        // marginTop: 400,
    }
  
  }));
  


export default function HomePage() {

    const classes = useStyles();
    
    return (
        <div className={classes.headerText}>
            <h1 >Premier League</h1>
            {/* <img style={{backgroundColor: 'transparent'}} src={Background_pic} className="Background" alt="Stadium picture" /> */}
        </div>
    )
};