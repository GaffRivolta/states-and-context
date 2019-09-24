import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './userProfile.js';
import './index.css';

function Body(props){
    return(
        <div className="Body">
            <UserProfile/>
        </div>
    );
}

export default Body;