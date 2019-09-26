import React from 'react';
import UserProfile from './userProfile.js';
//import './styles/index.css';
import './styles/flexbox-style.css';

function Body(props){
    return(
        <div className="body">
            <UserProfile/>
        </div>
    );
}

export default Body;