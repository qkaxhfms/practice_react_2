import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
    const [timer, setTimer] = useState(1);
    const [done, setDone] = useState(true);
    const timerRef = useRef();

    useEffect(() => {
        // setTimer((timer) => timer + 1);
        console.log("test");
        timerRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            clearInterval(timerRef.current);
        };
    }, [done]);

    return (
        <>
            <h2>useRef이용해서 setInterval 타이머 처리</h2>
            <p>{timer}</p>
            <button onClick={() => clearInterval(timerRef.current)}>
                타이머 중지
            </button>
            <button onClick={() => setDone(!done)}>타이머 시작</button>
        </>
    );
};
export default Counter;
