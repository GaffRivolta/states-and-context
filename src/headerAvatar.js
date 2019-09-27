import React, { useContext } from 'react';
import { UserDataContext } from './contexts/userDataContext';
//import './styles/index.css';
import './styles/flexbox-style.css';
import { StyledImg } from './styled-components/img';

function HeaderAvatar(props){

    const userData = useContext(UserDataContext)

    /*return(
        <img src={props.img} alt="Disco Lunar" height="42" width="42"/>
    );*/
    
    return(
        /*<img className="header-avatar-picture" src={userData.img} alt="Disco Lunar" height="42" width="42"/>*/
        <StyledImg 
            className="header-avatar-picture" src={userData.img}
            alt="Disco Lunar" height="42" width="42"
            isRounded="50%"
        />
    );
}

export default HeaderAvatar;