import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = props => {
    const assignedClasses = [];
    let btnClass = null;
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>Some random text</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle persons</button>            
        </div>
    );
}

export default cockpit;