import React, { Component } from 'react'

class Test1 extends Component {
    state = {
        data: [
            { no: 1, name: "홍길동", age: 20, done: true },
            { no: 2, name: "김철수", age: 32, done: false },
            { no: 3, name: "유재석", age: 22, done: true },
            { no: 4, name: "이효리", age: 30, done: false },
            { no: 5, name: "제시", age: 40, done: true },
            { no: 6, name: "엄정화", age: 23, done: true },
        ],
    };
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.data.map(item => <li key={item.no}>
                            {item.no} / {item.name} / {item.age} / {item.done === true ? '이상':'이하'}
                        </li>)
                    }
                    </ul>
            </div>
        );
    }
}

export default Test1;