import React, { useState } from "react";

const AddAll = () => {
    const [data, setData] = useState([]);
    const customAdd = () => {
        setData([
            ...data,
            {
                id: data.length,
                text: "Test" + Math.floor(Math.random() * 20),
            },
        ]);
    };
    // const handleAdd2 = () => {
    //     setData(
    //         data.concat({
    //             id: data.length,
    //             text: "Test" + Math.floor(Math.random() * 20),
    //         })
    //     );
    // };
    // const handleAdd = () => {
    //     const newData = data.concat({
    //         id: data.length,
    //         text: "Test" + Math.floor(Math.random() * 20),
    //     });
    //     setData(newData);
    // };

    return (
        <div>
            <h2>데이터 추가</h2>
            <button onClick={customAdd}>데이터 추가</button>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.id} / {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddAll;
