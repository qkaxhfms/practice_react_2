import React, { useState } from "react";

const Utils1 = () => {
    const [ani, setAni] = useState("");
    const customChange = (e) => {
        const { value } = e.target;
        setAni(value);
    };
    return (
        <>
            <Name />
            <Animal ani={ani} onAni={customChange} />
            <Display ani={ani} />
        </>
    );
};

const Name = () => {
    const [name, setName] = useState("");
    const customChange = (e) => {
        const { value } = e.target;
        setName(value);
    };
    return (
        <>
            <label htmlFor="name" 이름 />
            <input type="text" id="name" onChange={customChange} />
            <span>{name}</span>
        </>
    );
};

const Animal = ({ ani, onAni }) => {
    return (
        <>
            <div>
                <span>동물</span>
                <input type="text" value={ani} onChange={onAni} />
                <span>{ani}</span>
            </div>
        </>
    );
};

const Display = ({ ani }) => {
    return (
        <div>
            <p>내가 좋아하는 동물은 {ani} 입니다.</p>
        </div>
    );
};

export default Utils1;
