import React, { Component } from "react";
import './test.css';

class Test7 extends Component {
    state = {
        data: [
            { no: 1, name: "홍길동", done: false },
            { no: 2, name: "김길동", done: false },
            { no: 3, name: "강호동", done: false },
            { no: 4, name: "유재석", done: false },
            { no: 5, name: "제시", done: false },
        ],
    };
    handleAdd = () => {
        const { data } = this.state;
        this.setState({
            data: data.concat({ no: 6, name: "이효리", done: false }),
        });
    };
    handleRemove = (id) => {
        const { data } = this.state;
        this.setState({
            data: data.filter((item) => item.no !== id),
        });
    };
    handleMod1 = (id) => {
        const { data } = this.state;
        this.setState({
            data: data.map((item) => {
                if (item.no === id) {
                    return {
                        ...item,
                        name: "화사",
                        done: true,
                    };
                } else {
                    return item;
                }
            }),
        });
    };
    handleMod2 = (id) => {
        const { data } = this.state;
        this.setState({
            data: data.map((item) => (item.no === id ? { ...item, name: "김영희", done: true } : item)),
        });
    };
    handleMod3 = () => {};
    handleMod4 = () => {};

    render() {
        const { data } = this.state;
        return (
            <div className="inner">
                <div className="buttonContainer">
                    <button onClick={this.handleAdd}>추가</button>
                    <button onClick={() => this.handleRemove(1)}>삭제</button>
                    <button onClick={() => this.handleMod1(2)}>수정1</button>
                    <button onClick={() => this.handleMod2(3)}>수정2</button>
                    <button onClick={() => this.handleMod3(4)}>수정3</button>
                    <button onClick={() => this.handleMod4(5)}>수정4</button>
                </div>
                <ul>
                    {data.map((item) => (
                        <li key={item.no}>
                            {item.no} / {item.name} /{item.done === true ? "참" : "거짓"}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Test7;
