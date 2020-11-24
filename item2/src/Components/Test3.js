import React, { Component } from "react";

class Test3 extends Component {
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
        return (
            <div>
                <h2>메인</h2>
                <ul>
                    {
                        this.state.data.map((item) => (
                            <li>{item.no}/{item.name}/{item.age}/{item.addr}/{item.done === true ? '참여':'미참여'}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
export default Test3;
