import React from 'react';
import Business from './Business/Business';
import './BusinessList.css'

const BusinessList = (props) => {
    const {arr} = props

    return (
        <div className='businessList'>
            {arr.map((el, i) => (
                <Business
                key={i}
                text={el}
                />
            ))}
        </div>
    );
};

export default BusinessList;