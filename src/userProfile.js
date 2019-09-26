import React from 'react';
import UserProfileAvatar from './userProfileAvatar';
import UserProfileUserName from './userProfileUsername';
//import './styles/index.css';
import './styles/flexbox-style.css';

function UserProfile(props){
    return(
        <div className="user-profile">
            <UserProfileAvatar/>
            <UserProfileUserName/>
        </div>
    );
}

export default UserProfile;