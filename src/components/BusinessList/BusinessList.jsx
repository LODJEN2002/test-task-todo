import React from 'react';
import Business from './Business/Business';
import './BusinessList.css'

const BusinessList = (props) => {
    const { arr, onDelite } = props

    return (
        <div className='businessList'>
            {arr.map((el, i) => (
                <Business
                    key={i}
                    text={el}
                    arr={arr}
                    onDelite={onDelite}
                />
            ))}
        </div>
    );
};

export default BusinessList;