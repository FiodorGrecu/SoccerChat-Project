
          //           Chat View


          // Chat                   Authentication
       

          //                   Login                Signup

import React, { useState } from 'react';
import LogIn from './LogIn'
import Chat from './Chat';
import SignUp from './SignUp';

export default function ChatWithAuth() {
  const savedData = sessionStorage.getItem('session_id');
  const savedUser = JSON.parse(savedData)
  const [user, setUser] = useState(savedUser || {});
  

  console.log(user);

  if (user.username) {
  return (
    <div>
      <Chat user={user} setUser={setUser}/>
    </div>
  )} else {
    return (
      <div>
        <LoginOrSignup setUser={setUser}/>
      </div>
    )
  }
}

const LoginOrSignup = ({setUser}) => {
  const [showLogin, setShowLogin] = useState(true);
  console.log(setUser);
  return (
    <div>
      { showLogin ? <LogIn setUser={setUser} setShowLogin={setShowLogin}/> : 
                    <SignUp setUser={setUser} setShowLogin={setShowLogin}/> }
    </div>
  )
}
