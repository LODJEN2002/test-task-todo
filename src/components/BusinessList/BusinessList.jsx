import React from 'react';
import Business from './Business/Business';
import './BusinessList.css'

const BusinessList = (props) => {
    const { obj, onDelite, sortTodo,onQwe } = props

    return (
        <div className='businessList'>
            {obj.sort(sortTodo).map((el) => (
                <Business
                    key={el.id}
                    // text={el}
                    obj={el}
                    onDelite={onDelite}
                    onQwe={onQwe}
                />
            ))}
        </div>
    );
};

export default BusinessList;