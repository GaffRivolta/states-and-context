import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import AvatarImageContext from './contexts/avatarImageContext'; 
import './index.css';

function HeaderAvatar(props){

    const img = useContext(AvatarImageContext)

    /*return(
        <img src={props.img} alt="Disco Lunar" height="42" width="42"/>
    );*/
    
    return(
        <img src={img} alt="Disco Lunar" height="42" width="42"/>
    );
}

export default HeaderAvatar;