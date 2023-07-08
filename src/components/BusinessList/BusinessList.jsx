import React, { createRef, useEffect, useRef, useState } from 'react';
import Business from './Business/Business';
import './BusinessList.css'
import closeIcone from '../../images/close_cross_icon_128690.svg'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const BusinessList = (props) => {
    const { obj: cards, onDelite, sortTodo, onQwe, theme } = props
    const [currentCard, setCurrentCard] = useState(null)
    const [cssTransition, setCssTransition] = useState(true)
    const nodeRef = useRef(null)

    function handleClickCard(e, card) {
        console.log(card)
    }

    function handleDeliteBusiness(card) {
        onDelite(card)
        setCssTransition(!cssTransition)
    }

    function dragStratHandler(e, card) {
        setCurrentCard(card)
    }

    function dragEndHandler(e) {
        console.log('end handler')
        e.target.style.borderTop = '3px solid #030518';
        if (theme) {
            e.target.style.background = '#CECE1B'
        } else {
            e.target.style.background = 'white'

        }
    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.borderTop = '5px solid red';
        if (theme) {
            // e.target.style.background = 'green'
        } else {
            // e.target.style.background = '#CECE1B'

        }
    }

    function dropHandler(e, card) {
        e.preventDefault()
        onQwe(card, currentCard)
        e.target.style.borderTop = '3px solid #030518';
        if (theme) {
            e.target.style.background = '#CECE1B'
        } else {

        }
    }

    return (
        <TransitionGroup
            className='businessList'
        >
            {cards.sort(sortTodo).map((card) => {
                const ref = createRef()
                return (
                    <CSSTransition
                        nodeRef={ref}
                        in={cssTransition}
                        timeout={{ enter: 500, exit: 250 }}
                        classNames='business'
                        key={card.id}
                    >
                        <div
                            ref={ref}
                            className={theme ? 'business-black' : 'business-white'}
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
                    </CSSTransition>
                )
            }
            )}
        </TransitionGroup >
    );
};

export default BusinessList;