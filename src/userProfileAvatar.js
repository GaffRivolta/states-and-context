import React, { useState, useContext } from 'react';
import UsernameContext from './contexts/usernameContext';
import './index.css';

function UserProfileAvatar(props){

    const userData = useContext(UsernameContext)

    return(
        <img src={userData.img} alt="Profile Picture" height="220" width="220"/>
    );
}

export default UserProfileAvatar;