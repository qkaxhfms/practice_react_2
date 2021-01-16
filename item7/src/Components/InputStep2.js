import React, { useRef, useState } from "react";

const InputStep2 = () => {
    const idInput = useRef();
    const [user, setUser] = useState({
        id: "",
        pw: "",
    });
    const { id, pw } = user;
    const inputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: [e.target.value],
        });
    };
    const inputReset = () => {
        setUser({
            id: "",
            pw: "",
        });
        idInput.current.focus();
    };
    return (
        <>
            <input
                type="text"
                name="id"
                onChange={inputChange}
                value={id}
                ref={idInput}
            />
            <input type="text" name="pw" onChange={inputChange} value={pw} />
            <button type="button" onClick={inputReset}>
                초기화
            </button>
            <p>
                {id},{pw}
            </p>
        </>
    );
};

export default InputStep2;
