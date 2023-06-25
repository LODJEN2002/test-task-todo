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

    function handleDeliteBusiness(e, card) {
        onDelite(card)
    }

    function dragStratHandler(e, card) {
        setCurrentCard(card)
    }

    function dragEndHandler(e) {
        e.target.style.background = '#CECE1B'
        console.log('Убрал с элемента')
        e.target.style.borderTop = '3px solid #030518';
        // e.target.style.marginBottom = '0';

    }

    function dragOverHandler(e) {
        e.preventDefault()
        console.log('На элемент')
        e.target.style.borderTop = '5px solid red';
        // e.target.style.marginBottom = '-5px';
        e.target.style.background = 'green'
    }

    function dropHandler(e, card) {
        e.preventDefault()
        console.log('На элемент закинул')
        onQwe(card, currentCard)
        e.target.style.background = '#CECE1B'
        e.target.style.borderTop = '3px solid #030518';
        // console.log(cards)
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
                        onClick={(e) => handleDeliteBusiness(e, card)}
                    />
                </div>

            )}
        </div>
    );
};

export default BusinessList;