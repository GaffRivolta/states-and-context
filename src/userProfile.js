import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import UserProfileAvatar from './userProfileAvatar';
import UserProfileUserName from './userProfileUsername';
import './index.css';

function UserProfile(props){
    return(
        <div className="UserProfile">
            <UserProfileAvatar img={props.img}/>
            <UserProfileUserName username={props.username} onUsernameChange={props.onUsernameChange}/>
        </div>
    );
}

export default UserProfile;