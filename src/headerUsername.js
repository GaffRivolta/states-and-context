import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import UsernameContext from './contexts/usernameContext'; 
import './index.css';

function HeaderUsername(props){

    const userProps = useContext(UsernameContext)
    return(
        <label>{userProps.username}</label>
    )
}

export default HeaderUsername;