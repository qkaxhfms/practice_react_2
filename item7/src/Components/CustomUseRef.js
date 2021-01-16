import React, { useEffect, useState } from "react";

const CustomUseRef = () => {
    const [done, setDone] = useState(true);
    const handleToggle = () => {
        setDone(!done);
    };
    return (
        <div>
            <button onClick={handleToggle}>보이기/숨기기</button>
            <br />
            <br />
            {done && <Mouse />}
        </div>
    );
};

const Mouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const move = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log("마운트");
        window.addEventListener("mousemove", move);
        return () => {
            console.log("언마운트 - 뒷정리");
            window.removeEventListener("mousemove", move);
        };
    }, []);

    return (
        <div>
            마우스 X : {x} , Y : {y}
        </div>
    );
};

export default CustomUseRef;
