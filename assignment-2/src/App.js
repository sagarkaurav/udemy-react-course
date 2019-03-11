import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: ''
  }

  onChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  removeCharHandler = (index) => {
    const text = this.state.text.split('');
    text.splice(index, 1);
    this.setState({text: text.join('')});
  }
  render() {
    return (
      <div className="App">
        <input type="text"
                onChange={this.onChangeHandler}
                value={this.state.text}/>
        <p>The length of the text is {this.state.text.length}</p>
        <ValidationComponent textLength={this.state.text.length} /><br/>
        {this.state.text.split('').map((char, index) => 
                            (<CharComponent
                                key={index}
                                char={char}
                                remove={this.removeCharHandler.bind(this, index)} />)
                          )}
      </div>
    );
  }
}

export default App;
