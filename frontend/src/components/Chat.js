// import React from 'react';
import React, { Component } from 'react'

class Chat extends Component {
 constructor(props) {
    super(props);
 }
 render() {
 return (
   <div className="Chat-container">
      <div className="Chat-row">
        <div className="Chat-column">
          <div className="Chat-card">
            <div className="Chat-body">
                  <div className="Chat-title">Financial React Based Chatbot</div>
                  <div className="Chat-messages"> Message output div </div>
            </div>
            <div className="Chat-footer"> Submit button div  </div>
          </div>
        </div>
      </div>
   </div>
  );
 }
}
export default Chat;