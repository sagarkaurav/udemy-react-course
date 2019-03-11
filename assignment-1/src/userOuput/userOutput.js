import React from 'react';

const userOuput = props => {
    const style = {
        textAlign: 'center',
        border: '1px solid #ccc',
        padding: '2px',
        width: '20%',
        margin: 'auto'
    }
    return (
        <>
            <p>{props.text}</p>
            <p style={style}>{props.username}</p>
        </>
    )
}

export default userOuput;