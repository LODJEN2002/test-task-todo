import React, { useState } from 'react';
import './Business.css';
import closeIcone from '../../../images/close_cross_icon_128690.svg'

const Business = (props) => {
    const { obj: card, onDelite, onQwe } = props;
    const { id, order, text } = card;
    const [currentBusiness, setCurrentBusiness] = useState(null)
    // console.log(obj)
    // obj.forEach(el => {
    //     console.log(el.id)
    // });


    function handleDeliteBusiness() {
        onDelite(id, order, text)
    }

    function dragStratHandler(e, card) {
        setCurrentBusiness(card)
        console.log(currentBusiness)
    }

    function dragEndHandler(e) {
        e.target.style.background = '#CECE1B'
    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background = 'green'
    }

    function dropHandler(e, card) {
        e.preventDefault()
        onQwe(card, currentBusiness)
    }

    return (
        <div
            className='business'
            draggable={true}
            onDragStart={(e) => dragStratHandler(e, card)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, card)}
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

