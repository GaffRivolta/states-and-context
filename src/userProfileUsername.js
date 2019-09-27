import React, { useContext } from 'react';
import { UserDataContext } from './contexts/userDataContext';
//import './styles/index.css';
import './styles/flexbox-style.css';
import { StyledInput } from './styled-components/input';

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

    //const userData = useContext(UsernameContext)

    const userData = useContext(UserDataContext)

    const handleChange = (event) => {
        userData.onUsernameChange(event.target.value);
    }

    return(
        /*<input className="user-profile-input"
            type="text" value={userData.username}
            onChange={handleChange} maxLength="16">
        </input>*/
        <StyledInput 
            className="user-profile-username"
            type="text" value={userData.username}
            onChange={handleChange} maxLength="20">
        </StyledInput>
    );
}

export default UserProfileUserName;