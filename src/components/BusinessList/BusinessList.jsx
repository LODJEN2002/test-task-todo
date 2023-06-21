import React, { useState } from 'react';
import Business from './Business/Business';
import './BusinessList.css'
import closeIcone from '../../images/close_cross_icon_128690.svg'


const BusinessList = (props) => {
    const { obj: cards, onDelite, sortTodo, onQwe } = props
    const [currentCard, setCurrentCard] = useState(null)

    function handleDeliteBusiness(e, card) {
        onDelite(card)
    }

    function dragStratHandler(e, card) {
        setCurrentCard(card)
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
        onQwe(card, currentCard)
    }

    return (
        <div className='businessList'>
            {cards.sort(sortTodo).map(card =>
                <div
                    className='business'
                    key={card.id}
                    draggable={true}
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
                        onClick={(e) => handleDeliteBusiness(e, card)}
                    />
                </div>

            )}
        </div>
    );
};

export default BusinessList;