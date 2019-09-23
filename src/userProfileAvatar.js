import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import AvatarImageContext from './contexts/avatarImageContext'; 
import './index.css';

function UserProfileAvatar(props){

    const img = useContext(AvatarImageContext)

    return(
        <img src={img} alt="Profile Picture" height="220" width="220"/>
    );
}

export default UserProfileAvatar;