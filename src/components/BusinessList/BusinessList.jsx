import React from 'react';
import Business from './Business/Business';

const BusinessList = (props) => {
    const {arr} = props
    // console.log(arr.map(el => console.log(el)))
    // console.log(arr)
    return (
        <div>
            {arr.map((el) => (
                <Business
                text={el}
                />
            ))}
        </div>
    );
};

export default BusinessList;