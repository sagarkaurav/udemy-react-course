import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


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
    let btnClass = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary
                key={index}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, index)} />
              </ErrorBoundary> 
            )
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <p className={assignedClasses.join(' ')}>Some random text</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
          {persons}
      </div>
    );
  }
}

export default App;

