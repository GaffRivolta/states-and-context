import React, { useState } from 'react';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';
import { AvatarImageProvider } from './contexts/avatarImageContext';
import { UsernameProvider } from './contexts/usernameContext';
import './index.css';

//const App = () => {
class App extends React.Component {

    state = {
        username:'',
    }

    //let [username, setUsername] = useState('');

    //Primer intento, no válido

    /*handleUsernameChange(username){
        this.setState({username:username});
    }*/

    //Con función flecha, usando setState

    handleUsernameChange = (username) => {
        this.setState({username:username});
    }

    //Con función flecha, usando hook useState

    /*const handleUsernameChange = (username) => {
        setUsername({username:username});
    }*/

    render(){
   
        const img = 'disco.jpg'

        const userProps = {username: this.state.username, onUsernameChange: this.handleUsernameChange }

    /*return (
        <div className="App">
            <AvatarImageProvider>
                <Header img={img} username={this.state.username}/>
                <Body 
                    img={img} username={this.state.username}
                    onUsernameChange={this.handleUsernameChange}
                />
                <Footer/>
            </AvatarImageProvider>
            
        </div>
    );
    */

        return (
            <div className="App">
                <UsernameProvider value={userProps}>
                    <AvatarImageProvider value={img}>
                        <Header/>
                        <Body/>                   
                        <Footer/>
                    </AvatarImageProvider>
                </UsernameProvider>             
            </div>
            );
    }    
    
}

export default App;