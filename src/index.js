import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function HeaderAvatar(props){
    return(
        <img src={props.img} alt="Disco Lunar" height="42" width="42"/>
    );
}

function HeaderUsername(props){
    return(
        <label>{props.username}</label>
    )

}

function Header(props){
    return(
        <div className="header">
            <HeaderAvatar img={props.img}/>
            <HeaderUsername username={props.username}/>
        </div>

    );
}

function UserProfileAvatar(props){
    return(
        <img src={props.img} alt="Profile Picture" height="220" width="220"/>
    );
}

function UserProfileUserName(props){

    /*handleChange(e){
        props.onUsernameChange(e.target.value);
    }*/

    const handleChange = (event) => {
        props.onUsernameChange(event.target.value);
    }

    return(
        <input 
            type="text" value={props.username}
            onChange={handleChange}></input>
    );
}

function UserProfile(props){
    return(
        <div className="UserProfile">
            <UserProfileAvatar img={props.img}/>
            <UserProfileUserName username={props.username} onUsernameChange={props.onUsernameChange}/>
        </div>
    );
}

function Body(props){
    return(
        <div className="Body">
            <UserProfile img={props.img} username={props.username} onUsernameChange={props.onUsernameChange}/>
        </div>
    );
}

function Footer(props){
    return(
        <span>Gracias por visitarnos.</span>
    );
}

class App extends React.Component {

    state = {
        username:'',
    }

    /*handleUsernameChange(username){
        this.setState({username:username});
    }*/

    handleUsernameChange = (username) => {
        this.setState({username:username});
    }

    render() {

        const img = 'disco.jpg'

        return (
            <div className="App">
            <Header img={img} username={this.state.username}/>
            <Body img={img} username={this.state.username} onUsernameChange={this.handleUsernameChange}/>
            <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

