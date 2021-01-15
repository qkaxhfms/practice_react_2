import React from "react";

const Utils2Display = ({ ani, onAni }) => {
    return (
        <>
            <div>
                <label>동물: </label>
                <input type="text" value={ani} onChange={onAni} />
                <span>{ani}</span>
            </div>
        </>
    );
};

export default Utils2Display;
