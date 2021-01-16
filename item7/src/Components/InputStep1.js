import React, { useState } from "react";

const InputStep1 = () => {
    const [userid, setUserid] = useState("");
    const inputChange = (e) => {
        setUserid(e.target.value);
    };
    return (
        <>
            <span>입력값</span>
            <input type="text" onChange={inputChange} />
            <p>출력값: {userid}</p>
        </>
    );
};

export default InputStep1;
