import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    const rnd  = Math.random();

    if(rnd > 0.7) {
        throw new Error('something went wrong');    
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and i am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;