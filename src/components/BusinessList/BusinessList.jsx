import React from 'react';
import Business from './Business/Business';

const BusinessList = (props) => {
    const {arr} = props
    // const keyArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     keyArr.push(i);   
    // }asd
    // console.log(keyArr)
    
    // arr.map((el, i) => console.log(i))

    // console.log(arr.map(el => console.log(el)))
    // console.log(arr)
    return (
        <div>
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