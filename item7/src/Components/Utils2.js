import React, { useState } from "react";
import Utils2Animals from "./Utils2Animals";
import Utils2Display from "./Utils2Display";
import Utils2Name from "./Utils2Name";

const Utils2 = () => {
    const [name, setName] = useState("이름");
    const [ani, setAni] = useState("동물");

    const customName = (e) => {
        const { value } = e.target;
        setName(value);
    };
    const customAni = (e) => {
        const { value } = e.target;
        setAni(value);
    };
    return (
        <>
            <div>
                <Utils2Name name={name} onName={customName} />
                <Utils2Animals ani={ani} onAni={customAni} />
                <Utils2Display name={ani} ani={ani} />
            </div>
        </>
    );
};

export default Utils2;
