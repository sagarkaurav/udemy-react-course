import React from 'react';

const validationComponent = props => {
    let validationMsg = null;
    validationMsg = props.textLength <= 5 ? 'Text too short' : 'Text long enough';
    return <p>{validationMsg}</p>
}

export default validationComponent;