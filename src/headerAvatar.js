import React, { useState, useContext } from 'react';
import UsernameContext from './contexts/usernameContext';
import './index.css';

function HeaderAvatar(props){

    const userData = useContext(UsernameContext)

    /*return(
        <img src={props.img} alt="Disco Lunar" height="42" width="42"/>
    );*/
    
    return(
        <img src={userData.img} alt="Disco Lunar" height="42" width="42"/>
    );
}

export default HeaderAvatar;