import React,{useState} from 'react';

function Calculator(){
    const [number,setNumber] = useState(0); //현재상태,세터함수

    const onIncrease =() => {
        setNumber(number+1);
    }
    const onDecrease = () => {
        setNumber(number-1);
    }
    return (
      <>
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
      </>
    );
}

export default Calculator;