import { Box, Button, Link, Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        flexDirection: "column",
    },
    paper: {
        padding: theme.spacing(5),
        alignItems: 'center',
        justifyContent: "center",
        width: 350,
        height: 450,
        backgroundColor: '#E8E8E8',
    },
    box: {
        padding: theme.spacing(5),
        textAlign: "center",
        border: 30
    },
    or: {
        fontSize: 14,
        color: 'blue'
    },
    button: {
        color: 'blue', /* the originalcolor of the theme 4° */
        color: 'blue',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: '6px 32px',
        backgroundColor: "#1A91DA",
    },
    signin: {
        fontSize: 30,
        fontFamily: 'Roboto,sans-serif',
        fontWeight:'bold'
    },
    avatar: {
        margin: theme.spacing(2),
        marginLeft: 109,
        backgroundColor: theme.palette.secondary.main,
        justifyContent: 'center',
        fontSize: 40,
    },
}));


function LogIn({ setUser, setShowLogin }) {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    console.log(setUser, setShowLogin)
    async function sendLogin() {
        const data = JSON.stringify({ 'username': username, 'password': password });
        const configs = {
            method: "POST",
            body: data,
            headers: { "Content-Type": "application/json" }
        };

        const response = await fetch("http://localhost:5000/api/login", configs);
        const userData = await response.json();

        console.log(userData);
        setIsError(false);
        if (userData.session_id) {
            sessionStorage.setItem("session_id", JSON.stringify(userData));
            setUser(userData);
            // can access these values any time in our app
            // through value = sessionStorage.getItem("session_id"); function
        } else {
            setIsError(true);
            console.log(isError)
            // show the user a message saying login failed
            // will involve saving an error state
            // and having a <p> tag render if there's an error
            // something like loginError && <p>Login error</p>
            // sessionStorage.setState(userData.session_id)
        }
    }
    function _onSubmit(e) {
        e.preventDefault();
        sendLogin();
        console.log("worked")
    }

    return (
        <React.Fragment justify="center">
            <Box className={classes.box}>
                <Paper elevation={10} className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    </Avatar>
                    <h3 className={classes.signin} > Sign In </h3>
                    <form onSubmit={_onSubmit}>
                        <Input id="username" onChange={e => setUsername(e.target.value)}
                            placeholder="Username or Email"
                        ></Input>
                        <br />
                        <Input id="password" type="password"
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                            label="Outlined" variant="outlined">
                        </Input>
                        <br />
                        <Button type={"submit"} className={classes.button} 
                            onClick={e => sendLogin()} color="#1A91DA" 
                            variant="contained">Log In
                        </Button>
                    {isError && <p>Invalid Password or Username. Please try again.</p>}
                    </form>
                    <br></br>
                    <p className={classes.or}>or</p>
                    <p style={{ color: grey[600], paddingRight:"5px" }}>
                        If you are new user? 
                        <Link component={RouterLink} 
                            onClick={e => setShowLogin(false)}>
                                <span   style={{paddingRight:"5px" }}></span>Sign Up Here
                        </Link>
                    </p>
                </Paper>
            </Box>
        </React.Fragment>
    );
}
export default LogIn;