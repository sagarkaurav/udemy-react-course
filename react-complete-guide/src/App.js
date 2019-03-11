import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'person1', age: 22 },
      { name: 'person2', age: 23 },
    ],
    showPersons: true
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    persons[id].name = event.target.value;
    this.setState({
      persons: persons
    })
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'personNew', age: 22 },
        { name: 'person2', age: 24 },
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }
  
  deletePersonHandler = (personIndex) => {
    const  persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={index}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, index)} />  
            )
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
          {persons}
      </div>
    );
  }
}

export default App;

