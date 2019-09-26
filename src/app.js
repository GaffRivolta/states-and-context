import React from 'react';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';
import { UserDataProvider } from './contexts/userDataContext';
//import './styles/index.css';
import './styles/flexbox-style.css';

const App = () => {
//class App extends React.Component {

    /*state = {
        username:'',
    }*/

    //const [username, setUsername] = useState('');

    //Primer intento, no válido

    /*handleUsernameChange(username){
        this.setState({username:username});
    }*/

    //Con función flecha, usando setState

    /*handleUsernameChange = (username) => {
        this.setState({username:username});
    }*/

    //Con función flecha, usando hook useState

    /*const handleUsernameChange = (username) => {
        setUsername(username);
    }*/

    //render(){
   
        //const img = 'disco.jpg'

        //const userProps = {username: this.state.username, onUsernameChange: this.handleUsernameChange }

        /*const userData = {
            username: username,
            onUsernameChange: handleUsernameChange,
            img: 'disco.jpg',
        }*/

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

        /*return (
            <div className="container">
                <UsernameProvider value={userData}>
                    <Header/>
                    <Body/>                   
                    <Footer/>
                </UsernameProvider>             
            </div>
        );*/

        return (
            <div className="medium-container">
                <UserDataProvider>
                    <Header/>
                    <Body/>                   
                    <Footer/>
                </UserDataProvider>             
            </div>
        );
    //}    
    
}

export default App;