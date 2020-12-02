import React,{useState} from 'react';

const Items = () => {
    const [number, setNumber] = useState(0);

    const OnIncrease = () => {
        setNumber(number+1);
    }
    const OnDecrease = () => {
        setNumber(number - 1);
    };

    return (
        <>
            <h2>Items</h2>
            <p>결과 : {number}</p>
            <button onClick={OnIncrease}>+1</button>
            <button onClick={OnDecrease}>-1</button>
        </>
    );
}

export default Items;