import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    title: {
        alignSelf: 'center'
    }
    

    
  }));



export default function HomePage() {
    const classes = useStyles();
    return (
        <div>
            <h1 >Welcome to Premier League</h1>
            
        </div>
    );
}