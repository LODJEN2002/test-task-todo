import React from 'react';
import Business from './Business/Business';
import './BusinessList.css'

const BusinessList = (props) => {
    const { obj, onDelite } = props

    return (
        <div className='businessList'>
            {obj.map((el) => (
                <Business
                    key={el.id}
                    // text={el}
                    obj={el}
                    onDelite={onDelite}
                />
            ))}
        </div>
    );
};

export default BusinessList;