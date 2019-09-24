import React, { useContext } from 'react';
import { UserDataContext } from './contexts/userDataContext';
import './index.css';

function HeaderUsername(props){

    const userData = useContext(UserDataContext)
    
    return(
        <label>{userData.username}</label>
    )
}

export default HeaderUsername;