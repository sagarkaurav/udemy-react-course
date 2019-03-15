import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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

    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
                          clicked={this.deletePersonHandler}
                          changed={this.nameChangedHandler} />
    }



    return (
      <div className={classes.App}>
          <Cockpit persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonsHandler} />
          {persons}
      </div>
    );
  }
}

export default App;

