import React, { useContext } from 'react';
import { UserDataContext } from './contexts/userDataContext';
//import './styles/index.css';
import './styles/flexbox-style.css';

function HeaderUsername(props){

    const userData = useContext(UserDataContext)
    
    return(
        <label>{userData.username}</label>
    )
}

export default HeaderUsername;