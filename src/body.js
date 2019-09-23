import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './userProfile.js';
import './index.css';

function Body(props){
    return(
        <div className="Body">
            <UserProfile img={props.img} username={props.username} onUsernameChange={props.onUsernameChange}/>
        </div>
    );
}

export default Body;