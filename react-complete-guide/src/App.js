import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <p className={classes.join(' ')}>Some random text</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle persons</button>
            {persons}
        </div>
      </StyleRoot>

    );
  }
}

export default Radium(App);

