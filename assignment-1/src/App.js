import React, { Component } from 'react';
import './App.css';

import UserInput from './userInput/userInput';
import UserOuput from './userOuput/userOutput';

class App extends Component {
  state = {
    username: ''
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <UserInput
          changeName={this.changeUsernameHandler}
          username={this.state.username} />
        <UserOuput text="First paragraph" username={this.state.username} />
        <UserOuput text="Second paragraph" username={this.state.username} />
      </div>
    );
  }
}

export default App;
