import React, { useState } from 'react';
import { MDBIcon } from "mdbreact";
import { Box, Button, Link, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { green } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


 const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            flexDirection: "column"

        },
        paper: {
            padding: theme.spacing (5),
            margin: theme.spacing (5),
            alignItems:'center',
            justifyContent: "center",
            width: 350,
            height: 450,
            backgroundColor: "#F0E4C8",        

        },
        box: {
            padding: theme.spacing (5),
            margin: theme.spacing (5),
            alignItems:'center',
            justifyContent: "center",
            textAlign: "center", 
            paddingRight: 100,
            paddingLeft: 400,
        },
        or: {
            fontSize: 14,
            color: 'blue'
        },
        button: {
            // fontSize: 10,
            color: 'blue',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            padding: '6px 32px',
            // width: "40px",
            backgroundColor: "#1A91DA"
            

            
        },
        signin: {
           fontSize: 30, 
           fontFamily: 'Apple',          
        },
        avatar: {
            margin: theme.spacing(2),
            marginLeft: 109,
            backgroundColor: theme.palette.secondary.main,
            justifyContent: 'center',
            fontSize: 40,
          },
        }));
        
function LogIn(props) {
    const classes = useStyles();
    // const [inputCheck, setInputCheck] = useState("undefined");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // api/login/

    async function sendLogin() {
        const data = JSON.stringify({'username': username, 'password': password});
        // create & send a POST request
        const configs = {
            method: "POST",
            body: data,
            headers: {"Content-Type": "application/json"}
        };
        const response = await fetch("http://localhost:5000/api/login", configs);
        const userData = await response.json();
        // {"session_id":"9b74fea21bf01ef","username":"greg"}
        // save our session id in sessionStorage
        if (userData.session_id) {
            sessionStorage.setItem("session_id", session_id);
            // can access these values any time in our app
            // through value = sessionStorage.getItem("session_id"); function
        } else {
            // show the user a message saying login failed
            // will involve saving an error state
            // and having a <p> tag render if there's an error
            // something like loginError && <p>Login error</p>
        }
    }

    return (
        <React.Fragment justify="center">
            <Box className={classes.box}>
            <Paper elevation={10} className={classes.paper}>           
                <Avatar className={classes.avatar}>
                {/* <LockOutlinedIcon /> */}
                </Avatar>
                <h3 className={classes.signin} > Sign In </h3>
                <Input id="username" onChange={e => setUsername(e.target.value)} 
                       placeholder="Username or Email"
                >Hey</Input>
                <br/>
                <Input id="password" type="password" 
                       onChange={e => setPassword(e.target.value)} 
                       placeholder="Password"
                ></Input>
                <br/>
                <Button  className={classes.button} onClick={e => sendLogin()} color="#1A91DA" variant="contained">Log In</Button>
                <br></br>
                <Link>Forgot Password?</Link>
                <p className={classes.or}>or</p>
               <Link>Sign Up Here</Link>
            </Paper>           
            </Box>             
        </React.Fragment>
    );
}
export default LogIn;