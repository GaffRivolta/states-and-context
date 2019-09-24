import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import UserProfileAvatar from './userProfileAvatar';
import UserProfileUserName from './userProfileUsername';
import './index.css';

function UserProfile(props){
    return(
        <div className="UserProfile">
            <UserProfileAvatar/>
            <UserProfileUserName/>
        </div>
    );
}

export default UserProfile;