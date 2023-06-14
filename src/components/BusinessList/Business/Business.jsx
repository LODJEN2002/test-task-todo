import React from 'react';
import './Business.css';
import closeIcone from '../../../images/close_cross_icon_128690.svg'

const Business = (props) => {
    const { text, onDelite } = props

    function handleDeliteBusiness() {
        onDelite(text)
    }

    return (
        <div className='business'>{text}
            <img
                src={closeIcone}
                alt='closeIcone'
                className='business__delite'
                onClick={handleDeliteBusiness}/>
        </div>

    )
};

export default Business;

