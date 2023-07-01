import React, { useState } from 'react';
import Business from './Business/Business';
import './BusinessList.css'
import closeIcone from '../../images/close_cross_icon_128690.svg'


const BusinessList = (props) => {
    const { obj: cards, onDelite, sortTodo, onQwe } = props
    const [currentCard, setCurrentCard] = useState(null)

    function handleClickCard(e, card) {
        console.log(card)
        // console.log(e.target.style)
        // e.target.style.marginLeft = '1000px';

    }

    function handleDeliteBusiness(card) {
        onDelite(card)
    }

    function dragStratHandler(e, card) {
        setCurrentCard(card)
    }

    function dragEndHandler(e) {
        e.target.style.background = '#CECE1B'
        e.target.style.borderTop = '3px solid #030518';
    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.borderTop = '5px solid red';
        e.target.style.background = 'green'
    }

    function dropHandler(e, card) {
        e.preventDefault()
        onQwe(card, currentCard)
        e.target.style.background = '#CECE1B'
        e.target.style.borderTop = '3px solid #030518';
    }

    return (
        <div className='businessList'>
            {cards.sort(sortTodo).map(card =>
                <div
                    className='business'
                    key={card.id}
                    draggable={true}
                    onClick={(e) => handleClickCard(e, card)}
                    onDragStart={(e) => dragStratHandler(e, card)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, card)}
                >
                    {card.text}
                    <img
                        src={closeIcone}
                        alt='closeIcone'
                        className='business__delite'
                        onClick={(e) => handleDeliteBusiness(card)}
                    />
                </div>

            )}
        </div>
    );
};

export default BusinessList;