import React, { useState, useEffect, useMemo } from "react";

const Item2 = () => {
    
    const [input, setInput] = useState("");
    // const [inputLength, setInputLength] = useState(0);
    // const updateLength = () => setInputLength(input.length);
    // useEffect(updateLength, [input]);
    const inputLength = useMemo(() => input.length, [input]);
    // 기존에 수행한 연산의 결과값을 메모리에 저장함으로써 동일한 계산 반복 수행을 줄임

    const onChangeLength = (e) => {
        const {
            target: { value },
        } = e;
        setInput(value);
    };

    return(
        <>
            <div>
                <input onChange={onChangeLength}/>
                <label>{inputLength}</label>
            </div>
        </>
    )
}

export default Item2;