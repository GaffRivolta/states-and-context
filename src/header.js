import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HeaderAvatar from './headerAvatar.js';
import HeaderUsername from './headerUsername.js';
import './index.css';

function Header(props){
    return(
        <div className="header">
            <HeaderAvatar/>
            <HeaderUsername/>
        </div>

    );
}

export default Header;