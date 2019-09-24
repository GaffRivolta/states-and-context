import React from 'react';
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