import React from 'react';
import './Business.css'

const Business = (props) => {
    const { text } = props
    return (
        <div className='business' onClick={(e) => console.log(e)}>
            {text}
        </div>
    );
};

export default Business;