import React, { useContext } from 'react';
import { UserDataContext } from './contexts/userDataContext';
//import './styles/index.css';
import './styles/flexbox-style.css';
import { StyledImg } from './styled-components/img';

function UserProfileAvatar(props){

    //const userData = useContext(UsernameContext)
    const userData = useContext(UserDataContext)

    return(
        /*<img className="user-profile-avatar" src={userData.img} alt="Profile Picture"/>*/
        <StyledImg className="user-profile-avatar" src={userData.img} alt="Profile Picture"/>
    );
}

export default UserProfileAvatar;