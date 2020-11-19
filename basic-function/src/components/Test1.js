import React, { Component } from 'react'

class Test1 extends Component {
    render() {
        const name = "홍길동";
        const age = 20;
        const addr = "서울";
        const tel = "010-0000-0000";
        const sex = "male";
        return (
            <div>
                <h2>Test1</h2>
                <p>이름: {name}</p>
                <p>나이: {age}</p>
                <p>주소: {addr}</p>
                <p>번호: {tel}</p>
                <p>성별: {sex}</p>
            </div>
        )
    }
}

export default Test1;