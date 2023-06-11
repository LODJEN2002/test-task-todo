import React from 'react';

const Business = (props) => {
    const { text } = props
    return (
        <div onClick={(e) => console.log(e)}>
            {text}
        </div>
    );
};

export default Business;