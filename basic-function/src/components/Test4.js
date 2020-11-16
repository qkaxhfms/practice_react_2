import React, { Component } from 'react'

class Test4 extends Component {
    render() {
        const myName="아무개"
        return (
            <div>
                <Sub
                    name={myName}
                    age={20}
                    addr="서울시 서초구"
                    done={true}
                    color="red"
                />
            </div>
        )
    }
}

class Sub extends Component {
    render() {

        const {name,age,addr,done,color} = this.props;
        return (
            <>
                <h4>이름: {name}</h4>
                <h4>나이: {age}</h4>
                <h4>주소: {addr}</h4>
                <h4>실행: {done}</h4>
                <h4>색상: {color}</h4>
            </>
        );
    }
}

export default Test4;