import React from 'react';
import './Business.css'

const Business = (props) => {
    const { text, onDelite } = props

    function handleDeliteBusiness() {
        onDelite(text)
    }

    return (
        <div className='business'>{text}
            <button
                className='business__delite'
                onClick={handleDeliteBusiness}>Крестик
            </button>
        </div>

    )
};

export default Business;

