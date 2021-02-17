
          //           Chat View


          // Chat                   Authentication
       

          //                   Login                Signup

import React, { useState } from 'react';
import LogIn from './LogIn'
import Chat from './Chat';
import SignUp from './SignUp';

export default function ChatWithAuth({gameId}) {
  const savedData = sessionStorage.getItem('session_id');
  const savedUser = JSON.parse(savedData)
  const [user, setUser] = useState(savedUser || {});
  console.log(user);

  if (user.username) {
  return (
    <div>
      <Chat user={user} setUser={setUser}  gameId={gameId}/>
    </div>
  )} else {
    return (
      <div style={{ width:"100%", display:"flex"}}>
        <LoginOrSignup  setUser={setUser}/>
      </div>
    )
  }
}

const LoginOrSignup = ({setUser}) => {
  const [showLogin, setShowLogin] = useState(true);
  console.log(setUser);
  return (
    <div style={{margin:"auto"}}>
      { showLogin ? <LogIn setUser={setUser} setShowLogin={setShowLogin}/> : 
                    <SignUp setUser={setUser} setShowLogin={setShowLogin}/> }
    </div>
  )
}
