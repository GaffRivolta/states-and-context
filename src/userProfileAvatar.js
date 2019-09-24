import React, { useContext } from 'react';
import { UserDataContext } from './contexts/userDataContext';
import './index.css';

function UserProfileAvatar(props){

    //const userData = useContext(UsernameContext)
    const userData = useContext(UserDataContext)

    return(
        <img src={userData.img} alt="Profile Picture" height="220" width="220"/>
    );
}

export default UserProfileAvatar;