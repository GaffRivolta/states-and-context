import React, { useContext } from 'react';
import { UserDataContext } from './contexts/userDataContext';
import './index.css';

function HeaderAvatar(props){

    const userData = useContext(UserDataContext)

    /*return(
        <img src={props.img} alt="Disco Lunar" height="42" width="42"/>
    );*/
    
    return(
        <img src={userData.img} alt="Disco Lunar" height="42" width="42"/>
    );
}

export default HeaderAvatar;