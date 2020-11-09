import React,{useState} from 'react';

function Counter2() {
    // const onIncrease = () => {
    //     console.log('+1');
    // }
    // const onDecrease = () => {
    //   console.log("-1");
    // }
    const [number,setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number +1);
    }
    const onDecrease = () => {
        setNumber(number -1);
    }
  return (
    <>
      <h1>Counter2</h1>
  <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
}

export default Counter2;