import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import UsernameContext from './contexts/usernameContext'; 
import './index.css';

function UserProfileUserName(props){

    /*handleChange(e){
        props.onUsernameChange(e.target.value);
    }*/

    /*const handleChange = (event) => {
        props.onUsernameChange(event.target.value);
    }

    return(
        <input 
            type="text" value={props.username}
            onChange={handleChange}></input>
    );*/

    const userProps = useContext(UsernameContext)

    const handleChange = (event) => {
        userProps.onUsernameChange(event.target.value);
    }

    return(
        <input 
            type="text" value={userProps.username}
            onChange={handleChange}></input>
    );
}

export default UserProfileUserName;