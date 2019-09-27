import React, { useContext } from 'react';
import { UserDataContext } from './contexts/userDataContext';
//import './styles/index.css';
import './styles/flexbox-style.css';
import { StyledLabel } from './styled-components/label';


function HeaderUsername(props){

    const userData = useContext(UserDataContext)
    
    return(
        /*<label className="header-username">{userData.username}</label>*/
        <StyledLabel className="header-username">{userData.username}</StyledLabel>
    )
}

export default HeaderUsername;