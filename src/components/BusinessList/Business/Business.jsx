import React from 'react';
import './Business.css';
import closeIcone from '../../../images/close_cross_icon_128690.svg'

const Business = (props) => {
    const { obj, onDelite } = props;
    const { id, order, text } = obj;
    // console.log(obj)
    // obj.forEach(el => {
    //     console.log(el.id)
    // });

    function handleDeliteBusiness() {
        onDelite(id, order, text)
    }

    function dragStratHandler(e, obj) {
        console.log('start', obj)
    }
    function dragEndHandler(e) {
        console.log('end')
        e.target.style.background = '#CECE1B'
    }
    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background = 'green'
        console.log('over')
    }
    function dropHandler(e, obj) {
        e.preventDefault()
        console.log('Drop', obj)
    }

    return (
        <div
            className='business'
            // onClick={() => console.log(text, order, id)}
            draggable={true}
            onDragStart={(e) => dragStratHandler(e, obj)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, obj)}
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

