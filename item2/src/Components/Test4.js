import React, { Component } from 'react'

class Test4 extends Component {
    state = {
        data: [
            { no: 1, name: "유재석", age: 20, addr: "서울시 서초구", done: false },
            { no: 2, name: "이효리", age: 30, addr: "서울시 강남구", done: true },
            { no: 3, name: "홍길동", age: 10, addr: "서울시 구로구", done: false },
            { no: 4, name: "아무개", age: 40, addr: "서울시 강북구", done: true },
            { no: 5, name: "가나다", age: 50, addr: "서울시 서초구", done: true },
            { no: 6, name: "세종대왕", age: 70, addr: "서울시 서초구", done: false },
            { no: 7, name: "세종대왕", age: 70, done: false },
        ],
    };
    render() {
        const {data} = this.state;
        return (
            <div>
                <h3>메인</h3>
                <div>
                    {data.map((item) => (
                        <p>
                            {item.no}/<br />
                            {item.name}/<br />
                            {item.age}/<br />
                            {item.addr}/<br />
                            {item.done === true ? "참여" : "미참여"}/<br />
                            {item.done || "or 결과"}
                            <br />
                            {item.done && "and 결과"}
                        </p>
                    ))}
                </div>
            </div>
        );
    }
}

export default Test4;