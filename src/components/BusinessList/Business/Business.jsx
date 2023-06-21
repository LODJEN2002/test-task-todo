import React, { useState } from 'react';
import './Business.css';
import closeIcone from '../../../images/close_cross_icon_128690.svg'

const Business = (props) => {
    const { obj: card, onDelite, onQwe } = props;
    const { id, text, order } = card;


    function handleDeliteBusiness() {
        onDelite(id, order, text)
    }


    return (
        <div
            className='business'
           
        >
            {text}
            <img
                src={closeIcone}
                alt='closeIcone'
                className='business__delite'
                onClick={handleDeliteBusiness} />
        </div>

    )
};

export default Business;

