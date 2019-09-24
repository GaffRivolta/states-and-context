import React, { useState } from 'react'

export const UserDataContext = React.createContext({});

export function UserDataProvider(props) {

    const [username, setUsername] = useState('');

    const handleUsernameChange = (username) => {
        setUsername(username);
    }

    const userData = {
        username: username,
        onUsernameChange: handleUsernameChange,
        img: 'disco.jpg',
    }

    return (
        <UserDataContext.Provider value={userData}>
            {props.children}
        </UserDataContext.Provider>
    );
}