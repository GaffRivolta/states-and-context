import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import UsernameContext from './contexts/usernameContext'; 
import './index.css';

function HeaderUsername(props){

    const userData = useContext(UsernameContext)
    return(
        <label>{userData.username}</label>
    )
}

export default HeaderUsername;